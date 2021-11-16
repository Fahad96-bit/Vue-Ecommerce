<template>
   <div class='home-container'>
     <Header />
      <img width="100%" src="https://cdn.shopify.com/s/files/1/2219/4051/files/1880-x-720_80b0bf00-c8dc-4f78-88fe-402d99e31f75.png?v=1635852641"/>
       <Items :items="items"/>
   </div>
</template>

 <script>
import Header from './common/Header'

import Items from './Items';
  export default {
    components:{
      Items,
      Header
    },
      async mounted(){
            const res = await fetch("http://localhost:5000/items");
             this.items = await res.json();
        },
      data(){
          return {
              items:[]
          }
      }
   
  }
</script>
<style scoped>
</style>