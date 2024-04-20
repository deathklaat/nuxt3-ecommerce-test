<script setup lang="ts">
import { MenuIcon, CircleXIcon } from 'lucide-vue-next';
import navigationData from '~/data/navigation.data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const menuIsOpened = ref(false);

watch(menuIsOpened, (newValue) => {
  document.body.style.overflowY = newValue ? 'hidden' : '';
});
</script>

<template>
  <div class="relative">
    <MenuIcon v-show="!menuIsOpened" @click="menuIsOpened = true" />
    <Teleport to="#mobile-menu">
      <div
        v-if="menuIsOpened"
        class="animation-appearance w-screen h-screen bg-white-100 fixed z-10"
      >
        <div class="absolute bottom-4 w-full flex items-center justify-center">
          <CircleXIcon class="size-12" @click="menuIsOpened = false" />
        </div>
        <Accordion type="single" class="w-full text-left px-4 py-8 flex flex-col gap-4" collapsible>
          <AccordionItem
            v-for="(item, i) in navigationData"
            :key="`item-${i}`"
            :value="`item-${i}`"
            class="text-h3-lg font-medium pb-4 border-b"
            :class="{
              'border-0': item.hrefs,
            }"
          >
            <template v-if="item.hrefs">
              <AccordionTrigger class="p-0 border-b">
                {{ item.text }}
              </AccordionTrigger>
              <AccordionContent>
                <div class="flex flex-col gap-6 pt-4">
                  <NuxtLink
                    v-for="subItem in item.hrefs"
                    :key="subItem.href"
                    :to="subItem.href"
                    class="text-h3-lg font-medium"
                  >
                    {{ subItem.text }}
                  </NuxtLink>
                </div>
              </AccordionContent>
            </template>
            <NuxtLink v-else :to="item.href">
              {{ item.text }}
            </NuxtLink>
          </AccordionItem>
        </Accordion>
      </div>
    </Teleport>
  </div>
</template>

<style>
@keyframes animation-appearance {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.animation-appearance {
  animation: animation-appearance 0.25s ease-out;
}
</style>
