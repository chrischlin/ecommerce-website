import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import OurStory from "../views/OurStory.vue";
import Products from "../views/Products.vue";
import ProductInfo from "../components/Products/ProductInfo.vue";
import AllProducts from "../components/Products/AllProducts.vue";
import Cart from "../views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/our-story",
    name: "OurStory",
    component: OurStory,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/products/:category",
    name: "product.category",
    component: AllProducts,
  },
  {
    path: "/products/:id",
    name: "product.info",
    component: ProductInfo,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
