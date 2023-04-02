import { f as fail } from "../../../chunks/index.js";
const OAUTH_PROVIDERS = ["google", "discord", "github"];
const load = ({ locals }) => {
  return {
    user: locals.session
  };
};
const actions = {
  login: async ({ locals, url }) => {
    const provider = url.searchParams.get("provider");
    if (provider) {
      if (!OAUTH_PROVIDERS.includes(provider)) {
        return fail(400, {
          error: "Provider not supported."
        });
      }
      const { error: err } = await locals.sb.auth.signInWithOAuth({
        provider
      });
      if (err) {
        console.log(err);
        return fail(400, {
          message: "Something went wrong."
        });
      }
    }
  }
};
export {
  actions,
  load
};
