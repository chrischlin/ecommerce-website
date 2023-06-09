<script>
import NavBar from "../src/components/NavBar.vue";
import Footer from "../src/components/Footer.vue";
import TopBanner from "../src/components/HomePage/TopBanner.vue";
import ProductsBlock from "../src/components/HomePage/ProductsBlock.vue";

export default {
  components: { NavBar, Footer, TopBanner, ProductsBlock },
};
</script>

<template>
  <div>
    <NavBar />
    <TopBanner />
    <ProductsBlock />
    <Footer />
  </div>
</template>

<style scoped></style>
