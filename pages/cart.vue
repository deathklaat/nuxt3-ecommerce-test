<script lang="ts" setup>
import BreadCrumbs from '~/components/common/BreadCrumbs.vue';
import CartProduct from '~/components/product/CartProduct.vue';

const store = useProductStore();
const breadcrumbs = computed(() => [{ text: 'Ecommerce', href: '/' }, { text: 'Cart' }]);
</script>

<template>
  <section>
    <div class="w-full bg-white-100 pb-8">
      <div class="container xl:max-w-[1116px] mx-auto px-0 pb-2 pt-12">
        <span class="text-h3-lg font-bold text-black-900"> Cart </span>
      </div>
      <BreadCrumbs :items="breadcrumbs" />
    </div>
    <div
      class="container xl:max-w-[1116px] mx-auto px-0 pt-14 pb-[220px] mt-14 flex justify-between"
    >
      <div class="w-[628px]">
        <h1 class="text-h5-lg font-semibold text-black-900">Your cart</h1>

        <div class="mt-4 mb-12 bg-white-200 h-[1px] w-full" />

        <div class="flex flex-col gap-10">
          <CartProduct v-for="cart in store.cart" :key="cart.productId" v-bind="cart" />
        </div>
      </div>
      <div class="border border-black-100 rounded-sm px-6 py-8 w-[340px]">
        <p class="text-h5-lg font-semibold text-black-900">Order summary</p>

        <div class="flex flex-col gap-3 mt-10">
          <div class="flex justify-between">
            <span class="text-black-500 text-body-lg font-medium">Subtotal:</span>
            <span class="text-body-lg font-medium text-black-900">$90.00</span>
          </div>
          <div class="flex justify-between">
            <span class="text-black-500 text-body-lg font-medium">Shipping:</span>
            <span class="text-body-lg font-medium text-black-900">Free</span>
          </div>
          <div class="flex justify-between">
            <span class="text-black-500 text-body-lg font-medium">Tax</span>
            <span class="text-body-lg font-medium text-black-900">$3.00</span>
          </div>
        </div>

        <div class="w-full h-[1px] bg-black-100 my-6" />

        <div class="flex justify-between">
          <span class="text-black-500 text-body-lg font-medium">Total:</span>
          <span class="text-body-lg font-medium text-black-900">$190.00</span>
        </div>

        <Button class="mt-8 w-full h-11">
          <span class="text-body-lg"> Checkout </span>
        </Button>

        <div
          class="mt-6 text-black-900 font-medium underline text-center cursor-pointer text-h6-lg"
        >
          Continue Shopping
        </div>
      </div>
    </div>
  </section>
</template>
