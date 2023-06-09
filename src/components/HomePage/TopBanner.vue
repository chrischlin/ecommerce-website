<template>
  <v-carousel cycle height="500" show-arrows="hover" hide-delimiter-background>
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
      :src="image.src"
      cover
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: "images/topbanners/Slide1.jpeg" },
        { src: "images/topbanners/banner2.jpeg" },
        { src: "images/topbanners/banner3.jpeg" },
      ],
    };
  },
};
</script>
