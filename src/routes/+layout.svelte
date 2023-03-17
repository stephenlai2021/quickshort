<script lang="ts">
  import "../app.postcss";
  // import "$lib/styles/toast.css";
  import "../toast.css";
  import {
    btnChat,
    menuOpen,
    openaiKey,
    widthLessthan680,
    widthLessthan560,
    widthLessthan480,
    widthLessthan400,
    widthLessthan360,
  } from "$lib/stores";
  import { invalidateAll } from "$app/navigation";
  import { supabaseClient } from "$lib/supabase";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { fade } from "svelte/transition";
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import IconChatbot from "$lib/components/icon/IconChatbot.svelte";
  import MenuBar from "$lib/components/AppBar/MenuBar.svelte";
  import Icon from "$lib/assets/images/favicon.ico";
  import ChatWindow from "$lib/components/chatbot/ChatWindow.svelte";
  import ModalOpenai from "$lib/components/ModalOpenai.svelte";

  // let openaiKey = "";

  const handleRWD = () => {
    if (window.innerWidth <= 680) $widthLessthan680 = true;
    if (window.innerWidth > 680) $widthLessthan680 = false;
    if (window.innerWidth <= 560) $widthLessthan560 = true;
    if (window.innerWidth > 560) $widthLessthan560 = false;
    if (window.innerWidth <= 480) $widthLessthan480 = true;
    if (window.innerWidth > 480) $widthLessthan480 = false;
    if (window.innerWidth <= 400) $widthLessthan400 = true;
    if (window.innerWidth > 400) $widthLessthan400 = false;
    if (window.innerWidth <= 360) $widthLessthan360 = true;
    if (window.innerWidth > 360) $widthLessthan360 = false;
  };

  $: if (browser) window.addEventListener("resize", () => handleRWD());

  const handlePrompt = () => {
    $menuOpen = !$menuOpen;

    if (!$openaiKey && $menuOpen && $btnChat) {
      let temp = prompt(
        "Please enter your OpenAI API key:",
        "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"
      );
      if (temp === null || temp === "") {
        return;
      } else {
        $openaiKey = temp;
      }
    }
  };

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

  // $: if (browser) handlePrompt()

  // $: console.log("openai key: ", $openaiKey);

  $: {
    console.log(`width < 400: ${$widthLessthan400}, menu open: ${$menuOpen}`)
  }
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href={Icon} />
  <title>QuickShort</title>
</svelte:head>

<SvelteToast />
<div class="layout">
  <MenuBar />
  <div
    class="page"
    style:height={$widthLessthan400 && $menuOpen ? "100vh" : "auto"}
    style:overflow-y={$widthLessthan400 && $menuOpen ? "hidden" : "auto"}
  >
    <slot />
  </div>

  {#if $btnChat}
    <div
      class="icon-chatbot-wrapper"
      on:keydown
      on:click={handlePrompt}
      transition:fade
    >
      <IconChatbot />
    </div>
  {/if}

  {#if $openaiKey && $menuOpen && $btnChat}
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

  .icon-chatbot-wrapper,
  .icon-admin {
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    border-radius: 50%;
  }

  .chat-window {
    position: fixed;
    bottom: 70px;
    right: 10px;
  }

  @media (max-width: 400px) {
    .chat-window {
      top: 0px;
      right: 0px;
      z-index: 51;
      width: 100%;
      height: 100vh;
      border-radius: 0;
    }
  }
</style>
