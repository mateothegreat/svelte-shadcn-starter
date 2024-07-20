<script lang="ts">
  import { Button } from "$ui/button";
  import * as Tooltip from "$ui/tooltip";
  import Icon from "@iconify/svelte";
  import { link } from "svelte-spa-router";
  import type { VerticalNavItem } from "./vertical-nav-item";

  const items: VerticalNavItem[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: "material-symbols:dashboard-customize-rounded",
      classes: "text-slate-600"
    },
    {
      label: "Topics",
      href: "/topics",
      icon: "ic:baseline-business-center"
    },
    {
      label: "Topics",
      href: "/topics",
      icon: "icon-park-outline:topic-discussion"
    }
  ];
</script>

<div class="mx-2.5 mt-4">
  <svg class="fill-slate-700" viewBox="15.7389 64.11 28 21.791" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 34.395 77.939 C 34.313 77.522 34.004 77.227 33.648 77.227 L 32.63 77.227 C 32.52 76.859 32.398 76.499 32.26 76.149 L 32.977 75.284 C 33.228 74.979 33.274 74.511 33.088 74.147 C 32.214 72.438 31.003 70.981 29.592 69.926 C 29.284 69.703 28.896 69.755 28.645 70.06 L 27.923 70.926 C 27.638 70.76 27.337 70.612 27.031 70.48 L 27.031 69.252 C 27.031 68.824 26.785 68.452 26.441 68.353 C 25.867 68.189 25.297 68.103 24.732 68.05 L 24.732 76.399 C 26.478 76.827 27.796 78.694 27.796 80.923 C 27.796 83.151 26.478 85.018 24.732 85.446 L 24.732 93.797 C 25.297 93.743 25.867 93.656 26.441 93.492 C 26.785 93.396 27.031 93.023 27.031 92.594 L 27.031 91.366 C 27.337 91.234 27.638 91.086 27.923 90.918 L 28.645 91.787 C 28.896 92.09 29.284 92.143 29.592 91.918 C 31.003 90.865 32.214 89.408 33.088 87.701 C 33.274 87.337 33.228 86.864 32.977 86.563 L 32.26 85.697 C 32.398 85.347 32.52 84.985 32.63 84.617 L 33.648 84.617 C 34.004 84.617 34.313 84.324 34.395 83.909 C 34.592 82.896 34.689 81.893 34.689 80.923 C 34.689 79.953 34.592 78.947 34.395 77.939 Z"
      fill="#333999"
      transform="matrix(0, 1, -1, 0, 110.633997, 51.211992)" />
    <path
      d="M 34.721 66.796 C 34.633 66.424 34.302 66.162 33.919 66.162 L 32.826 66.162 C 32.709 65.834 32.578 65.513 32.429 65.202 L 33.199 64.431 C 33.469 64.16 33.518 63.743 33.318 63.419 C 32.38 61.897 31.081 60.599 29.565 59.66 C 29.236 59.461 28.819 59.508 28.55 59.779 L 27.775 60.55 C 27.468 60.402 27.146 60.271 26.817 60.153 L 26.817 59.06 C 26.817 58.679 26.553 58.347 26.184 58.259 C 25.568 58.113 24.956 58.036 24.35 57.989 L 24.35 65.425 C 26.223 65.806 27.638 67.468 27.638 69.453 C 27.638 71.437 26.223 73.1 24.35 73.481 L 24.35 80.918 C 24.956 80.87 25.568 80.792 26.184 80.646 C 26.553 80.561 26.817 80.229 26.817 79.846 L 26.817 78.753 C 27.146 78.636 27.468 78.504 27.775 78.354 L 28.55 79.128 C 28.819 79.398 29.236 79.445 29.565 79.245 C 31.081 78.307 32.38 77.009 33.318 75.489 C 33.518 75.165 33.469 74.744 33.199 74.475 L 32.429 73.704 C 32.578 73.393 32.709 73.071 32.826 72.743 L 33.919 72.743 C 34.302 72.743 34.633 72.482 34.721 72.112 C 34.932 71.21 35.037 70.317 35.037 69.453 C 35.037 68.589 34.932 67.693 34.721 66.796 Z"
      fill="#333999"
      transform="matrix(0, -1, 1, 0, -39.759005, 99.147001)" />
    <path
      d="M 29 17.092 L 29 14.474 L 29 10.111 L 29 8.5 C 29 8.224 28.776 8 28.5 8 C 28.224 8 28 8.224 28 8.5 L 28 13.333 L 28 17.092 C 27.795 17.165 27.609 17.278 27.456 17.426 C 25.932 12.549 21.373 9 16 9 C 10.627 9 6.068 12.549 4.544 17.426 C 4.391 17.278 4.205 17.165 4 17.092 L 4 8.5 C 4 8.224 3.776 8 3.5 8 C 3.224 8 3 8.224 3 8.5 L 3 17.092 C 2.419 17.299 2 17.849 2 18.5 L 2 22.5 C 2 23.327 2.673 24 3.5 24 C 3.971 24 4.386 23.778 4.662 23.437 C 5.52 24.958 7.132 26 9 26 L 23 26 C 24.868 26 26.48 24.958 27.338 23.437 C 27.614 23.778 28.029 24 28.5 24 C 29.327 24 30 23.327 30 22.5 L 30 18.5 C 30 17.849 29.581 17.299 29 17.092 Z"
      transform="matrix(1, 0, 0, 1, 13.738851547241211, 56.687435150146484)" />
    <path
      d="M 13.378 16.76 L 11.74 16.76 C 11.388 16.76 11.103 17.179 11.103 17.695 C 11.103 18.209 11.388 18.628 11.74 18.628 L 13.378 18.628 C 13.73 18.628 14.015 18.209 14.015 17.695 C 14.015 17.179 13.73 16.76 13.378 16.76 Z"
      style=""
      fill="#f1f2f2"
      transform="matrix(1, 0, 0, 1, 13.738851547241211, 56.687435150146484)" />
    <path
      d="M 20.831 16.725 L 19.193 16.725 C 18.841 16.725 18.556 17.139 18.556 17.648 C 18.556 18.157 18.841 18.571 19.193 18.571 L 20.831 18.571 C 21.183 18.571 21.468 18.157 21.468 17.648 C 21.468 17.139 21.183 16.725 20.831 16.725 Z"
      style=""
      fill="#f1f2f2"
      transform="matrix(1, 0, 0, 1, 13.738851547241211, 56.687435150146484)" />
  </svg>
