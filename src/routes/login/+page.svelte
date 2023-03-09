<script lang="ts">
  import { t } from "$lib/i18n/translations";  
  import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
  import { user } from '$lib/stores'
	import type { Provider } from '@supabase/supabase-js';

  const signInWithProvider = async (provider: Provider) => {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({
			provider: provider
		});

    if (data) console.log('github account | client: ', data)

    if (error) console.log(error)
	};

  const submitSocialLogin: SubmitFunction = async ({ action, cancel }) => {
		switch (action.searchParams.get('provider')) {
			case 'google':
				await signInWithProvider('google');
				break;
			case 'discord':
				await signInWithProvider('discord');
				break;
			case 'github':
				await signInWithProvider('github');
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

      <!-- Social Login -->
      <form method="POST" use:enhance={submitSocialLogin}>
        <button
          class="py-4 px-4 rounded-full w-full mt-5 btn-github bg-secondary"
          formaction="?/login&provider=github"
        >
          {$t("common.btn-github")}
        </button>
      </form>

      <hr class="border border-white/10 my-5" />

      <!-- Email Login -->
      <form action="?/login" method="POST">
        <div class="form-group">
          <label for="email">{$t("common.email")}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@gmail.dev"
          />
        </div>
        <div class="form-group mt-2">
          <label for="password">{$t("common.password")}</label>
          <input type="password" id="password" name="password" />
        </div>
        <button class="py-4 px-4 rounded-full bg-primary w-full my-5 text- btn-action" type="submit">
          {$t('common.login')}
        </button>
      </form>

      <a class="text-center btn-action2" href="/register">
        <button>{$t("common.login-hint")}</button>
      </a>
    </div>
  </div>
</div>

<style>
  .btn-github {
    width: 100%;
    margin-bottom: 10px;
  }

  .btn-action {
    margin-top: 30px;
    width: 100%;
  }
</style>