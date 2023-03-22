<script>
  import { page } from "$app/stores";
  import CopyBtn from "$lib/components/utils/CopyBtn.svelte";

  let isCopied = false;

  const clicks = [
    {
      country: "USA",
      city: "OkLahoma",
    },
    {
      country: "R.O.C.",
      city: "Taipei",
    },
    {
      country: "Japan",
      city: "Tokoyo",
    },
  ];
</script>

<!-- <h1 class="mt-[100px]">{$page.params.id}</h1> -->

<section class="pt-32 pb-16 container">
  <div>
    <div class="flex items-center">
      <h1 class="text-2xl font-bold">/{$page.params.id}</h1>
      <CopyBtn isCopied={false} key={$page.params.id} />
    </div>
    <div class="mt-2">{new Date().toString()}</div>
  </div>

  <div class="stats flex mt-10 flex-wrap md:flex-nowrap">
    <div class="card border-none bg-neutral/20">
      <div class="text-4xl font-bold">12</div>
      <div class="text-">Total Clicks</div>
    </div>
    <div
      class="card border-none bg-neutral/20 mt-5 md:mt-0 md:ml-5 w-full relative"
    >
      <textarea
        value="https://web.whatsapp.com"
        class="w-full bg-transparent focus:outline-none appearance-none resize-none"
      />
      <div class="btn-copy-wrapper flex justify-end">
        <CopyBtn {isCopied} />
      </div>
    </div>
  </div>

  <div class="clicks mt-10">
    {#each clicks as click}
      <div class="card border-none w-full mb-5 bg-neutral/20">
        <div class="flex justify-between">
          <div class="div">
            <div class="text-">102.44.172.91</div>
            <div class="">{new Date().toString()}</div>
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
      </div>
    {/each}
  </div>
</section>
