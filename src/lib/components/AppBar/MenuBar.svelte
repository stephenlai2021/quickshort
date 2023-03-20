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

  console.log('user: ', $user?.email)
</script>

<div
  class="px-8 py- bg-base/30 backdrop-blur-2xl fixed top-0 left-0 right-0 z-50 shadow-neutral/10 shadow-md"
  class:pr-5={$widthLessthan680}
  class:pl-4={$widthLessthan480}
>
  <nav class="py-2 relative flex justify-between items-center">
    <Logo />

    <!-- {#if $page.url.pathname !== "/dashboard"} -->
    {#if !$page.url.pathname.startsWith("/dashboard")}
    <div class="menu-middle absolute left-[50%] translate-x-[-50%]">
      <MiddleMenu />
    </div>
    {/if}

    <ul class="flex items-center">
      <div class="side-menu">
        <ul class="menu menu-horizontal px-1 z-50 flex items-center">

           {#if $page.url.pathname.startsWith("/dashboard/")}
            <!-- <UserMenu /> -->
            <a href="/dashboard" class="border btn">Dashboard</a>
          {/if}

          <ThemeMenu />
          <LangMenu />

          {#if $page.url.pathname === "/" && !$user?.email}
            <LoginBtn />
          {/if}

          {#if $page.url.pathname === "/" && $user?.email}
            <LogoutBtn />
          {/if}

          {#if $page.url.pathname.startsWith("/dashboard")}
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
