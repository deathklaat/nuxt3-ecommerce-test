<script setup lang="ts">
import { Colors } from '~/data/enums';

defineProps<{
  active: boolean;
  color: Colors;
}>();

defineEmits<{
  select: [value: Colors];
}>();
</script>

<template>
  <div
    :class="{ 'color--active': active }"
    class="flex items-center justify-center rounded-full h-8 w-8 cursor-pointer"
    @click="$emit('select', color)"
  >
    <div :class="`color--${Colors[color].toString().toLowerCase()}`" class="w-6 h-6 rounded-full" />
  </div>
</template>

<style lang="postcss" scoped>
.color {
  &--active {
    box-shadow: 0 0 0 1px inset theme(colors.black.300);
  }

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
