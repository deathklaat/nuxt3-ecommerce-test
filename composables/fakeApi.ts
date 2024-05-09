import { SortOptions } from '~/data/enums';
import type { ProductData, SearchParams } from '~/types/product.type';

type RequestBaseOptions = {
  itemsPerPage: number;
  pageNumber: number;
};

const DEFAULT_OPTIONS = { itemsPerPage: 10, pageNumber: 1 };

function intersection(a: any[], b: any[]) {
  const setA = new Set(a);
  return b.filter((value) => setA.has(value));
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

export const useFakeApi = () => {
  const store = useProductStore();

  const getProducts = (options: RequestBaseOptions = DEFAULT_OPTIONS) => {
    const start = (options.pageNumber - 1) * options.itemsPerPage;
    const end = options.pageNumber * options.itemsPerPage;
    return Promise.resolve({
      data: store.products.slice(start, end),
      itemsTotal: store.products.length,
      pagesTotal: Math.ceil(store.products.length / options.itemsPerPage),
    });
  };

  const search = (filters: SearchParams): Promise<ProductData[]> => {
    let result = [...store.products];

    if (filters.query) {
      result = result.filter((product) => product.title.includes?.(filters.query));
    }

    if (filters.categories?.length) {
      result = result.filter((product) => filters.categories?.includes?.(product.category));
    }

    if (filters.colors?.length) {
      result = result.filter((product) => {
        return intersection(product.colors, filters.colors || []).length > 0;
      });
    }

    if (filters.sizes?.length) {
      result = result.filter((product) => {
        return intersection(product.sizes, filters.sizes || []).length > 0;
      });
    }

    if (filters.priceRange?.length) {
      result = result.filter((product) => {
        const [minPrice, maxPrice] = filters.priceRange;
        if (!minPrice && !maxPrice) return true;
        return product.price >= minPrice && product.price <= maxPrice;
      });
    }

    // fake clone results to force pagination
    // const multipleResults = [];
    // for (let i = 0; i < 20; i++) {
    //   multipleResults.push(...result);
    // }

    switch (filters.sortOrder) {
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
        result.sort(sortNewest);
        break;
    }

    return Promise.resolve(result);
  };

  return {
    getProducts,
    search,
  };
};
