<script lang="ts" setup>
import { navigationMenuTriggerStyle } from '~/components/ui/navigation-menu';

type NavLink = {
  text: string;
  href: string;
};

type NavLinkData = {
  text: string;
  href?: string;
  hrefs?: NavLink[];
};

const props = defineProps<{
  links: NavLinkData[];
}>();
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem v-for="(link, index) in props.links" :key="`link-${index}`">
        <template v-if="link.href">
          <NuxtLink :to="link.href">
            <NavigationMenuLink :class="navigationMenuTriggerStyle()">
              {{ link.text }}
            </NavigationMenuLink>
          </NuxtLink>
        </template>
        <template v-else>
          <NavigationMenuTrigger>{{ link.text }}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="flex flex-col items-center gap-2 w-max min-w-[200px]">
              <NuxtLink
                v-for="(subLink, subIndex) in link.hrefs"
                :key="`sublink-${index}-${subIndex}`"
                :to="subLink.href"
                class="px-4 py-3 hover:bg-accent/50 w-full"
              >
                <NavigationMenuLink :class="navigationMenuTriggerStyle()" as-child>
                  {{ subLink.text }}
                </NavigationMenuLink>
              </NuxtLink>
            </div>
          </NavigationMenuContent>
        </template>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
