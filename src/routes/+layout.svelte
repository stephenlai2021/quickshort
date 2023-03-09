<script lang="ts">
  import "../app.postcss";
  import {
    user,
    widthLessthan680,
    widthLessthan560,
    widthLessthan480,
  } from "$lib/stores";
  import { invalidateAll } from "$app/navigation";
  import { supabaseClient } from "$lib/supabase";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import MenuBar from "$lib/components/AppBar/MenuBar.svelte";
  import Icon from "$lib/assets/images/favicon.ico";
  
  import type { PageData } from './$types';
	export let data: PageData;
  console.log('auth: ', data)

  const handleRWD = () => {
    if (window.innerWidth <= 680) $widthLessthan680 = true;
    if (window.innerWidth > 680) $widthLessthan680 = false;
    if (window.innerWidth <= 560) $widthLessthan560 = true;
    if (window.innerWidth > 560) $widthLessthan560 = false;
    if (window.innerWidth <= 480) $widthLessthan480 = true;
    if (window.innerWidth > 480) $widthLessthan480 = false;
  };

  $: if (browser) window.addEventListener("resize", () => handleRWD());

  onMount(() => {
    handleRWD()

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(() => {
      console.log("Auth state change detected");
      invalidateAll();
    });
    return () => {
      subscription.unsubscribe();
    };
  });
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href={Icon} />
  <title>QuickShort</title>
</svelte:head>

<div class="layout">
  <MenuBar />
  <div class="page">
    <slot />
  </div>
</div>

<style>
  .layout {
    max-width: 1200px;
    margin: auto;
  }

  .page {
    max-width: 800px;
    margin: auto;
    padding: 0 20px;
  }
</style>
