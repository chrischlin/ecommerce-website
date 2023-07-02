import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      items: [],
    };
  },

  mutations: {
    addToCart(state, payload) {
      const cartItem = state.items.find((item) => item.id === payload.id);
      if (!cartItem) {
        state.items.push(payload);
      } else {
        cartItem.quantity++;
      }
    },
    deleteItem(state, itemId) {
      state.items = state.items.filter((item) => item.id !== itemId);
    },

    incrementItemQuantity(state, payload) {
      const cartItem = state.items.find((item) => item.id === payload.id);
      cartItem.quantity++;
    },
    decrementItemQuantity(state, payload) {
      const cartItem = state.items.find((item) => item.id === payload.id);
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      }
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
