<template>
  <div class="navbar">
    <div class="left-part">
      <a href="">Home</a>
      <a href="">Our Story</a>
      <a href="">Products</a>
      <a href="">FAQ</a>
    </div>
    <div class="title">Lin's Collection</div>
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

library.add(faSearch, faUser, faCartShopping);

export default {
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
