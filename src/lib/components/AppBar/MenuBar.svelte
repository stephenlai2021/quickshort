<script lang="ts">
  import { page } from "$app/stores";
  import { t } from "$lib/i18n/translations";
  import { user } from "$lib/stores";
  import Logo from "$lib/components/AppBar/Logo.svelte";
  import ThemeMenu from "./ThemeMenu.svelte";
  import LoginBtn from "./LoginBtn.svelte";
  import LangMenu from "./LangMenu.svelte";
  import UserMenu from "./UserMenu.svelte";

  $: console.log("user | home page: ", $user?.user);
</script>

<div class="bg-base/30 backdrop-blur-2xl fixed top-0 left-0 right-0 z-50">
  <nav class="py-2 relative flex justify-between items-center">
    <Logo />

    <ul class="flex items-center">
      <div class="side-men">
        <ul class="menu menu-horizontal px-1 z-50 flex items-center">
          <!-- {#if $page.url.pathname !== "/dashboard" && $page.url.pathname !== "/auth"} -->
          <!-- {#if $page.url.pathname !== "/dashboard" && $page.url.pathname !== "/auth" && ($page.url.pathname === "/" && $user?.user)} -->
          <!-- {#if $page.url.pathname === "/dashboard"} -->
          <!-- <li>
              <a href="/dashboard" class="max-[530px]:hidden"
                >{$t("common.dashboard")}</a
              >
            </li>
            {/if} -->

          <ThemeMenu />
          <LangMenu />

          <!-- {#if $page.url.pathname === "/" && !$user?.email} -->
          {#if $page.url.pathname === "/" && !$user?.user}
            <LoginBtn />
          {:else if $page.url.pathname !== "/dashboard" && $page.url.pathname !== "/auth"}
            <li>
              <a href="/dashboard" class="max-[530px]:hidden">
                {$t("common.dashboard")}
              </a>
            </li>
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
