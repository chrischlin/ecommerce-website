<script>
import NavBar from "../src/components/NavBar.vue";
import Footer from "../src/components/Footer.vue";
import TopBanner from "../src/components/HomePage/TopBanner.vue";
import ProductsBlock from "../src/components/HomePage/ProductsBlock.vue";
import BestSeller from "../src/components/HomePage/BestSeller.vue";
import OtherBanner from "../src/components/HomePage/OtherBanner.vue";

export default {
  components: {
    NavBar,
    Footer,
    TopBanner,
    ProductsBlock,
    BestSeller,
    OtherBanner,
  },
};
</script>

<template>
  <div>
    <NavBar />
    <TopBanner />
    <ProductsBlock />
    <BestSeller />
    <OtherBanner />
    <Footer />
  </div>
</template>

<style scoped></style>
