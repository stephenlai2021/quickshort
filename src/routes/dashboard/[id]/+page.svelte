<script>  
  import { page } from '$app/stores'
  import CopyBtn from '$lib/components/CopyBtn.svelte'

  const clicks = [
    {
      country: 'USA',
      city: 'OkLahoma'
    },
    {
      country: 'R.O.C.',
      city: 'Taipei'
    }
  ]
</script>

<!-- <h1 class="mt-[100px]">{$page.params.id}</h1> -->

<section class="pt-32 container">
    <div>
      <div class="flex">
        <h1 class="text-2xl font-bold text-primary">/Short Key</h1>
        <!-- <CopyBtn
          data={config.public.appUrl + '/' + data.key}
          class="ml-5 px-3"
        /> -->
      </div>
      <div class="mt-2">{new Date().toString()}</div>
    </div>

    <div class="stats flex mt-10 flex-wrap md:flex-nowrap">
      <div class="card">
        <div class="text-4xl font-bold">12</div>
        <!-- <div class="text-white/50">Total Clicks</div> -->
        <div class="text-">Total Clicks</div>
      </div>
      <div class="card mt-5 md:mt-0 md:ml-5 w-full relative">
        <textarea
          value="input"
          class="w-full bg-transparent focus:outline-none appearance-none resize-none"
        ></textarea>
        <!-- <CopyBtn :data="data.long_url" class="p-5 absolute right-2 bottom-2" /> -->
      </div>
    </div>

    <div class="clicks mt-10">
      <div class="card w-full mb-5">
        {#each clicks as click}
        <!-- <template v-if="click && typeof click === 'object'"> -->
          <div class="flex justify-between">
            <div class="div">
              <div class="text-secondary">{click.ip}</div>
              <div class="">{click.created_at}</div>
            </div>
            <div class="div">
              {#if click.country}
                <div>Country: {click.country}</div>
              {/if}
              {#if click.city}
                <div>City: {click.city}</div>
              {/if}
            </div>
          </div>
        <!-- </template> -->
        {/each}
      </div>
    </div>
  </section>
