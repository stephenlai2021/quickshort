<script>
  import { t, locale } from "$lib/i18n/translations";
  import {
    widthLessthan560,
    widthLessthan480,
    widthLessthan425,
    widthLessthan400,
    widthLessthan382,
  } from "$lib/stores";
  import logo from "$lib/assets/images/shormaster_logo-removebg.png";
</script>

<a
  href="/"
  data-sveltekit-reload
  class="ml-[10px] flex items-center relative navbar-brand text-2xl font-bold"
>
  <div class="">
    <img  
      src={logo} 
      alt=""
      width="50" 
      />
  </div>
  <span class="text-[18px]" style:display={$widthLessthan425 && $locale === 'en' ? "none" : $widthLessthan382 && ($locale === 'ja' || $locale === 'zh-TW') ? "none" : "block"}>
    {$t("common.logo")}
  </span>
</a>
