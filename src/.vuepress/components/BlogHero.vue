<script setup lang="ts">
import BlogHero from "../../../node_modules/vuepress-theme-hope/lib/client/modules/blog/components/BlogHero";
import HitokotoBlogHero from "../../../node_modules/vuepress-theme-hope/lib/presets/HitokotoBlogHero";
// import BingHeroBackground from "../../../node_modules/vuepress-theme-hope/lib/presets/BingHeroBackground";
</script>

<template>
  <BlogHero>
    <template #heroInfo="heroInfo">
      <HitokotoBlogHero v-bind="heroInfo" />
    </template>
    <!-- <template #heroBg>
        <BingHeroBackground />
    </template> -->
  </BlogHero>
</template>