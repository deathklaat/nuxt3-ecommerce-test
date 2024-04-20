<script setup lang="ts">
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

  if (priceRange?.length && priceRange[1]) {
    result.push({
      type: 'price',
      min: priceRange[0],
      max: priceRange[1],
    });
  }

  return result;
});
</script>

<template>
  <div class="flex flex-col">
    <div v-if="appliedFilters" class="flex flex-col gap-3">
      <div class="text-body-lg font-medium text-black-900">Applied filters:</div>
      <div>
        {{ appliedFilters }}
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
