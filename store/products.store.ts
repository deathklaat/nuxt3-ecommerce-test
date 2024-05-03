import { defineStore } from 'pinia';
import { useSlugify } from '~/composables/slugify';
import type { FilterType, ProductData, SearchFilters } from "~/types/product.type";
import productData from '~/data/product.data';
import { SortOptions } from '~/data/enums';

const { toSlug } = useSlugify();

function sortByDateDesc(a: ProductData, b: ProductData): number {
  const dateA = new Date(a.createdAt).getTime();
  const dateB = new Date(b.createdAt).getTime();
  return dateB - dateA;
}

function sortNewest(a: ProductData, b: ProductData) {
  const dateA = new Date(a.createdAt).getTime();
  const dateB = new Date(b.createdAt).getTime();
  return dateA - dateB;
}

function sortPopular(_: ProductData, _2: ProductData) {
  return 0;
}

function sortCheapFirst(a: ProductData, b: ProductData) {
  return a.price - b.price;
}

function sortExpensiveFirst(a: ProductData, b: ProductData) {
  return b.price - a.price;
}

export const useProductStore = defineStore('products', () => {
  const products = ref<ProductData[]>(productData);
  const filters = ref<SearchFilters>({} as SearchFilters);

  const setFilters = (value: SearchFilters) => (filters.value = value);

  const bestSellers = computed<ProductData[]>(() => products.value.filter((p) => p.isBestSeller));

  const featuredProducts = computed<ProductData[]>(() =>
    products.value.filter((product) => product.isFeatured),
  );

  const latestProducts = computed<ProductData[]>(() => {
    const clone = [...products.value];
    return clone.sort(sortByDateDesc);
  });

  const similarProducts = computed(() => products.value.slice(0, 4));

  const getProductById = computed(() => (id: number) => {
    const res = products.value.find((p) => p.id === id)!;
    return res as ProductData;
  });

  const getProductBySlug = computed(() => (slug: string) => {
    const res = products.value.find((p) => toSlug(p.title) === slug)!;
    return res as ProductData;
  });

  const highestPrice = computed(() => {
    return products.value.reduce((acc, val) => Math.max(acc, val.price), 0);
  });

  const searchResult = computed(() => {
    let result = [...products.value];

    if (filters.value.query) {
      result = result.filter((product) => product.title.includes?.(filters.value.query));
    }

    if (filters.value.categories?.length) {
      result = result.filter((product) => filters.value.categories?.includes?.(product.category));
    }

    if (filters.value.colors?.length) {
      result = result.filter((product) => {
        const set1 = new Set(filters.value.colors);
        const set2 = new Set(product.colors);
        return set1.intersection(set2).size > 0;
      });
    }

    if (filters.value.sizes?.length) {
      result = result.filter((product) => {
        const set1 = new Set(filters.value.sizes);
        const set2 = new Set(product.sizes);
        return set1.intersection(set2).size > 0;
      });
    }

    if (filters.value.priceRange?.length) {
      result = result.filter((product) => {
        const [minPrice, maxPrice] = filters.value.priceRange;
        if (!minPrice && !maxPrice) return true;
        return product.price >= minPrice && product.price <= maxPrice;
      });
    }

    switch (filters.value.sortOption) {
      case SortOptions.Newest:
        result.sort(sortNewest);
        break;
      case SortOptions.Popular:
        result.sort(sortPopular);
        break;
      case SortOptions.CheapFirst:
        result.sort(sortCheapFirst);
        break;
      case SortOptions.ExpensiveFirst:
        result.sort(sortExpensiveFirst);
        break;
      default:
        break;
    }

    // fake clone results to force pagination
    const multipleResults = [];
    for (let i = 0; i < 20; i++) {
      multipleResults.push(...result);
    }

    return multipleResults;
  });

  const removeFilter = (type: FilterType, value: any) => {
    if (type === "categories" && filters.value.categories) {
      filters.value.categories = filters.value.categories.filter((item) => item !== value);
    }
  };

  return {
    products,
    searchFilters: filters,
    highestPrice,
    bestSellers,
    featuredProducts,
    latestProducts,
    similarProducts,
    getProductById,
    getProductBySlug,
    searchResult,
    setFilters,
    removeFilter,
  };
});
