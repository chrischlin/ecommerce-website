<template>
  <div class="navbar">
    <div class="left-part">
      <router-link to="/">Home</router-link>
      <router-link to="/our-story">Our Story</router-link>
      <div class="text-center">
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <router-link
              :to="{
                name: 'product.category',
                params: { category: 'All Products' },
              }"
              v-bind="props"
            >
              Products
            </router-link>
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
      <router-link to="/cart"
        ><font-awesome-icon icon="fa-solid fa-cart-shopping"
      /></router-link>
      <div v-if="cartQuantity > 0">{{ cartQuantity }}</div>
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
import { mapGetters } from "vuex";

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

  computed: {
    ...mapGetters(["cartQuantity"]),
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  height: 80px;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-color: #e5dcd2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: white;
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
