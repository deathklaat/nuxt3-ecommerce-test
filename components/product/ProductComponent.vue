<script lang="ts" setup>
import type { OrderParams, ProductData } from '~/types/product.type';
import ImageSwiper from '~/components/product/ImageSwiper.vue';
import OrderOptions from '~/components/product/OrderOptions.vue';
import SimilarProducts from '~/components/product/SimilarProducts.vue';

const props = defineProps<{
  data: ProductData;
}>();

const images = new Array(4).fill(props.data.imgUrl);

const orderParams = reactive<OrderParams>({
  productId: props.data.id,
  size: props.data.sizes[0],
  color: props.data.colors[0],
  quantity: 1,
});

const { similarProducts } = useProductStore();
</script>

<template>
  <div class="flex flex-col gap-[176px]">
    <div class="flex flex-row items-start justify-between">
      <div class="w-[534px] h-[574px]">
        <ImageSwiper :data="data" :images="images" />
      </div>
      <OrderOptions v-model="orderParams" :data="data" />
    </div>
    <ProductInfo :details="data.description" :reviews="data.reviews" />
    <SimilarProducts :list="similarProducts" />
  </div>
</template>
