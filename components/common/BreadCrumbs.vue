<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import type { IBreadcrumbItem } from '~/types/breadcrumb.type';
import { NuxtLink } from '#components';

const props = defineProps<{
  items: IBreadcrumbItem[];
}>();
</script>

<template>
  <div class="container xl:max-w-[1116px] mx-auto px-0 py-4">
    <Breadcrumb>
      <BreadcrumbList>
        <template v-for="(item, index) in props.items" :key="`item-${item.href}`">
          <BreadcrumbItem>
            <BreadcrumbLink v-if="item.href" :href="item.href" :as="NuxtLink">
              {{ item.text }}
            </BreadcrumbLink>
            <BreadcrumbPage v-else class="font-bold">
              {{ item.text }}
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator v-if="index < props.items.length - 1" />
        </template>
      </BreadcrumbList>
    </Breadcrumb>
  </div>
</template>
