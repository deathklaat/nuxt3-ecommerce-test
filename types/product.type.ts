import { Colors, Sizes } from '~/data/enums';

export type ProductReview = {
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
  description: string;
  inStock: boolean;
  isBestSeller: boolean;
  isFeatured: boolean;
  createdAt: string;
};
