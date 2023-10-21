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
                        @input="setFullName(fullName)"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="phoneNumber" :rules="phoneRules" label="Phone number" variant="underlined"
                        @input="setPhoneNumber(phoneNumber)"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" variant="underlined"
                        @input="setEmail(email)"></v-text-field>
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
                    <v-select v-model="selectedCity" :items="cityItems" label="City" variant="underlined"></v-select>
                </v-col>
                <v-col>
                    <v-select v-model="selectedDistrict" :items="districtItems" label="District"
                        variant="underlined"></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="address" :rules="addressRules" label="Address (Rd.,Aly.,No.,Floor, etc)"
                        variant="underlined" @input="setAddress(address)"></v-text-field>
                </v-col>
            </v-row>


        </v-container>
    </v-form>
    <v-row justify="center" class="next-button">
        <router-link to="/payment">
            <v-btn color="black" @click="setCity(selectedCity); setDistrict(selectedDistrict)">Next</v-btn>
        </router-link>
    </v-row>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    data() {
        return {
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
            cityItems: ['Taipei City'],
            selectedCity: '',
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

            // NewTaipeiCity: [
            //     "Banqiao District",
            //     "Sanchong District",
            //     "Zhonghe District",
            //     "Yonghe District",
            //     "Xinzhuang District",
            //     "Tucheng District",
            //     "Shulin District",
            //     "Sanxia District",
            //     "Yingge District",
            //     "Sanchong District",
            //     "Xindian District",
            //     "Pinglin District",
            //     "Wulai District",
            //     "Yongkang District",
            //     "Shenkeng District",
            //     "Shiding District",
            //     "Ruinan District",
            //     "Gongliao District",
            //     "Jinshan District",
            //     "Wanli District",
            //     "Xizhi District",
            //     "Ruifang District",
            //     "Pingxi District",
            //     "Shuangxi District",
            //     "Gufen District",
            //     "Taishan District",
            //     "Luzhou District",
            //     "Wugu District",
            //     "Bali District",
            //     "Tamsui District",
            //     "Sanzhi District",
            //     "Shimen District",
            //     "Jinshan District",
            //     "Wanli District",
            //     "Gongliao District",
            // ],

            selectedDistrict: '',
            address: '',
            addressRules: [
                value => {
                    if (value) return true;
                    return 'Address is required';
                },
            ],
        }
    },

    methods: {
        ...mapMutations([
            "setFullName",
            "setPhoneNumber",
            "setEmail",
            "setCity",
            "setDistrict",
            "setAddress",
        ]),
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
</style>
