<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import dateFormat from "dateformat";
  import CopyBtn from "$lib/components/utils/CopyBtn.svelte";

  export let data: PageData;
  const { clickDetails } = data;
  const { long_url, total_clicks, key, url_shortener_clicks, created_at } =
    clickDetails;
  const { longitude, latitude } = url_shortener_clicks[0];
  console.log("click details: ", clickDetails);
  console.log("longitude: ", longitude);
  console.log("latitude: ", latitude);

  // const geo = {
  //   latitude, longitude
  // }

  let mapElement;
  let map;
  let marker

  onMount(async () => {
    if (browser) {
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

      marker = leaflet.marker([51.505, -0.09]).addTo(map).openPopup();
      marker._icon.style.filter = "hue-rotate(120deg)"

      url_shortener_clicks.forEach((loc) => {
        leaflet.marker([loc.latitude, loc.longitude]).addTo(map).openPopup();
      });
    }
  });

  onDestroy(async () => {
    if (map) {
      console.log("Unloading Leaflet map.");
      map.remove();
    }
  });
</script>

<section class="pt-32 pb-16 container">
  <div>
    <div class="flex items-center">
      <h1 class="text-2xl font-bold">/{key}</h1>
      <CopyBtn {key} />
    </div>
    <div class="mt-2">
      {dateFormat(created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
    </div>
  </div>

  <!-- <pre>
    {JSON.stringify(clickDetails, null, 2)}
  </pre> -->

  <div bind:this={mapElement} class="card w-full h-[400px] mt-10" />

  <div class="stats flex mt-10 flex-wrap md:flex-nowrap">
    <div class="card border-none bg-neutral/20">
      <div class="text-4xl font-bold">{total_clicks}</div>
      <div class="text-">Total Clicks</div>
    </div>
    <div
      class="card border-none bg-neutral/20 mt-5 md:mt-0 md:ml-5 w-full relative"
    >
      <textarea
        value={long_url}
        rows="3"
        class="w-full h-auto bg-transparent focus:outline-none appearance-none resize-none"
      />
    </div>
  </div>

  <div class="clicks mt-10">
    {#each url_shortener_clicks as click}
      <div class="card border-none w-full mb-5 bg-neutral/20">
        <div class="flex justify-between">
          <div class="div">
            <div class="text-">{click.ip}</div>
            <div class="">
              {dateFormat(click.created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
            </div>
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

<style>
  @import "leaflet/dist/leaflet.css";
</style>
