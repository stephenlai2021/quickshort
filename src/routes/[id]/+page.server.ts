import type { PageServerLoad } from "./$types"
import { supabaseClient } from "$lib/supabase";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
  console.log('key | server: ', params.id)

  // redirect to original url based on short key
  const { data, error } = await supabaseClient
    .from("url_shortener_links")
    .select("*")
    .eq("key", params.id)
    .single();

  if (error) {
    console.log("error: ", error.message);
    throw redirect(303, "/dashboard");
  }

  // console.log("link | server: ", data);
  throw redirect(303, data.long_url)
}