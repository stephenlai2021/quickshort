<script lang="ts">
  import { t } from "$lib/i18n/translations";
  import { enhance, type SubmitFunction } from "$app/forms";
  import { supabaseClient } from "$lib/supabase";
  import { user } from "$lib/stores";
  import type { Provider } from "@supabase/supabase-js";
  import GoogleIcon from "$lib/assets/images/google-icon.png";

  const signInWithProvider = async (provider: Provider) => {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider,
    });

    if (data) console.log("login account: ", data);

    if (error) console.log(error);
  };

  const submitSocialLogin: SubmitFunction = async ({ action, cancel }) => {
    switch (action.searchParams.get("provider")) {
      case "google":
        await signInWithProvider("google");
        break;
      case "discord":
        await signInWithProvider("discord");
        break;
      case "github":
        await signInWithProvider("github");
        break;
      default:
        break;
    }
    cancel();
  };
</script>

<div class="h-screen grid place-content-center">
  <div class="mt-10 mx-auto">
    <div
      class="card bg-white/5 backdrop-blur-lg border border-neutral/10 rounded-2xl p-5 w-[300px]"
    >
      <div class="text-center flex justify-center">
        <div class="p-4 border rounded-full border-white/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
      </div>

      <form method="POST" use:enhance={submitSocialLogin}>
        <button
          class="py-4 px-4 rounded-[8px] w-full mt-5 btn-github bg-black text-white"
          formaction="?/login&provider=github"
        >
          <img class="mr-[20px]" src="https://cdn.iconscout.com/icon/free/png-256/github-3691248-3073768.png?f=webp&w=128" alt="" width="25">
          {$t("common.btn-github")}
        </button>
        <button
          class="py-4 px-4 rounded-[8px] w-full mt-5 btn-github bg-white text-black font-weight-bold"
          formaction="?/login&provider=google"
        >
          <!-- <GoogleIcon /> -->
          <img class="mr-[20px]" src="https://cdn-icons-png.flaticon.com/512/2965/2965278.png" alt="" width="25">
          {$t("common.btn-google")}
        </button>
      </form>
    </div>
  </div>
</div>

<style>
  .btn-github {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
  }

  .btn-action {
    margin-top: 30px;
    width: 100%;
  }
</style>
