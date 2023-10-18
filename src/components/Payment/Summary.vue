<template>
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
        <v-row>
            <v-col>image</v-col>
            <v-col>
                <div>item name</div>
                <div>quantity</div>
                <div>price</div>
            </v-col>
        </v-row>
    </v-container>
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
</style>