<script lang="ts" setup>
import { computed, type HTMLAttributes } from 'vue';
import { AccordionItem, type AccordionItemProps, useForwardProps } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <AccordionItem :class="cn('', props.class)" v-bind="forwardedProps">
    <slot />
  </AccordionItem>
</template>
