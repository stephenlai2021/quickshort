<script lang="ts">
  import { t } from "$lib/i18n/translations";
  import { enhance, type SubmitFunction } from "$app/forms";
  import { supabaseClient } from "$lib/supabase";
  import type { Provider } from "@supabase/supabase-js";
  import { page } from "$app/stores"
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import GoogleIcon from "$lib/assets/images/google-icon.png";
  import IconGithub from "$lib/assets/images/icons/icon-github.png";
  import IconGoogle from "$lib/assets/images/icons/icon-google.png";
  import IconNotion from "$lib/assets/images/icons/icon-notion.png";
  import IconDiscord from "$lib/assets/images/icons/icon-discord.png";

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
      case "notion":
        await signInWithProvider("notion");
        break;
      default:
        break;
    }
    cancel();
  };
</script>

<div class="max-w-[360px] mx-auto h-scree gri place-content-cente overflow-hidden">
  <div class="mt-[80px] mx-auto">
    <div class="p-5 w-[360px] max-[360px]:w-full">
      <div class="text-center flex justify-center">
        <div class="p-4 mt-2 border shadow shadow-sm rounded-full">
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

      <form method="POST" use:enhance={submitSocialLogin} class="pb-2">
        <div class="flex justify-center">
          <button
            class="shadow shadow-sm py-4 flex justify-center items-center rounded-[8px] w-full max-[360px]:w-[90vw] mt-5 bg-white text-black"
            formaction="?/login&provider=github"
          >
            <img
              class="mr-[10px]"
              src={IconGithub}
              alt=""
              width="25"
            />
            {$t("common.btn-github")}
          </button>
        </div>

        <div class="flex justify-center">
          <button
            class="shadow shadow-sm py-4 flex justify-center items-center max-[360px]:w-[90vw] rounded-[8px] w-full mt-5 bg-white text-black font-weight-bold"
            formaction="?/login&provider=google"
          >
            <img
              class="mr-[10px]"
              src={IconGoogle}
              alt=""
              width="22"
            />
            {$t("common.btn-google")}
          </button>
        </div>

        <div class="flex justify-center">
          <button
            class="shadow shadow-sm py-4 flex justify-center items-center max-[360px]:w-[90vw] rounded-[8px] w-full mt-5 bg-white text-black font-weight-bold"
            formaction="?/login&provider=notion"
          >
            <img
              class="mr-[10px]"
              src={IconNotion}
              alt=""
              width="25"
            />
            {$t("common.btn-notion")}
          </button>
        </div>

        <div class="flex justify-center">
          <button
            class="shadow shadow-sm py-4 pl- flex justify-center items-center max-[360px]:w-[90vw] rounded-[8px] w-full mt-5 bg-white  [#8C9EFF] text-black font-weight-bold"
            formaction="?/login&provider=discord"
          >
            <img
              class="mr-[10px]"
              src={IconDiscord}
              alt=""
              width="25"
            />
            {$t("common.btn-discord")}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
