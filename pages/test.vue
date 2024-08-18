<template>
  <div class="app-container flex flex-col bg-[#073e62]">
    <div class="flex-none">
      <!--[-->
      <header class="z-20">
        <div class="bg-[#073e62] w-full hidden lg:block">
          <div
            class="flex items-center justify-between mx-auto max-w-7xl py-2 px-6 lg:px-8"
          >
            <div class="inline-block cursor-pointer">
              <span class="sr-only">Your Company</span
              ><img
                onerror="this.setAttribute('data-error', 1)"
                alt="logo"
                data-nuxt-img=""
                class="wobble-hor-bottom text-white h-[80px] w-[80px] text-white h-[80px] w-[80px] mx-auto"
                src="https://api.whitetigertv-asia.com/uploads/images/1720350788801-40x40-No-Background.svg"
                srcset="
                  https://api.whitetigertv-asia.com/uploads/images/1720350788801-40x40-No-Background.svg 1x,
                  https://api.whitetigertv-asia.com/uploads/images/1720350788801-40x40-No-Background.svg 2x
                "
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              class="rounded-full w-8 h-8 bg-white/20 p-1.5 border border-white/60 text-white text-2xl cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"
              ></path>
            </svg>
          </div>
        </div>
        <div class="">
          <nav
            class="bg-brand dark:bg-slate-800 mx-auto max-w-7xl flex items-center justify-between px-4 md:px-8 lg:px-8"
            aria-label="Global"
          >
            <div class="lg:hidden pt-2 pb-1">
              <div class="inline-block">
                <img
                  onerror="this.setAttribute('data-error', 1)"
                  alt="logo"
                  data-nuxt-img=""
                  class="wobble-hor-bottom text-white h-[80px] w-[80px] text-white h-[80px] w-[80px] mx-auto"
                  src="https://api.whitetigertv-asia.com/uploads/images/1720350788801-40x40-No-Background.svg"
                  srcset="
                    https://api.whitetigertv-asia.com/uploads/images/1720350788801-40x40-No-Background.svg 1x,
                    https://api.whitetigertv-asia.com/uploads/images/1720350788801-40x40-No-Background.svg 2x
                  "
                />
              </div>
            </div>
            <div class="flex items-center gap-x-12">
              <div class="hidden lg:flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  class="text-white text-2xl mr-2 cursor-pointer"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path
                      d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"
                    ></path>
                    <path
                      d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"
                    ></path>
                  </g></svg
                ><!--[--><a
                  href="/categories/national-news"
                  class="py-3 px-4 lg:px-6 text-sm font-semibold leading-6 text-white dark:text-gray-300"
                  >ព័ត៌មានជាតិ</a
                ><a
                  href="/categories/internation-news"
                  class="py-3 px-4 lg:px-6 text-sm font-semibold leading-6 text-white dark:text-gray-300"
                  >ព័ត៌មានអន្តរជាតិ</a
                ><a
                  href="/categories/social-security-news"
                  class="py-3 px-4 lg:px-6 text-sm font-semibold leading-6 text-white dark:text-gray-300"
                  >សន្តិសុខសង្គម</a
                ><a
                  href="/categories/entertainment-art-news"
                  class="py-3 px-4 lg:px-6 text-sm font-semibold leading-6 text-white dark:text-gray-300"
                  >ពីនេះពីនោះ</a
                ><a
                  href="/categories/technology-news"
                  class="py-3 px-4 lg:px-6 text-sm font-semibold leading-6 text-white dark:text-gray-300"
                  >បច្ចេកវិទ្យា</a
                ><a
                  href="/categories/sport-health-news"
                  class="py-3 px-4 lg:px-6 text-sm font-semibold leading-6 text-white dark:text-gray-300"
                  >កីឡា-សុខភាព</a
                ><a
                  href="/categories/other-general-news"
                  class="py-3 px-4 lg:px-6 text-sm font-semibold leading-6 text-white dark:text-gray-300"
                  >វិភាគផ្សេងៗ</a
                ><!--]-->
              </div>
            </div>
            <div class="flex lg:hidden">
              <button
                type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-1 text-gray-300 border border-white/60"
              >
                <span class="sr-only">Open main menu</span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="h-8 w-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="hidden lg:flex">
              <div
                class="flex items-center gap-x-4 w-full cursor-pointer leading-7 text-white dark:text-gray-300 lg:hover:dark:text-gray-500 lg:hover:bg-transparent"
                data-v-7e2f463f=""
              >
                <svg
                  style=""
                  xmlns="http://www.w3.org/2000/svg"
                  class="theme-icon"
                  viewBox="0 0 256 256"
                  data-v-7e2f463f=""
                >
                  <g fill="currentColor" data-v-7e2f463f="">
                    <path
                      d="M184 128a56 56 0 1 1-56-56a56 56 0 0 1 56 56"
                      opacity="0.2"
                      data-v-7e2f463f=""
                    ></path>
                    <path
                      d="M120 40v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-8-8a8 8 0 0 0-11.32 11.32Zm0 116.68l-8 8a8 8 0 0 0 11.32 11.32l8-8a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l8-8a8 8 0 0 0-11.32-11.32l-8 8A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l8 8a8 8 0 0 0 11.32-11.32ZM40 120h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16m88 88a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8m96-88h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16"
                      data-v-7e2f463f=""
                    ></path>
                  </g></svg
                ><svg
                  style="display: none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="theme-icon"
                  viewBox="0 0 256 256"
                  data-v-7e2f463f=""
                >
                  <path
                    fill="currentColor"
                    d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98m-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4"
                    data-v-7e2f463f=""
                  ></path>
                </svg>
                <div class="lg:hidden" data-v-7e2f463f="">
                  <div data-v-7e2f463f="">ផ្ទៃភ្លឺ</div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!---->
      </header>
      <!----><!--]-->
    </div>
    <div class="flex-1 overflow-y-auto">
      <div class="min-h-full">
        <!--[-->
        <div class="standard-container pt-4 pb-6">
          <div class="flex flex-col gap-1">
            <!--[--><img
              class="rounded-md w-full object-cover"
              src="https://api.whitetigertv-asia.com/uploads/images/1720362073645-q80bregkw3.gif"
              alt="Boostrong"
            /><!--]-->
          </div>
          <h2
            class="inline-block text-brand dark:text-gray-100 font-bold hanuman text-[20px] text-brand3 dark:text-gray-30 mt-6 mb-3 pb-3 border-b border-[#eee]"
          >
            <!----><!--[-->ហាមលុប - test crop image
            <!--]-->
          </h2>
          <div class="dark:text-gray-300">
            <div class="font-semibold text-sm">បច្ចេកវិទ្យា</div>
            <div
              class="text-xs text-gray-500 dark:text-gray-300 flex items-center gap-x-1 mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8 13.885q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23M5.615 21q-.69 0-1.152-.462T4 19.385V6.615q0-.69.463-1.152T5.615 5h1.77V2.77h1.077V5h7.153V2.77h1V5h1.77q.69 0 1.152.463T20 6.615v12.77q0 .69-.462 1.152T18.385 21zm0-1h12.77q.23 0 .423-.192t.192-.423v-8.77H5v8.77q0 .23.192.423t.423.192"
                ></path>
              </svg>
              ចុះថ្សាយថ្ងៃ​ ចន្ទ ០៥-សីហា-២០២៤
            </div>
            <!---->
          </div>
          <div
            class="flex flex-col md:flex-row items-start justify-between gap-x-6"
          >
            <div class="flex-grow">
              <article
                class="hanuman subpixel-antialiased text-base min-h-[40vh] mt-6 text-pretty dark:text-gray-300 leading-[170%]"
              >
                <div>
                  <div
                    class="iframe-wrapper mx-auto video-landscape"
                    style="padding-top: 56.07142857142857%"
                  >
                    <iframe
                      src="https://www.facebook.com/plugins/video.php?height=314&amp;href=https%3A%2F%2Fwww.facebook.com%2Fbophaktra%2Fvideos%2F1582330192350638%2F&amp;show_text=false&amp;width=560&amp;t=0"
                      frameborder="0"
                      allowfullscreen="true"
                      height="314"
                      width="100%"
                      class="mx-auto video-landscape"
                      paddingtop="56.07142857142857%"
                    ></iframe>
                  </div>
                  <p>test123</p>
                  <div
                    class="iframe-wrapper mx-auto video-portrait"
                    style="padding-top: 178.27715355805242%"
                  >
                    <iframe
                      src="https://www.facebook.com/plugins/video.php?height=476&amp;href=https%3A%2F%2Fwww.facebook.com%2Fchris.altherr.54%2Fvideos%2F426689060088228%2F&amp;show_text=false&amp;width=267&amp;t=0"
                      frameborder="0"
                      allowfullscreen="true"
                      height="476"
                      width="267"
                      class="mx-auto video-portrait"
                      paddingtop="178.27715355805242%"
                    ></iframe>
                  </div>
                </div>
                <div class="w-full flex flex-col gap-4">
                  <!--[--><!--]--><!---->
                </div>
              </article>
              <hr class="my-4 border-dashed" />
              <div
                class="dark:text-gray-300 flex flex-col gap-6 md:flex-row items-start md:items-center justify-between"
              >
                <div>
                  <div><span class="font-semibold">អត្ថបទ៖ </span> Sovai</div>
                  <!---->
                </div>
                <div class="flex items-center gap-x-2 mt-2 flex-wrap shrink-0">
                  <div class="font-semibold mr-3">ចែករំលែក</div>
                  <!--[--><a
                    class="social-share-button social-share-button--facebook social-share-button--styled text-white cursor-pointer rounded-md"
                    href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3001/posts/test"
                    style="--color-brand: #0866ff"
                    aria-label="Share with Facebook"
                    target="_blank"
                    ><svg
                      class="social-share-button__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                      ></path></svg
                    ><!----></a
                  ><a
                    class="social-share-button social-share-button--telegram social-share-button--styled text-white cursor-pointer rounded-md"
                    href="https://t.me/share/url?url=http://localhost:3001/posts/test"
                    style="--color-brand: #26a5e4"
                    aria-label="Share with Telegram"
                    target="_blank"
                    ><svg
                      class="social-share-button__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="currentColor"
                        d="M41.42 7.309s3.885-1.515 3.56 2.164c-.107 1.515-1.078 6.818-1.834 12.553l-2.59 16.99s-.216 2.489-2.159 2.922c-1.942.432-4.856-1.515-5.396-1.948c-.432-.325-8.094-5.195-10.792-7.575c-.756-.65-1.62-1.948.108-3.463L33.649 18.13c1.295-1.3 2.59-4.33-2.806-.65l-15.11 10.28s-1.727 1.083-4.964.109l-7.016-2.165s-2.59-1.623 1.835-3.246c10.793-5.086 24.068-10.28 35.831-15.15"
                      ></path></svg
                    ><!----></a
                  ><a
                    class="social-share-button social-share-button--twitter social-share-button--styled text-white cursor-pointer rounded-md"
                    href="https://twitter.com/intent/tweet?url=http://localhost:3001/posts/test&amp;hashtags=WhiteTigerTVAsia,ខ្លាសអាសុីធីវី"
                    style="--color-brand: #000000"
                    aria-label="Share with Twitter"
                    target="_blank"
                    ><svg
                      class="social-share-button__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                      ></path></svg
                    ><!----></a
                  ><a
                    class="social-share-button social-share-button--linkedin social-share-button--styled text-white cursor-pointer rounded-md"
                    href="https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3001/posts/test"
                    style="--color-brand: #0a66c2"
                    aria-label="Share with Linkedin"
                    target="_blank"
                    ><svg
                      class="social-share-button__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                      ></path></svg
                    ><!----></a
                  ><a
                    class="social-share-button social-share-button--line social-share-button--styled text-white cursor-pointer rounded-md"
                    href="https://line.me/R/share?text=http://localhost:3001/posts/test"
                    style="--color-brand: #06c655"
                    aria-label="Share with Line"
                    target="_blank"
                    ><svg
                      class="social-share-button__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18.664 10.84a.526.526 0 0 1-.526.525h-1.462v.938h1.463a.525.525 0 1 1 0 1.049H16.15a.526.526 0 0 1-.522-.524V8.852c0-.287.235-.525.525-.525h1.988a.526.526 0 0 1-.002 1.05h-1.463v.938h1.463c.29 0 .524.237.524.525m-4.098 2.485a.54.54 0 0 1-.166.025a.515.515 0 0 1-.425-.208l-2.036-2.764v2.45a.525.525 0 0 1-1.047 0V8.852a.522.522 0 0 1 .52-.523c.162 0 .312.086.412.211l2.052 2.775V8.852c0-.287.235-.525.525-.525c.287 0 .525.238.525.525v3.976a.524.524 0 0 1-.36.497m-4.95.027a.526.526 0 0 1-.523-.524V8.852c0-.287.235-.525.525-.525c.289 0 .524.238.524.525v3.976a.527.527 0 0 1-.526.524m-1.53 0H6.099a.528.528 0 0 1-.525-.524V8.852c0-.287.238-.525.525-.525c.29 0 .525.238.525.525v3.45h1.464a.525.525 0 0 1 0 1.05m3.915-10.78c-5.513 0-10 3.643-10 8.118c0 4.01 3.558 7.369 8.363 8.007c.325.068.769.215.881.492c.1.25.066.638.032.9l-.137.85c-.037.25-.2.988.874.537c1.076-.449 5.764-3.398 7.864-5.812C21.314 14.089 22 12.477 22 10.69c0-4.475-4.488-8.118-10-8.118"
                      ></path></svg
                    ><!----></a
                  ><a
                    class="social-share-button social-share-button--email social-share-button--styled text-white cursor-pointer rounded-md"
                    href="mailto:?body=http://localhost:3001/posts/test"
                    style="--color-brand: #7e7e7e"
                    aria-label="Share with Email"
                    target="_blank"
                    ><svg
                      class="social-share-button__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"
                      ></path></svg
                    ><!----></a
                  ><!--]-->
                </div>
              </div>
              <div class="flex flex-col gap-1 mt-6">
                <!--[--><img
                  class="rounded-md w-full object-cover"
                  src="https://api.whitetigertv-asia.com/uploads/images/1720362073645-q80bregkw3.gif"
                  alt="Boostrong"
                /><!--]-->
              </div>
              <div class="hidden lg:block">
                <hr class="my-4" />
                <h2
                  class="inline-block text-brand dark:text-gray-100 font-bold hanuman text-sm"
                >
                  <span
                    class="inline-block h-5 border-l-3 border-brand border-4 mr-2"
                  ></span
                  ><!--[-->អត្ថបទស្រដៀងគ្នា<!--]-->
                </h2>
                <div
                  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4"
                >
                  <!--[--><a
                    href="/posts/21-07-2024-06-08-01-94586156"
                    class="flex gap-x-4 md:block relative mt-5"
                    ><img
                      src="https://api.whitetigertv-asia.com/uploads/images/1721542014735-photo_2024-07-21_13-06-47.jpg"
                      class="hidden lg:block shrink-0 w-[95px] md:w-full h-[95px] md:h-[120px] rounded-md object-cover"
                      alt=""
                    />
                    <div>
                      <div
                        class="hanuman leading-relaxed font-semibold lg:mt-4 text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 lg:ms-0 line-clamp-4"
                      >
                        សម្តេចធិបតី ហ៊ុន ម៉ាណែត៖ បច្ចេកវិទ្យា និងវិទ្យាសាស្ត្រ
                        បានជួយផ្សព្វផ្សាយអំពីប្រាង្គប្រាសាទបុរាណអង្គរទៅកាន់ពិភពលោក
                      </div>
                    </div></a
                  ><a
                    href="/posts/21-07-2024-05-56-55-90063871"
                    class="flex gap-x-4 md:block relative mt-5"
                    ><img
                      src="https://api.whitetigertv-asia.com/uploads/images/1721541383821-photo_2024-07-21_12-56-14.jpg"
                      class="hidden lg:block shrink-0 w-[95px] md:w-full h-[95px] md:h-[120px] rounded-md object-cover"
                      alt=""
                    />
                    <div>
                      <div
                        class="hanuman leading-relaxed font-semibold lg:mt-4 text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 lg:ms-0 line-clamp-4"
                      >
                        សមាគមសិល្បករខ្មែរ បង្ហាញលេខ QR Code របស់ CoolApp
                        ឱ្យសាធារណជនងាយស្រួលទាក់ទងជាមួយសមាគមដើម្បីសាកសួរ
                        និងផ្តល់ព័ត៌មានផ្សេងៗ
                      </div>
                    </div></a
                  ><a
                    href="/posts/09-07-2024-12-00-42-42624156"
                    class="flex gap-x-4 md:block relative mt-5"
                    ><img
                      src="https://api.whitetigertv-asia.com/uploads/images/1720526408274-photo_2024-07-09_18-52-58.jpg"
                      class="hidden lg:block shrink-0 w-[95px] md:w-full h-[95px] md:h-[120px] rounded-md object-cover"
                      alt=""
                    />
                    <div>
                      <div
                        class="hanuman leading-relaxed font-semibold lg:mt-4 text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 lg:ms-0 line-clamp-4"
                      >
                        នាយកដ្ឋានប្រឆាំងបទល្មើសបច្ចេកវិទ្យា
                        ក្រើនរំលឹកសាធារណៈជនទាំងអស់ ចំពោះការផ្តល់កម្ចីជាអាជីវកម្ម
                        ជូនប្រជាពលរដ្ឋដោយគ្មានការអនុញ្ញាតជាអំពើខុសច្បាប់
                      </div>
                    </div></a
                  ><a
                    href="/posts/09-07-2024-11-40-51-30788437"
                    class="flex gap-x-4 md:block relative mt-5"
                    ><img
                      src="https://api.whitetigertv-asia.com/uploads/images/1720525230140-photo_2024-07-09_18-39-55.jpg"
                      class="hidden lg:block shrink-0 w-[95px] md:w-full h-[95px] md:h-[120px] rounded-md object-cover"
                      alt=""
                    />
                    <div>
                      <div
                        class="hanuman leading-relaxed font-semibold lg:mt-4 text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 lg:ms-0 line-clamp-4"
                      >
                        នាយកដ្ឋានប្រឆាំងបទល្មើសបច្ចេកវិទ្យា ទាត់ចោលការរិះគន់ថា
                        អសកម្មការងារ
                      </div>
                    </div></a
                  ><!--]-->
                </div>
              </div>
            </div>
            <div
              class="hidden lg:block mt-6 md:mt-0 shrink-0 w-full md:w-[250px] lg:w-[360px] md:top-2"
            >
              <!--[-->
              <div class="mb-5">
                <h2
                  class="inline-block text-brand dark:text-gray-100 font-bold hanuman text-sm"
                >
                  <span
                    class="inline-block h-5 border-l-3 border-brand border-4 mr-2"
                  ></span
                  ><!--[-->អត្ថបទពេញនិយម<!--]-->
                </h2>
                <!--[--><a
                  href="/posts/17-08-2024-06-54-23-79902861"
                  class="relative mt-5 flex items-start"
                  ><img
                    src="https://api.whitetigertv-asia.com/uploads/images/1723877459144-cropped.jpeg"
                    class="hidden lg:block shrink-0 w-[95px] h-[95px] rounded-md object-cover"
                    alt=""
                  />
                  <div>
                    <div
                      class="hanuman leading-relaxed font-semibold text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 line-clamp-4"
                    >
                      សេចក្ដីថ្លែងការណ៍ របស់រដ្ឋបាលខណ្ឌមានជ័យ
                      ប្រកាសស្មោះត្រង់ឥតងាករេចំពោះរាជរដ្ឋាភិបាលកម្ពុជា
                      ដឹកនាំដោយសម្ដេចធិបតី ហ៊ុន ម៉ាណែត
                      និងប្ដេជ្ញាការពារសុខសន្តិភាព ស្ថិរភាពនយោបាយ
                      អធិបតេយ្យភាពជាតិ និងបូរណភាពទឹកដី ទោះក្នុងតម្លៃណាក៏ដោយ
                    </div>
                  </div></a
                ><a
                  href="/posts/12-08-2024-10-51-59-42520286"
                  class="relative mt-5 flex items-start"
                  ><img
                    src="https://api.whitetigertv-asia.com/uploads/images/1723459784919-photo_2024-08-12_17-49-37.jpg"
                    class="hidden lg:block shrink-0 w-[95px] h-[95px] rounded-md object-cover"
                    alt=""
                  />
                  <div>
                    <div
                      class="hanuman leading-relaxed font-semibold text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 line-clamp-4"
                    >
                      អភិបាលខណ្ឌព្រែកព្នៅ៖ ការចុះបញ្ជីដីធ្លី
                      (ផ្ដល់ប័ណ្ណកម្មសិទ្ធិ) ជាការរួមចំណែកយ៉ាងសំខាន់ជាមួយក្រសួង
                      និងរាជរដ្ឋាភិបាល សម្រាប់កាត់បន្ថយភាពក្រីក្រ ជូនប្រជាពលរដ្ឋ
                    </div>
                  </div></a
                ><a
                  href="/posts/11-08-2024-10-06-49-69444167"
                  class="relative mt-5 flex items-start"
                  ><img
                    src="https://api.whitetigertv-asia.com/uploads/images/1723370790196-IMG_9615.jpeg"
                    class="hidden lg:block shrink-0 w-[95px] h-[95px] rounded-md object-cover"
                    alt=""
                  />
                  <div>
                    <div
                      class="hanuman leading-relaxed font-semibold text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 line-clamp-4"
                    >
                      អ្នកនាំពាក្យ ថ្លែងអំពីសកម្មភាព និងគោលការណ៍ណែនាំសំខាន់ៗរបស់
                      ឯកឧត្តមអភិសន្តិបណ្ឌិត ស សុខា ប្រចាំសប្ដាហ៍ ពីថ្ងៃទី០៤-០៩
                      ខែសីហា ឆ្នាំ២០២៤
                    </div>
                  </div></a
                ><a
                  href="/posts/13-08-2024-15-57-56-50287135"
                  class="relative mt-5 flex items-start"
                  ><img
                    src="https://api.whitetigertv-asia.com/uploads/images/1723563634688-photo_2024-08-13_22-40-21.jpg"
                    class="hidden lg:block shrink-0 w-[95px] h-[95px] rounded-md object-cover"
                    alt=""
                  />
                  <div>
                    <div
                      class="hanuman leading-relaxed font-semibold text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 line-clamp-4"
                    >
                      ប្រធាន អនុប្រធាន និងមន្ត្រីការិយាល័យផែនការ
                      និងហិរញ្ញវត្ថុទាំងអស់ នៃរដ្ឋបាលខណ្ឌឫស្សីកែវ
                      ប្រកាសគាំទ្រសារសម្លេងពិសេសសម្ដេចតេជោ ហ៊ុន សែន
                      ពន្យល់បន្ថែមអំពីកិច្ចសហប្រតិបត្តិការតំបន់ត្រីកោណអភិឌ្ឍន៍
                      កម្ពុជា-ឡាវ-វៀតណាម (CLV-DTA)
                    </div>
                  </div></a
                ><a
                  href="/posts/12-08-2024-07-11-29-75751340"
                  class="relative mt-5 flex items-start"
                  ><img
                    src="https://api.whitetigertv-asia.com/uploads/images/1723446658945-photo_2024-08-12_14-10-38.jpg"
                    class="hidden lg:block shrink-0 w-[95px] h-[95px] rounded-md object-cover"
                    alt=""
                  />
                  <div>
                    <div
                      class="hanuman leading-relaxed font-semibold text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 line-clamp-4"
                    >
                      វីដេអូ សង្ខេបសកម្មភាពរបស់ សម្តេចធិបតី ហ៊ុន ម៉ាណែត
                      ពីថ្ងៃទី0៥-១១ ខែសីហា ឆ្នាំ២០២៤
                    </div>
                  </div></a
                ><a
                  href="/posts/10-08-2024-16-47-43-27866539"
                  class="relative mt-5 flex items-start"
                  ><img
                    src="https://api.whitetigertv-asia.com/uploads/images/1723308103025-photo_2024-08-10_23-41-33.jpg"
                    class="hidden lg:block shrink-0 w-[95px] h-[95px] rounded-md object-cover"
                    alt=""
                  />
                  <div>
                    <div
                      class="hanuman leading-relaxed font-semibold text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 line-clamp-4"
                    >
                      អធិការនគរបាលខណ្ឌឬស្សីកែវ
                      បើកកិច្ចប្រជុំផ្សព្វផ្សាយឈ្វេងយល់ពីក្របខ័ណ្ឌ
                      នៃកិច្ចសហប្រតិបត្តិការអភិវឌ្ឍន៍ តំបន់ត្រីកោណ
                      កម្ពុជា-ឡាវ-វៀតណាម (CLV-DTA) &nbsp;
                    </div>
                  </div></a
                ><!--]-->
                <hr class="mt-6" />
              </div>
              <div class="mb-5">
                <h2
                  class="inline-block text-brand dark:text-gray-100 font-bold hanuman text-sm"
                >
                  <span
                    class="inline-block h-5 border-l-3 border-brand border-4 mr-2"
                  ></span
                  ><!--[-->វីដេអូ<!--]-->
                </h2>
                <!--[--><a
                  href="/posts/15-08-2024-05-43-55-57096160"
                  class="relative mt-5 flex items-start"
                  ><img
                    src="https://api.whitetigertv-asia.com/uploads/images/1723700501561-cropped.jpeg"
                    class="hidden lg:block shrink-0 w-[95px] h-[95px] rounded-md object-cover"
                    alt=""
                  />
                  <div>
                    <div
                      class="hanuman leading-relaxed font-semibold text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 line-clamp-4"
                    >
                      ឧត្តមសេនីយ៍ទោ សែម គន្ធា តំណាងនាយឧត្តមសេនីយ៍ ស ថេត
                      នាំយកអំណោយរបស់អភិសន្តិបណ្ឌិត ស សុខា និងលោកជំទាវ
                      ឧបត្ថម្ភលើកទឹកចិត្តមន្ត្រីឈរជើងការពារឃ្លាំងរំសេវ
                      និងគ្រឿងផ្ទុះ វិស្វកម្មស៊ីវិលកម្ពុជា នៅស្រុកកំពង់សិលា
                      ខេត្តព្រះសីហនុ &nbsp;
                    </div>
                  </div></a
                ><a
                  href="/posts/12-08-2024-05-52-13-73850178"
                  class="relative mt-5 flex items-start"
                  ><img
                    src="https://api.whitetigertv-asia.com/uploads/images/1723440869657-photo_2024-08-12_12-34-15.jpg"
                    class="hidden lg:block shrink-0 w-[95px] h-[95px] rounded-md object-cover"
                    alt=""
                  />
                  <div>
                    <div
                      class="hanuman leading-relaxed font-semibold text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 line-clamp-4"
                    >
                      លោកជំទាវ កែ សួនសុភី
                      ត្រូវបានតែងតាំងជាប្រធានកិត្តិយសសមាគមនារីកម្ពុជា
                      ដើម្បីសន្តិភាពនិងអភិវឌ្ឍន៍ ក្រសួងមហាផ្ទៃ
                    </div>
                  </div></a
                ><a
                  href="/posts/11-08-2024-10-06-49-69444167"
                  class="relative mt-5 flex items-start"
                  ><img
                    src="https://api.whitetigertv-asia.com/uploads/images/1723370790196-IMG_9615.jpeg"
                    class="hidden lg:block shrink-0 w-[95px] h-[95px] rounded-md object-cover"
                    alt=""
                  />
                  <div>
                    <div
                      class="hanuman leading-relaxed font-semibold text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 line-clamp-4"
                    >
                      អ្នកនាំពាក្យ ថ្លែងអំពីសកម្មភាព និងគោលការណ៍ណែនាំសំខាន់ៗរបស់
                      ឯកឧត្តមអភិសន្តិបណ្ឌិត ស សុខា ប្រចាំសប្ដាហ៍ ពីថ្ងៃទី០៤-០៩
                      ខែសីហា ឆ្នាំ២០២៤
                    </div>
                  </div></a
                ><a
                  href="/posts/11-08-2024-09-35-11-50053679"
                  class="relative mt-5 flex items-start"
                  ><img
                    src="https://api.whitetigertv-asia.com/uploads/images/1723368852947-IMG_9614.jpeg"
                    class="hidden lg:block shrink-0 w-[95px] h-[95px] rounded-md object-cover"
                    alt=""
                  />
                  <div>
                    <div
                      class="hanuman leading-relaxed font-semibold text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 line-clamp-4"
                    >
                      ឯកឧត្តមអភិសន្តិបណ្ឌិត ស សុខា ចាត់ទុកប្រព័ន្ធ Cambodia
                      e-Arrival ជាសមិទ្ធផលរួម ដើម្បីទាក់ទាញភ្ញៀវទេសចរ
                      និងពង្រឹងសន្តិសុខក្នុងបរិបទឌីជីថល
                    </div>
                  </div></a
                ><a
                  href="/posts/06-08-2024-09-38-06-06404443"
                  class="relative mt-5 flex items-start"
                  ><img
                    src="https://api.whitetigertv-asia.com/uploads/images/1722937063723-photo_2024-08-06_16-35-48.jpg"
                    class="hidden lg:block shrink-0 w-[95px] h-[95px] rounded-md object-cover"
                    alt=""
                  />
                  <div>
                    <div
                      class="hanuman leading-relaxed font-semibold text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 line-clamp-4"
                    >
                      អភិសន្តិបណ្ឌិត ស សុខា ផ្ញើសារលិខិតគោរពជូនពរសម្តេចតេជោ ហ៊ុន
                      សែន ក្នុងឱកាសចម្រើនជន្មាយុ
                    </div>
                  </div></a
                ><a
                  href="/posts/06-08-2024-08-58-20-93260798"
                  class="relative mt-5 flex items-start"
                  ><img
                    src="https://api.whitetigertv-asia.com/uploads/images/1722934677734-photo_2024-08-06_15-30-47.jpg"
                    class="hidden lg:block shrink-0 w-[95px] h-[95px] rounded-md object-cover"
                    alt=""
                  />
                  <div>
                    <div
                      class="hanuman leading-relaxed font-semibold text-brand3 dark:text-brand2 text-sm cursor-pointer hover:underline flex-grow ms-3 line-clamp-4"
                    >
                      សម្ដេចធិបតី ហ៊ុន ម៉ាណែត៖
                      នៅតាមព្រំដែនរាជរដ្ឋាភិបាលធ្វើផ្លូវពីរខ្សែ
                      «ទីមួយគឺផ្លូវសេដ្ឋកិច្ច និងទីពីរគឺផ្លូវការពារជាតិ»
                    </div>
                  </div></a
                ><!--]--><!---->
              </div>
              <!--]-->
            </div>
          </div>
        </div>
        <!----><!--]-->
      </div>
      <div class="flex-none">
        <footer class="">
          <div
            class="bg-brand dark:bg-slate-800 mx-auto max-w-7xl px-6 py-6 md:py-12 md:flex md:items-center md:justify-between lg:px-8"
          >
            <div class="mt-8 md:mt-0 max-w-xs">
              <div class="flex items-center gap-x-4">
                <img
                  onerror="this.setAttribute('data-error', 1)"
                  alt="logo"
                  data-nuxt-img=""
                  class="wobble-hor-bottom text-white h-[80px] w-[80px] text-white h-[80px] w-[80px] cursor-pointer"
                  src="https://api.whitetigertv-asia.com/uploads/images/1720350788801-40x40-No-Background.svg"
                  srcset="
                    https://api.whitetigertv-asia.com/uploads/images/1720350788801-40x40-No-Background.svg 1x,
                    https://api.whitetigertv-asia.com/uploads/images/1720350788801-40x40-No-Background.svg 2x
                  "
                />
                <div class="cursor-pointer">
                  <div class="text-lg text-white">ខ្លាសអាសុី-ធីវី</div>
                  <div class="text-gray-200 text-xs">
                    www.whitetigertv-asia.com
                  </div>
                </div>
              </div>
              <div class="mt-6 text-gray-100 text-base">អាសយដ្ឋាន</div>
              <p class="text-base leading-5 text-gray-400 dark:text-gray-200">
                ផ្ទះលេខ០៩H ភូមិអន្លង់ក្ងាន សង្កាត់ឃ្មួញ ខណ្ឌសែនសុខ
                រាជធានីភ្នំពេញ។
              </p>
            </div>
            <div>
              <div class="mt-6 md:mt-0">
                <div class="text-gray-100 text-base mb-2 md:mb-4 font-semibold">
                  ជួបគ្នានៅបណ្តាញសង្គម
                </div>
                <div class="grid grid-cols-6 gap-2">
                  <!--[--><a
                    href="https://www.facebook.com/profile.php?id=100076078246820&amp;mibextid=ZbWKwL"
                    class="#2563eb text-white hover:opacity-65"
                    target="_blank"
                    ><span class="sr-only">Facebook</span
                    ><img
                      src="https://api.whitetigertv-asia.com/uploads/images/1720491946925-facebook.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                      alt="Facebook" /></a
                  ><a
                    href="https://www.facebook.com/profile.php?id=100081111441655&amp;mibextid=ZbWKwL"
                    class="#dc2626 text-white hover:opacity-65"
                    target="_blank"
                    ><span class="sr-only">Facebook Live</span
                    ><img
                      src="https://api.whitetigertv-asia.com/uploads/images/1720491955733-facebook_live.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                      alt="Facebook Live" /></a
                  ><a
                    href="https://youtube.com/@DBTV-dq9"
                    class="#dc2626 text-white hover:opacity-65"
                    target="_blank"
                    ><span class="sr-only">Youtube</span
                    ><img
                      src="https://api.whitetigertv-asia.com/uploads/images/1720491983727-youtube.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                      alt="Youtube" /></a
                  ><a
                    href="https://www.instagram.com/whitetiger_asiatv?igsh=NTc4MTIwNjQ2YQ=="
                    class="#db2777 text-white hover:opacity-65"
                    target="_blank"
                    ><span class="sr-only">Instagram</span
                    ><img
                      src="https://api.whitetigertv-asia.com/uploads/images/1720491964416-instagram.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                      alt="Instagram" /></a
                  ><a
                    href="https://x.com/DBTV452003"
                    class="#000000 text-white hover:opacity-65"
                    target="_blank"
                    ><span class="sr-only">Twitter (X)</span
                    ><img
                      src="https://api.whitetigertv-asia.com/uploads/images/1720491939318-twitterx.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                      alt="Twitter (X)" /></a
                  ><a
                    href="https://www.tiktok.com/@db.tv6?_t=8lEw4XJKGUT&amp;_r=1"
                    class="#000000 text-white hover:opacity-65"
                    target="_blank"
                    ><span class="sr-only">TikTok</span
                    ><img
                      src="https://api.whitetigertv-asia.com/uploads/images/1720491927396-tiktok.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                      alt="TikTok" /></a
                  ><a
                    href="https://t.me/+KmwN-L3rPcViMGY1"
                    class="#60a5fa text-white hover:opacity-65"
                    target="_blank"
                    ><span class="sr-only">Telegram</span
                    ><img
                      src="https://api.whitetigertv-asia.com/uploads/images/1720491973510-telegram.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                      alt="Telegram" /></a
                  ><a
                    href="https://chat.whatsapp.com/5vHgvcSJVQDGjKdSnn26zD"
                    class="#4ade80 text-white hover:opacity-65"
                    target="_blank"
                    ><span class="sr-only">WhatsApp</span
                    ><img
                      src="https://api.whitetigertv-asia.com/uploads/images/1720491992396-whatapp.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                      alt="WhatsApp" /></a
                  ><a
                    href="https://line.me/ti/g/LnLk5Bwh13"
                    class="#4ade80 text-white hover:opacity-65"
                    target="_blank"
                    ><span class="sr-only">Line</span
                    ><img
                      src="https://api.whitetigertv-asia.com/uploads/images/1720491920642-line.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                      alt="Line" /></a
                  ><a
                    href="https://group.coolapp.chat/#CjQKIODHQ1ML3wGfdTvPkMnapQXVFN3HyrPS_UC7FZbqNYRTEhB-iixPpt9wVJWjwmRfxKVm"
                    class="#0f4aba text-white hover:opacity-65"
                    target="_blank"
                    ><span class="sr-only">CoolApp</span
                    ><img
                      src="https://api.whitetigertv-asia.com/uploads/images/1720491913207-coolapp.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                      alt="CoolApp" /></a
                  ><!--]-->
                </div>
              </div>
              <div class="mt-6 text-gray-100 text-base">
                ទំនាក់ទំនងផ្សព្វផ្សាយពាណិជ្ជកម្ម
              </div>
              <div class="mt-1 text-gray-400 dark:text-gray-200 text-base">
                <div>
                  <span class="font-semibold pr-2">Cellcard</span> ០៧៧ ៥៨៧ ៧៧៦
                </div>
                <div>
                  <span class="font-semibold pr-2">Smart</span> ០៨៦ ៥៨៧ ៧៧៦
                </div>
                <div>
                  <span class="font-semibold pr-2">Metfone</span> ០៦៧ ៥៨៧ ៧៧៦
                </div>
              </div>
            </div>
          </div>
          <div class="bg-[#073e62] text-center py-1">
            <div class="text-xs leading-5 text-gray-300 dark:text-gray-200">
              ​© រក្សា​សិទ្ធិ​គ្រប់​យ៉ាង​ដោយ​ ខ្លាសអាសុី-ធីវី ឆ្នាំ​២០២៤
            </div>
          </div>
        </footer>
      </div>
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

<style>
:root {
  overscroll-behavior: none;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;

    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;

    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;

    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;

    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;

    --primary: 0 0% 9%; /* #012942 */
    --primary-foreground: 0 0% 98%;

    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;

    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --ring: 0 0% 3.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;

    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;

    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;

    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;

    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;

    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;

    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;

    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --ring: 0 0% 83.1%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer utilities {
  .standard-container {
    @apply w-full bg-white dark:bg-black transition-colors duration-500 px-2 sm:px-4 md:px-8 lg:px-8 mx-auto max-w-7xl;
  }
}

.iframe-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  overscroll-behavior: none;
}

.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overscroll-behavior: none;
}
</style>
