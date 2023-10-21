<template>
    <div class="title">Thank you for your order!</div>
    <div class="order-number">Order number: {{ orderNumber }}</div>
    <div class="text">Please keep this for your records.</div>
    <div class="button-container">
        <router-link :to="{
            name: 'product.category',
            params: { category: 'All Products' },
        }">
            <v-btn class="continue-button">Continue Shopping</v-btn>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orderNumber: null,
        };
    },
    computed: {
        randomOrderNumber() {
            return 'LC' + Math.floor(Math.random() * 100000000);
        },
    },
    mounted() {
        this.orderNumber = this.randomOrderNumber;
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

.order-number {
    text-align: center;
}

.text {
    text-align: center;
}

.button-container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.continue-button {
    height: 48px;
    width: 200px;
    background-color: #444444;
    color: white;
    letter-spacing: 1.5px;
    margin-top: 50px;
    margin-bottom: 100px;
}
</style>