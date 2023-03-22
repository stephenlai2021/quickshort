<script lang="ts">
  import "../app.postcss";
  import "../toast.css";
  import {
    btnChat,
    menuOpen,
    openaiKey,
    widthLessthan680,
    widthLessthan560,
    widthLessthan480,
    widthLessthan490,
    widthLessthan425,
    widthLessthan400,
    widthLessthan382,
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

  const handleRWD = () => {
    if (window.innerWidth <= 680) $widthLessthan680 = true;
    if (window.innerWidth > 680) $widthLessthan680 = false;
    if (window.innerWidth <= 560) $widthLessthan560 = true;
    if (window.innerWidth > 560) $widthLessthan560 = false;
    if (window.innerWidth <= 490) $widthLessthan490 = true;
    if (window.innerWidth > 490) $widthLessthan490 = false;
    if (window.innerWidth <= 480) $widthLessthan480 = true;
    if (window.innerWidth > 480) $widthLessthan480 = false;
    if (window.innerWidth <= 425) $widthLessthan425 = true;
    if (window.innerWidth > 425) $widthLessthan425 = false;
    if (window.innerWidth <= 400) $widthLessthan400 = true;
    if (window.innerWidth > 400) $widthLessthan400 = false;
    if (window.innerWidth <= 382) $widthLessthan382 = true;
    if (window.innerWidth > 382) $widthLessthan382 = false;
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

  // $: console.log(`width < 400: ${$widthLessthan400}, menu open: ${$menuOpen}`);
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href={Icon} />
  <title>ShortMaster</title>
</svelte:head>

<SvelteToast />
<div
  class="max-w-[1600px] mx-auto relative overflow-auto"
  style:height={$widthLessthan400 && $menuOpen ? "100vh" : "auto"}
  style:overflow-y={$widthLessthan400 && $menuOpen ? "hidden" : "auto"}
>
  <MenuBar />
  <slot />

  {#if $btnChat}
    <div
      class="fixed bottom-[20px] right-[20px] cursor-pointer"
      on:keydown
      on:click={handlePrompt}
      transition:fade
    >
      <IconChatbot width="50" />
    </div>
  {/if}

  {#if $openaiKey && $menuOpen && $btnChat}
    <div class="fixed bottom-[70px] right-[10px] max-[400px]:top-0 max-[400px]:right-0 z-[51] max-[400px]:w-full max-[400px]:h-full max-[400px]:rounded-0">
      <ChatWindow />
    </div>
  {/if}
</div>