<script setup lang="ts">
import BreadCrumbs from '~/components/common/BreadCrumbs.vue';
import ProductComponent from '~/components/product/ProductComponent.vue';

const route = useRoute();
const store = useProductStore();
const data = store.getProductBySlug(route.params.slug as string)!;
const breadcrumbs = computed(() => [
  {
    text: 'Ecommerce',
    href: '/',
  },
  {
    text: data.title,
  },
]);
</script>

<template>
  <section
    class="container xl:max-w-[1116px] mx-auto px-0 pb-[176px] border-t-[1px] border-white-100"
  >
    <BreadCrumbs :items="breadcrumbs" />
    <ProductComponent :data="data" />
  </section>
</template>
