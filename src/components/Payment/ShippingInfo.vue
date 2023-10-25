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
                    <v-text-field v-model="fullName" :value="fullName" @input="updateFullName" :rules="nameRules"
                        label="Full name" variant="underlined"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="phoneNumber" :value="phoneNumber" @input="updatePhoneNumber" :rules="phoneRules"
                        label="Phone number" variant="underlined"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="email" :value="email" @input="updateEmail" :rules="emailRules" label="E-mail"
                        variant="underlined"></v-text-field>
                </v-col>
            </v-row>
            <v-row></v-row>
        </v-container>
    </v-form>
    <v-form>
        <v-container>
            <div class="subtitle">Address</div>
            <v-row>
                <v-col>
                    <v-select v-model="city" :value="city" @input="updateCity" :items="cityItems" label="City"
                        variant="underlined"></v-select>
                </v-col>
                <v-col>
                    <v-select v-model="district" :value="district" @input="updateDistrict" :items="districtItems"
                        label="District" variant="underlined"></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="address" :value="address" @input="updateAddress" :rules="addressRules"
                        label="Address (Rd.,Aly.,No.,Floor, etc)" variant="underlined"></v-text-field>
                </v-col>
            </v-row>
            <div class="notice">*At this time, we are exclusively providing delivery services within Taipei, Taiwan.</div>


        </v-container>
    </v-form>
    <v-row justify="center">
        <router-link :to="isFormEmpty ? '' : '/payment'">
            <v-btn class="next-button" color="black" :disabled="isFormEmpty">Next</v-btn>
        </router-link>
    </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            nameRules: [
                value => {
                    if (value) return true;
                    return 'Full name is required';
                },
            ],
            phoneRules: [
                value => {
                    if (value) {
                        if (/^\d+$/.test(value)) return true;
                        return 'Phone number must contain only numbers.';
                    }
                    return 'Phone number is required.';
                },
            ],
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
            cityItems: ['Taipei City'],
            districtItems: [
                'Wanhua District',
                'Datong District',
                'Zhongzheng District',
                'Zhongshan District',
                'Songshan District',
                'Daan District',
                'Xinyi District',
                'Nangang District',
                'Neihu District',
                'Shilin District',
                'Beitou District',
                'Wenshan District'
            ],
            addressRules: [
                value => {
                    if (value) return true;
                    return 'Address is required';
                },
            ],
        }
    },

    computed: {
        ...mapState({
            fullName: (state) => state.shipping.fullName,
            phoneNumber: (state) => state.shipping.phoneNumber,
            email: (state) => state.shipping.email,
            city: (state) => state.shipping.city,
            district: (state) => state.shipping.district,
            address: (state) => state.shipping.address,
        }),

        fullName: {
            get() {
                return this.$store.state.shipping.fullName
            },
            set(value) {
                this.$store.commit('updateFullName', value)
            }
        },
        phoneNumber: {
            get() {
                return this.$store.state.shipping.phoneNumber
            },
            set(value) {
                this.$store.commit('updatePhoneNumber', value)
            }
        },
        email: {
            get() {
                return this.$store.state.shipping.email
            },
            set(value) {
                this.$store.commit('updateEmail', value)
            }
        },
        city: {
            get() {
                return this.$store.state.shipping.city
            },
            set(value) {
                this.$store.commit('updateCity', value)
            }
        },
        district: {
            get() {
                return this.$store.state.shipping.district
            },
            set(value) {
                this.$store.commit('updateDistrict', value)
            }
        },
        address: {
            get() {
                return this.$store.state.shipping.address
            },
            set(value) {
                this.$store.commit('updateAddress', value)
            }
        },
        isFormEmpty() {
            if (
                !this.fullName ||
                !this.phoneNumber ||
                !this.email ||
                !this.city ||
                !this.district ||
                !this.address
            ) {
                return true;
            }
            return false;
        },
    },

    methods: {
        updateFullName(e) {
            this.$store.commit('updateFullName', e.target.value)
        },
        updatePhoneNumber(e) {
            this.$store.commit('updatePhoneNumber', e.target.value)
        },
        updateEmail(e) {
            this.$store.commit('updateEmail', e.target.value)
        },
        updateCity(e) {
            this.$store.commit('updateCity', e.target.value)
        },
        updateDistrict(e) {
            this.$store.commit('updateDistrict', e.target.value)
        },
        updateAddress(e) {
            this.$store.commit('updateAddress', e.target.value)
        },
    }

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


.next-button {
    margin-top: 80px;
    margin-bottom: 100px;
}

.notice {
    font-size: 12px;
    color: grey;
}
</style>
