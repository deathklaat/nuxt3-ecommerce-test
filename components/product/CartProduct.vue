<script lang="ts" setup>
import type { CartProduct } from '~/types/product.type';
import { Colors, Sizes } from '~/data/enums';
import { XIcon } from 'lucide-vue-next';
import QuantityPicker from '~/components/common/QuantityPicker.vue';

const props = defineProps<CartProduct>();
const store = useProductStore();
const productData = computed(
  () => store.products.find((product) => product.id === props.productId)!,
);

const startQuantity = props.orderParams.quantity;
const quantity = defineModel<number>();
quantity.value = startQuantity;
</script>

<template>
  <div class="h-20 w-full flex items-center justify-between rounded-sm overflow-hidden">
    <div class="flex items-center">
      <div class="h-full w-20 bg-white-100 text-center mr-6">
        <NuxtImg
          :src="productData.imgUrl"
          :alt="productData.title"
          class="w-full h-full object-contain"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <p class="text-body-lg font-medium text-black-900">{{ productData.title }}</p>
        <div class="flex items-center gap-2 text-label-lg font-medium text-black-500">
          Color:
          <i
            class="w-3 h-3 rounded-full bg-red-300 inline-block"
            :class="`color--${Colors[orderParams.color].toString().toLowerCase()}`"
          />
          <span>—</span>
          <span>Size: {{ $t(`Sizes.${Sizes[orderParams.size]}`) }}</span>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-6">
      <div class="text-body-lg font-medium text-black-900">$75.00</div>
      <div>
        <QuantityPicker v-model="quantity" />
      </div>
      <div
        class="w-10 h-10 bg-white-100 rounded-sm flex items-center justify-center cursor-pointer hover:brightness-95"
      >
        <XIcon class="stroke-black-500" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.color {
  &--blue {
    @apply bg-blue-400;
  }

  &--yellow {
    @apply bg-yellow-400;
  }

  &--green {
    @apply bg-green-400;
  }

  &--red {
    @apply bg-red-600;
  }
}
</style>
