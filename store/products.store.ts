import { defineStore } from 'pinia';
import { useSlugify } from '~/composables/slugify';
import type { CartProduct, OrderParams, ProductData } from '~/types/product.type';
import productData from '~/data/product.data';

const { toSlug } = useSlugify();

function sortByDateDesc(a: ProductData, b: ProductData): number {
  const dateA = new Date(a.createdAt).getTime();
  const dateB = new Date(b.createdAt).getTime();
  return dateB - dateA;
}

export const useProductStore = defineStore('products', () => {
  const products = ref<ProductData[]>(productData);
  const cart = ref<CartProduct[]>([]);
  const favoriteProductIds = ref<number[]>([]);

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

  const addToCart = (productId: number, orderParams: OrderParams) => {
    const cartProduct = cart.value.find((item) => item.productId === productId);

    if (cartProduct) {
      cartProduct.orderParams = orderParams;
    } else {
      cart.value.push({ productId, orderParams });
    }
  };

  const removeFromCart = (productId: number) => {
    const cartProduct = cart.value.find((item) => item.productId === productId);

    if (!cartProduct) return;

    if (cartProduct.orderParams.quantity === 1) {
      cart.value = cart.value.filter((item) => item.productId !== productId);
    } else {
      cartProduct.orderParams.quantity--;
    }
  };

  const isInCart = (productId: number) => !!cart.value.find((item) => item.productId === productId);

  const isInFavorites = (productId: number) => favoriteProductIds.value.includes(productId);

  const addToFavorites = (productId: number) => {
    if (isInFavorites(productId)) return;
    favoriteProductIds.value.push(productId);
  };

  const removeFromFavorites = (productId: number) => {
    favoriteProductIds.value = favoriteProductIds.value.filter((item) => item !== productId);
  };

  return {
    products,
    cart,
    favoriteProductIds,
    highestPrice,
    bestSellers,
    featuredProducts,
    latestProducts,
    similarProducts,
    getProductById,
    getProductBySlug,
    addToCart,
    removeFromCart,
    isInCart,
    addToFavorites,
    removeFromFavorites,
    isInFavorites,
  };
});
