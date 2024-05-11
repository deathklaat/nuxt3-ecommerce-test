<script lang="ts" setup>
import { MinusIcon, PlusIcon } from 'lucide-vue-next';

const props = defineProps<{
  min?: number;
  max?: number;
}>();

const quantity = defineModel<number>();
const minValue = computed(() => props.min || 1);
const maxValue = computed(() => props.max || Infinity);

function decrease() {
  quantity.value!--;
}

function increase() {
  quantity.value!++;
}
</script>

<template>
  <div
    class="flex items-center justify-between border-[1px] border-black-100 rounded-md h-11 w-[164px] px-4 py-3"
  >
    <MinusIcon
      :class="{ 'pointer-events-none opacity-50': quantity === minValue }"
      class="size-5 cursor-pointer"
      @click="decrease"
    />
    <div class="min-w-8 text-center text-body-lg font-medium text-black-800 select-none">
      {{ quantity }}
    </div>
    <PlusIcon
      :class="{ 'pointer-events-none opacity-50': quantity === maxValue }"
      class="size-5 cursor-pointer"
      @click="increase"
    />
  </div>
</template>
