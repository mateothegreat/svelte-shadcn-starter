<script lang="ts">
  import { ModeWatcher, toggleMode } from "mode-watcher";
  import { Moon, Sun } from "radix-icons-svelte";

  import Shell from "$lib/layout/shell.svelte";
  import { Button } from "$ui/button";
</script>

<div class="grid h-screen w-full pl-[53px]">
  <Shell />
</div>

<Button variant="outline">Click me</Button>
<ModeWatcher />

<Button on:click={toggleMode} variant="outline" size="icon">
  <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  <span class="sr-only">Toggle theme</span>
</Button>
