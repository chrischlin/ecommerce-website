import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      items: [],
    };
  },

  mutations: {
    addToCart(state, payload) {
      state.items.push(payload);
    },
  },

  getters: {
    cartQuantity: (state) => {
      return state.items.reduce((acc, cartItem) => {
        return cartItem.quantity + acc;
      }, 0);
    },
  },
});

export default store;
