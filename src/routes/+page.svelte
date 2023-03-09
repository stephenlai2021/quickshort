<!-- <script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';

	export let data: PageData;

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

<div class="page-home">
  <main>
    <h1>SvelteKit & Supabase Auth</h1>
    {#if data.session}
      <p>Welcome, {data.session.user.email}</p>
      <form action="/logout" method="POST" use:enhance={submitLogout}>
        <button type="submit" class="btn btn-primary">Logout</button>
      </form>
    {:else}
      <p>Let's learn how to register and login users!</p>
      <div class="auth-buttons">
        <a href="/login" class="btn btn-primary">Login</a>
        <a href="/register" class="btn btn-secondary">Register</a>
      </div>
    {/if}
  </main>
</div>

<style>
  .page-home {    
    margin-top: 100px;
    height: calc(100vh - 72px);
    display: flex;
    justify-content: center;
    width: 100%;
    border: 1px solid;
  }
</style> -->

<script lang="ts">
  import { t } from '$lib/i18n/translations';
</script>

<section class="h-screen grid place-items-center bg-base-100">
  <div class="max-w-3xl mx-auto text-center">
    <h1 class="text-5xl lg:text-6xl font-bold">
      {$t('common.title')}
    </h1>
    <p class="text-lg w-10/12 md:w-2/3 mx-auto my-10">
      {$t('common.subtitle')}
    </p>
    <a href="/login" class="py-4 px-8 rounded-full bg-primary text-sm">
      {$t('common.action')}
    </a>
  </div>
</section>

<style>
  a {
    text-decoration: none;
  }
</style>