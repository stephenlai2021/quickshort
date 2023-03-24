<script lang="ts">
  import type { ChatCompletionRequestMessage } from "openai";
  import { SSE } from "sse.js";
  import { cubicOut } from "svelte/easing";
  import { t } from "$lib/i18n/translations";
  import { menuOpen, openaiKey } from "$lib/stores";
  import ChatMessage from "./ChatMessage.svelte";
  import IconSister from "$lib/components/icon/IconSister.svelte";
  import IconClose from "$lib/components/icon/IconClose.svelte";

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
      payload: JSON.stringify({
        messages: chatMessages,
        openaiKey: $openaiKey,
      }),
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
    console.error("request error: ", err);
    alert(
      "Your OpenAI API key is invalid, please enter a valid key or create a new one 😀"
    );
    $menuOpen = false;
    $openaiKey = "";
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
  class="pt-[0px] flex flex-col pt-4 w- px-0 items-center gap-"
  on:click|stopPropagation
  on:keydown
>
  <div
    class="inner-wrapper max-[400px]:w-full shadow-neutral/50 shadow-md h-[300px] w-[350px] pt-[0px] bg-base-200 backdrop-blur-2xl max-[400px]:rounded-t-[0px] rounded-t-[8px] overflow-y-auto flex flex-col gap-4"
  >
    <div
      class="chat-window-header w-full px-4 bg-base-100 backdrop-blur-2xl py-3 flex items-center shadow-neutral/10 shadow-md"
    >
      <IconSister width="46" />
      <div class="description ml-[10px] flex flex-col">
        <span>{$t('common.logo_long')}</span>
        <span class="text-[12px]">{$t('common.chatbot_description')}</span>
      </div>
      <div
        class="icon-close-wrapper ml-auto cursor-pointer"
        on:keydown
        on:click={() => ($menuOpen = false)}
      >
        <IconClose />
      </div>
    </div>
    <div class="mt-[0px] overflow-y-aut flex flex-col gap-2 pt-[0px] px-4">
      <ChatMessage
        type="assistant"
        message={$t('common.chatbot_initial_prompt')}
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
    class="relative flex w-full rounded-b-[8px] shadow-neutral/20 shadow-md bg-base-300"
    on:submit|preventDefault={handleSubmit}
  >
    <input type="text" class="w-[70%] border-none rounded-none outline-none" bind:value={query} />
    <button
      type="submit"
      class="text-[14px] rounded-[4px] px-[10px] w-[30%]"
    >
      <span>{$t("common.send")}</span>
    </button>
  </form>
</div>

<style>
  input[type="text"] {
    border-radius: 0;
    border-bottom-left-radius: 8px;
  }

  @media (max-width: 400px) {
    .inner-wrapper {
      height: calc(100vh - 40px);
    }

    input[type="text"] {
      border-radius: 0;
    }
  }
</style>
