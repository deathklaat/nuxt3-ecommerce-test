<script setup lang="ts">
import ProductCard from '~/components/product/ProductCard.vue';
import type { ProductData } from '~/types/product.type';

enum Tabs {
  Featured = 'Featured',
  Latest = 'Latest',
}

const ITEMS_LIMIT = 4;

const props = defineProps<{
  featured: ProductData[];
  latest: ProductData[];
}>();

const tabs = Object.keys(Tabs);
const activeTab = ref(Tabs.Featured);

const activeItems = computed(() => {
  const res = activeTab.value === Tabs.Featured ? props.featured : props.latest;
  return res.slice(0, ITEMS_LIMIT);
});

function selectTab(tab: Tabs) {
  activeTab.value = tab;
}
</script>

<template>
  <section
    class="container xl:max-w-[1116px] mx-auto px-0 pt-[152px] pb-[176px]"
  >
    <div class="w-full flex items-center justify-center gap-6">
      <div
        v-for="tab in tabs"
        :key="tab"
        class="tab"
        :class="{ 'tab--active': tab === activeTab }"
        @click="selectTab(tab as Tabs)"
      >
        <span>{{ tab }}</span>
      </div>
    </div>
    <div class="flex items-center justify-between mt-12">
      <ProductCard v-for="item in activeItems" :key="item.id" v-bind="item" />
    </div>
  </section>
</template>

<style scoped>
.tab {
  @apply h-[30px] flex items-center justify-center
  px-4 py-[3px] text-body-lg text-black-500 cursor-pointer
  border-[1px] border-transparent rounded-2xl
  hover:border-white-100;
}

.tab--active {
  @apply text-body-lg font-medium text-black-800 border-white-200 cursor-default;
}
</style>
