<template>
  <div class="title">All Products</div>
  <v-container>
    <v-row class="product-row">
      <v-col cols="3" v-for="product in products" :key="product.name">
        <v-img
          class="ml-auto mr-auto mt-auto mb-auto"
          :width="250"
          :height="250"
          cover
          :src="product.imageUrl"
          :alt="product.name"
        ></v-img>
        <div class="ml-auto mr-auto mt-auto mb-auto">
          {{ product.name }}
        </div>
        <div class="ml-auto mr-auto mt-auto mb-auto">
          {{ formatPrice(product.price) }}
        </div>
      </v-col>
    </v-row>
  </v-container>
  <div class="text-center">
    <v-pagination v-model="page" :length="4" rounded="circle"></v-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Golden Hour Necklace",
          imageUrl: "images/bestsellers/goldenhournecklace1.jpeg",
          price: 950,
        },

        {
          name: "Gold Chain Bracelet",
          imageUrl: "images/bestsellers/goldchainbraclet1.jpeg",
          price: 600,
        },

        {
          name: "Gold Pearl Tear Earring",
          imageUrl: "images/products/earrings2.jpeg",
          price: 800,
        },

        {
          name: "Three-Stran Pearl Necklace",
          imageUrl: "images/series/3stranpearlnecklace.jpeg",
          price: 1500,
        },

        {
          name: "Star Pearl Pin",
          imageUrl: "images/series/pearlpin.jpeg",
          price: 450,
        },

        {
          name: "Pearl Rings Set",
          imageUrl: "images/series/pearlring.jpeg",
          price: 900,
        },
        {
          name: "Golden Hour Necklace",
          imageUrl: "images/bestsellers/goldenhournecklace1.jpeg",
          price: 950,
        },

        {
          name: "Gold Chain Bracelet",
          imageUrl: "images/bestsellers/goldchainbraclet1.jpeg",
          price: 600,
        },

        {
          name: "Gold Pearl Tear Earring",
          imageUrl: "images/products/earrings2.jpeg",
          price: 800,
        },
      ],
    };
  },

  methods: {
    formatPrice(value) {
      return "$" + value.toLocaleString();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-image: url("images/banners/banner2.jpeg");
  background-size: cover;
  background-position: center;
  font-size: 40px;
  font-weight: bold;
  color: white;
}

.product-row {
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
