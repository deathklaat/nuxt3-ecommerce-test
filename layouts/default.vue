<script setup lang="ts">
import NotificationBar from '~/components/common/NotificationBar.vue';
import HeaderContainer from '~/components/common/HeaderContainer.vue';
import FooterContainer from '~/components/common/FooterContainer.vue';
</script>

<template>
  <div class="app-layout">
    <NotificationBar />
    <HeaderContainer />
    <slot />
    <FooterContainer v-if="false" />
  </div>
</template>
