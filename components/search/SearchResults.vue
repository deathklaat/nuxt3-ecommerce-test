<script lang="ts" setup>
import { Categories, Colors, Sizes, SortOptions } from '~/data/enums';
import type { FilterType, ProductData, SearchParams } from '~/types/product.type';
import { XIcon } from 'lucide-vue-next';
import SortSelect from '~/components/search/SortSelect.vue';

const props = defineProps<{
  results: ProductData[];
  filters: SearchParams;
}>();

const emit = defineEmits<{
  'reset-filters': [];
  'remove-filter': [value: { type: FilterType; value: any }];
  'sort-change': [value: SortOptions];
}>();

const store = useProductStore();

const appliedFilters = computed<any>(() => {
  const res = Object.entries(props.filters)
    .filter(([filterName]) => !['query', 'sortOrder'].includes(filterName))
    .map(([type, value]) => ({ type, value }));

  if (res.length === 1 && res[0].type === 'priceRange') {
    const value = res[0].value as [number, number];
    if (value[0] === 0 && value[1] === store.highestPrice) return [];
    if (value[0] === 0 && value[1] === 0) return [];
  }

  return res;
});

const sortOption = ref<string>((props.filters.sortOrder || SortOptions.Newest).toString());
watch(sortOption, (newOrder: string) => emit('sort-change', Number(newOrder) as SortOptions));

function resetFilters() {
  emit('reset-filters');
}

function removeFilter(type: FilterType, value: any) {
  emit('remove-filter', { type, value });
}
</script>

<template>
  <div class="flex flex-col w-full">
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
              v-for="(category, catIndex) in filter.value"
              :key="`category-${category}-${catIndex}`"
              class="filter-item"
              @click="removeFilter('categories', category)"
            >
              <span>{{ $t(`Categories.${Categories[Number(category)]}`) }}</span>
              <XIcon class="size-5 stroke-black-500" />
            </div>
          </template>
          <template v-if="filter.type === 'colors'">
            <div
              v-for="(color, colorIndex) in filter.value"
              :key="`colors-${color}-${colorIndex}`"
              class="filter-item"
              @click="removeFilter('colors', color)"
            >
              <span>Color: {{ $t(`Colors.${Colors[Number(color)]}`) }}</span>
              <XIcon class="size-5 stroke-black-500" />
            </div>
          </template>
          <template v-if="filter.type === 'sizes'">
            <div
              v-for="(size, sizeIndex) in filter.value"
              :key="`size-${size}-${sizeIndex}`"
              class="filter-item"
              @click="removeFilter('sizes', size)"
            >
              <span>Size: {{ $t(`Sizes.${Sizes[Number(size)]}`) }}</span>
              <XIcon class="size-5 stroke-black-500" />
            </div>
          </template>
          <div
            v-if="filter.type === 'priceRange'"
            class="filter-item"
            @click="removeFilter('priceRange', 0)"
          >
            <span>Price: ${{ filter.value[0] }} - ${{ filter.value[1] }}</span>
            <XIcon class="size-5 stroke-black-500" />
          </div>
        </template>
      </div>
    </div>
    <div
      class="flex items-center justify-between w-full max-w-[824px]"
      :class="{ 'mt-6': appliedFilters.length }"
    >
      <div>
        <span v-if="filters.query?.length">
          {{ results.length }} products found for "{{ filters.query }}"
        </span>
        <span v-else> {{ results.length }} products found </span>
      </div>
      <SortSelect v-model="sortOption" />
    </div>
    <div v-if="results.length" class="flex flex-wrap justify-between mt-4 gap-x-5 gap-y-3">
      <ProductCard v-for="(card, index) in results" :key="`${card.id}-${index}`" v-bind="card" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.filter-item {
  @apply flex items-center justify-center gap-2 px-4 py-1 border border-black-100 rounded-2xl text-label-lg
  text-black-900 font-medium cursor-pointer hover:border-black-200;
}
</style>
