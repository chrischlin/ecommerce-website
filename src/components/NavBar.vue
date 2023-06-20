<template>
  <div class="navbar">
    <div class="left-part">
      <router-link to="/">Home</router-link>
      <router-link to="/our-story">Our Story</router-link>
      <div class="text-center">
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <router-link to="/products" v-bind="props">Products</router-link>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <router-link
                :to="{
                  name: 'product.category',
                  params: { category: item.title },
                }"
                >{{ item.title }}</router-link
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <router-link to="/" class="title">Lin's Collection</router-link>
    <div class="right-part">
      <a href=""><font-awesome-icon icon="fa-solid fa-search" /></a>
      <a href=""><font-awesome-icon icon="fa-solid fa-user" /></a>
      <a href=""><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { products } from "../data/data.js";

library.add(faSearch, faUser, faCartShopping);

export default {
  data() {
    return {
      productList: products,
      items: [
        { title: "All Products" },
        { title: "Necklaces" },
        { title: "Earrings" },
        { title: "Rings" },
        { title: "Bracelets" },
      ],
    };
  },

  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-color: #e5dcd2;
}

.left-part {
  display: flex;
  flex: 1;
  gap: 10px;
}

.title {
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
}

.right-part {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  display: flex;
  gap: 10px;
}
</style>
