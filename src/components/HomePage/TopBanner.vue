<template>
  <v-carousel cycle height="500" show-arrows="hover" hide-delimiter-background>
    <v-carousel-item v-for="(item, i) in images" :key="i" :src="item.src" cover>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: "images/topbanners/Slide1.jpeg" },
        { src: "images/topbanners/Slide2.jpeg" },
        { src: "images/topbanners/Slide3.jpeg" },
      ],
    };
  },
};
</script>
