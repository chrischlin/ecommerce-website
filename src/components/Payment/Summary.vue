<template>
    <div class="summary">
        <v-container class="amount-container">
            <div class="title">SUMMARY</div>
            <v-row>
                <v-col class="pay">Subtotal</v-col>
                <v-col class="pay-amount">${{ subtotal }}</v-col>
            </v-row>

            <v-row>
                <v-col class="pay">Shipping</v-col>
                <v-col class="pay-amount">Free</v-col>
            </v-row>

            <div class="line"></div>

            <v-row>
                <v-col class="total">Total</v-col>
                <v-col class="total-amount">${{ subtotal }}</v-col>
            </v-row>
        </v-container>

        <v-container>
            <div class="title">IN YOUR CART</div>
            <v-row v-for="item in products" :key="item.name">
                <v-col cols="4">
                    <img class="image" :src="item.imageUrl" />
                </v-col>
                <v-col>
                    <div class="item-title">{{ item.name }}</div>
                    <div class="item-content">x{{ item.quantity }}</div>
                    <div class="item-content">${{ item.price * item.quantity }}</div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
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
}

</script>

<style scoped>
.summary {
    background-color: #fcf6f0;
    width: 100%;

}

/* amount */
.amount-container {
    margin-bottom: 20px;
}

.title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}

.pay {
    font-size: 12px;
}

.pay-amount {
    font-size: 12px;
    text-align: end;
}

.line {
    border-bottom: 0.8px solid #e5dcd2;
    margin-top: 10px;
    margin-bottom: 20px;
}

.total {
    font-size: 20px;
    font-weight: bold;
}

.total-amount {
    font-size: 20px;
    font-weight: bold;
    text-align: end;
}

/* item */
.image {
    width: 100px;
    height: 100px;
    object-fit: cover;
}

.item-title {
    font-weight: bold;
}

.item-content {
    font-size: 12px;
}
</style>