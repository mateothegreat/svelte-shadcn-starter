<script lang="ts">
  import Dashboard from "$lib/routes/topics/dashboard/dashboard.svelte";
  import Header from "./header.svelte";
  import VerticalNav from "./vertical-nav/vertical-nav.svelte";
</script>

<aside class="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
  <div class="border-b"></div>
  <VerticalNav />
</aside>
<div class="flex flex-col gap-4">
  <Header />
  <Dashboard />
</div>
