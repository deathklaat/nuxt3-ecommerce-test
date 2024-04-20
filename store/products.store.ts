import { defineStore } from 'pinia';
import productData from '~/data/product.data';
import type { ProductData } from '~/types/product.type';

function sortByDateDesc(a: ProductData, b: ProductData): number {
  const dateA = new Date(a.createdAt).getTime();
  const dateB = new Date(b.createdAt).getTime();
  if (dateA > dateB) return -1;
  else if (dateA < dateB) return 1;
  return 0;
}

const initialValue: { products: ProductData[] } = {
  products: productData,
};

export const useProductStore = defineStore('products', {
  state: () => initialValue,
  getters: {
    bestSellers: (state): ProductData[] =>
      state.products.filter((p) => p.isBestSeller),
    featuredProducts: (state): ProductData[] =>
      state.products.filter((p) => p.isFeatured),
    latestProducts: (state): ProductData[] =>
      state.products.sort(sortByDateDesc),
    getProductById:
      (state) =>
      (id: number): ProductData =>
        state.products.find((p) => p.id === id)!,
  },
});
