<script lang="ts">
  import type { ChatCompletionRequestMessageRoleEnum } from "openai";
  import { user } from "$lib/stores";
  import avatar from "$lib/assets/images/avatar.png"
  import chatbot from "$lib/assets/images/sister.png"

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
    userAvatar = avatar
  }
</script>

<div class="chat {type === 'user' ? 'chat-end' : 'chat-start'} justify-end">
  <!-- <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      {#if userAvatar}
        <img
          src={type === "user"
            ? userAvatar
            : chatbot}
          alt="{type} avatar"
        />
      {:else}
        <img
          src={type === "user"
            ? avatar
            : chatbot}
          alt="{type} avatar"
        />
      {/if}
    </div>
  </div> -->

  <div
    class="chat-bubble text-[14px] rounded-[8px] {type === 'user'
      ? 'chat-bubble-primary'
      : 'chat-bubble-secondary'}"
  >
    {message}
  </div>
</div>
