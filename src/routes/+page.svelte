<script lang="ts">
  import { t } from '$lib/i18n/translations';
  import { user } from '$lib/stores'
  import { onMount } from 'svelte';  
</script>

<section class="h-screen grid place-items-center bg-base-100">
  <div class="max-w-3xl mx-auto text-center">
    <h1 class="text-5xl lg:text-6xl font-bold">
      {$t('common.title')}
    </h1>
    <p class="text-lg w-10/12 md:w-2/3 mx-auto my-10">
      {$t('common.subtitle')}
    </p>
    <a href="/auth" class="py-4 px-8 rounded-full bg-primary text-sm">
      {$t('common.action')}
    </a>
  </div>
</section>

<style>
  a {
    text-decoration: none;
  }
</style>