<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-logo-blue" v-show="open">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="p-2 rounded-lg bg-logo-gray">
            <!-- Heroicon name: outline/speakerphone -->
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </span>
          <p class="ml-3 font-medium text-white truncate">
            <span class="md:hidden"> {{ message.contentShort }} </span>
            <span class="hidden md:inline">
              {{ message.content }}
            </span>
          </p>
        </div>
        <div
          class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
        ></div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button
            type="button"
            v-on:click="open = false"
            class="-mr-1 flex p-2 rounded-md hover:bg-logo-blue-nohover focus:outline-none ring-2 ring-white sm:-mr-2"
          >
            <span class="sr-only">Dismiss</span>
            <!-- Heroicon name: outline/x -->
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiHandler from "../apiHandler";
export default {
  props: {
    page: String,
  },
  data() {
    return { open: true, message: "" };
  },
  created() {
    let pageName = "";
    switch (this.page) {
      case "Page d'accueil":
        pageName = "Page d'accueil";
        break;
      case "Page de contact":
        pageName = "Page de contact";
        break;
      case "Page des présentations":
        pageName = "Page des présentations";
        break;
      case "Page des patients":
        pageName = "Page des patients";
        break;
    }
    apiHandler
      .getOneMessage(`/api/message/${pageName}/message`)
      .then((res) => {
        // console.log(res);
        this.message = res;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>