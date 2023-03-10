<script lang="ts">
  import { page } from "$app/stores";
  import { widthLessthan680, widthLessthan480, user } from "$lib/stores";
  import Logo from "$lib/components/AppBar/Logo.svelte";
  import MiddleMenu from "$lib/components/AppBar/MiddleMenu.svelte";
  import ThemeMenu from "./ThemeMenu.svelte";
  import LoginBtn from "./LoginBtn.svelte";
  import LogoutBtn from "./LogoutBtn.svelte";
  import LangMenu from "./LangMenu.svelte";
  import UserMenu from "./UserMenu.svelte";
</script>

<div
  class="boarder border-b border-white/10 px-8 py-2 bg-base-100 backdrop-blur-md  border-white/20 fixed top-0 left-0 right-0 z-50"
  class:pr-5={$widthLessthan680}
  class:pl-4={$widthLessthan480}
>
  <nav class="py-1 flex justify-between items-center">
    <Logo />

    {#if $page.url.pathname !== "/dashboard"}
      <MiddleMenu />
    {/if}

    <ul class="flex items-center">
      <div class="side-menu">
        <ul class="menu menu-horizontal px-1 z-50 flex items-center">
          <ThemeMenu />
          <LangMenu />

          {#if $page.url.pathname === "/" && !$user}
            <LoginBtn />
          {/if}

          {#if $page.url.pathname === "/" && !$user}
            <LogoutBtn />
          {/if}

          {#if $page.url.pathname === "/dashboard"}
            <UserMenu />
          {/if}
        </ul>
      </div>
    </ul>
  </nav>
</div>

<style>
  .side-menu {
    position: relative;
    right: -25px;
  }
</style>
