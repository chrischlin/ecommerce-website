import { createStore } from 'vuex';


const store = createStore({
  state() {
    return {
      items: [ 
        {
        id: 3,
        category: "Necklaces",
        name: "Three-Stran Pearl Necklace",
        imageUrl: "/images/products/necklaces3.jpeg",
        price: 1500,
        quantity: 1,
      },

      {
        id: 4,
        category: "Earrings",
        name: "Pearl Tear Earring",
        imageUrl: "/images/products/earrings1.jpeg",
        price: 600,
        quantity: 1,
      },

      {
        id: 5,
        category: "Earrings",
        name: "Sunshine Pearl Earring",
        imageUrl: "/images/products/earrings2.jpeg",
        price: 550,
        quantity: 1,
      }, ],
      }
    }
})

export default store;