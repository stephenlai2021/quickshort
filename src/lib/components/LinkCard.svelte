<script>
  import { fade, fly } from "svelte/transition";
  import { PUBLIC_APP_BASE_URL } from "$env/static/public";
  import { toast } from "@zerodevx/svelte-toast";
  import CopyBtn from "$lib/components/CopyBtn.svelte";

  export let link;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${PUBLIC_APP_BASE_URL}/${link.key}`);

    toast.push("Copied to clipboard", {
      theme: {
        "--toastBorderRadius": "8px",
        "--toastBarBackground": "#A2B2F6",
        "--toastMsgPadding": "0.5rem 1rem",
        "--toastMinHeight": "3.0rem",
        "--toastWidth": "14rem"
      }
    });
  };
</script>

<div
  in:fly={{ y: 50, duration: 200 }}
  class="backdrop-blur-lg bg-neutral/10 rounded-xl p-5 min-w- mb-5 flex justify-between gap-5 hover:border-secondary/50 transition-all duration-200"
>
  <div class="w-1/2 link">
    <div class="text-xl text-">
      <a href={`/dashboard/${link.key}`}>/{link.key}</a>
      <!-- <a href="#">/{link.key}</a> -->
    </div>
    <div class="text-xs sm:text-base">
      {link.long_url.slice(0, 20) + "..."}
    </div>
  </div>
  <div class="w-1/2 link-ation flex justify-end">
    <div class="link-stats flex flex-col items-end justify-center">
      <div class="flex items-end">
        <span class="leading-none text-sm sm:text-base">
          {link.total_clicks}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 sm:w-6 sm:h-6 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      </div>
      <div>
        <span class="text-xs sm:text-sm">{link.created_at?.slice(0, 10)}</span>
      </div>
    </div>
    <!-- <CopyBtn /> -->
    <button
      class="bg-secondary/20 hover:border-white/20 transition-all duration-200 py-2 px-4 bg rounded-xl ml-5"
      on:click={handleCopy}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          v-if="isCopied"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
        />
      </svg>
    </button>
  </div>
</div>
