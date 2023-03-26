<script lang="ts">
  import { enhance, type SubmitFunction } from "$app/forms";
  import { supabaseClient } from "$lib/supabase";
  import {
    user,
    btnChat,
    menuOpen,
    widthLessthan530,
  } from "$lib/stores";
  import { t } from "$lib/i18n/translations";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  const submitLogout: SubmitFunction = async ({ cancel }) => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
    }
    cancel();
  };

  const toggleChatbot = () => {
    $btnChat = !$btnChat;
    $menuOpen = false;
  };
</script>

{#if $user}
  <li class="">
    <button>
      <span>
        <img
          src={$user.user_metadata?.avatar_url}
          alt=""
          width="30"
          height="30"
          class="rounded-full"
        />
      </span>
    </button>
    <ul class="dropdown-menu">
      <li>
        <button style:background="none" class="cursor-default">
          {$user?.email}
        </button>
      </li>
      {#if $widthLessthan530}
        {#if $user?.email && $page.url.pathname !== "/dashboard"}
          <li>
            <button on:click={() => goto("/dashboard")}
              >{$t("common.dashboard")}
            </button>
          </li>
        {/if}
      {/if}
      <li>
        <button
          on:click={toggleChatbot}
          class:bg-base-300={$btnChat}
          class:underline-offset-4={$btnChat}
          style:font-weight={$btnChat ? "bold" : ""}
        >
          {$t("common.chat")}
        </button>
      </li>
      <li>
        <form action="/logout" method="POST" use:enhance={submitLogout}>
          <button type="submit" class="">{$t("common.logout")}</button>
        </form>
      </li>
    </ul>
  </li>
{/if}