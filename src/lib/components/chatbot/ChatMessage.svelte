<script lang="ts">
  import type { ChatCompletionRequestMessageRoleEnum } from "openai";
  import { user } from "$lib/stores";

  export let type: ChatCompletionRequestMessageRoleEnum;
  export let message: string;

  let userAvatar: string = "";

  $: if ($user) console.log("user | chat message: ", $user);

  $: if ($user && $user.user_metadata?.avatar_url) {
    userAvatar = $user.user_metadata.avatar_url;
    console.log(
      "user avatar url | chat message: ",
      $user.user_metadata.avatar_url
    );
  } 
	else {
    userAvatar =
      "https://www.shareicon.net/data/256x256/2015/09/18/103159_user_512x512.png";
  }
</script>

<div class="chat {type === 'user' ? 'chat-end' : 'chat-start'} justify-end">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      {#if userAvatar}
        <img
          src={type === "user"
            ? userAvatar
            : "https://raw.githubusercontent.com/SAP-Custom-Widget/ChatGptWidget/main/icon.png"}
          alt="{type} avatar"
        />
      {:else}
        <img
          src={type === "user"
            ? "https://www.shareicon.net/data/256x256/2015/09/18/103159_user_512x512.png"
            : "https://raw.githubusercontent.com/SAP-Custom-Widget/ChatGptWidget/main/icon.png"}
          alt="{type} avatar"
        />
      {/if}
    </div>
  </div>
  <div
    class="chat-bubble rounded-[8px] {type === 'user'
      ? 'chat-bubble-primary'
      : 'chat-bubble-secondary'}"
  >
    {message}
  </div>
</div>
