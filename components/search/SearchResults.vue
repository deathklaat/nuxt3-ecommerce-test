<script lang="ts" setup>
import { Categories } from '~/data/enums';
import { XIcon } from 'lucide-vue-next';
import type { AppliedSearchFilters, FilterType, SearchFilters } from "~/types/product.type";

const store = useProductStore();
const products = computed(() => store.searchResult);
const appliedFilters = computed(() => {
  const { categories, colors, sizes, priceRange } = store.searchFilters;
  const result = [];

  if (categories?.length) {
    result.push({
      type: 'categories',
      list: categories,
    });
  }

  if (colors?.length) {
    result.push({
      type: 'colors',
      list: colors,
    });
  }

  if (sizes?.length) {
    result.push({
      type: 'sizes',
      list: sizes,
    });
  }

  if (priceRange?.length && (priceRange[0] !== 0 || priceRange[1] !== store.highestPrice)) {
    result.push({
      type: 'price',
      min: priceRange[0],
      max: priceRange[1],
    });
  }

  return result;
});

function resetFilters() {
  const filters = {} as SearchFilters;
  store.setFilters(filters);
}

function removeFilter(type: FilterType, value: any) {
  store.removeFilter(type, value);
}
</script>

<template>
  <div class="flex flex-col">
    <div v-if="appliedFilters.length" class="flex flex-col gap-3">
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
    </div>
    <div class="flex justify-between mt-6 w-full flex-grow">
      <div>{{ products.length }} products found</div>
      <div>SORT BY v</div>
    </div>
    <div class="flex flex-wrap mt-4">
      <ProductCard v-for="card in products" :key="card.id" v-bind="card" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.filter-item {
  @apply flex items-center justify-center gap-2 px-4 py-1 border border-black-100 rounded-2xl text-label-lg
  text-black-900 font-medium cursor-pointer;
}
</style>
