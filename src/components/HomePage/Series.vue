<template>
  <div class="best-sellers-block">
    <div class="product">
      <div v-for="product in products" :key="product.name">
        <router-link :to="{ name: 'product.info', params: { id: product.id } }">
          <v-img
            class="image"
            :width="250"
            :height="250"
            cover
            :src="product.imageUrl"
          ></v-img>
        </router-link>
        <router-link :to="{ name: 'product.info', params: { id: product.id } }">
          {{ product.name }}
        </router-link>
        <p>{{ formatPrice(product.price) }}</p>
      </div>
    </div>
    <div class="button-container">
      <router-link to="/products">
        <v-btn class="button">SHOP NOW</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 4,
          name: "Three-Stran Pearl Necklace",
          imageUrl: "images/series/3stranpearlnecklace.jpeg",
          price: 1500,
        },

        {
          id: 5,
          name: "Star Pearl Pin",
          imageUrl: "images/series/pearlpin.jpeg",
          price: 450,
        },

        {
          id: 6,
          name: "Pearl Rings Set",
          imageUrl: "images/series/pearlring.jpeg",
          price: 900,
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
.best-sellers-block {
  height: 650px;
  background-color: white;
}

.product {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 80px;
  margin-top: 50px;
}

.image {
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.button {
  height: 48px;
  width: 150px;
  background-color: #444444;
  color: white;
  letter-spacing: 1.5px;
}
</style>
