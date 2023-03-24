import type { PageServerLoad } from "./$types";
import { supabaseClient } from "$lib/supabase";
import { redirect } from "@sveltejs/kit";
import { IPAPI, IPIFY } from "$env/static/private";

export const load: PageServerLoad = async ({ params, fetch }) => {
  console.log("key: ", params.id);

  const { data, error } = await supabaseClient
    .from("url_shortener_links")
    .select("*")
    .eq("key", params.id)
    .single();
  console.log("link data: ", data);

  if (error) {
    console.log("error: ", error.message);
    throw redirect(303, "/dashboard");
  }

  const jsonRes = await fetch(IPAPI);
  const { city, country_name, latitude, longitude, language } =
    await jsonRes.json();

  const res = await fetch(IPIFY);
  const ip = await res.text();

  /* Get user info */
  const { data: clicks, error: err } = await supabaseClient
    .from("url_shortener_clicks")
    .insert([
      {
        link_id: data?.id,
        country: country_name,
        ip,
        city,
        latitude,
        longitude,
        language,
      },
    ]);

  if (err) console.log("error message: ", err.message);
  console.log("clicks table: ", clicks);

  throw redirect(303, data?.long_url);
};
