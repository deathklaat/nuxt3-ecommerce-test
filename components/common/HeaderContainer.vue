<script lang="ts" setup>
import { ShoppingCartIcon, CircleUserRoundIcon } from 'lucide-vue-next';
import navigationData from '~/data/navigation.data';
import { useResolution } from '~/composables/breakpoints';

import MobileMenu from '~/components/common/MobileMenu.vue';
import NavBar from '~/components/common/NavBar.vue';
import SearchInput from '~/components/common/SearchInput.vue';

const { isTabletOrDesktop } = useResolution();
const store = useProductStore();
</script>

<template>
  <header
    class="container mx-auto text-center h-[64px] lg:h-[84px] xl:max-w-[1116px] flex items-center justify-between px-4 lg:px-3 lg:py-[22px]"
  >
    <div class="flex items-center gap-24">
      <NuxtLink to="/" class="flex gap-2 items-center">
        <NuxtImg alt="logo" src="/logo.svg" class="w-8 lg:w-10" />
        <span class="font-manrope text-h3-sm lg:text-[20px] text-black-900 font-extrabold">
          Ecommerce
        </span>
      </NuxtLink>
      <NavBar v-if="isTabletOrDesktop" :links="navigationData" />
    </div>
    <div id="mobile-menu" class="absolute inset-0" />
    <div v-if="isTabletOrDesktop" class="flex items-center gap-5">
      <SearchInput />
      <NuxtLink to="/cart" class="relative">
        <ShoppingCartIcon class="size-5 text-muted-foreground cursor-pointer" />
        <div
          v-if="store.cart.length"
          class="flex items-center justify-center absolute top-[-12px] right-[-16px] bg-green-100 rounded-full min-w-5 min-h-5"
        >
          <span class="text-[10px]">
            {{ store.cart.length }}
          </span>
        </div>
      </NuxtLink>
      <NuxtLink to="/">
        <CircleUserRoundIcon class="size-5 text-muted-foreground cursor-pointer" />
      </NuxtLink>
    </div>
    <MobileMenu v-if="!isTabletOrDesktop" />
  </header>
</template>

<style>
#mobile-menu:empty {
  visibility: hidden;
}
</style>
