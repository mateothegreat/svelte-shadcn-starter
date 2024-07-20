<script lang="ts">
  import Bird from "lucide-svelte/icons/bird";
  import Rabbit from "lucide-svelte/icons/rabbit";
  import Settings from "lucide-svelte/icons/settings";
  import Share from "lucide-svelte/icons/share";
  import Turtle from "lucide-svelte/icons/turtle";

  import Logo from "$lib/common/logo.svelte";
  import { Button } from "$ui/button";
  import * as Drawer from "$ui/drawer";
  import { Input } from "$ui/input";
  import { Label } from "$ui/label";
  import * as Select from "$ui/select";
  import { Textarea } from "$ui/textarea";
</script>

<header class="left-0 top-0 flex h-[57px] items-center gap-1 border-b bg-background px-4">
  <h1 class="flex items-center gap-1 font-semibold">
    <!-- <span class="text-slate-600">auto</span>
    <span class="mt-0.5 h-6 border-l-2 border-indigo-600"></span>
    <span class="ml-0.5 text-green-600">bots</span> -->
    <Logo class="w-[90px]" />
  </h1>
  <Drawer.Root>
    <Drawer.Trigger asChild let:builder>
      <Button builders={[builder]} variant="ghost" size="icon" class="md:hidden">
        <Settings class="size-4" />
        <span class="sr-only">Settings</span>
      </Button>
    </Drawer.Trigger>
    <Drawer.Content class="max-h-[80vh]">
      <Drawer.Header>
        <Drawer.Title>Configuration</Drawer.Title>
        <Drawer.Description>Configure the settings for the model and messages.</Drawer.Description>
      </Drawer.Header>
      <form class="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
        <fieldset class="grid gap-6 rounded-lg border p-4">
          <legend class="-ml-1 px-1 text-sm font-medium"> Settings </legend>
          <div class="grid gap-3">
            <Label for="model">Model</Label>
            <Select.Root>
              <Select.Trigger id="model" class="items-start [&_[data-description]]:hidden">
                <Select.Value placeholder="Select a model" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="genesis" label="Neural Genesis">
                  <div class="flex items-start gap-3 text-muted-foreground">
                    <Rabbit class="size-5" />
                    <div class="grid gap-0.5">
                      <p>
                        Neural
                        <span class="font-medium text-foreground"> Genesis </span>
                      </p>
                      <p class="text-xs" data-description>Our fastest model for general use cases.</p>
                    </div>
                  </div>
                </Select.Item>
                <Select.Item value="explorer" label="Neural Explorer">
                  <div class="flex items-start gap-3 text-muted-foreground">
                    <Bird class="size-5" />
                    <div class="grid gap-0.5">
                      <p>
                        Neural
                        <span class="font-medium text-foreground"> Explorer </span>
                      </p>
                      <p class="text-xs" data-description>Performance and speed for efficiency.</p>
                    </div>
                  </div>
                </Select.Item>
                <Select.Item value="quantum" label="Neural Quantum">
                  <div class="flex items-start gap-3 text-muted-foreground">
                    <Turtle class="size-5" />
                    <div class="grid gap-0.5">
                      <p>
                        Neural
                        <span class="font-medium text-foreground"> Quantum </span>
                      </p>
                      <p class="text-xs" data-description>The most powerful model for complex computations.</p>
                    </div>
                  </div>
                </Select.Item>
              </Select.Content>
            </Select.Root>
          </div>
          <div class="grid gap-3">
            <Label for="temperature">Temperature</Label>
            <Input id="temperature" type="number" placeholder="0.4" />
          </div>
          <div class="grid gap-3">
            <Label for="top-p">Top P</Label>
            <Input id="top-p" type="number" placeholder="0.7" />
          </div>
          <div class="grid gap-3">
            <Label for="top-k">Top K</Label>
            <Input id="top-k" type="number" placeholder="0.0" />
          </div>
        </fieldset>
        <fieldset class="grid gap-6 rounded-lg border p-4">
          <legend class="-ml-1 px-1 text-sm font-medium"> Messages </legend>
          <div class="grid gap-3">
            <Label for="role">Role</Label>
            <Select.Root selected={{ value: "system", label: "System" }}>
              <Select.Trigger>
                <Select.Value placeholder="Select a role" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="system">System</Select.Item>
                <Select.Item value="user">User</Select.Item>
                <Select.Item value="assistant">Assistant</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>
          <div class="grid gap-3">
            <Label for="content">Content</Label>
            <Textarea id="content" placeholder="You are a..." />
          </div>
        </fieldset>
      </form>
    </Drawer.Content>
  </Drawer.Root>
  <Button variant="outline" size="sm" class="ml-auto gap-1.5 text-sm">
    <Share class="size-3.5" />
    Share
  </Button>
</header>
