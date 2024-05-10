import { Categories, Colors, Sizes, SortOptions } from '~/data/enums';

export type ProductReview = {
  id: number;
  firstName: string;
  lastName: string;
  publishedAt: string;
  rating: number;
  content: string;
};

export type ProductData = {
  id: number;
  title: string;
  imgUrl: string;
  price: number;
  colors: Colors[];
  sizes: Sizes[];
  reviews: ProductReview[];
  category: Categories;
  description: string;
  inStock: boolean;
  isBestSeller: boolean;
  isFeatured: boolean;
  createdAt: string;
};

export type OrderParams = {
  productId: number;
  size: Sizes;
  color: Colors;
  quantity: number;
};

export type SearchParams = {
  query: string;
  priceRange: [number, number];
  categories?: Categories[];
  colors?: Colors[];
  sizes?: Sizes[];
  sortOrder?: SortOptions;
};

export type FilterType = 'categories' | 'colors' | 'sizes' | 'priceRange';
