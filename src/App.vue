<script>
import NavBar from "../src/components/NavBar.vue";
import Footer from "../src/components/Footer.vue";
import TopBanner from "../src/components/HomePage/TopBanner.vue";

export default {
  components: { NavBar, Footer, TopBanner },
};
</script>

<template>
  <div>
    <NavBar />
    <TopBanner />
    <Footer />
  </div>
</template>

<style scoped></style>
