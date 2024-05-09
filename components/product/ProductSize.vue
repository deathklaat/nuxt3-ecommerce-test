<script lang="ts" setup>
import { Sizes } from '~/data/enums';
defineProps<{
  active: boolean;
  size: Sizes;
}>();

defineEmits<{
  select: [value: Sizes];
}>();
</script>

<template>
  <div :class="{ 'size--active': active }" class="size" @click="$emit('select', size)">
    <span class="text-label-lg font-medium text-black-500">
      {{ $t(`Sizes.${Sizes[size]}`) }}
    </span>
  </div>
</template>

<style scoped>
.size {
  @apply h-10 w-10 border-[1px] border-black-100 rounded-md flex items-center justify-center cursor-pointer;
}

.size--active {
  @apply border-black-300;
}
</style>
