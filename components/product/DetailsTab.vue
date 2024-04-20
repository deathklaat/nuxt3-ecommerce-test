<script lang="ts" setup>
const details = inject('details');
</script>

<template>
  <div class="flex flex-col">
    <h5 class="text-h5-lg font-semibold text-black-900">Details</h5>
    <div class="details" v-html="details" />
  </div>
</template>

<style lang="postcss">
.details {
  @apply mt-6 text-body-lg text-black-500;

  ul {
    @apply list-disc ml-5;
  }
}
</style>
