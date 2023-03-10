import { AuthApiError, type Provider } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

const OAUTH_PROVIDERS = ["google", "discord", "github"];

export const load: PageServerLoad = ({ locals }) => {
  if (locals.session) {
    throw redirect(303, "/dashboard");
  }
};

export const actions: Actions = {
  login: async ({ request, locals, url }) => {
    const provider = url.searchParams.get("provider") as Provider;

    if (provider) {
      if (!OAUTH_PROVIDERS.includes(provider)) {
        return fail(400, {
          error: "Provider not supported.",
        });
      }

      const { data, error: err } = await locals.sb.auth.signInWithOAuth({
        provider: provider,
      });
      
      /* There is no returned data !!! */
      // if (data) console.log('github account | server: ', data)

      if (err) {
        console.log(err);
        return fail(400, {
          message: "Something went wrong.",
        });
      }      

      // throw redirect(303, data.url);
    }

    const body = Object.fromEntries(await request.formData());

    const { data, error: err } = await locals.sb.auth.signInWithPassword({
      email: body.email as string,
      password: body.password as string,
    });

    // if (data) console.log('email login: ', data)

    if (err) {
      if (err instanceof AuthApiError && err.status === 400) {
        return fail(400, {
          error: "Invalid credentials",
        });
      }
      return fail(500, {
        message: "Server error. Try again later.",
      });
    }

    throw redirect(303, "/dashboard");
  },
};


