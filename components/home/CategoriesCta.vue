<script setup lang="ts">
import { ArrowRightIcon } from 'lucide-vue-next';
</script>

<template>
  <section class="bg-cta-gradient border-t-white-100 border-t-[1px]">
    <div
      class="container xl:max-w-[1116px] px-0 mx-auto flex flex-col lg:flex-row items-end justify-between"
    >
      <div class="flex flex-col items-center lg:items-start">
        <div class="text-h3-lg font-bold text-black-900 mt-[52px]">
          Browse Our Fashion Paradise!
        </div>
        <div class="text-body-lg text-black-500 mt-6 max-w-[462px] text-center lg:text-left">
          Step into a world of style and explore our diverse collection of clothing categories.
        </div>
        <NuxtLink to="/" class="mt-8 mb-[72px]">
          <Button class="flex gap-1.5 h-11 items-center px-6">
            <span>Start Browsing</span>
            <ArrowRightIcon class="size-4" />
          </Button>
        </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-end w-full lg:w-auto translate-y-[-26px]">
        <NuxtImg src="./images/cta-cloth.png" alt="hero" width="225" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-cta-gradient {
  background: linear-gradient(to right, #f6f6f6, rgba(255, 255, 255, 0));
}
</style>
