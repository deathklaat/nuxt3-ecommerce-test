<script lang="ts" setup>
import type { ProductData } from '~/types/product.type';
import { useSlugify } from '~/composables/slugify';

const props = defineProps<ProductData>();
const { toSlug } = useSlugify();
const slug = toSlug(props.title);
</script>

<template>
  <NuxtLink
    :to="`/products/${slug}`"
    class="flex flex-col justify-between gap-6 px-2 py-4 cursor-pointer hover:brightness-95 rounded-sm"
  >
    <NuxtImg :alt="title" :src="imgUrl" width="240" class="flex-grow" />
    <div class="flex flex-col gap-3">
      <div class="text-body-lg font-medium text-black-900 text-center lg:text-left">
        {{ title }}
      </div>
      <div class="flex items-center gap-4 justify-center lg:justify-start">
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
