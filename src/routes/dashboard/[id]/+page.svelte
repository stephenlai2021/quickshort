<script lang="ts">
  import type { PageData } from "./$types";
  import { t } from "$lib/i18n/translations";
  import { onMount, onDestroy } from "svelte";
  import dateFormat from "dateformat";
  import CopyBtn from "$lib/components/utils/CopyBtn.svelte";

  export let data: PageData;

  const { clickDetails } = data;
  const { 
    key, 
    long_url, 
    created_at,
    total_clicks, 
    url_shortener_clicks
  } = clickDetails;

  let mapElement;
  let map;
  let marker;
  // let mapLoadedDone = false

  onMount(async () => {
    const leaflet = await import("leaflet");

    // 設置中心點
    // map = leaflet.map(mapElement).setView([25.0504,  121.5324], 6);
    map = leaflet.map(mapElement).setView([51.505, -0.09], 2);

    leaflet
      .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
      .addTo(map);

    marker = leaflet.marker([51.505, -0.09]).addTo(map).bindPopup('<h1>Center:</h1><span>latitude: 51.505</span><br/><span>longitude: -0.09</span>').openPopup();
    marker._icon.style.filter = "hue-rotate(120deg)";

    url_shortener_clicks.forEach((loc) => {
      leaflet.marker([loc.latitude, loc.longitude]).addTo(map).bindPopup(`<span>latitude: ${loc.latitude}</span><br/><span>longitude: ${loc.longitude}</span>`).openPopup();
    });
  });

  onDestroy(async () => {
    if (map) {
      console.log("Unloading Leaflet map.");
      map.remove();
    }
  });
</script>

<section class="pt-32 pb-16">
  <div class="max-[410px]:pl-[10px]">
    <div class="flex items-center">
      <h1 class="text-2xl font-bold">/{key}</h1>
      <CopyBtn {key} />
    </div>
    <div class="mt-2">
      {dateFormat(created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
    </div>
  </div>

  <div
    bind:this={mapElement}
    class="relative z-0 car w-full h-[400px] mt-10 bg-[url('/image-placeholder.png')] bg-cover bg-center"
  />

  <div class="stats flex mt-10 flex-wrap md:flex-nowrap">
    <div class="card border-none bg-neutral/20">
      <div class="text-4xl font-bold">{total_clicks}</div>
      <div class="text-">{$t('common.total_clicks')}</div>
    </div>

    <div
      class="card border-none bg-neutral/20 mt-5 md:mt-0 md:ml-5 w-full relative"
    >
      <div class="w-full break-all">{long_url}</div>
    </div>
  </div>

  <div class="mt-10">
    {#each url_shortener_clicks as click}
      <div class="card border-none w-full mb-5 bg-neutral/20">
        <div class="flex justify-between max-[510px]:flex-col">
          <div class="div">
            <div class="text-">{click.ip}</div>
            <div class="">
              {dateFormat(click.created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
            </div>
          </div>
          <div class="">
            {#if click.country}
              <div>{$t('common.country')}: {click.country}</div>
            {/if}
            {#if click.city}
              <div>{$t('common.city')}: {click.city}</div>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  @import "leaflet/dist/leaflet.css";
</style>
