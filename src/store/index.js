import { createStore } from "vuex";
import VuexPersist from "vuex-persist";

const vuexLocalStorage = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage,
  autoRehydrate: true,
  reducer: (state) => ({
    items: state.items,
    amount: state.amount,
    shipping: state.shipping,
    paymentMethod: state.paymentMethod
 })
});

const store = createStore({
  plugins: [vuexLocalStorage.plugin],

  state() {
    return {
      items: [],
      amount: [],
      shipping: {
        fullName: '',
        phoneNumber: '',
        email: '',
        city: '',
        district: '',
        address: '',
      },
      paymentMethod:''
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
    removeAll(state) {
      state.items = [];
      state.amount = [];
      state.shipping = { 
        fullName: '',
        phoneNumber: '',
        email: '',
        city: '',
        district: '',
        address: '',};
      state.paymentMethod = '';
    },

    setCheckOutAmount(state, [sub,total]){
      state.amount = [sub,total];
    },

    // shipping information

    updateFullName(state, fullName) {
      state.shipping.fullName = fullName;
    },
    updatePhoneNumber(state, phoneNumber) {
      state.shipping.phoneNumber = phoneNumber;
    },
    updateEmail(state, email) {
      state.shipping.email = email;
    },
    updateCity(state, city) {
      state.shipping.city = city;
    },
    updateDistrict(state, district){
      state.shipping.district = district;
    },
    updateAddress(state, address){
      state.shipping.address = address;
    },

    // payment

    setPaymentMethod(state, method){
      state.paymentMethod = method;
    }
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
