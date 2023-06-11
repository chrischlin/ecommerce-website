<script>
import NavBar from "../src/components/NavBar.vue";
import Footer from "../src/components/Footer.vue";
import TopBanner from "../src/components/HomePage/TopBanner.vue";
import ProductsBlock from "../src/components/HomePage/ProductsBlock.vue";
import BestSeller from "../src/components/HomePage/BestSeller.vue";
import OtherBanner from "../src/components/HomePage/OtherBanner.vue";
import Series from "../src/components/HomePage/Series.vue";
import Slogan from "../src/components/HomePage/Slogan.vue";

export default {
  components: {
    NavBar,
    Footer,
    TopBanner,
    ProductsBlock,
    BestSeller,
    OtherBanner,
    Series,
    Slogan,
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
    <Series />
    <Slogan />
    <Footer />
  </div>
</template>

<style scoped></style>
