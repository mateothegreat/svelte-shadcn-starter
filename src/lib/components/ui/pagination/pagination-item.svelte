<script lang="ts">
  import { cn } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLLIElement>;
  let className: $$Props["class"] = undefined;

  export { className as class };
</script>

<div class={cn("", className)} {...$$restProps}>
  <slot />
</div>
