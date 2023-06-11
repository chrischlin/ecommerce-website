<script>
import NavBar from "../src/components/NavBar.vue";
import Footer from "../src/components/Footer.vue";
import TopBanner from "../src/components/HomePage/TopBanner.vue";
import ProductsBlock from "../src/components/HomePage/ProductsBlock.vue";
import BestSeller from "../src/components/HomePage/BestSeller.vue";

export default {
  components: { NavBar, Footer, TopBanner, ProductsBlock, BestSeller },
};
</script>

<template>
  <div>
    <NavBar />
    <TopBanner />
    <ProductsBlock />
    <BestSeller />
    <Footer />
  </div>
</template>

<style scoped></style>
