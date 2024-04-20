<script setup lang="ts">
import { ArrowRightIcon } from 'lucide-vue-next';
import { useResolution } from '~/composables/breakpoints';
const { isTabletOrDesktop } = useResolution();
</script>

<template>
  <section class="bg-white-100">
    <div
      class="container xl:max-w-[1116px] flex flex-col lg:flex-row items-center lg:items-end lg:justify-between px-0 mx-auto"
    >
      <div class="flex flex-col items-center lg:items-start">
        <div
          class="text-h2-lg font-semibold text-black-800 mt-10 lg:mt-[136px]"
        >
          Fresh Arrivals Online
        </div>
        <div class="text-body-lg text-black-600 mt-3">
          Discover Our Newest Collection Today.
        </div>
        <NuxtLink to="/" class="mt-4 mb-4 lg:mt-12 lg:mb-[136px]">
          <Button class="flex gap-1.5 h-11 items-center px-6">
            <span>View Collection</span>
            <ArrowRightIcon class="size-4" />
          </Button>
        </NuxtLink>
        <NuxtImg
          v-if="!isTabletOrDesktop"
          src="./images/hero.png"
          alt="hero"
          width="344"
        />
      </div>

      <div v-if="isTabletOrDesktop" class="flex flex-col justify-end">
        <NuxtImg src="./images/hero.png" alt="hero" width="344" />
      </div>
    </div>
  </section>
</template>
