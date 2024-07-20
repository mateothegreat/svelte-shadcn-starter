<script lang="ts">
  import { Button } from "$ui/button";
  import Icon from "@iconify/svelte";
  import { ControlContainer, Form, FormControl, Input, maxLength, minLength, Select, Textarea } from "@svelte.codes/forms";
  import { Carta, MarkdownEditor } from "carta-md";
  import "carta-md/default.css";
  import SveltyPicker from "svelty-picker";
  const carta = new Carta({
    theme: "github-dark"
  });
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

  const selected = (form.getControl("status") as FormControl<string> | undefined)?.data?.[0] ?? null;
  let date = new Date();

  let time;
  let value = "";
</script>

<div class="px-1">
  <div class="w-full rounded-t-xl bg-black p-4 shadow-lg shadow-slate-600">
    <div class="flex justify-between gap-2">
      <div class="flex items-start">
        <Icon icon="icon-park-outline:topic-discussion" class="size-12 text-slate-500" />
        <div class="flex flex-col">
          <div class="text-green-600">Manage Topic</div>
          <div class="text-slate-600">Manage the topic details and settings.</div>
        </div>
      </div>
      <Icon icon="mdi:close" class="size-6 cursor-pointer text-slate-800 hover:text-slate-500" />
    </div>

    <div class="flex flex-col gap-2 px-4">
      <div class="">
        <SveltyPicker bind:value={time} format="hh:ii" displayFormat="HH:ii P" />
      </div>
      <ControlContainer label="Title" description="Title is required.">
        <Input control={form.getControl("title")} />
      </ControlContainer>

      <div class="h-96">
        <MarkdownEditor {carta} bind:value />
      </div>
      <ControlContainer label="Status" description="Published will immediately post the topic.">
        <Textarea control={form.getControl("description")} class="h-32" />
      </ControlContainer>
      <ControlContainer label="Status" description="Published will immediately post the topic.">
        <Select control={form.getControl("status")} {selected} class="w-40" />
      </ControlContainer>
    </div>

    <div class="flex justify-end gap-2">
      <Button variant="outline">Delete</Button>
      <Button variant="default" class="bg-green-500 hover:bg-purple-700">Save</Button>
    </div>
  </div>
</div>

<style lang="scss">
  :global(.carta-font-code) {
    font-family: "...", monospace;
    font-size: 1.1rem;
  }
  /* Editor dark mode */
  /* Only if you are using the default theme */
  html.dark .carta-theme__default {
    --border-color: var(--border-color-dark);
    --selection-color: var(--selection-color-dark);
    --focus-outline: var(--focus-outline-dark);
    --hover-color: var(--hover-color-dark);
    --caret-color: var(--caret-color-dark);
    --text-color: var(--text-color-dark);
  }

  /* Code dark mode */
  /* Only if you didn't specify a custom code theme */
  html.dark .shiki,
  html.dark .shiki span {
    color: var(--shiki-dark) !important;
  }

  // :global(.dark) {
  //   --sdt-bg-main: #15131a;
  //   --sdt-shadow-color: #777;
  //   --sdt-color: #7d7d7d;
  //   --sdt-clock-color: var(--sdt-color);
  //   --sdt-clock-color-hover: var(--sdt-color);
  //   --sdt-clock-time-bg: transparent;
  //   --sdt-clock-time-bg-hover: transparent;
  //   --sdt-clock-disabled: #b22222;
  //   --sdt-clock-disabled-bg: var(--sdt-bg-main);
  //   --sdt-clock-selected-bg: var(--sdt-bg-selected);
  //   --sdt-header-color: #454545;
  //   --sdt-bg-selected: #e1ac4a;
  //   --sdt-table-disabled-date: #b22222;
  //   --sdt-table-disabled-date-bg: var(--sdt-bg-main);
  //   --sdt-table-data-bg-hover: #777;
  //   --sdt-table-selected-bg: var(--sdt-bg-selected);
  //   --sdt-header-btn-bg-hover: #777;
  //   --sdt-color-selected: #fff;
  //   --sdt-table-today-indicator: #ccc;
  //   --sdt-clock-bg: #999;
  //   /* custom buttons */
  //   --sdt-today-bg: #e4a124;
  //   --sdt-today-color: #fff;
  //   --sdt-clear-color: #666;
  //   --sdt-clear-bg: #ddd;
  //   --sdt-clear-hover-color: #fff;
  //   --sdt-clear-hover-bg: #dc3545;
  // }

  // :global(.light) {
  //   --sdt-bg-main: #fff;
  //   --sdt-shadow-color: #ccc;
  //   --sdt-color: inherit;
  //   --sdt-clock-color: var(--sdt-color);
  //   --sdt-clock-color-hover: var(--sdt-color);
  //   --sdt-clock-time-bg: transparent;
  //   --sdt-clock-time-bg-hover: transparent;
  //   --sdt-clock-disabled: #b22222;
  //   --sdt-clock-disabled-bg: var(--sdt-bg-main);
  //   --sdt-clock-selected-bg: var(--sdt-bg-selected);
  //   --sdt-bg-selected: #286090;
  //   --sdt-table-disabled-date: #b22222;
  //   --sdt-table-disabled-date-bg: var(--sdt-bg-main);
  //   --sdt-table-data-bg-hover: #eee;
  //   --sdt-table-selected-bg: var(--sdt-bg-selected);
  //   --sdt-header-btn-bg-hover: #dfdfdf;
  //   --sdt-color-selected: #fff;
  //   --sdt-table-today-indicator: #ccc;
  //   --sdt-clock-bg: #eeeded;
  //   /* custom buttons */
  //   --sdt-today-bg: #1e486d;
  //   --sdt-today-color: #fff;
  //   --sdt-clear-color: #dc3545;
  //   --sdt-clear-bg: #fff;
  //   --sdt-clear-hover-color: #fff;
  //   --sdt-clear-hover-bg: #dc3545;
  // }
</style>
