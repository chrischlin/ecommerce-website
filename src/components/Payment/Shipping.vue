<template>
    <div class="progress">
        <v-timeline direction="horizontal" side="end" truncate-line="both">
            <v-timeline-item size="x-small">
                <div class="text-h7">Cart</div>
            </v-timeline-item>

            <v-timeline-item size="x-small">
                <div class="text-h7">Shipping</div>
            </v-timeline-item>

            <v-timeline-item size="x-small" dot-color="grey">
                <div class="text-h7 text-color-grey">Payment</div>
            </v-timeline-item>

            <v-timeline-item size="x-small" dot-color="grey">
                <div class="text-h7 text-color-grey">Confirmation</div>
            </v-timeline-item>
        </v-timeline>
    </div>
    <v-container>
        <v-row>
            <v-col class="title">SHIPPING</v-col>
        </v-row>
    </v-container>

    <v-form @submit.prevent>
        <v-container>
            <div class="subtitle">Contact</div>
            <v-row>
                <v-col>
                    <v-text-field v-model="fullName" :rules="nameRules" label="Full name" variant="underlined"
                        label-color="blue"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="phoneNumber" :rules="phoneRules" label="Phone number"
                        variant="underlined"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" variant="underlined"></v-text-field>
                </v-col>
            </v-row>
            <v-row></v-row>
        </v-container>
    </v-form>
    <v-form class="container">
        <v-container>
            <div class="subtitle">Address</div>
            <v-row>
                <v-col>
                    <v-select :items="city" label="City" variant="underlined"></v-select>
                </v-col>
                <v-col>
                    <v-select :items="district" label="District" variant="underlined"></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="address" :rules="addressRules" label="Address (Rd.,Aly.,No.,Floor, etc)"
                        variant="underlined"></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="end" class="next-button">
                <v-btn color="black">Next</v-btn>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
export default {
    data: () => ({
        fullName: '',
        nameRules: [
            value => {
                if (value) return true;
                return 'Full name is required';
            },
        ],
        phoneNumber: '',
        phoneRules: [
            value => {
                if (value) {
                    if (/^\d+$/.test(value)) return true;
                    return 'Phone number must contain only numbers.';
                }
                return 'Phone number is required.';
            },
        ],
        email: '',
        emailRules: [
            value => {
                if (value) return true;
                return 'E-mail is requred.';
            },
            value => {
                if (/.+@.+\..+/.test(value)) return true;
                return 'E-mail must be valid.';
            },
        ],
        city: ['Taipei City', 'New Taipei City'],
        district: ['Wenshan District', 'Neihu District'],
        address: '',
        addressRules: [
            value => {
                if (value) return true;
                return 'Address is required';
            },
        ],
    }),
}
</script>

<style scoped>
.progress {
    margin-bottom: 50px;
    width: 50%;
}

.text-color-grey {
    color: lightgrey;
}


.title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
}

.subtitle {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}

.container {
    margin-bottom: 100px;
}

.next-button {
    margin-top: 80px;
}
</style>
