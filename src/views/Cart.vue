<template>
  <div class="title">Cart</div>
  <v-container>
    <v-row 
    class="list-title"  
    >
      <v-col>
          Item
      </v-col>
        <v-col cols="1">
          Price
        </v-col>
        <v-col cols="1">
          Quantity
        </v-col>
        <v-col cols="1">
          Total
        </v-col>
    </v-row>      

    <v-row
        class="item-list"
        v-for="item in products"
        :key="item.name"
      >
      <v-col>
        <v-row class="item">
          <img
            class="image"
            :src="item.imageUrl" />
           <div> {{ item.name }}</div> 
        </v-row>
      </v-col>
  
      <v-col cols="1">{{ item.price }}</v-col>
      <v-col cols="1">{{ item.quantity }}</v-col>
      <v-col cols="1">{{ item.price }}</v-col>
    </v-row>

  </v-container>
     
      
  
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 3,
          category: "Necklaces",
          name: "Three-Stran Pearl Necklace",
          imageUrl: "/images/products/necklaces3.jpeg",
          price: 1500,
          quantity: 1,
        },

        {
          id: 4,
          category: "Earrings",
          name: "Pearl Tear Earring",
          imageUrl: "/images/products/earrings1.jpeg",
          price: 600,
          quantity: 1,
        },

        {
          id: 5,
          category: "Earrings",
          name: "Sunshine Pearl Earring",
          imageUrl: "/images/products/earrings2.jpeg",
          price: 550,
          quantity: 1,
        },
      ],
    };
  }
}

</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight:bold;
  text-align: center;
  margin: 50px;
}

.list-title {
  font-weight: bold;
  border-bottom: solid;
  border-color:#e5dcd2; ;
}

.item{
  align-items: center;
  gap: 20px;
}

.image{
  width: 100px;
  height: 100px;
  object-fit: cover;

}

.item-list{
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}





</style>