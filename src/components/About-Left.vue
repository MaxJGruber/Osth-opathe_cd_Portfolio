<template>
  <div :id="segment.id" class="relative bg-white overflow-hidden about mb-10">
    <div class="max-w-7xl mx-auto">
      <main
        class="mt-1 mx-auto max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:pr-5 xl:mt-10"
      >
        <div class="grid">
          <div class="sm:text-center lg:text-left lg:pr-6">
            <h1
              class="text-xl tracking-tight font-bold text-logo-gray sm:text-5xl md:text-xl"
            >
              <span class="block xl:inline">{{ segment.title }}</span>
            </h1>
            <p
              class="mt-4 text-base text-gray-500 sm:mt-6 sm:text-md sm:max-w-xl md:mt-6 md:text-lg pre-formatted"
            >
              {{ segment.intro }}
            </p>
          </div>
          <div class="flex justify-center">
            <div class="about-pic-frame">
              <img
                class="h-50 w-full lg:w-full object-cover sm:h-72 md:h-96 lg:h-full about-pic"
                :src="segment.img"
                alt="ostéopathie"
              />
            </div>
          </div>
        </div>

        <div
          v-show="segment.subtext1"
          class="sm:text-center lg:text-left xl:mt-10"
        >
          <h1
            class="text-lg tracking-tight font-bold text-logo-gray sm:text-5xl md:text-lg"
          >
            <span class="block xl:inline">{{ segment.subtext1Title }}</span>
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-md lg:mr-4 pre-formatted"
          >
            {{ segment.subtext1 }}
          </p>
        </div>
        <div class="grid" :class="segment.img2 ? 'mt-8' : ''">
          <div v-show="segment.img2">
            <div class="about-pic-frame">
              <img
                class="h-50 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full about-pic"
                :src="segment.img2"
                alt="osteopathie"
              />
            </div>
          </div>
          <div
            v-show="segment.subtext2"
            :class="!segment.img2 ? 'mt-8' : 'lg:pl-3'"
            class="sm:text-center lg:text-left"
          >
            <h1
              v-show="segment.subtext2Title"
              :class="segment.subtext2Title ? 'mb-5' : ''"
              class="text-lg tracking-tight font-bold text-logo-gray sm:text-5xl md:text-lg"
            >
              <span class="block xl:inline">{{ segment.subtext2Title }}</span>
            </h1>
            <p
              :class="!segment.img2 ? 'lg:mt-5' : ''"
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-md lg:mt-0 lg:mr-4 pre-formatted"
            >
              {{ segment.subtext2 }}
            </p>
          </div>
        </div>
        <div v-show="segment.subtext3" class="sm:text-center lg:text-left mt-8">
          <h1
            v-show="segment.subtext3Title"
            class="text-lg tracking-tight font-bold text-logo-gray sm:text-5xl md:text-lg"
          >
            <span class="block xl:inline">{{ segment.subtext3Title }}</span>
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-md lg:mr-4 pre-formatted"
          >
            {{ segment.subtext3 }}
          </p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    segment: Object,
  },
};
</script>

<style></style>
