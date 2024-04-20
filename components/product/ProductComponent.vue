<script lang="ts" setup>
import type { ProductData } from '~/types/product.type';

const { data } = defineProps<{
  data: ProductData;
}>();

const images = new Array(4).fill(data.imgUrl);
</script>

<template>
  <div>
    {{ data }}
    <br />
    {{ images }}
  </div>
</template>
