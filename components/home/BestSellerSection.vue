<script setup lang="ts">
import ProductCard from '~/components/product/ProductCard.vue';
import type { ProductData } from '~/types/product.type';

const { items } = defineProps<{
  items: ProductData[];
}>();
</script>

<template>
  <section
    class="container xl:max-w-[1116px] mx-auto px-0 pt-[72px] pb-[160px]"
  >
    <div class="w-full text-center mb-20">
      <div class="uppercase text-label-lg font-medium text-black-300">
        Shop now
      </div>
      <h3 class="text-h3-lg font-bold text-black-900">Best Selling</h3>
    </div>
    <div class="flex items-center justify-between">
      <ProductCard v-for="item in items" :key="item.id" v-bind="item" />
    </div>
  </section>
</template>
