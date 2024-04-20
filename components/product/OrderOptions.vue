<script lang="ts" setup>
import { HeartIcon, Share2Icon, StarIcon } from 'lucide-vue-next';
import QuantityPicker from '~/components/common/QuantityPicker.vue';
import type { OrderParams, ProductData } from '~/types/product.type';
import { Colors, Sizes } from '~/data/enums';

const props = defineProps<{
  data: ProductData;
}>();

const orderParams = defineModel<OrderParams>();

const reviewsSummary = computed(() => {
  const reviewsTotal = props.data.reviews.length;
  const averageRating = (
    props.data.reviews.reduce((acc, val) => acc + val.rating, 0) / reviewsTotal
  ).toFixed(1);
  return { averageRating, reviewsTotal };
});

function selectColor(color: Colors) {
  orderParams.value!.color = color;
}

function selectSize(size: Sizes) {
  orderParams.value!.size = size;
}
</script>

<template>
  <div class="w-[438px] flex flex-col py-4">
    <div class="relative w-full">
      <h1 class="text-h3-lg text-black-900 font-bold relative">
        {{ data.title }}
      </h1>
      <Share2Icon class="absolute right-0 top-2 size-5 cursor-pointer stroke-black-500" />
    </div>

    <div class="flex gap-2 mt-3">
      <div class="flex flex-row gap-2 items-center bg-white-100 py-0.5 px-4 rounded-2xl">
        <StarIcon class="size-4 stroke-black-500 fill-black-500" />
        <div class="text-label-lg text-black-500 font-medium uppercase">
          {{ reviewsSummary.averageRating }} - {{ reviewsSummary.reviewsTotal }} Reviews
        </div>
      </div>
      <div
        class="py-0.5 px-4 rounded-2xl text-label-lg text-black-500 font-medium uppercase border-[1px] border-black-100"
      >
        {{ data.inStock ? 'IN STOCK' : 'OUT OF STOCK' }}
      </div>
    </div>

    <div class="mt-6 text-h4-lg font-semibold text-black-900">${{ data.price }}</div>

    <div class="mt-8 flex flex-col gap-3.5">
      <div class="text-label-lg font-medium text-black-500 uppercase">Available Colors</div>
      <div class="flex items-center justify-start gap-3.5">
        <ProductColor
          v-for="(color, i) in data.colors"
          :key="i"
          :color="color"
          :active="color === orderParams!.color"
          @select="selectColor"
        />
      </div>
    </div>

    <div class="mt-8 flex flex-col gap-2">
      <div class="text-label-lg font-medium text-black-500 uppercase">Select Size</div>
      <div class="flex items-center justify-start gap-2">
        <ProductSize
          v-for="(size, i) in data.sizes"
          :key="i"
          :size="size"
          :active="size === orderParams!.size"
          @select="selectSize"
        />
      </div>
    </div>

    <div class="mt-8 flex flex-col gap-2">
      <div class="text-label-lg font-medium text-black-500 uppercase">Quantity</div>
      <QuantityPicker v-model="orderParams!.quantity" />
    </div>

    <div class="mt-10 flex items-center gap-4">
      <Button class="w-[284px]">
        <span class="text-body-lg font-medium text-white-900 select-none">Add to cart</span>
      </Button>
      <div
        :class="`
              h-11 w-11 flex items-center justify-center border-[1px] border-black-100 rounded-md cursor-pointer
              hover:brightness-95
          `"
      >
        <HeartIcon class="size-6 stroke-black-500" />
      </div>
    </div>

    <div class="mt-3 text-label-lg font-medium text-black-500 uppercase select-none">
      — Free shipping on orders $100+
    </div>
  </div>
</template>
