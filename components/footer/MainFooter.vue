<script lang="ts" setup></script>

<template>
  <div
    class="container mx-auto xl:max-w-[1116px] mt-[74px] mb-[104px] flex items-start justify-between"
  >
    <div>
      <NuxtLink to="/" class="flex gap-4 items-center">
        <NuxtImg alt="logo" src="/logomark.svg" width="44" />
        <span class="font-manrope text-[20px] text-black-900 font-extrabold">
          Ecommerce
        </span>
      </NuxtLink>
      <div class="mt-3 text-body-lg text-black-500 max-w-[272px]">
        DevCut is a YouTube channel for practical project-based learning.
      </div>
      <div class="mt-8 flex items-center gap-6">
        <NuxtLink to="/">
          <NuxtImg src="./icons/github.svg" class="size-6" />
        </NuxtLink>
        <NuxtLink to="/">
          <NuxtImg src="./icons/instagram.svg" class="size-6" />
        </NuxtLink>
        <NuxtLink to="/">
          <NuxtImg src="./icons/youtube.svg" class="size-6" />
        </NuxtLink>
      </div>
    </div>
    <div class="flex items-center justify-between gap-[72px]">
      <div class="flex flex-col gap-4">
        <div class="text-body-lg font-medium text-black-300 uppercase mb-6">
          SUPPORT
        </div>
        <NuxtLink to="/" class="text-body-lg font-medium text-black-500">
          FAQ
        </NuxtLink>
        <NuxtLink to="/" class="text-body-lg font-medium text-black-500">
          Terms of use
        </NuxtLink>
        <NuxtLink to="/" class="text-body-lg font-medium text-black-500">
          Privacy Policy
        </NuxtLink>
      </div>
      <div class="flex flex-col gap-4">
        <div class="text-body-lg font-medium text-black-300 uppercase mb-6">
          COMPANY
        </div>
        <NuxtLink to="/" class="text-body-lg font-medium text-black-500">
          About us
        </NuxtLink>
        <NuxtLink to="/" class="text-body-lg font-medium text-black-500">
          Contact
        </NuxtLink>
        <NuxtLink to="/" class="text-body-lg font-medium text-black-500">
          Careers
        </NuxtLink>
      </div>
      <div class="flex flex-col gap-4">
        <div class="text-body-lg font-medium text-black-300 uppercase mb-6">
          SHOP
        </div>
        <NuxtLink to="/" class="text-body-lg font-medium text-black-500">
          My Account
        </NuxtLink>
        <NuxtLink to="/" class="text-body-lg font-medium text-black-500">
          Checkout
        </NuxtLink>
        <NuxtLink to="/" class="text-body-lg font-medium text-black-500">
          Cart
        </NuxtLink>
      </div>
    </div>
    <div>
      <div class="text-body-lg font-medium text-black-300 uppercase">
        ACCEPTED PAYMENTS
      </div>
      <div class="mt-10 flex items-center gap-6">
        <NuxtImg src="./icons/mastercard.svg" />
        <NuxtImg src="./icons/amex.svg" />
        <NuxtImg src="./icons/visa.svg" />
      </div>
    </div>
  </div>
</template>
