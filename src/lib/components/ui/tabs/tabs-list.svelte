<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { Tabs as TabsPrimitive } from "bits-ui";

  type $$Props = TabsPrimitive.ListProps;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<TabsPrimitive.List class={cn("inline-flex h-9 items-center justify-center rounded-lg bg-zinc-800/50 p-1 text-slate-500", className)} {...$$restProps}>
  <slot />
</TabsPrimitive.List>
