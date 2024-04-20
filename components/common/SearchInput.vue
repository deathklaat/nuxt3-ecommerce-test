<script setup lang="ts">
import { SearchIcon } from 'lucide-vue-next';
import { Input } from '~/components/ui/input';
</script>

<template>
  <div class="relative w-full max-w-sm items-center">
    <Input id="search" type="text" placeholder="Search products" class="pl-8" />
    <span
      class="absolute start-0 inset-y-0 flex items-center justify-center px-3"
    >
      <SearchIcon class="size-4 text-muted-foreground" />
    </span>
  </div>
</template>
