import { getServerSession } from "@supabase/auth-helpers-sveltekit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  console.log("layout server load");
  return {
    session: await getServerSession(event),
  };
};