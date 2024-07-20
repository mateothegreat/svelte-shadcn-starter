<script lang="ts">
  import { Button } from "$ui/button";
  import * as Card from "$ui/card";
  import * as DropdownMenu from "$ui/dropdown-menu";
  import * as Tabs from "$ui/tabs";
  import Icon from "@iconify/svelte";
  import CirclePlus from "lucide-svelte/icons/circle-plus";
  import File from "lucide-svelte/icons/file";
  import ListFilter from "lucide-svelte/icons/list-filter";
  import { querystring, replace } from "svelte-spa-router";
  import { writable } from "svelte/store";
  import { openTopicCreate } from "../create/create";
  import type { Topic } from "../topic";
  import Table from "./table.svelte";

  const query = new URLSearchParams($querystring);
  const filter = writable(query.get("status") ?? "all");

  const change = (status: string) => {
    filter.set(status);
    replace(`/topics?status=${status}`);
  };

  const topics = writable<Topic[]>([
    {
      id: "1",
      name: "Topic 1",
      content: `# Topic 1

This is a topic.`,
      status: "active",
      created: new Date()
    },
    {
      id: "2",
      name: "Topic 2",
      status: "draft",
      content: `# Topic 2

This is a topic.`,
      created: new Date()
    },
    {
      id: "3",
      name: "Topic 3",
      status: "archived",
      content: `# Topic 3

This is a topic.`,
      created: new Date()
    }
  ]);
</script>

<div class="flex items-center justify-between px-4 text-lg font-semibold">
  <div class="flex items-center justify-between gap-2">
    <Icon icon="icon-park-outline:topic-discussion" class="size-12 text-slate-600" />
    <div class="flex flex-col">
      <div class="text-lg font-semibold text-indigo-600">Topics</div>
      <div class="-mt-1 text-sm text-slate-600">Manage topics across your guilds.</div>
    </div>
  </div>
  <Button size="sm" class="h-8 gap-1 bg-emerald-500" on:click={openTopicCreate}>
    <CirclePlus class="h-3.5 w-3.5" />
    <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Create Topic</span>
  </Button>
</div>
<main class="grid flex-1 items-start gap-4 p-2 sm:px-4 sm:py-0 md:gap-6">
  <Tabs.Root value={$filter} class="flex flex-col gap-2">
    <div class="flex items-center">
      <div class="flex flex-1 items-center gap-2">
        <Tabs.List>
          <Tabs.Trigger value="all" on:click={() => change("all")}>All</Tabs.Trigger>
          <Tabs.Trigger value="pending" on:click={() => change("pending")}>Pending</Tabs.Trigger>
          <Tabs.Trigger value="active" on:click={() => change("active")}>Active</Tabs.Trigger>
          <Tabs.Trigger value="archived" class="hidden sm:flex" on:click={() => change("archived")}>Archived</Tabs.Trigger>
        </Tabs.List>
      </div>
      <div class="ml-auto flex items-center gap-2">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild let:builder>
            <Button builders={[builder]} variant="outline" size="sm" class="h-8 gap-1">
              <ListFilter class="h-3.5 w-3.5" />
              <span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Filter </span>
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Label>Filter by</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.CheckboxItem checked>Active</DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem>Drafts</DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem>Archived</DropdownMenu.CheckboxItem>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        <Button size="sm" variant="outline" class="h-8 gap-1">
          <File class="h-3.5 w-3.5" />
          <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
        </Button>
      </div>
    </div>
    <Card.Root>
      <Card.Header>
        <Card.Title>{$filter.charAt(0).toUpperCase() + $filter.slice(1)}</Card.Title>
        <Card.Description>Manage topics across your guilds.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Table {topics} />
      </Card.Content>
      <Card.Footer>
        <div class="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </Card.Footer>
    </Card.Root>
  </Tabs.Root>
</main>
