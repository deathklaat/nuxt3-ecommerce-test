<script lang="ts" setup>
import { AwardIcon, ShieldCheckIcon, TruckIcon } from 'lucide-vue-next';

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

const props = defineProps<{
  items: FeatureItem[];
}>();

function getFeatureIcon(iconName: string) {
  switch (iconName) {
    case 'Truck':
      return TruckIcon;
    case 'Award':
      return AwardIcon;
    case 'ShieldCheck':
      return ShieldCheckIcon;
  }
}
</script>

<template>
  <section
    class="container mx-auto flex flex-col items-center justify-center gap-8 border-b px-0 pb-12 pt-[88px] lg:flex-row lg:items-start lg:justify-between lg:gap-0 lg:border-none xl:max-w-[1116px]"
  >
    <div
      v-for="(feature, index) in props.items"
      :key="index"
      class="flex max-w-[328px] flex-col items-center text-center lg:items-start lg:text-left"
    >
      <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white-100">
        <component :is="getFeatureIcon(feature.icon)" class="size-5" />
      </div>
      <div class="mb-3 text-h5-lg font-semibold text-black-800">
        {{ feature.title }}
      </div>
      <div class="text-body-lg text-black-500">
        {{ feature.description }}
      </div>
    </div>
  </section>
</template>
