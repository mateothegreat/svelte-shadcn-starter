<script lang="ts">
  import Router from "svelte-spa-router";
  import { routes } from "../../routes/routes";
  import Header from "./header.svelte";
  import VerticalNav from "./vertical-nav/vertical-nav.svelte";
</script>

<aside class="inset-y border-r-1 fixed left-0 mt-[53px] flex h-full flex-col bg-zinc-950 px-0.5">
  <VerticalNav />
</aside>
<div class="flex flex-col gap-4">
  <Header />
  <Router {routes} />
</div>
