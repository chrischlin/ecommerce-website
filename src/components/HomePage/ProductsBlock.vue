<template>
  <div class="products-block">
    <div
      class="product"
      v-for="product in products"
      :key="product.name"
      :style="{ backgroundImage: 'url(' + product.imageUrl + ')' }"
    >
      {{ product.name }}
      <!-- <v-img width="300" height="300" :src="product.imageUrl" cover></v-img> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Necklaces",
          imageUrl: "images/products/necklaces2.jpeg",
        },

        {
          name: "Earings",
          imageUrl: "images/products/earrings1.jpeg",
        },

        {
          name: "Rings",
          imageUrl: "images/products/rings2.jpeg",
        },

        {
          name: "Bracelets",
          imageUrl: "images/products/bracelets2.jpeg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.products-block {
  display: flex;
  justify-content: center;
  gap: 30px;
  height: 600px;
  background-color: white;
  margin-top: 100px;
}

.product {
  display: flex;
  height: 250px;
  width: 250px;
  background-size: cover;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: x-large;
  font-weight: bold;
}
</style>
