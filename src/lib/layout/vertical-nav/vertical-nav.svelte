<script lang="ts">
  import { Button } from "$ui/button";
  import * as Tooltip from "$ui/tooltip";
  import Icon from "@iconify/svelte";
  import LifeBuoy from "lucide-svelte/icons/life-buoy";
  import SquareUser from "lucide-svelte/icons/square-user";
  import type { VerticalNavItem } from "./vertical-nav-item";

  const items: VerticalNavItem[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: "material-symbols:dashboard-customize-rounded"
    },
    {
      label: "Topics",
      href: "/topics",
      icon: "icon-park-outline:topic-discussion"
    }
  ];
</script>

<nav class="grid gap-1 p-2">
  {#each items as item}
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <Button variant="ghost" size="icon" class="rounded-lg" aria-label={item.label} builders={[builder]}>
          <Icon icon={item.icon} class="size-7" />
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content side="right" sideOffset={5}>{item.label}</Tooltip.Content>
    </Tooltip.Root>
  {/each}
</nav>
<nav class="mt-auto grid gap-1 p-2">
  <Tooltip.Root>
    <Tooltip.Trigger asChild let:builder>
      <Button variant="ghost" size="icon" class="mt-auto rounded-lg" aria-label="Help" builders={[builder]}>
        <LifeBuoy class="size-5" />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content side="right" sideOffset={5}>Help</Tooltip.Content>
  </Tooltip.Root>
  <Tooltip.Root>
    <Tooltip.Trigger asChild let:builder>
      <Button variant="ghost" size="icon" class="mt-auto rounded-lg" aria-label="Account" builders={[builder]}>
        <SquareUser class="size-5" />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content side="right" sideOffset={5}>Account</Tooltip.Content>
  </Tooltip.Root>
</nav>
