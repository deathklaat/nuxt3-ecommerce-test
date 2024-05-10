<script lang="ts" setup>
import type { ProductReview } from '~/types/product.type';
import ReviewCard from '~/components/product/ReviewCard.vue';

const reviews: ProductReview[] = inject('reviews')!;

const avgRating = computed(() => {
  return (reviews.reduce((acc, val) => acc + val.rating, 0) / reviews.length).toFixed(1);
});
</script>

<template>
  <div>
    <h5 class="text-h5-lg font-semibold text-black-900">Reviews</h5>
    <div class="flex items-baseline gap-2">
      <div class="text-h2-lg font-bold text-black-900">{{ avgRating }}</div>
      <span class="text-body-lg text-black-400">— {{ reviews.length }} Reviews</span>
    </div>
    <Button variant="outline" class="my-10 flex gap-1.5 h-11 items-center px-6 w-full lg:w-auto">
      Write a review
    </Button>
    <div class="bg-white-200 w-full h-[1px]" />
    <div class="flex flex-col gap-2 mt-3">
      <ReviewCard v-for="review in reviews" :key="review.id" :review="review" />
    </div>
  </div>
</template>
