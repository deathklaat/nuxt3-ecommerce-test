<script lang="ts" setup>
import featuresData from '~/data/features.data';
import FeaturesSection from '~/components/home/FeaturesSection.vue';
import HeroSection from '~/components/home/HeroSection.vue';
import BestSellerSection from '~/components/home/BestSellerSection.vue';
import CategoriesCta from '~/components/home/CategoriesCta.vue';
import { useProductStore } from '~/store/products.store';
import ProductList from '~/components/home/ProductList.vue';

const productStore = useProductStore();
</script>

<template>
  <div>
    <HeroSection />
    <FeaturesSection :items="featuresData" />
    <BestSellerSection v-if="false" :items="productStore.bestSellers" />
    <CategoriesCta />
    <ProductList
      v-if="false"
      :featured="productStore.featuredProducts"
      :latest="productStore.latestProducts"
    />
  </div>
</template>
