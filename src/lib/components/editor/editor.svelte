<script lang="ts">
  import { fullscreen } from "@milkdown-lab/plugin-fullscreen";
  import { splitEditing, splitEditingOptionsCtx } from "@milkdown-lab/plugin-split-editing";
  import { commandsCtx, defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
  import { history } from "@milkdown/plugin-history";
  import { commonmark, splitListItemCommand, toggleEmphasisCommand, toggleStrongCommand, wrapInBlockquoteCommand } from "@milkdown/preset-commonmark";
  import { nord } from "@milkdown/theme-nord";
  import { onMount } from "svelte";
  import Button from "./button.svelte";

  let div: HTMLDivElement;
  const markdown = `
# h1
asdf

## h2
asdf

### h3
asdf

#### h4
asdf

##### h5
asdf

###### h6
asdf


> xx

123
- [x] Hello
- [ ] World
- [x] Testing
- Remirror
\`\`\`ts
const new = 1
\`\`\`
`;
  onMount(() => {});

  const editor = Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, div);
      ctx.set(defaultValueCtx, markdown);
      ctx.set(splitEditingOptionsCtx.key, {
        lineNumber: false
      });
    })
    .config(nord)
    .use(fullscreen)
    .use(commonmark)
    .use(history)
    .use(splitEditing);

  onMount(() => {
    editor.create();
  });

  const toggleEmphasis = (e: MouseEvent) => {
    e.preventDefault();
    editor.action((ctx) => ctx.get(commandsCtx).call(toggleEmphasisCommand.key));
  };

  const toggleStrong = (e: MouseEvent) => {
    e.preventDefault();
    editor.action((ctx) => ctx.get(commandsCtx).call(toggleStrongCommand.key));
  };

  const toggleListItem = (e: MouseEvent) => {
    e.preventDefault();
    editor.action((ctx) => ctx.get(commandsCtx).call(splitListItemCommand.key));
  };

  const toggleBlockquote = (e: MouseEvent) => {
    e.preventDefault();
    editor.action((ctx) => ctx.get(commandsCtx).call(wrapInBlockquoteCommand.key));
  };
</script>

