<template>
  <div class="py-10 pb-2 bg-white contact-info-comp">
    <h2 class="text-base text-logo-blue font-semibold tracking-wide uppercase">
      Horaires & Accès
    </h2>
    <div class="contact-info-container">
      <div class="contact-info">
        <ContactCard />
      </div>
      <div class="map-container">
        <Map />
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./Map";
import ContactCard from "./ContactCard";
export default {
  components: {
    Map,
    ContactCard,
  },
};
</script>

<style>
.contact-info-container {
  padding-top: 2%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 10px;
}

.contact-info-comp {
  height: auto;
}

.contact-info {
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

@media screen and (max-width: 450px) {
  .map-container {
    justify-content: center;
  }
}
</style>