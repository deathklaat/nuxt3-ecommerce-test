<script lang="ts" setup>
import { Categories, SortOptions } from '~/data/enums';
import { XIcon } from 'lucide-vue-next';
import type { FilterType, ProductData, SearchParams } from '~/types/product.type';
import SortSelect from '~/components/search/SortSelect.vue';

const props = defineProps<{
  results: ProductData[];
  filters: SearchParams;
}>();

const emit = defineEmits<{
  'reset-filters': [];
  'remove-filter': [value: { type: FilterType; value: any }];
  'sort-change': [value: keyof typeof SortOptions];
}>();

const appliedFilters = computed(() => {
  return [];
});

const sortOption = ref<keyof typeof SortOptions>();
watch(sortOption, (newOrder) => {
  emit('sort-change', newOrder || 'Newest');
});

function resetFilters() {
  emit('reset-filters');
}

function removeFilter(type: FilterType, value: any) {
  emit('remove-filter', { type, value });
}
</script>

<template>
  <div class="flex flex-col w-full">
    <!--    <div v-if="appliedFilters.length > 1" class="flex flex-col gap-3">
      <div class="relative text-body-lg font-medium text-black-900">
        Applied filters:
        <div
          class="absolute top-0 right-0 font-normal underline cursor-pointer"
          @click="resetFilters"
        >
          clear
        </div>
      </div>
      <div class="flex flex-wrap gap-3">
        <template v-for="(filter, index) in appliedFilters" :key="`${filter.type}-${index}`">
          <template v-if="filter.type === 'categories'">
            <div
              v-for="(category, catIndex) in filter.list"
              :key="`${category}-${catIndex}`"
              class="filter-item"
              @click="removeFilter('categories', category)"
            >
              <span>{{ Categories[category as number] }}</span>
              <XIcon class="size-5 stroke-black-500" />
            </div>
          </template>
          <template v-if="filter.type === 'colors'">
            <div
              v-for="(color, colorIndex) in filter.list"
              :key="`${color}-${colorIndex}`"
              class="filter-item"
              @click="removeFilter('colors', color)"
            >
              <span>Color: {{ color }}</span>
              <XIcon class="size-5 stroke-black-500" />
            </div>
          </template>
          <template v-if="filter.type === 'sizes'">
            <div
              v-for="(size, sizeIndex) in filter.list"
              :key="`${size}-${sizeIndex}`"
              class="filter-item"
              @click="removeFilter('sizes', size)"
            >
              <span>Size: {{ size }}</span>
              <XIcon class="size-5 stroke-black-500" />
            </div>
          </template>
        </template>
      </div>
    </div>-->
    <div class="flex justify-between mt-6 w-full">
      <div>{{ results.length }} products found</div>
      <SortSelect v-model="sortOption" />
    </div>
    <div v-if="results.length" class="flex flex-wrap mt-4">
      <ProductCard v-for="(card, index) in results" :key="`${card.id}-${index}`" v-bind="card" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.filter-item {
  @apply flex items-center justify-center gap-2 px-4 py-1 border border-black-100 rounded-2xl text-label-lg
  text-black-900 font-medium cursor-pointer;
}
</style>
