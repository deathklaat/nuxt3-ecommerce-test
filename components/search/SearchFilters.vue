<script lang="ts" setup>
import { Categories, Colors, Sizes, SortOptions } from '~/data/enums';
import { Checkbox } from '~/components/ui/checkbox';
import CustomMinMaxSlider from '~/components/common/CustomMinMaxSlider.vue';
import type { SearchFilters } from '~/types/product.type';

const store = useProductStore();
const route = useRoute();
const router = useRouter();

const priceMin = ref(12);
const priceMax = ref(150);

// categories
const categories = Object.values(Categories).filter((v) => isNaN(Number(v)));

const selectedCategories = ref<Record<string, boolean>>({});
categories.forEach((category) => (selectedCategories.value[category.toString()] = false));

function getCategoryId(category: string | Categories) {
  return `category-${category.toString().toLowerCase()}`;
}

// colors
const colors = Object.keys(Colors).filter((v) => isNaN(Number(v)));
const selectedColors = ref<Record<string, boolean>>({});
colors.forEach((color) => (selectedColors.value[color.toString()] = false));

function selectColor(color: string | Colors) {
  selectedColors.value[color] = !selectedColors.value[color];
}

// sizes
const sizes = Object.values(Sizes).filter((v) => isNaN(Number(v)));
const selectedSizes = ref<Record<string, boolean>>({});
sizes.forEach((color) => (selectedSizes.value[color.toString()] = false));

function selectSize(size: Sizes) {
  selectedSizes.value[size] = !selectedSizes.value[size];
}

const searchQuery = computed(() => decodeURIComponent(route.query.query as string));
watch(
  searchQuery,
  () => {
    applyFilters();
  },
  {
    immediate: true,
  },
);

function applyFilters() {
  const filters: SearchFilters = {
    query: !searchQuery.value || searchQuery.value === 'undefined' ? '' : searchQuery.value,
    sortOption: SortOptions.Newest,
    priceRange: [0, 0],
  };

  if (!filters.query) {
    router.replace({ query: {} });
  }

  filters.categories = Object.keys(selectedCategories.value)
    .filter((key) => selectedCategories.value[key])
    .map((key) => Categories[key]);

  filters.colors = Object.keys(selectedColors.value)
    .filter((key) => selectedColors.value[key])
    .map((key) => Colors[key]);

  filters.sizes = Object.keys(selectedSizes.value).filter(
    (key) => selectedSizes.value[key],
  ) as Sizes[];

  filters.priceRange = [priceMin.value || 0, priceMax.value || 0];

  store.setFilters(filters);
}

applyFilters();
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
            :checked="selectedCategories[category]"
            @update:checked="selectedCategories[category] = $event"
          />
          <label class="text-body-lg text-black-600" :for="getCategoryId(category)">
            {{ category }}
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
          :color="color"
          :active="selectedColors[color]"
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
          :size="size"
          :active="selectedSizes[size]"
          @select="selectSize"
        />
      </div>
    </div>

    <div>
      <div class="text-body-lg font-medium text-black-900">Price</div>
      <div class="mt-6">
        <CustomMinMaxSlider
          v-model:min-value="priceMin"
          v-model:max-value="priceMax"
          :min="12"
          :max="368"
        />
      </div>
    </div>

    <Button class="flex gap-1.5 h-11 items-center px-6 w-full lg:w-auto" @click="applyFilters">
      Apply
    </Button>
  </div>
</template>
