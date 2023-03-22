<script>
  import { t, locale } from "$lib/i18n/translations";
  import {
    widthLessthan560,
    widthLessthan480,
    widthLessthan425,
    widthLessthan400,
    widthLessthan382,
  } from "$lib/stores";
  import logo from "$lib/assets/images/logo-128x128.png";
</script>

<a
  href="/"
  data-sveltekit-reload
  class="logo flex items-center relative navbar-brand text-2xl font-bold"
>
  <div class="logo-wrapper">
    <img 
      class="logo-image mr-[6px]" 
      src={logo} 
      alt="" 
      style:width={$widthLessthan382 && ($locale === 'ja' || $locale === 'zh-TW') ? "22px" : "18px"}
    />
  </div>
  <span class="text-[18px]" style:display={$widthLessthan425 && $locale === 'en' ? "none" : $widthLessthan382 && ($locale === 'ja' || $locale === 'zh-TW') ? "none" : "block"}>
    {$t("common.logo")}
  </span>
</a>
