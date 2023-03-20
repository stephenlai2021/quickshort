<script lang="ts">
  import LinkForm from '$lib/components/LinkForm.svelte'
  import LinkCard from '$lib/components/LinkCard.svelte'
  import { t } from '$lib/i18n/translations';
  import { user, auth, linksArray } from '$lib/stores'
  import { onMount } from 'svelte';
  import { supabaseClient } from '$lib/supabase';
  import type { PageData } from "./$types";

  export let data: PageData;
  const { links } = data
  $linksArray = links
  $user = data.user.user

  // console.log('data | dashboard client: ', data)
</script>

<!-- <div class="page"> -->
  <section class="pt-28 mx- mx-auto bg-base-100">
    <h1 class="text-[22px] font-bold">{$t('common.dashboard')}</h1>
    <LinkForm />
    <div class="links-wrapper my-10">
      {#each $linksArray as item}
        <LinkCard link={item} />
      {/each}
    </div>  
  </section>
<!-- </div> -->

<!-- <style>
  .page {
    max-width: 900px;
    margin: auto;
    padding: 0 20px;
    overflow: hidden;
  }
</style> -->
