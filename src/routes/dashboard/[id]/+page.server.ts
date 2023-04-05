import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { supabaseClient } from "$lib/supabase";

export const load: PageServerLoad = async ({ params, locals }) => {
  const { data: link, error: linkErr } = await supabaseClient
    .from("url_shortener_links")
    .select("*")
    .eq("key", params.id)
    .single();
  console.log("link: ", link);

  if (linkErr) {
    console.log("error message: ", linkErr.message);
    throw redirect(303, "/dashboard");
  }

  const { data: clickDetails, error: clicksErr } = await supabaseClient
    .from("url_shortener_clicks")
    .select("*")
    .eq("link_id", link?.id);
  console.log("clicks: ", clickDetails);

  return { link, clickDetails, user: locals.session };

  // const { data: clickDetails, error: err } = await supabaseClient
  //   .from("url_shortener_links")
  //   .select("*, url_shortener_clicks(*)")
  //   .eq("key", params.id)
  //   .single();

  // if (err) {
  //   console.log("error message: ", err.message);
  //   throw redirect(303, "/dashboard");
  // }

  // return { clickDetails, user: locals.session };
};
