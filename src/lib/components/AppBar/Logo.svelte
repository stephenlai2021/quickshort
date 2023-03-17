<script>
  import { t, locale } from "$lib/i18n/translations";
  import { widthLessthan560, widthLessthan480 } from "$lib/stores";
  import logo from "$lib/assets/images/logo-192x192.png";
</script>

<a href="/" data-sveltekit-reload class="logo flex relative navbar-brand text-2xl font-bold">
  <!-- <img class="logo-image" src={logo} alt="" width="28" height="28" /> -->
    <!-- style:display={$widthLessthan560 && $locale === "ja"
      ? "none"
      : $widthLessthan480 && $locale !== "ja"
      ? "none"
      : "block"} -->
  {#if $widthLessthan480}
    <span class="title">{$t('common.logo_short')}</span>
  {:else}
    <span class="title">{$t('common.logo_long')}</span>
  {/if}
</a>

<style>
  .logo {
    margin-left: -10px;
  }

  .title {
    /* margin-left: 10px; */
    /* width: 192px; */
  }

  @media (max-width: 480px) {
    .logo-image {
      margin-left: 15px;
    }

    .title {
      margin-left: 8px;
      /* width: auto;
      display: none; */
    }
  }
</style>
