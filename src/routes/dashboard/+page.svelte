<script lang="ts">
  import LinkForm from '$lib/components/LinkForm.svelte'
  import LinkCard from '$lib/components/LinkCard.svelte'
  import { page } from '$app/stores';
  import { t } from '$lib/i18n/translations';
  import { user } from '$lib/stores'
  import { onMount } from 'svelte';

  import type { PageData } from "./$types";
  export let data: PageData;

  onMount(() => {
    if (data) $user = data.user.user
  })

  const loop = [
    {
      id: 1,
      shortKey: 'test',
      longUrl: 'https://google.com',
      total_clicks: 5,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: 2,
      shortKey: 'test123',
      longUrl: 'https://facebook.com',
      total_clicks: 20,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: 3,
      shortKey: 'abcDEF!',
      longUrl: 'https://vercel.com',
      total_clicks: 18,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: 3,
      shortKey: 'abcDEF!',
      longUrl: 'https://vercel.com',
      total_clicks: 18,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: 3,
      shortKey: 'abcDEF!',
      longUrl: 'https://vercel.com',
      total_clicks: 18,
      created_at: new Date().toLocaleDateString()
    },
  ]
</script>

<section class="pt-28 mx- mx-auto bg-base-100">
  <h1 class="text-2xl font-bold">{$t('common.dashboard')}</h1>
  <LinkForm />
  <div class="links-wrapper mt-10">
    {#each loop as item}
      <LinkCard link={item} />
    {/each}
  </div>  
</section>
