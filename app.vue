<template>
  <div>
    <h1>App</h1>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "App",
  description: "App description",
  keywords: "app, vue, vue3, vite",
  ogImage:
    "https://news.pts.org.tw/live/newslab/uploads/5d56a3321fbd6_ddd1bab37e.jpg",
  ogUrl: "https://example.com",
  ogType: () => {
    // get current url
    return window.location.href || "https://opengragh.netlify.app/";
  },
  twitterCard: "summary_large_image",
  twitterSite: "@example",
  twitterCreator: "@example",
});
</script>

<style lang="scss" scoped></style>
