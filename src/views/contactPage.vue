<template>
  <div>
    <LandingPage :info="infoContact" :links="links" page="contact" />
    <AttentionTab :page="`Page de contact`" />
    <ContactInfo />
    <Calendar />
    <PriceList />
    <Reimbursements />
    <PracticalInfo />
    <Footer />
  </div>
</template>

<script>
import LandingPage from "../components/LandingPage";
import ContactInfo from "../components/ContactInfo";
import Calendar from "../components/Calendar";
import PriceList from "../components/PriceList";
import Reimbursements from "../components/Reimbursements";
import AttentionTab from "../components/AttentionTab";
import PracticalInfo from "../components/PracticalInfo";
import Footer from "../components/Footer";

export default {
  name: "ContactPage",
  components: {
    LandingPage,
    ContactInfo,
    Calendar,
    AttentionTab,
    PriceList,
    PracticalInfo,
    Reimbursements,
    Footer,
  },
  data: () => {
    return {
      // data passed down as object to LANDING PAGE component which will be rendered with props
      infoContact: {
        titlePart1: "Un ostéopathe pas loin de chez vous...",
        titlePart2: "Au cabinet ou à domicile",
        introPara: `Situé dans le centre de Meaux, le cabinet est situé à 5 minutes de la gare de Meaux, à 2 minutes de la médiathèque et de la place du marché et est facilement joignable par l'A4 ou la RN3 (pour le chemin en voiture).\n
        Les prises de RDV sont uniquement disponible sur doctolib.fr.`,
        button1: "Appelez le 06 38 69 77 16",
        linkbutton1: "tel:06 38 69 77 16",
        button2: "Contactez par mail",
        linkbutton2: "mailto:charlesdumeige@outlook.fr?subject=Contact",
        image: require("../assets/photo-gallery/shooting11.jpg"),
      },
      links: {
        accueil: "Accueil",
        presentations: "Présentations",
        patients: "Patients",
        contact: "Contact & Informations",
        galerie: "Galerie",
      },
    };
  },
};
</script>

<style></style>
