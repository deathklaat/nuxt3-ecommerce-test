<script setup lang="ts">
import { SearchIcon } from 'lucide-vue-next';
import { Input } from '~/components/ui/input';

const searchString = defineModel<string>();
const router = useRouter();

function applySearch() {
  const input = (searchString.value || '').trim();
  const query = encodeURIComponent(input);
  router.push({ name: 'search', query: { query } });
}
</script>

<template>
  <div class="relative w-full max-w-sm items-center">
    <Input
      id="search"
      v-model="searchString"
      type="text"
      placeholder="Search products"
      class="pl-8"
      @keyup.enter="applySearch"
    />
    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-3 cursor-pointer">
      <SearchIcon class="size-4 text-muted-foreground" @click="applySearch" />
    </span>
  </div>
</template>
