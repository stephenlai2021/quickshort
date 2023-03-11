<script lang="ts">
  import { enhance, type SubmitFunction } from "$app/forms";
  import { supabaseClient } from "$lib/supabase";
  import { user } from "$lib/stores";
  import { page } from "$app/stores";
  import { onMount } from 'svelte'
  import userAvatar from "$lib/assets/images/sister.png";

  onMount(() => {
    console.log('user | user menu: ', $user)
  })

  const submitLogout: SubmitFunction = async ({ cancel }) => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
    }
    cancel();
  };
</script>

{#if $user}
  <li class="user-avatar-wrapper cursor-pointer">
    <button>
      <span>
        <img
          src={$user.user_metadata?.avatar_url}          
          alt=""
          width="35"
          height="35"
          class="user-avatar rounded-full"
        />
      </span>
    </button>
    <ul class="dropdown-menu absolute right-[3px] p-1 bg-base-100 border">
      <li><button>{$user?.email}</button></li>
      <!-- <li><button>{$user?.user_metadata ? $user?.user_metadata.email : $user.email}</button></li> -->
      <li>
        <form action="/logout" method="POST" use:enhance={submitLogout}>
          <button type="submit" class="">Logout</button>
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
  }
</style>
