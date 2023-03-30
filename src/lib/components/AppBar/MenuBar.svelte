<script lang="ts">
  import { page } from "$app/stores";
  import Logo from "$lib/components/AppBar/Logo.svelte";
  import ThemeMenu from "./ThemeMenu.svelte";
  import LangMenu from "./LangMenu.svelte";
  import UserMenu from "./UserMenu.svelte";
  import imagePanel from "$lib/assets/images/icons/panel.png"
  import imageLogin from "$lib/assets/images/icons/enter.png"

  export let localUser
  console.log('user | menu bar: ', localUser)
</script>

<div class="bg-base/30 backdrop-blur-2xl fixed top-0 left-0 right-0 z-50">
  <nav class="py-2 relative flex justify-between items-center">
    <Logo />

    <ul class="flex items-center">
      <div class="side-men">
        <ul class="menu menu-horizontal px-1 z-50 flex items-center">
          <ThemeMenu />
          <LangMenu />

          {#if $page.url.pathname === "/" && !localUser.email}
              <a href="/auth" class="mr-4 borde max-[530px]:hidden">
                <img src={imageLogin} width="24" alt="">
              </a>
          {/if}

          {#if localUser.email && $page.url.pathname !== "/dashboard" && $page.url.pathname !== "/auth"}
            <li>
              <a href="/dashboard" class="max-[530px]:hidden pl-0 mr-1  hover:bg-base-100">
                <img src={imagePanel} width="24" alt="">
              </a>
            </li>
          {/if}

          {#if localUser}
            <UserMenu {localUser} />
          {/if}
        </ul>
      </div>
    </ul>
  </nav>
</div>

<style>
  /* .side-menu {
    position: relative;
    right: -25px;
  } */
</style>
