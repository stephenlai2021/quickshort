<script lang="ts">
  import { enhance, type SubmitFunction } from "$app/forms";
  import { supabaseClient } from "$lib/supabase";
  import { user, btnChat, menuOpen } from "$lib/stores";
   import { t } from "$lib/i18n/translations";
  
  // console.log('user | user menu: ', $user)

  const submitLogout: SubmitFunction = async ({ cancel }) => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
    }
    cancel();
  };

  const toggleChatbot = () => {
    $btnChat = !$btnChat
    $menuOpen = false
  }
</script>

{#if $user}
  <li class="user-avatar-wrapper cursor-pointer">
    <button>
      <span>
        <img
          src={$user.user_metadata?.avatar_url}          
          alt=""
          width="30"
          height="30"
          class="user-avatar rounded-full"
        />
      </span>
    </button>
    <ul class="dropdown-menu">
      <li><button>{$user?.email}</button></li>
      <!-- <li><button on:click={() => $btnChat = !$btnChat}>{$t('common.chat')}</button></li> -->
      <li><button on:click={toggleChatbot}>{$t('common.chat')}</button></li>
      <li>
        <form action="/logout" method="POST" use:enhance={submitLogout}>
          <button type="submit" class="">{$t('common.logout')}</button>
        </form>
      </li>
    </ul>
  </li>
{/if}

<style>
  .user-avatar {
    border-radius: 50%;
    padding: -1px;
    background-image: url(https://www.shareicon.net/data/256x256/2015/09/18/103159_user_512x512.png);
    background-size: cover;
    overflow: hidden;
  }
</style>
