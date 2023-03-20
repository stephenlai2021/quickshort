<script>
  import { locale } from "$lib/i18n/translations";
  import IconLang from "$lib/components/IconLang.svelte";

  const langs = ["English", "日本語", "繁體中文", "簡體中文"];
</script>

<li class="relative cursor-pointer">
  <button class="btn-lang">
    <span class="px-">
      <IconLang />
    </span>
  </button>
  <ul class="dropdown-menu">
    {#each langs as lang}
      {#if lang === "English"}
        <li>
          <!-- <button style:border={lang === "English" ? "1px solid red" : "none"} on:click={() => ($locale = "en")}>{lang}</button> -->
          <button on:click={() => ($locale = "en")}>{lang}</button>
        </li>
      {/if}
      {#if lang === "繁體中文"}
        <li>
          <button on:click={() => ($locale = "zh-TW")}>{lang}</button>
        </li>
      {/if}
      {#if lang === "日本語"}
        <li>
          <button on:click={() => ($locale = "ja")}>{lang}</button>
        </li>
      {/if}
    {/each}
  </ul>
</li>