 <script>
   import { t } from '$lib/i18n/translations';
   import { onMount } from 'svelte'
   import { mobile } from '$lib/stores'

   let isLoading = false

   const getRWD = () => {
     if (window.innerWidth <= 420) $mobile = true;
     if (window.innerWidth > 420) $mobile = false;
   }
  
  onMount(() => {
    getRWD()
    
    window.addEventListener("resize", () => {
      getRWD()
    });
  })

  // $: console.log('mobile: ', $mobile)
 </script>
 
 <!-- class="border border-neutral/20 hover:border-secondary/50 mt-10 flex flex-wrap sm:flex-nowrap justify-between items-middle gap-5" -->
 <form 
   method="POST" 
   action="" 
   class="border border-secondary/50 hover:border-secondary/50 mt-10 flex flex-wrap sm:flex-nowrap justify-between items-middle gap-5"
   class:card={ !$mobile }
   >
 <!-- <form method="POST" action="" class="mt-10 flex flex-wrap sm:flex-nowrap justify-between items-middle gap-5"> -->
    <div class="form-group w-full sm:w-6/12">
      <label for="long_url" class="text- text-xs mb-1 block">{$t('common.long_url')}</label>
      <input
        id="long_url"
        type="text"
        name="long_url"
        placeholder={$t('common.long_url_placeholder')}
      />
    </div>
    <div class="form-group w-full sm:w-4/12">
      <label for="key" class="text- text-xs mb-1 block">{$t('common.short_key')}</label>
      <input
        id="key"
        type="text"
        name="key"
        placeholder={$t('common.short_key_placeholder')}
        required
        min="6"
      />
    </div>
    <div class="btn-submit-wrapper w-full sm:w-2/12 flex justify-end self-end">
      <button
        type="submit"
        class="btn-submit bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 w-full hover:shadow-xl transition-all duration-200"
      >
        {#if isLoading}
          <svg
            class="animate-spin h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        {:else}
          <span class="w-full">{$t('common.shorten')}</span>  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        {/if}
      </button>
    </div>
  </form>

  <style>
    input {
      width: 100%;
    }

    @media (max-width: 400px) {
      .btn-submit-wrapper {
        justify-content: flex-start;
      }
    }
  </style>