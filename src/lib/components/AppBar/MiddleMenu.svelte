<script>
  import { page } from "$app/stores";
  import { t } from "$lib/i18n/translations";

  const links = [
    {
      url: "/pricing",
      title: "Pricing",
    },
    {
      url: "/features",
      title: "Features",
    },
    {
      url: "/help",
      title: "Help",
    },
  ];
</script>

<ul
  class="middle-menu relative flex-nowrap flex items-center justify-between"
  style:left={$page.url.pathname === "/login" ||
  $page.url.pathname === "/register"
    ? "-30px"
    : "0px"}
>
  {#each links as link}
    <li class="px-8 text-1xl">
      {#if link.title === "Pricing"}
        <a href={`${link.url}`}>{$t("common.pricing")}</a>
      {/if}
      {#if link.title === "Features"}
        <a href={`${link.url}`}>{$t("common.features")}</a>
      {/if}
      {#if link.title === "Help"}
        <a href={`${link.url}`}>{$t("common.help")}</a>
      {/if}
    </li>
  {/each}
</ul>

<style>
  @media (max-width: 837px) {
    .middle-menu {
      display: none;
    }
  }
</style>
