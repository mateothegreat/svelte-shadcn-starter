<script lang="ts">
  export let svg: string;
  export let onClick: any;
</script>

<button on:mousedown={onClick} class="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-md border border-input bg-background p-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
  <div class="h-4 w-4">
    {@html svg}
  </div>
</button>
