<template>
  <div>
    <h1>ID</h1>
  </div>
</template>

<script setup>
const post = ref({
  title: "Hello World",
  description: "Hello World description",
  keywords: "hello, world",
  ogImage: "/og-2.jpg",
  ogUrl: "https://opengragh.netlify.app/post/13",
  ogType: "article",
  twitterCard: "summary_large_image",
  twitterSite: "@example",
  twitterCreator: "@example",
});
useSeoMeta({
  title: () => post.value?.title,
  description: () => post.value?.description,
  keywords: () => post.value?.keywords,
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.description,
  ogImage: () => post.value?.ogImage,
  ogUrl: () => post.value?.ogUrl,
  ogType: () => post.value?.ogType,
  twitterCard: () => post.value?.twitterCard,
  twitterSite: () => post.value?.twitterSite,
  twitterCreator: () => post.value?.twitterCreator,
});
</script>

<style lang="scss" scoped></style>
