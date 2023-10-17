<template>
  <div class="title">My Cart</div>

  <v-container class="item-container">
    <v-row class="list-title">
      <v-col class="title-left"> Item </v-col>
      <v-col cols="1"> Price </v-col>
      <v-col cols="2"> Quantity </v-col>
      <v-col cols="1"> Total </v-col>
    </v-row>
    <v-row class="item-list" v-for="item in products" :key="item.name">
      <v-col>
        <v-row class="item">
          <img class="image" :src="item.imageUrl" />
          <div>{{ item.name }}</div>
        </v-row>
      </v-col>
      <v-col cols="1">{{ item.price }}</v-col>
      <v-col cols="2" class="quantity-control">
        <div class="counter" @click="decrementItemQuantity(item)">-</div>
        <div class="quantity">{{ item.quantity }}</div>
        <div class="counter" @click="incrementItemQuantity(item)">+</div>
      </v-col>
      <v-col cols="1">{{ item.price * item.quantity }}</v-col>
      <font-awesome-icon icon="fa-solid fa-trash" class="trash" @click="deleteItem(item.id)" />
    </v-row>
  </v-container>

  <v-container class="pay-container">
    <v-row justify="end">
      <v-col cols="4" class="pay">Subtotal :</v-col>
      <v-col cols="2" class="pay-amount">${{ subtotal }}</v-col>
    </v-row>

    <v-row justify="end">
      <v-col cols="4" class="pay">Shipping :</v-col>
      <v-col cols="2" class="pay-amount">Free</v-col>
    </v-row>

    <v-row justify="end">
      <v-col cols="4" class="total">Total :</v-col>
      <v-col cols="2" class="total-amount">${{ subtotal }}</v-col>
    </v-row>

    <v-row justify="end" class="button">
      <v-btn color="black" @click="dialog = true" :disabled="products.length === 0">Check Out</v-btn>
      <v-dialog v-model="dialog" width="600" class="dialog">
        <v-card>
          <v-card-text class="text-h5"> Missed something else? </v-card-text>
          <v-card-actions>
            <v-row justify="space-evenly">
              <v-btn variant="tonal" @click="dialog = false">
                Yes! I still want other things!
              </v-btn>
              <v-btn variant="tonal" @click="checkOut()">
                <router-link to="/payment">No, I want to check out!</router-link>
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      dialog: false,
    };
  },

  components: {
    FontAwesomeIcon,
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
    ...mapMutations([
      "deleteItem",
      "incrementItemQuantity",
      "decrementItemQuantity",
      "removeAll",
    ]),

    checkOut() {
      this.dialog = false;
      this.removeAll();
    },
  },

  computed: {
    ...mapState({
      products: "items",
    }),

    subtotal() {
      return this.products.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 50px;
  margin-top: 130px;
}

.list-title {
  font-weight: bold;
  border-bottom: solid;
  border-color: #e5dcd2;
  text-align: center;
}

.title-left {
  text-align: left;
}

.item {
  align-items: center;
  gap: 20px;
}

.image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.item-list {
  position: relative;
  align-items: center;
  margin-top: 20px;
  text-align: center;
}

.item-container {
  width: 60%;
  border-bottom: solid;
  border-color: #e5dcd2;
}

.pay-container {
  width: 60%;
  margin-top: 50px;
  margin-bottom: 100px;
}

.pay {
  border-bottom: solid;
  border-color: #e5dcd2;
  font-weight: bold;
}

.pay-amount {
  text-align: end;
  border-bottom: solid;
  border-color: #e5dcd2;
}

.total {
  font-weight: bold;
}

.total-amount {
  text-align: end;
  font-size: x-large;
  font-weight: bold;
}

.button {
  margin-top: 100px;
}

.trash {
  position: absolute;
  right: -50px;
  cursor: pointer;
  color: lightgray;
}

.trash:hover {
  color: black;
}

.quantity-control {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: grey;
}

.dialog {
  text-align: center;
}
</style>
