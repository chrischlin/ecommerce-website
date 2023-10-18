<template>
    <div class="page">
        <div class="info">
            <Shipping />
        </div>
        <div class="summary">
            <Summary />
        </div>
    </div>
</template>

<script>
import Shipping from "../components/Payment/Shipping.vue"
import Summary from "../components/Payment/Summary.vue"


export default {
    components: { Shipping, Summary },
}

</script>

<style scoped>
.page {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    width: 100%
}

.info {
    width: 65%;
    border: solid black;
}

.summary {
    width: 35%;
    border: solid black;
}
</style>