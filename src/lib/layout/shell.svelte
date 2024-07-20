<script lang="ts">
  import Router from "svelte-spa-router";
  import { routes } from "../../routes/routes";
  import Header from "./header.svelte";
  import VerticalNav from "./vertical-nav/vertical-nav.svelte";
</script>

<aside class="inset-y fixed left-0 flex h-full flex-col border-r">
  <div class="border-b"></div>
  <VerticalNav />
</aside>
<div class="flex flex-col gap-4">
  <Header />
  <Router {routes} />
</div>
