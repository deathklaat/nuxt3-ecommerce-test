<script lang="ts" setup>
import { Categories, Colors, Sizes, SortOptions } from '~/data/enums';
import { Checkbox } from '~/components/ui/checkbox';
import CustomMinMaxSlider from '~/components/common/CustomMinMaxSlider.vue';
import type { SearchParams } from '~/types/product.type';

const props = defineProps<{
  filters: SearchParams;
}>();

const emit = defineEmits<{
  change: [value: SearchParams]; // named tuple syntax
}>();

const store = useProductStore();
const route = useRoute();

const priceMin = ref(0);
const priceMax = ref(store.highestPrice);

function notString(item: any) {
  return typeof item !== 'string';
}

// categories
const categories = Object.values(Categories).filter(notString) as Categories[];
const selectedCategories = ref<Categories[]>([]);

function getCategoryId(category: Categories) {
  return `category-${category.toString().toLowerCase()}`;
}

function selectCategory(category: Categories, isSelected: boolean) {
  if (isSelected) {
    selectedCategories.value.push(category);
  } else {
    selectedCategories.value = selectedCategories.value.filter((c) => c !== category);
  }
}

// colors
const colors = Object.values(Colors).filter(notString) as Colors[];
const selectedColors = ref<Colors[]>([]);

function selectColor(color: Colors) {
  if (selectedColors.value.includes(color)) {
    selectedColors.value = selectedColors.value.filter((c) => c !== color);
  } else {
    selectedColors.value.push(color);
  }
}

// sizes
const sizes = Object.values(Sizes).filter(notString) as Sizes[];
const selectedSizes = ref<Sizes[]>([]);

function selectSize(size: Sizes) {
  if (selectedSizes.value.includes(size)) {
    selectedSizes.value = selectedSizes.value.filter((s) => s !== size);
  } else {
    selectedSizes.value.push(size);
  }
}

const searchQuery = computed(() => decodeURIComponent(route.query.query as string));

function applyFilters() {
  const filters: SearchParams = {
    query: !searchQuery.value || searchQuery.value === 'undefined' ? '' : searchQuery.value,
    sortOrder: SortOptions.Newest,
    priceRange: [0, 0],
  };

  if (selectedCategories.value.length) {
    filters.categories = selectedCategories.value;
  }

  if (selectedColors.value.length) {
    filters.colors = selectedColors.value;
  }

  if (selectedSizes.value.length) {
    filters.sizes = selectedSizes.value;
  }

  filters.priceRange = [priceMin.value || 0, priceMax.value || store.highestPrice];

  emit('change', filters);
}

watch(
  () => props.filters,
  (newValue) => {
    if (newValue.categories) {
      selectedCategories.value = newValue.categories;
    }

    if (newValue.sizes) {
      selectedSizes.value = newValue.sizes;
    }

    if (newValue.colors) {
      selectedColors.value = newValue.colors;
    }

    if (newValue.priceRange?.length) {
      priceMin.value = newValue.priceRange[0];
      priceMax.value = newValue.priceRange[1] || store.highestPrice;
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<template>
  <div
    class="flex flex-col w-[248px] gap-10 shrink-0 pl-4 pr-3 pt-6 pb-8 rounded-[6px] border-[1px] border-black-100"
  >
    <div>
      <div class="text-body-lg font-medium text-black-900">Categories</div>
      <div class="mt-4">
        <div
          v-for="category in categories"
          :key="getCategoryId(category)"
          class="flex items-center space-x-2 h-[50px]"
        >
          <Checkbox
            :id="getCategoryId(category)"
            :checked="selectedCategories.includes(category)"
            @update:checked="selectCategory(category, $event)"
          />
          <label :for="getCategoryId(category)" class="text-body-lg text-black-600">
            {{ $t(`Categories.${Categories[category]}`) }}
          </label>
        </div>
      </div>
    </div>

    <div>
      <div class="text-body-lg font-medium text-black-900">Color</div>
      <div class="flex items-center justify-start gap-3.5">
        <ProductColor
          v-for="(color, i) in colors"
          :key="i"
          :active="selectedColors.includes(color)"
          :color="color"
          @select="selectColor"
        />
      </div>
    </div>

    <div>
      <div class="text-body-lg font-medium text-black-900">Size</div>
      <div class="flex items-center justify-start gap-3.5 flex-wrap">
        <ProductSize
          v-for="(size, i) in sizes"
          :key="i"
          :active="selectedSizes.includes(size)"
          :size="size"
          @select="selectSize"
        />
      </div>
    </div>

    <div>
      <div class="text-body-lg font-medium text-black-900">Price</div>
      <div class="mt-6">
        <CustomMinMaxSlider
          ref="slider"
          v-model:min-value="priceMin"
          v-model:max-value="priceMax"
          :max="store.highestPrice"
          :min="0"
        />
      </div>
    </div>

    <Button class="flex gap-1.5 h-11 items-center px-6 w-full lg:w-auto" @click="applyFilters">
      Apply
    </Button>
  </div>
</template>
