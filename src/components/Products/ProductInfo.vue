<template>
  <div class="product-info">
    <v-list nav>
      <v-list-item>
        <v-img
          :width="100"
          :height="100"
          cover
          :src="productDetail.imageUrl"
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
      <v-card class="card" width="400" height="400" variant="outlined">
        <v-card-item>
          <v-card-title class="card-title">
            {{ productDetail.name }}
          </v-card-title>
        </v-card-item>

        <v-card-text class="card-text">${{ productDetail.price }}</v-card-text>

        <v-card-actions class="card-actions">
          <div class="quantity-control">
            <div class="minus" @click="decrementQuantity">-</div>
            <div class="quantity">{{ quantity }}</div>
            <div class="plus" @click="incrementQuantity">+</div>
          </div>
          <v-btn class="button" @click="addToCart(newItem)">Add to Cart</v-btn>
        </v-card-actions>

        <v-card-text class="card-text">
          {{ productDetail.description }}
        </v-card-text>
      </v-card>
    </div>
  </div>
  <div class="details">
    <div class="detail-title">Product Detail</div>
    <div>
      <br />
      {{ productDetail.name }} <br />
      925 sterling silver <br />
      14K gold vermeil <br />
      Nickel free<br />
      Post length: 1cm Size: 1.25cm Weight: 1.95g
    </div>
  </div>
</template>

<script>
import { products } from "../../data/data.js";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    ...mapMutations(["addToCart"]),
  },
  computed: {
    productId() {
      return parseInt(this.$route.params.id);
    },
    productDetail() {
      return products.find((product) => product.id === this.productId);
    },
    newItem() {
      return { ...this.productDetail, quantity: this.quantity };
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
  margin-top: 180px;
}

.details {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 100px;
}

.detail-title {
  font-size: 20px;
  font-weight: bold;
}

.button {
  color: white;
  background-color: #444444;
}

.card {
  border: none;
}
.card-title {
  font-weight: bold;
}
.card-text {
  margin-top: 20px;
}
.card-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.quantity-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  width: 120px;
}

.minus,
.plus {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.quantity {
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
