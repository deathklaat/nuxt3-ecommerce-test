<script setup lang="ts">
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
    class="container xl:max-w-[1116px] px-0 pt-[88px] pb-12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 lg:justify-between lg:items-start"
  >
    <div
      v-for="(feature, index) in props.items"
      :key="index"
      class="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[328px]"
    >
      <div
        class="bg-white-100 rounded-full w-12 h-12 flex items-center justify-center mb-6"
      >
        <component :is="getFeatureIcon(feature.icon)" class="size-5" />
      </div>
      <div class="text-h5-lg font-semibold text-black-800 mb-3">
        {{ feature.title }}
      </div>
      <div class="text-body-lg text-black-500">
        {{ feature.description }}
      </div>
    </div>
  </section>
</template>
