<script lang="ts" setup>
import featuresData from '~/data/features.data';
import { useProductStore } from '~/store/products.store';

import FeaturesSection from '~/components/home/FeaturesSection.vue';
import HeroSection from '~/components/home/HeroSection.vue';
import BestSellerSection from '~/components/home/BestSellerSection.vue';
import CategoriesCta from '~/components/home/CategoriesCta.vue';
import ProductList from '~/components/home/ProductList.vue';

const store = useProductStore();
</script>

<template>
  <div>
    <HeroSection />
    <FeaturesSection :items="featuresData" />
    <BestSellerSection :items="store.bestSellers" />
    <CategoriesCta />
    <ProductList :featured="store.featuredProducts" :latest="store.latestProducts" />
  </div>
</template>
