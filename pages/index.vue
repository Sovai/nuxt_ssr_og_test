<template>
  <div>
    <h1>App</h1>
    <div
      class="iframe-wrapper"
      :style="{
        paddingTop: (324 / 560) * 100 + '%',
      }"
    >
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100075533516640%2Fvideos%2F1397025414246245%2F&show_text=false&width=560&t=0"
        width="560"
        height="314"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>
    </div>
    <div
      class="iframe-wrapper"
      :style="{
        paddingTop: (476 / 476) * 100 + '%',
      }"
    >
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61561254760287%2Fvideos%2F509136371607063%2F&show_text=false&width=476&t=0"
        width="476"
        height="476"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>
    </div>
    <div
      class="iframe-wrapper"
      :style="{
        paddingTop: (476 / 357) * 100 + '%',
      }"
    >
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FThethSopheng%2Fvideos%2F1039278550878089%2F&show_text=false&width=357&t=0"
        width="357"
        height="476"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>
    </div>
    <div
      class="iframe-wrapper"
      :style="{
        paddingTop: (476 / 476) * 100 + '%',
      }"
    >
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fpichsophankunkhmer%2Fvideos%2F1151658526042946%2F&show_text=false&width=476&t=0"
        width="476"
        height="476"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>
    </div>
    <div
      class="iframe-wrapper"
      :style="{
        paddingTop: (314 / 560) * 100 + '%',
      }"
    >
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fbophaktra%2Fvideos%2F1582330192350638%2F&show_text=false&width=560&t=0"
        width="560"
        height="314"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
const post = ref({
  title: "Hello World",
  description: "Hello World description",
  keywords: "hello, world",
  ogImage: "/og.jpeg",
  ogUrl: "https://ogimage-test.netlify.app/",
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
  ogImageUrl: () => post.value?.ogImage,
  ogUrl: () => post.value?.ogUrl,
  ogType: () => post.value?.ogType,
  twitterCard: () => post.value?.twitterCard,
  twitterSite: () => post.value?.twitterSite,
  twitterCreator: () => post.value?.twitterCreator,
});
</script>

<style scoped>
.iframe-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  touch-action: none;
}

.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
