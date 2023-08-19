<template>
  <div>
    <div class="title">FAQ</div>

    <v-row class="faq-box" justify="center">
      <v-col md="3">
        <div class="topic-title">BROWSE BY TOPIC</div>
        <div v-for="(topic, i) in topics" :key="i">
          {{ topic }}
        </div>
      </v-col>
      <v-col cols="6" justify="start">
        <div class="answer-title">Frequently Asked Questions</div>
        <v-expansion-panels class="panels">
          <v-expansion-panel v-for="(Q, i) in questions" :key="i">
            <v-expansion-panel-title>{{ Q.title }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              {{ Q.text }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        "Product",
        "Pricing & Payment",
        "Shipping",
        "Returns & Exchanges",
        "Gifting",
        "Privacy Policy",
        "Contact Us",
      ],
      questions: [
        {
          title: "What are Lin's Collection's jewels made of?",
          text: "Lin's Collection's jewels are hand-crafted using a variety of high-quality materials, including suede, glass, beads, cubic zirconia stones and metal. Our metal pieces are usually recycled brass and/or stainless steel, plated with 14K-24K gold or Rhodium silver unless otherwise stated.",
        },
        {
          title: "Are your jewels nickel free?",
          text: "All our jewels are Lead-free, Cadmium-free and Nickel-free.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-image: url("/images/banners/banner3.jpeg");
  background-size: cover;
  background-position: center;
  font-size: 40px;
  font-weight: bold;
  color: white;
}

.faq-box {
  margin: 100px;
}

.answer-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}

.topic-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
