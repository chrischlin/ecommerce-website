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
import { mapState } from 'vuex'

export default {
  
  computed:
     mapState({
      products: "items",
    })
  
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