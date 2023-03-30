<script>
  import { locale } from "$lib/i18n/translations";
  import IconLang from "$lib/components/icon/IconLang.svelte";

  // const langs = ["English", "日本語", "繁體中文", "簡體中文"];
  let currentMenu = "繁體中文";
  const langs = ["English", "日本語", "繁體中文"];

  const handleLocale = (lang) => {
    if (lang === "English") {
      $locale = "en";
      currentMenu = "English";
    }
    if (lang === "日本語") {
      $locale = "ja";
      currentMenu = "日本語";
    }
    if (lang === "繁體中文") {
      $locale = "zh-TW";
      currentMenu = "繁體中文";
    }
  };
</script>

<li class="relative cursor-pointer">
    <span class="pl-0 hover:bg-base-100">
      <IconLang />
    </span>
  <ul class="dropdown-menu">
    {#each langs as lang}
      <li>
        <button
          style:font-weight={currentMenu === lang ? "bold": ""}
          on:click={() => handleLocale(lang)}
        >
          {lang}
        </button>
      </li>
    {/each}
  </ul>
</li>
