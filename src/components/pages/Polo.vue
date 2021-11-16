<template>
    <div>
        <Header />
        <img width="100%"  height="350px" src="https://pub-static.fotor.com/assets/projects/pages/bbd90ce0-debd-11e9-a83e-2d425ec98400_7b73e620-11b9-43bb-b068-5e3b43ccb738_thumb.jpg" alt="">
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
              this.items = shirts.filter(item=> item.type==="polo");
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