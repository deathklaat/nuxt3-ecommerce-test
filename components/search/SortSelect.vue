<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SortOptions } from '~/data/enums';

const options = Object.values(SortOptions).filter(
  (item) => typeof item !== 'string',
) as SortOptions[];
const model = defineModel<string>();
</script>

<template>
  <Select v-model="model">
    <SelectTrigger class="w-auto gap-2">
      <SelectValue class="text-label-lg font-medium text-black-500" placeholder="SORT BY" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem v-for="option in options" :key="option" :value="option.toString()">
          {{ $t(`SortOptions.${SortOptions[option]}`) }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
