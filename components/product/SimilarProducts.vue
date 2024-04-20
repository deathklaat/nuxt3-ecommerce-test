<script setup lang="ts">
import type { ProductData } from '~/types/product.type';

defineProps<{
  list: ProductData[];
}>();
</script>

<template>
  <div class="py-4 px-3">
    <div class="text-[24px] font-bold text-black-900">You might also like</div>
    <div class="mt-2 text-label-lg text-black-300 uppercase">Similar products</div>
    <div class="mt-14 py-4 px-2 flex gap-8">
      <ProductCard v-for="product in list" :key="product.id" v-bind="product" />
    </div>
  </div>
</template>
