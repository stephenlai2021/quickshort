<script lang="ts">
  import { page } from "$app/stores";
  import { t } from "$lib/i18n/translations";
  import { user } from "$lib/stores";
  import Logo from "$lib/components/AppBar/Logo.svelte";
  import ThemeMenu from "./ThemeMenu.svelte";
  import LoginBtn from "./LoginBtn.svelte";
  import LangMenu from "./LangMenu.svelte";
  import UserMenu from "./UserMenu.svelte";
  import IconPanel from "../icon/IconPanel.svelte"; 
  import IconLogin from "../icon/IconLogin.svelte"; 

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
          <!-- {#if $page.url.pathname === "/"} -->
            <!-- <span class="pr-2"> -->
              <!-- <LoginBtn /> -->
              <a href="/auth" class="pr-2">
                <IconLogin width="26" height="26" />
              </a>
            <!-- </span> -->
          {:else if $page.url.pathname !== "/dashboard" && $page.url.pathname !== "/auth"}
            <li>
              <a href="/dashboard" class="max-[530px]:hidden pl-0 mr-1  hover:bg-base-100">
                <!-- {$t("common.dashboard")} -->
                <IconPanel />
              </a>
            </li>
          {/if}

          {#if $page.url.pathname.startsWith("/dashboard")}
            <!-- <span class="pl-0"> -->
              <!-- <li> -->
                <UserMenu />
              <!-- </li> -->
            <!-- </span> -->
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
