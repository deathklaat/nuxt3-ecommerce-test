import { Colors, Sizes } from '~/data/enums';
import reviewsData from '~/data/reviews.data';
import type { ProductData } from '~/types/product.type';

const data: ProductData[] = [
  {
    id: 1,
    title: 'Classic Monochrome Tees',
    imgUrl: './images/products/product-id-1.jpg',
    price: 35,
    colors: [Colors.Blue, Colors.Yellow, Colors.Green],
    sizes: [Sizes.Small, Sizes.Medium, Sizes.Large],
    inStock: true,
    isBestSeller: true,
    isFeatured: false,
    createdAt: '2024-01-01 00:00:00',
    reviews: reviewsData,
    description: `
      <p>Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.</p>
      <p>The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.</p>
      <br />
      <br />
      <ul>
        <li>Premium Quality</li>
        <li>Versatile Wardrobe Staple</li>
        <li>Available in Various Sizes</li>
        <li>Tailored Fit</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: 'Monochromatic Wardrobe',
    imgUrl: './images/products/product-id-2.jpg',
    price: 27,
    colors: [Colors.Blue, Colors.Yellow, Colors.Green],
    sizes: [Sizes.Small, Sizes.Large, Sizes.ExtraLarge],
    inStock: true,
    isBestSeller: true,
    isFeatured: false,
    createdAt: '2024-01-12 00:00:00',
    reviews: reviewsData,
    description: `
      <p>Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.</p>
      <p>The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.</p>
      <br />
      <br />
      <ul>
        <li>Premium Quality</li>
        <li>Versatile Wardrobe Staple</li>
        <li>Available in Various Sizes</li>
        <li>Tailored Fit</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: 'Essential Neutrals',
    imgUrl: './images/products/product-id-3.jpg',
    price: 22,
    colors: [Colors.Blue, Colors.Yellow, Colors.Green],
    sizes: [Sizes.Medium, Sizes.Large, Sizes.ExtraLarge],
    inStock: true,
    isBestSeller: true,
    isFeatured: false,
    createdAt: '2024-01-02 00:00:00',
    reviews: reviewsData,
    description: `
      <p>Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.</p>
      <p>The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.</p>
      <br />
      <br />
      <ul>
        <li>Premium Quality</li>
        <li>Versatile Wardrobe Staple</li>
        <li>Available in Various Sizes</li>
        <li>Tailored Fit</li>
      </ul>
    `,
  },
  {
    id: 4,
    title: 'UTRAANET Black',
    imgUrl: './images/products/product-id-4.jpg',
    price: 43,
    colors: [Colors.Blue, Colors.Yellow, Colors.Green],
    sizes: [Sizes.Large, Sizes.ExtraExtraLarge],
    inStock: true,
    isBestSeller: true,
    isFeatured: false,
    createdAt: '2024-01-24 00:00:00',
    reviews: reviewsData,
    description: `
      <p>Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.</p>
      <p>The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.</p>
      <br />
      <br />
      <ul>
        <li>Premium Quality</li>
        <li>Versatile Wardrobe Staple</li>
        <li>Available in Various Sizes</li>
        <li>Tailored Fit</li>
      </ul>
    `,
  },
  {
    id: 5,
    title: 'Elegant Ebony Sweatshirts',
    imgUrl: './images/products/product-id-5.jpg',
    price: 35,
    colors: [Colors.Blue, Colors.Yellow, Colors.Green],
    sizes: [Sizes.Medium, Sizes.Large, Sizes.ExtraLarge],
    inStock: true,
    isBestSeller: false,
    isFeatured: true,
    createdAt: '2024-01-05 00:00:00',
    reviews: reviewsData,
    description: `
      <p>Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.</p>
      <p>The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.</p>
      <br />
      <br />
      <ul>
        <li>Premium Quality</li>
        <li>Versatile Wardrobe Staple</li>
        <li>Available in Various Sizes</li>
        <li>Tailored Fit</li>
      </ul>
    `,
  },
  {
    id: 6,
    title: 'Sleek and Cozy Black',
    imgUrl: './images/products/product-id-6.jpg',
    price: 57,
    colors: [Colors.Blue, Colors.Yellow, Colors.Green],
    sizes: [Sizes.Small, Sizes.Medium, Sizes.Large],
    inStock: true,
    isBestSeller: false,
    isFeatured: true,
    createdAt: '2024-01-17 00:00:00',
    reviews: reviewsData,
    description: `
      <p>Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.</p>
      <p>The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.</p>
      <br />
      <br />
      <ul>
        <li>Premium Quality</li>
        <li>Versatile Wardrobe Staple</li>
        <li>Available in Various Sizes</li>
        <li>Tailored Fit</li>
      </ul>
    `,
  },
  {
    id: 7,
    title: 'Raw Black Tees',
    imgUrl: './images/products/product-id-7.jpg',
    price: 19,
    colors: [Colors.Blue, Colors.Yellow, Colors.Green],
    sizes: [Sizes.Small, Sizes.Medium, Sizes.Large, Sizes.ExtraLarge],
    inStock: true,
    isBestSeller: false,
    isFeatured: true,
    createdAt: '2024-01-07 00:00:00',
    reviews: reviewsData,
    description: `
      <p>Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.</p>
      <p>The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.</p>
      <br />
      <br />
      <ul>
        <li>Premium Quality</li>
        <li>Versatile Wardrobe Staple</li>
        <li>Available in Various Sizes</li>
        <li>Tailored Fit</li>
      </ul>
    `,
  },
  {
    id: 8,
    title: 'Raw Black Tees',
    imgUrl: './images/products/product-id-8.jpg',
    price: 30,
    colors: [Colors.Blue, Colors.Yellow, Colors.Green],
    sizes: [Sizes.Small, Sizes.Medium, Sizes.Large, Sizes.ExtraLarge],
    inStock: true,
    isBestSeller: false,
    isFeatured: true,
    createdAt: '2023-01-01 00:00:00',
    reviews: reviewsData,
    description: `
      <p>Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.</p>
      <p>The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.</p>
      <br />
      <br />
      <ul>
        <li>Premium Quality</li>
        <li>Versatile Wardrobe Staple</li>
        <li>Available in Various Sizes</li>
        <li>Tailored Fit</li>
      </ul>
    `,
  },
];

export default data;
