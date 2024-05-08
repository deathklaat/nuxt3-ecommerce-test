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

const options = Object.entries(SortOptions).filter((option) => isNaN(Number(option[0])));
const model = defineModel<keyof typeof SortOptions>();
</script>

<template>
  <Select v-model="model">
    <SelectTrigger class="w-auto gap-2">
      <SelectValue class="text-label-lg font-medium text-black-500" placeholder="SORT BY" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem v-for="[key, text] in options" :key="key" :value="key">
          {{ text }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
