<template>
  <swiper
    :loop="true"
    :modules="modules"
    :pagination="{
      clickable: true,
    }"
    class="mySwiper"
  >
    <swiper-slide v-for="(image, i) in images" :key="i">
      <NuxtImg :alt="data.title" :src="image" />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import type { ProductData } from '~/types/product.type';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination];

defineProps<{
  data: ProductData;
  images: string[];
}>();
</script>

<style lang="postcss" scoped>
.swiper {
  @apply w-full h-full;

  &:deep(.swiper-pagination) {
    @apply mb-4;
  }

  &:deep(.swiper-pagination-bullet) {
    @apply bg-black-200;

    &-active {
      @apply bg-black-900;
    }
  }
}

.swiper-slide {
  @apply flex items-center justify-center bg-white-100 text-center rounded-sm;
}

.swiper-slide img {
}
</style>