<div class="flex gap-1.5">
  <Button onClick={toggleEmphasis} svg={`<svg class="h-4 w-4" id="fi_3019775" enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m45.171 1.62h-17.342c-2.761 0-5 2.239-5 5s2.239 5 5 5h3.217l-8.451 40.675c-.006.029-.003.056-.008.085h-3.758c-2.761 0-5 2.238-5 5s2.239 5 5 5h17.342c2.762 0 5-2.238 5-5s-2.238-5-5-5h-3.399l8.467-40.76h3.932c2.762 0 5-2.239 5-5s-2.238-5-5-5z"></path></svg>`} />
  <Button onClick={toggleStrong} svg={`<svg id="fi_3019759" enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m45.108 28.993c2.142-3.175 3.307-7.061 3.055-11.224-.583-9.63-8.873-16.993-18.521-16.993h-12.174c-4.677 0-8.468 3.791-8.468 8.468v17.756 10 17.755c0 4.677 3.792 8.469 8.469 8.469h18.972c9.528 0 17.766-7.177 18.503-16.676.592-7.626-3.578-14.35-9.836-17.555zm-26.108-1.993v-16.224h10.798c4.316 0 8.091 3.249 8.38 7.556.316 4.723-3.437 8.668-8.094 8.668zm17.888 26.224h-17.888v-16.224h11.084.01 6.507c4.316 0 8.091 3.249 8.38 7.556.317 4.722-3.435 8.668-8.093 8.668z"></path></svg>`} />
  <Button onClick={toggleBlockquote} svg={`<svg id="fi_3019759" enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m45.108 28.993c2.142-3.175 3.307-7.061 3.055-11.224-.583-9.63-8.873-16.993-18.521-16.993h-12.174c-4.677 0-8.468 3.791-8.468 8.468v17.756 10 17.755c0 4.677 3.792 8.469 8.469 8.469h18.972c9.528 0 17.766-7.177 18.503-16.676.592-7.626-3.578-14.35-9.836-17.555zm-26.108-1.993v-16.224h10.798c4.316 0 8.091 3.249 8.38 7.556.316 4.723-3.437 8.668-8.094 8.668zm17.888 26.224h-17.888v-16.224h11.084.01 6.507c4.316 0 8.091 3.249 8.38 7.556.317 4.722-3.435 8.668-8.093 8.668z"></path></svg>`} />
  <Button
    onClick={toggleListItem}
    svg={`<svg id="fi_2099192" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m464.883 64.267h-289.233c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h289.232c25.98 0 47.117-21.137 47.117-47.117.001-26.013-21.136-47.149-47.116-47.149z"></path><path d="m47.134 64.267c-25.989 0-47.134 21.144-47.134 47.133s21.145 47.133 47.134 47.133 47.133-21.144 47.133-47.133-21.144-47.133-47.133-47.133z"></path><path d="m47.134 208.867c-25.989 0-47.134 21.144-47.134 47.133s21.145 47.133 47.134 47.133 47.133-21.144 47.133-47.133-21.144-47.133-47.133-47.133z"></path><path d="m47.134 353.467c-25.989 0-47.134 21.144-47.134 47.133s21.145 47.133 47.134 47.133 47.133-21.144 47.133-47.133-21.144-47.133-47.133-47.133z"></path><path d="m464.883 208.867h-289.233c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h289.232c25.98 0 47.117-21.137 47.117-47.117.001-26.013-21.136-47.149-47.116-47.149z"></path><path d="m464.883 353.467h-289.233c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h289.232c25.98 0 47.117-21.137 47.117-47.117.001-26.012-21.136-47.149-47.116-47.149z"></path></svg>`} />
</div>
<div class="wrapper h-96 w-full overflow-auto" bind:this={div} />

<style>
  :global(.milkdown *) {
    @apply text-slate-700 dark:text-slate-400;
  }

  :global(.milkdown h1) {
    @apply text-3xl font-semibold text-slate-900 dark:text-slate-200;
  }

  :global(.milkdown h2) {
    @apply mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-200;
  }

  :global(.milkdown h3) {
    @apply mt-2 text-xl font-semibold text-slate-900 dark:text-slate-200;
  }

  :global(.milkdown h4) {
    @apply mt-2 text-lg font-semibold text-slate-900 dark:text-slate-200;
  }

  :global(.milkdown h5) {
    @apply mt-2 text-base font-semibold text-slate-900 dark:text-slate-200;
  }

  :global(.milkdown h6) {
    @apply mt-2 text-base font-semibold text-slate-900 dark:text-slate-200;
  }

  :global(.milkdown p) {
    @apply my-0.5 text-slate-700 dark:text-slate-400;
  }

  :global(.milkdown blockquote) {
    @apply my-2 border-l-4 border-gray-300 pl-2 dark:border-gray-600;
  }

  :global(.split-editor) {
    @apply flex;
  }

  :global(.split-editor .prose) {
    @apply w-1/2 border-r-2 border-slate-200 dark:border-slate-800;
  }

  :global(.split-editor .milkdown-split-editor) {
    @apply w-1/2;
  }

  :global(.cm-gutters) {
    @apply !bg-zinc-100 dark:!bg-slate-800/25;
  }
  :global(.cm-activeLineGutter) {
    @apply !bg-zinc-200 dark:!bg-slate-600/50;
  }
  :global(.cm-activeLine) {
    @apply !bg-zinc-100 dark:!bg-zinc-900;
  }

  :global(.cm-cursor) {
    @apply !ml-0.5 w-2 !border !border-b-[3px] !border-l-0 !border-b-green-500 dark:!border-b-purple-600;
  }
</style>
