<script lang="ts" setup>
import type { ProductReview } from '~/types/product.type';
import { MoreHorizontalIcon, StarIcon } from 'lucide-vue-next';
import DetailsTab from '~/components/product/DetailsTab.vue';
import ReviewsTab from '~/components/product/ReviewsTab.vue';

const props = defineProps<{
  details: string;
  reviews: ProductReview[];
}>();

provide('details', props.details);
provide('reviews', props.reviews);

enum Tabs {
  Details,
  Reviews,
}

const activeTab = ref(Tabs.Details);

const tabs = [
  { text: 'Details', value: Tabs.Details, icon: MoreHorizontalIcon },
  { text: 'Reviews', value: Tabs.Reviews, icon: StarIcon },
];

function selectTab(tab: Tabs) {
  activeTab.value = tab;
}
</script>

<template>
  <div class="flex gap-8">
    <div class="w-[240px] flex flex-col gap-4">
      <div
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{ 'tab--active': activeTab === tab.value }"
        class="tab"
        @click="selectTab(tab.value)"
      >
        <component :is="tab.icon" class="tab-icon" />
        <span class="tab-text">
          {{ tab.text }}
        </span>
      </div>
    </div>
    <div class="w-full">
      <DetailsTab v-show="activeTab === Tabs.Details" />
      <ReviewsTab v-show="activeTab === Tabs.Reviews" />
    </div>
  </div>
</template>

<style lang="postcss">
.tab-text {
  @apply text-body-lg font-medium text-black-500;
}

.tab-icon {
  @apply size-6 stroke-black-500;
}

.tab {
  @apply flex items-center gap-3.5 px-6 py-2 rounded-md cursor-pointer hover:shadow-[0_0_0_1px_inset] hover:shadow-white-100;

  &--active {
    @apply bg-white-100 pointer-events-none;

    .tab-text {
      @apply text-black-900;
    }

    .tab-icon {
      @apply stroke-black-900;
    }
  }
}
</style>
