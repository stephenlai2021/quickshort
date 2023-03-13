<script lang="ts">
  import "../app.postcss";
  import {
    menuOpen,
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
  import ChatWindow from "$lib/components/chatbot/ChatWindow.svelte";

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
    handleRWD();

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
  <img
    src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/public/sister.png"
    alt=""
    width="50"
    class="icon-admin"
    on:keydown
    on:click={() => ($menuOpen = !$menuOpen)}
  />
  {#if $menuOpen}
    <div class="chat-window">
      <ChatWindow />
    </div>
  {/if}
</div>

<style>
  .layout {
    max-width: 1200px;
    margin: auto;
    position: relative;
  }

  .page {
    max-width: 800px;
    margin: auto;
    padding: 0 20px;
  }

  .icon-admin {
    position: fixed;
    bottom: 30px;
    right: 30px;
    cursor: pointer;
    border-radius: 50%;
  }

  .chat-window {
    position: fixed;
    bottom: 90px;
    right: 30px;
  }

  @media (max-width: 400px) {
    .chat-window {
      top: 66px;
      right: 0px;
      width: 100%;
      /* border-radius: 0; */
    }
  }
</style>