</div>
<nav class="grid gap-1 p-2">
  {#each items as item}
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <a use:link={item.href}>
          <Button variant="ghost" size="icon" class="rounded-lg text-slate-400 {item.classes}" aria-label={item.label} builders={[builder]}>
            <Icon icon={item.icon} class="size-7" />
          </Button>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content side="right" sideOffset={5}>{item.label}</Tooltip.Content>
    </Tooltip.Root>
  {/each}
</nav>
<nav class="mt-auto grid gap-1 p-2">
  <Tooltip.Root>
    <Tooltip.Trigger asChild let:builder>
      <Button variant="ghost" size="icon" class="mt-auto rounded-lg text-yellow-600" aria-label="Help" builders={[builder]}>
        <Icon icon="mdi:professional-hexagon" class="size-7" />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content side="right" sideOffset={5}>Help</Tooltip.Content>
  </Tooltip.Root>
  <Tooltip.Root>
    <Tooltip.Trigger asChild let:builder>
      <Button variant="ghost" size="icon" class="mt-auto rounded-lg text-pink-500" aria-label="Help" builders={[builder]}>
        <Icon icon="solar:help-bold-duotone" class="size-7" />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content side="right" sideOffset={5}>Help</Tooltip.Content>
  </Tooltip.Root>
  <Tooltip.Root>
    <Tooltip.Trigger asChild let:builder>
      <Button variant="ghost" size="icon" class="mt-auto rounded-lg text-slate-600" aria-label="Account" builders={[builder]}>
        <Icon icon="tabler:settings-2" class="size-7" />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content side="right" sideOffset={5}>Account</Tooltip.Content>
  </Tooltip.Root>
</nav>
