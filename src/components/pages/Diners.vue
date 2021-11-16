<template>
    <div>
        <Header />
        <img width="100%" height="350px" src="https://cdn.shopify.com/s/files/1/2219/4051/files/Web-Banner-1880-x-720_5138a60e-6862-48d0-953a-0595b289eb2b.png?v=1636092359" alt="">
        <Items :items="items" />
      
       
    </div>
</template>

<script>
import Header from '../common/Header.vue'
import Items from '../Items.vue'
    export default {
        components:{
            Items,
            Header
        },
         async mounted(){
            const res = await fetch("http://localhost:5000/shirts");
        
              const shirts = await res.json();
              this.items = shirts.filter(item=> item.type==="Diners");
              console.log('items',this.items)
        },
      data(){
          return {
              items:[]
          }
      }
    }
</script>

<style lang="scss" scoped>
</style>