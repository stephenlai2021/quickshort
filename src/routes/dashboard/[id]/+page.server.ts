import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { supabaseClient } from "$lib/supabase";

export const load: PageServerLoad = async ({ params, locals }) => {
  const { data: clickDetails, error: err } = await supabaseClient
    .from("url_shortener_links")
    .select("*, url_shortener_clicks(*)")
    .eq("key", params.id)
    .single();
  // console.log("click details: ", clickDetails);

  if (err) {
    console.log("error message: ", err.message);
    throw redirect(303, "/dashboard");
  }

  return { clickDetails, user: locals.session };
};
