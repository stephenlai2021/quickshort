<script lang="ts">
  import { page } from "$app/stores"
  import Section1 from "$lib/components/page-home/Section1.svelte"
  import Section2 from "$lib/components/page-home/Section2.svelte"
  import Section3 from "$lib/components/page-home/Section3.svelte"
  import Section4 from "$lib/components/page-home/Section4.svelte"
  import Section5 from "$lib/components/page-home/Section5.svelte"
  import Section6 from "$lib/components/page-home/Section6.svelte"
  import Section7 from "$lib/components/page-home/Section7.svelte"

  console.log('page data: ', $page.data.user)
</script>

<div class="page-home wrapper mt-[70px] w-full">
  <Section1 />
  <Section2 />
  <Section3 />
  <Section4 />
  <Section5 />
  <Section6 />
  <Section7 />
</div>

 

  

  

  

  