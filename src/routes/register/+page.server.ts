import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ locals }) => {
  if (locals.session) {
    throw redirect(303, "/dashboard");
  }
};

export const actions: Actions = {
  register: async ({ request }) => {
    const formData = await request.formData();
    console.log("form data: ", { type: "register", ...formData });

    return {
      type: "register",
      email: formData.get("email"),
      password: formData.get("password"),
    };
  },
};
