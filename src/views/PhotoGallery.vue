<template>
  <div>
    <NavBar />
    <PhotoGalleryIntro />
    <v-progress-circular
      v-show="isLoading === true"
      indeterminate
      color="#3abfd6"
    ></v-progress-circular>
    <div class="photo-grid p-5">
      <div
        v-for="(img, key) in photos"
        :key="key"
        class="pic-container slide-in-bottom"
      >
        <button
          v-show="isLoaded === true"
          v-on:click="zoom(img)"
          @click="lightboxOn = !lightboxOn"
        >
          <img :src="img" class="pic" id="pic" alt="pic" />
        </button>
      </div>
    </div>
    <LightBox
      v-if="lightboxOn"
      :media="media"
      :showLightBox="lightboxOn"
    ></LightBox>
    <Footer />
  </div>
</template>

<script>
// PHOTO GALLERY page which shows all pictures in a secure cloudinary folder

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import apiHandler from "../apiHandler";
import LightBox from "../components/LightBox";
import PhotoGalleryIntro from "../components/Photo-Gallery-Intro";

export default {
  components: {
    NavBar,
    Footer,
    LightBox,
    PhotoGalleryIntro,
  },
  data() {
    return {
      photos: [],
      isLoaded: false,
      isLoading: true,
      media: [
        {
          thumb: null,
          src: "",
          caption: "Image caption",
          srcset: null, // for responsive images
        },
      ],
      lightboxOn: false,
    };
  },
  methods: {
    // Method calling apihandler to get all pictures from cloudinary GET route on server-side
    // URLs are then stored in the photos array that is lopped over in the page render
    getPics() {
      apiHandler
        .getPicUrls("/api/pics")
        .then((res) => {
          console.log(res);
          this.photos = res;
        })
        .catch((err) => console.log(err));
    },
    // FUNCTION to transform selected image to a full screen show
    zoom(linkTarget) {
      this.media = [
        {
          thumb: linkTarget,
          src: linkTarget,
          caption: "Image caption",
          srcset: linkTarget, // for responsive images
        },
      ];
    },
  },
  created() {
    // Calling getPics method ar page render to get all photos
    this.getPics();
    window.setTimeout(() => {
      this.isLoaded = true;
      this.isLoading = false;
    }, 2000);
  },
};
</script>

<style>
.carousel {
  margin-top: 10px;
  height: 50%;
  width: 50%;
}
.carousel-pic {
  width: 100% !important;
  height: auto !important;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-grid {
  display: grid;
  background-color: whitesmoke;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  height: auto;
}

.pic-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pic {
  width: 100% !important;
  height: 100% !important;
  transition: 1s;
  object-fit: contain;
}

.pic:hover {
  transform: scale(1.1);
}

.slide-in-bottom {
  -webkit-animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    1.5s both;
  animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.5s both;
}

/**
 * ----------------------------------------
 * animation slide-in-bottom
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
