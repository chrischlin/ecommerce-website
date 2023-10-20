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
</template>

<script>

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
</style>