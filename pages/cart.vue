<script lang="ts" setup>
import BreadCrumbs from '~/components/common/BreadCrumbs.vue';

const breadcrumbs = computed(() => [{ text: 'Ecommerce', href: '/' }, { text: 'Cart' }]);
</script>

<template>
  <section>
    <div class="w-full bg-white-100 pb-8">
      <div class="container xl:max-w-[1116px] mx-auto px-0 pb-2 pt-12">
        <span class="text-h3-lg font-bold text-black-900"> Cart </span>
      </div>
      <BreadCrumbs :items="breadcrumbs" />
    </div>
    <div class="container xl:max-w-[1116px] mx-auto px-0 pt-14 pb-[220px]">Cart content</div>
  </section>
</template>
