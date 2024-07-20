<script lang="ts">
  import { drawerManager } from "$lib/common/drawers";
  import { confirmOpen } from "$lib/components/confirm/confirm";
  import { Badge } from "$ui/badge";
  import { Button } from "$ui/button";
  import * as DropdownMenu from "$ui/dropdown-menu";
  import * as Table from "$ui/table";
  import Ellipsis from "lucide-svelte/icons/ellipsis";
  import { toast } from "svelte-sonner";
  import type { Writable } from "svelte/store";
  import Manage from "../manage/manage.svelte";
  import type { Topic } from "../topic";

  export let topics: Writable<Topic[]>;
</script>

<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.Head>ID</Table.Head>
      <Table.Head>Status</Table.Head>
      <Table.Head>Name</Table.Head>
      <Table.Head class="hidden md:table-cell">Created</Table.Head>
      <Table.Head>
        <span class="sr-only">Actions</span>
      </Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each $topics as topic}
      <Table.Row>
        <Table.Cell>{topic.id}</Table.Cell>
        <Table.Cell>
          <Badge variant="outline">{topic.status}</Badge>
        </Table.Cell>
        <Table.Cell class="w-full">{topic.name}</Table.Cell>
        <Table.Cell class="hidden md:table-cell">{topic.created.toLocaleDateString()}</Table.Cell>
        <Table.Cell>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild let:builder>
              <Button aria-haspopup="true" size="icon" variant="ghost" builders={[builder]}>
                <Ellipsis class="h-4 w-4" />
                <span class="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item
                class="text-xs"
                on:click={() => {
                  drawerManager.open({
                    id: "manage-topic",
                    component: Manage,
                    placement: "bottom",
                    data: topic
                  });
                }}>Edit</DropdownMenu.Item>
              <DropdownMenu.Item
                class="text-xs"
                on:click={() => {
                  drawerManager.open({
                    id: "manage-topic",
                    component: Manage,
                    placement: "bottom",
                    data: topic
                  });
                }}>Duplicate</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item
                class="text-xs text-pink-600"
                on:click={() => {
                  confirmOpen("Delete Topic", "Are you sure you want to delete this topic?").subscribe((result) => {
                    if (result) {
                      topics.update((topics) => topics.filter((t) => t.id !== topic.id));
                      toast.success(`${topic.name} deleted!`);
                    }
                  });
                }}>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>
