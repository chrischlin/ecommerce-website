<template>
    <div class="progress">
        <v-timeline direction="horizontal" side="end" truncate-line="both">
            <v-timeline-item size="x-small">
                <div class="text-h7">Cart</div>
            </v-timeline-item>

            <v-timeline-item size="x-small">
                <div class="text-h7">Shipping</div>
            </v-timeline-item>

            <v-timeline-item size="x-small">
                <div class="text-h7">Payment</div>
            </v-timeline-item>

            <v-timeline-item size="x-small">
                <div class="text-h7">Confirmation</div>
            </v-timeline-item>
        </v-timeline>
    </div>

    <v-container>
        <v-row>
            <v-col class="title">Confirmation</v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-row class="flex-column info" no-gutters>
            <div class="subtitle">Contact</div>
            <div class="line"></div>
            <v-col>Name:</v-col>
            <v-col>Phone number:</v-col>
            <v-col>E-mail:</v-col>

        </v-row>
        <v-row class="flex-column info" no-gutters>
            <div class="subtitle">Shipping</div>
            <div class="line"></div>
            <v-col>Address:</v-col>
            <v-col>Fees: Free</v-col>
        </v-row>
        <v-row class="flex-column info" no-gutters>
            <div class="subtitle">Payment</div>
            <div class="line"></div>
            <v-col>Credit card</v-col>
        </v-row>

    </v-container>

    <v-container class="total">
        <div>Total</div>
        <div>${{ subtotal }}</div>
    </v-container>

    <v-container>
        <v-row justify="center" class="place-button">
            <router-link to="/"><v-btn color="black">Place Order</v-btn></router-link>
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
.progress {
    margin-bottom: 50px;
    width: 50%;
}

.title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
}



.info {
    margin-bottom: 30px;
}

.subtitle {
    font-size: 20px;
    font-weight: bold;
}

.total {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 20px;
    background-color: #e5dcd2;
    width: 60%;
    margin-left: 5px;
}

.line {
    border-bottom: 0.8px solid #e5dcd2;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 60%;
}

.place-button {
    margin-top: 80px;
    margin-bottom: 100px;
}
</style>