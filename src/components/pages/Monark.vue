<template>
    <div>
        <Header />
        <img width="100%" height="350px" src="https://pub-static.fotor.com/assets/projects/pages/b01257d0-d856-11e9-bffe-b158ff22b553_b22a76da-0247-4bc4-8514-ca898cae6701_thumb.jpg" alt="">
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
              this.items = shirts.filter(item=> item.type==="monark");
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