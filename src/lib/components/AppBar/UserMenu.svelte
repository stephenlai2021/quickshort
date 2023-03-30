<script lang="ts">
  import { enhance, type SubmitFunction } from "$app/forms";
  import { supabaseClient } from "$lib/supabase";
  import { user, btnChat, menuOpen, widthLessthan530 } from "$lib/stores";
  import { t } from "$lib/i18n/translations";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  export let localUser;
  console.log("user | user menu: ", localUser);

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

<li class="">
  <span class="pl-0 hover:bg-base-100">
    <img
      src={localUser.user_metadata?.avatar_url}
      alt=""
      width="30"
      height="30"
      class="rounded-full bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_bZVtu-PddY_qhswZvb8mjbcupdRazjY_w&usqp=CAU')]"
    />
  </span>
  <ul class="dropdown-menu">
    {#if localUser.email}
      <li>
        <button style:background="none" class="cursor-default">
          <!-- {localUser.email} -->
          {localUser.email.substring(0, localUser.email.indexOf("@"))}
        </button>
      </li>
    {/if}

    {#if $widthLessthan530}
      <li>
        <button on:click={() => goto("/dashboard")}>
          <!-- {#if localUser.email} -->
          {#if localUser.email && $page.url.pathname !== "/dashboard" && $page.url.pathname !== "/auth"}
            {$t("common.dashboard")}
          {/if}

          {#if !localUser.email && $page.url.pathname !== "/auth"}
            {$t("common.login")}
          {/if}
        </button>
      </li>
    {/if}
    <li>
      <button
        on:click={toggleChatbot}
        style:font-weight={$btnChat ? "bold" : ""}
      >
        {$t("common.chat")}
      </button>
    </li>

    {#if localUser.email}
      <li>
        <form action="/logout" method="POST" use:enhance={submitLogout}>
          <button type="submit" class="">{$t("common.logout")}</button>
        </form>
      </li>
    {/if}
  </ul>
</li>
