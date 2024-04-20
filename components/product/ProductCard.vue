<script setup lang="ts">
import type { ProductData } from '~/types/product.type';

const { title, imgUrl, price, inStock, id } = defineProps<ProductData>();
</script>

<template>
  <NuxtLink
    :to="`/products/${id}`"
    class="flex flex-col gap-6 px-2 py-4 cursor-pointer hover:brightness-95 rounded-sm"
  >
    <NuxtImg :src="imgUrl" :alt="title" width="240" />
    <div class="flex flex-col gap-3">
      <div class="text-body-lg font-medium text-black-900">{{ title }}</div>
      <div class="flex items-center gap-4">
        <div
          class="px-4 py-0.5 text-label font-medium text-black-900 uppercase border-[1px] border-white-200 rounded-3xl"
        >
          {{ inStock ? 'in stock' : 'out of stock' }}
        </div>
        <div class="text-body-lg text-black-600">${{ price.toFixed(2) }}</div>
      </div>
    </div>
  </NuxtLink>
</template>
