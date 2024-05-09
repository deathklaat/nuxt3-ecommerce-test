<script lang="ts" setup>
import { Categories, Colors, Sizes, SortOptions } from '~/data/enums';
import { Checkbox } from '~/components/ui/checkbox';
import CustomMinMaxSlider from '~/components/common/CustomMinMaxSlider.vue';
import type { SearchParams } from '~/types/product.type';

const emit = defineEmits<{
  change: [value: SearchParams]; // named tuple syntax
}>();

const store = useProductStore();
const route = useRoute();
const router = useRouter();

const priceMin = ref(0);
const priceMax = ref(store.highestPrice);

function notString(item: any) {
  return typeof item !== 'string';
}

// categories
const categories = Object.values(Categories).filter(notString) as Categories[];
const selectedCategories = ref<Record<string, boolean>>({});

resetCategories();

function resetCategories() {
  categories.forEach((category) => (selectedCategories.value[category.toString()] = false));
}

function getCategoryId(category: Categories) {
  return `category-${category.toString().toLowerCase()}`;
}

// colors
const colors = Object.values(Colors).filter(notString) as Colors[];
const selectedColors = ref<Record<string, boolean>>({});

resetColors();

function resetColors() {
  colors.forEach((color) => (selectedColors.value[color.toString()] = false));
}

function selectColor(color: Colors) {
  selectedColors.value[color] = !selectedColors.value[color];
}

// sizes
const sizes = Object.values(Sizes).filter(notString) as Sizes[];
const selectedSizes = ref<Record<string, boolean>>({});

resetSizes();

function resetSizes() {
  sizes.forEach((color) => (selectedSizes.value[color.toString()] = false));
}

function selectSize(size: Sizes) {
  selectedSizes.value[size] = !selectedSizes.value[size];
}

const searchQuery = computed(() => decodeURIComponent(route.query.query as string));

function applyFilters() {
  const filters: SearchParams = {
    query: !searchQuery.value || searchQuery.value === 'undefined' ? '' : searchQuery.value,
    sortOrder: SortOptions.Newest,
    priceRange: [0, 0],
  };

  if (!filters.query) {
    router.replace({ query: {} });
  }

  // collect categories
  const pickedCategories = Object.keys(selectedCategories.value)
    .filter((key) => selectedCategories.value[key])
    .map(Number);

  if (pickedCategories.length) filters.categories = pickedCategories;

  // collect colors
  const pickedColors = Object.keys(selectedColors.value)
    .filter((key) => selectedColors.value[key])
    .map(Number);

  if (pickedColors.length) filters.colors = pickedColors;

  // collect sizes
  const pickedSizes = Object.keys(selectedSizes.value)
    .filter((key) => selectedSizes.value[key])
    .map(Number);

  if (pickedSizes.length) filters.sizes = pickedSizes;

  // collect price range
  filters.priceRange = [priceMin.value || 0, priceMax.value || 0];

  emit('change', filters);
}

/*watch(
  () => store.searchFilters,
  (newValue) => {
    resetCategories();
    if (newValue.categories?.length) {
      newValue.categories.forEach((category: number) => {
        selectedCategories.value[Categories[category]] = true;
      });
    }

    resetColors();
    if (newValue.colors?.length) {
      newValue.colors.forEach((color) => {
        const key = Object.entries(Colors).find(([_, value]) => value === color)![0];
        selectedColors.value[key] = true;
      });
    }

    resetSizes();
    if (newValue.sizes?.length) {
      newValue.sizes.forEach((size) => (selectedSizes.value[size] = true));
    }

    if (newValue.priceRange?.length && newValue.priceRange[1] > 0) {
      priceMin.value = newValue.priceRange[0];
      priceMax.value = newValue.priceRange[1];
    }
  },
  {
    deep: true,
  },
);*/
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
          :active="selectedColors[color]"
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
          :active="selectedSizes[size]"
          :size="size"
          @select="selectSize"
        />
      </div>
    </div>

    <div>
      <div class="text-body-lg font-medium text-black-900">Price</div>
      <div class="mt-6">
        <CustomMinMaxSlider
          v-model:max-value="priceMax"
          v-model:min-value="priceMin"
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
