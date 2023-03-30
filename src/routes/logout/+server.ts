import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ locals }) => {
  const { error: err } = await locals.sb.auth.signOut();

  if (err) {
    throw error(500, "Something went wrong logging you out.");
  }

  locals.session = null
  // return new Response(JSON.stringify({ user: null }))
  throw redirect(303, "/");
};
