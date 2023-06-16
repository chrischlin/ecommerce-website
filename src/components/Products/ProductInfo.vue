<template>
  <div class="product-info">
    <v-list nav>
      <v-list-item>
        <v-img
          src="/images/products/necklaces1.jpeg"
          :width="100"
          :height="100"
          cover
        ></v-img>
      </v-list-item>
    </v-list>

    <div>
      <v-img
        class="ml-auto mr-auto mt-auto mb-auto"
        :width="400"
        :height="400"
        cover
        :src="productDetail.imageUrl"
      ></v-img>
    </div>
    <div>
      <v-card class="card" width="400" height="400">
        <v-card-item>
          <v-card-title>{{ productDetail.name }}</v-card-title>

          <div>${{ productDetail.price }}</div>
        </v-card-item>

        <v-card-actions>
          <v-btn class="button">Quantities</v-btn>
          <v-btn class="button">Add to Cart</v-btn>
        </v-card-actions>

        <v-card-text> {{ productDetail.description }} </v-card-text>
      </v-card>
    </div>
  </div>
  <div class="details">
    <div>Product Detail</div>
    <div>
      <br />
      Butterfly back earrings <br />
      925 sterling silver <br />
      14K gold vermeil <br />
      Nickel free<br />
      Post length: 1cm Size: 1.25cm Weight: 1.95g
    </div>
  </div>
</template>

<script>
import { products } from "../../data/data.js";

export default {
  computed: {
    productId() {
      return parseInt(this.$route.params.id);
    },
    productDetail() {
      return products.find((product) => product.id === this.productId);
    },
  },
};
</script>

<style scoped>
.product-info {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 100px;
}

.details {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 100px;
}

.button {
  color: white;
  background-color: #444444;
}
</style>
