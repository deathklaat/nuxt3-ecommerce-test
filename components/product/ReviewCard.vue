<script setup lang="ts">
import type { ProductReview } from '~/types/product.type';
import { StarIcon } from 'lucide-vue-next';

const props = defineProps<{
  review: ProductReview;
}>();

const initials = computed(() => {
  return `${props.review.firstName[0].toUpperCase()}${props.review.lastName[0].toUpperCase()}`;
});
</script>

<template>
  <div class="w-full flex items-start justify-between px-4 py-8">
    <div class="flex items-start gap-6">
      <div class="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full">
        <span class="text-body-lg text-blue-900">{{ initials }}</span>
      </div>
      <div>
        <div class="text-body-lg font-medium text-black-900">
          {{ review.firstName }} {{ review.lastName }}
        </div>
        <div class="mt-1.5 text-label-lg font-medium text-black-500 uppercase">1 Week ago</div>
        <div class="mt-4 text-body-lg text-black-500">
          {{ review.content }}
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center gap-1">
      <StarIcon
        v-for="i in 5"
        :key="i"
        class="size-4 stroke-black-500"
        :class="{ 'fill-black-500': i <= review.rating }"
      />
    </div>
  </div>
</template>
