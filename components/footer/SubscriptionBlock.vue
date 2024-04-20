<template>
  <div class="bg-white-100">
    <div
      class="container mx-auto xl:max-w-[1116px] py-[60px] flex flex-col lg:flex-row items-center justify-between"
    >
      <div class="flex flex-col gap-6">
        <h3 class="text-h3-lg font-bold text-black-900 text-center lg:text-left">
          Join Our Newsletter
        </h3>
        <div class="text-body-lg text-black-500 text-center lg:text-left">
          We love to surprise our subscribers with occasional gifts.
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row gap-4 items-center justify-center mt-4 lg:mt-0 text-body-lg text-black-500"
      >
        <Input
          id="subscribe-email"
          type="text"
          placeholder="Your email address"
          class="h-11 w-[320px]"
        />
        <Button class="flex gap-1.5 h-11 items-center px-6 w-full lg:w-auto"> Subscribe </Button>
      </div>
    </div>
  </div>
</template>
