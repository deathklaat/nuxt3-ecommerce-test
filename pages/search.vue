<script setup lang="ts">
import type { ProductData, SearchParams } from '~/types/product.type';
import { Colors, Sizes, type SortOptions } from '~/data/enums';
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

async function applyFilters(filters: SearchParams) {
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
      ? query.colors.map((c) => c as Colors)
      : [query.colors as Colors];
  }

  if (query.sizes) {
    filters.sizes = Array.isArray(query.sizes)
      ? query.sizes.map((s) => s as Sizes)
      : [query.sizes as Sizes];
  }

  if (query.sortOrder) {
    filters.sortOrder = query.sortOrder as SortOptions;
  }

  return filters;
});

applyFilters(appliedFilters.value);

function applySort(newOrder: SortOptions) {
  // TODO: check it
  const query = { ...route.query };
  query.sortOrder = newOrder;
  router.replace({ query });
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
        :results="results"
        :filters="appliedFilters"
        @sort="applySort"
        @reset-filters="resetFilters"
      />
    </div>
  </section>
</template>
