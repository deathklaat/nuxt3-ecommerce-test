<script setup lang="ts">
import BreadCrumbs from '~/components/common/BreadCrumbs.vue';
import SearchFilters from '~/components/search/SearchFilters.vue';
import SearchResults from '~/components/search/SearchResults.vue';

const breadcrumbs = computed(() => [
  {
    text: 'Ecommerce',
    href: '/',
  },
  {
    text: 'Search',
  },
]);
</script>

<template>
  <section>
    <div class="w-full bg-white-100">
      <BreadCrumbs :items="breadcrumbs" />
    </div>

    <div class="container xl:max-w-[1116px] mt-8 mx-auto px-0 py-4 flex gap-5">
      <SearchFilters />
      <SearchResults />
    </div>
  </section>
</template>
