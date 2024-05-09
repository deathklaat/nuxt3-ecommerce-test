<script lang="ts" setup>
import type { ProductData, SearchParams } from '~/types/product.type';
import { SortOptions } from '~/data/enums';
import BreadCrumbs from '~/components/common/BreadCrumbs.vue';

const fakeApi = useFakeApi();
const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() => [
  {
    text: 'Ecommerce',
    href: '/',
  },
  {
    text: 'Search',
  },
]);

const results = ref<ProductData[]>([]);

async function applyFilters(filters: SearchParams, options?: { ignoreCheck: boolean }) {
  if (!options?.ignoreCheck && JSON.stringify(filters) === JSON.stringify(appliedFilters.value)) {
    return;
  }

  await router.replace({ query: filters });
  results.value = await fakeApi.search(filters);
}

const appliedFilters = computed(() => {
  const query = route.query;
  const filters: SearchParams = {
    query: query.query?.toString() || '',
    priceRange: [0, 0],
  };

  if (Array.isArray(query.priceRange)) {
    filters.priceRange = [Number(query.priceRange[0]), Number(query.priceRange[1])];
  }

  if (query.categories) {
    filters.categories = Array.isArray(query.categories)
      ? query.categories.map(Number)
      : [Number(query.categories)];
  }

  if (query.colors) {
    filters.colors = Array.isArray(query.colors)
      ? query.colors.map(Number)
      : [Number(query.colors)];
  }

  if (query.sizes) {
    filters.sizes = Array.isArray(query.sizes) ? query.sizes.map(Number) : [Number(query.sizes)];
  }

  if (query.sortOrder) {
    filters.sortOrder = Number(query.sortOrder);
  }

  return filters;
});

applyFilters(appliedFilters.value, { ignoreCheck: true });

async function applySort(newOrder: SortOptions) {
  if (appliedFilters.value.sortOrder === newOrder) return;

  const query = {
    ...route.query,
    sortOrder: newOrder.toString(),
  };

  await router.replace({ query });
  await nextTick();
  await applyFilters(appliedFilters.value, { ignoreCheck: true });
}

function resetFilters() {}
</script>

<template>
  <section>
    <div class="w-full bg-white-100">
      <BreadCrumbs :items="breadcrumbs" />
    </div>

    <div class="container xl:max-w-[1116px] mt-8 mx-auto px-0 py-4 flex gap-5">
      <SearchFilters @change="applyFilters" />
      <SearchResults
        :filters="appliedFilters"
        :results="results"
        @sort-change="applySort"
        @reset-filters="resetFilters"
      />
    </div>
  </section>
</template>
