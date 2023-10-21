import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import OurStory from "../views/OurStory.vue";
import Products from "../views/Products.vue";
import ProductInfo from "../components/Products/ProductInfo.vue";
import AllProducts from "../components/Products/AllProducts.vue";
import Cart from "../views/Cart.vue";
import Shipping from "../views/Shipping.vue";
import Payment from "../views/Payment.vue";
import Confirmation from "../views/Confirmation.vue";
import ThankYou from "../views/ThankYou.vue"

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
  },
  {
    path: "/shipping",
    name: "shipping",
    component: Shipping,
  },
  {
    path: "/payment",
    name: "payment",
    component: Payment,
  },
  {
    path: "/confirmation",
    name: "confirmation",
    component: Confirmation,
  },
  {
    path: "/completed",
    name: "completed",
    component: ThankYou,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top
    return { top: 0 };
  },
});

export default router;
