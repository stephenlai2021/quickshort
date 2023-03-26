<script lang="ts">
  import { user } from "$lib/stores";
  import Section1 from "$lib/components/page-home/Section1.svelte"
  import Section2 from "$lib/components/page-home/Section2.svelte"
  import Section3 from "$lib/components/page-home/Section3.svelte"
  import Section4 from "$lib/components/page-home/Section4.svelte"
  import Section5 from "$lib/components/page-home/Section5.svelte"
  import Section6 from "$lib/components/page-home/Section6.svelte"

  import type { PageData } from "./$types";
  export let data: PageData;
  $user = data.user;  
  console.log('user | home client:', $user)
</script>

<div class="page-home wrapper mt-[70px] w-full">
  <Section1 />
  <Section2 />
  <Section3 />
  <Section4 />
  <Section5 />
  <Section6 />
</div>

 

  

  

  

  