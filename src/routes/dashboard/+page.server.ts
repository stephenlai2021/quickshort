import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { supabaseClient } from "$lib/supabase";

export const load: PageServerLoad = async ({ locals }) => {
  // if (!locals.session) {
  //   throw redirect(303, "/");
  // }

  const { data, error } = await supabaseClient
    .from("url_shortener_links")
    .select("*")
    .order('created_at', { ascending: true })
    .eq("user_id", locals.session?.user.email)
  console.log(`${locals.session?.user.email}'s dashboard: `, data);
  
  if (error) console.log('error loading links | dashboard server: ', error)

  return {
    user: locals.session,
    links: data
  };
};
