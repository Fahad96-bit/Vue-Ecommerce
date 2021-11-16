
<template>
    <div>
        <Header />
        <img width="100%" height="300px" src="https://images-platform.99static.com//5_2h42yViS7A6lRf-XdKf9sz_Dc=/667x152:1248x733/fit-in/500x500/99designs-contests-attachments/106/106417/attachment_106417021" alt="Cheery">
        <Items :items="items"/>
       
    
    </div>
</template>

<script>
import Header from '../common/Header'
import Items from '../Items'
    export default {
        components:{
            Items,
            Header
        },
         async mounted(){
            const res = await fetch("http://localhost:5000/shirts");
             const shirts = await res.json();
              this.items = shirts.filter(item=> item.type==="cheery");
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