<script lang="ts">
  import type { ChatCompletionRequestMessage } from "openai";
  import { SSE } from "sse.js";
  import { cubicOut } from "svelte/easing";
  import { t } from "$lib/i18n/translations";
  import { menuOpen } from "$lib/stores";
  import ChatMessage from "./ChatMessage.svelte";

  let query: string = "";
  let answer: string = "";
  let apiKey: string = "";
  let loading: boolean = false;
  let chatMessages: ChatCompletionRequestMessage[] = [];
  let scrollToDiv: HTMLDivElement;
  function scrollToBottom() {
    setTimeout(function () {
      scrollToDiv.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 100);
  }
  const handleSubmit = async () => {
    loading = true;
    chatMessages = [...chatMessages, { role: "user", content: query }];
    const eventSource = new SSE("/api/chat", {
      headers: {
        "Content-Type": "application/json",
      },
      payload: JSON.stringify({ messages: chatMessages }),
    });
    query = "";
    eventSource.addEventListener("error", handleError);
    eventSource.addEventListener("message", (e) => {
      scrollToBottom();
      try {
        loading = false;
        if (e.data === "[DONE]") {
          chatMessages = [
            ...chatMessages,
            { role: "assistant", content: answer },
          ];
          answer = "";
          return;
        }
        const completionResponse = JSON.parse(e.data);
        const [{ delta }] = completionResponse.choices;
        if (delta.content) {
          answer = (answer ?? "") + delta.content;
        }
      } catch (err) {
        handleError(err);
      }
    });
    eventSource.stream();
    scrollToBottom();
  };

  function handleError<T>(err: T) {
    loading = false;
    query = "";
    answer = "";
    console.error(err);
  }

  function slidefade(node, params) {
    const existingTransform = getComputedStyle(node).transform.replace(
      "none",
      ""
    );
    return {
      delay: params.delay || 0,
      duration: params.duration || 400,
      easing: params.easing || cubicOut,
      css: (t, u) =>
        `transform-origin: bottom right; transform: ${existingTransform} scaleY(${t}) scaleX(${t}); opacity: ${t};`,
    };
  }
</script>

<div
  transition:slidefade
  class="relative pt-[10px] flex flex-col pt-4 w- px-0 items-center gap-"
  on:click|stopPropagation
  on:keydown
>
  <div
    class="absolute h-[20px] w-full rounded-[8px] z-10 backdrop-blur-[6px]"
  />
  <div
    class="inner-wrapper h-[300px] w-[350px] pt-[0px] bg-neutral rounded-t-[8px] p-4 overflow-y-auto flex flex-col gap-4"
  >
    <div class="flex flex-col gap-2 pt-[16px]">
      <ChatMessage
        type="assistant"
        message="Hello, ask me anything you want!"
      />
      {#each chatMessages as message}
        <ChatMessage type={message.role} message={message.content} />
      {/each}
      {#if answer}
        <ChatMessage type="assistant" message={answer} />
      {/if}
      {#if loading}
        <ChatMessage type="assistant" message="Loading.." />
      {/if}
    </div>
    <div class="" bind:this={scrollToDiv} />
  </div>
  <form
    class="relative flex w-full border-t-[0px] border-base-300 rounded-b-[8px] gap-4 bg-neutral p-4"
    on:submit|preventDefault={handleSubmit}
  >
    <div
      class="icon-close text-base-100"
      on:keydown
      on:click={() => ($menuOpen = false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
        width="22"
        height="22"
      >
        <title>Close Circle</title>
        <path
          d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
          fill="none"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-width="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M320 320L192 192M192 320l128-128"
        />
      </svg>
    </div>
    <input
      type="text"
      class="rounded-[4px] py-[3px] pl-[5px] bordered border-neutral w-"
      bind:value={query}
    />
    <button type="submit" class="btn-send rounded-[4px] px-[10px] btn-accent">
      <!-- <span class="btn-text">{$t('common.send')}</span> -->
      {$t("common.send")}
    </button>
  </form>
</div>

<style>
   /* width */
  ::-webkit-scrollbar {
    width: 16px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .icon-close {
    display: none;
  }

  @media (max-width: 400px) {
    .icon-close {
      position: absolute;
      /* top: 50%; */
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
      font-style: 18px;
      /* padding: 5px; */
      /* width: 16px;
      height: 16px; */
      /* border: 1px solid; */
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .inner-wrapper {
      width: 100%;
      height: calc(100vh - 150px);
    }
  }
</style>
