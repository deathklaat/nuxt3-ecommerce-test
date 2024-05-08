import { defineStore } from 'pinia';
import { useSlugify } from '~/composables/slugify';
import type { FilterType, ProductData, SearchParams } from '~/types/product.type';
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

  const bestSellers = computed<ProductData[]>(() => {
    return products.value.filter((p) => p.isBestSeller);
  });

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

  return {
    products,
    highestPrice,
    bestSellers,
    featuredProducts,
    latestProducts,
    similarProducts,
    getProductById,
    getProductBySlug,
  };
});
