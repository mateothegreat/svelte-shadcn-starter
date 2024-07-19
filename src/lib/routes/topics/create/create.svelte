<script lang="ts">
  import { Button } from "$ui/button";
  import * as Dialog from "$ui/dialog";
  import { ControlContainer, Form, Input, maxLength, minLength, Select, Switch, Textarea } from "@svelte.codes/forms";

  const form = new Form({
    controls: [
      {
        name: "title",
        placeholder: "Enter the topic title..",
        validators: [minLength(1)]
      },
      {
        name: "description",
        placeholder: "Enter the topic description..",
        validators: [minLength(3), maxLength(5)]
      },
      {
        name: "status",
        placeholder: "Select status..",
        data: [
          {
            label: "Draft",
            value: "draft"
          },
          {
            label: "Published",
            value: "published"
          }
        ]
      },
      {
        name: "publish",
        placeholder: "Publish now?"
      }
    ]
  });

  $: valid = form.valid;
</script>

<Dialog.Root id="create-topic">
  <Dialog.Content class="w-[90vw]">
    <Dialog.Header class="mb-2 gap-1">
      <Dialog.Title>Create Topic</Dialog.Title>
      <Dialog.Description>Organize your cameras by creating a location to group them by.</Dialog.Description>
    </Dialog.Header>
    <div class="flex flex-col gap-2">
      <ControlContainer label="Title" description="Title is required.">
        <Input control={form.getControl("title")} />
      </ControlContainer>
      <ControlContainer label="Status" description="Published will immediately post the topic.">
        <Textarea control={form.getControl("description")} class="h-32" />
      </ControlContainer>
      <ControlContainer label="Status" description="Published will immediately post the topic.">
        <Select control={form.getControl("status")} selected={form.getControl("status").data[0].value} class="w-40" />
      </ControlContainer>
    </div>

    <Dialog.Footer class="flex justify-between">
      <div class="flex flex-1 items-center">
        <Switch control={form.getControl("publish")} />
      </div>
      <Button variant="outline" disabled={!valid}>Create</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
