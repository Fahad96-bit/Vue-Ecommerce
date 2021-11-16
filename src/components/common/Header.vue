<template>

  <div>
    
    <v-app-bar 
    :style="{backgroundColor:cadetblu}"
      class="header-bar">
      <img
        width="100px"
        height="65px"
        src="https://png.pngitem.com/pimgs/s/173-1738297_shopify-logo-png-transparent-png.png"
      />
      <v-toolbar-title class="header-title"
        ><router-link to="/dashboard">Shopify</router-link></v-toolbar-title
      >
      <v-spacer>
        <ul class="header-links">
          <li><router-link to="/cheery">Cheery</router-link></li>
          <li><router-link to="/diners">Diners</router-link></li>
          <li><router-link to="/monark">Monark</router-link></li>
          <li><router-link to="/polo">Polo</router-link></li>
        </ul>
      </v-spacer>

      <v-btn icon>
        <v-icon large @click.stop="drawer = !drawer">mdi-cart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon class="inc" large>mdi-power</v-icon>
      </v-btn>
    </v-app-bar>
<div>
<!-- Checkout Modal -->
    <b-modal hide-footer ref="my-modal" title="List of Order Items!" @close="ClosedModal" >
      <div class="d-block text-center">
        <div v-for="item of cartProducts" :key="item.id">
          <div class="modalItems">
            <h5 class="item-name">{{item.name}}</h5>
            <p>Rs: {{item.price}}</p>
          </div>
        </div>
        <v-divider />
        <!-- <h2 v-if="totalAmount===0">Cart is Empty</h2> -->
        <h2 v-if="isPurchased" style="margin-top:20px">Total Amount: {{totalAmount}}</h2>
        <h2> {{text}}</h2>
      </div>
      <b-button class="mt-3" variant="outline-primary" @click="ConfirmOrder" block>Confirm</b-button>
    </b-modal>
  </div>


    <v-navigation-drawer v-model="drawer" width="300px" absolute temporary right
    
    >
      <div class="drawer-head header-bar">
      
        <p>Shopify</p>
      </div>
     <div>
        <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-card  class="cart-item-card" v-for="item of cartProducts" :key="item.code">
            <div class="cart-item">
              <img
                width="80px"
                height="80px"
                :src="item.image"
                alt=""
              />

              <div class="name-quantity-container">
                <p>{{item.name}}</p>
               <div class="inc-dec-buttons">
                  <v-btn icon @click="IncrementQuantity(item.id)">
                  <v-icon medium>mdi-plus</v-icon>
                </v-btn>
                <h4>{{item.quantity}}</h4>
                <v-btn icon @click="DecrementQuantity(item.id)">
                  <v-icon medium>mdi-minus</v-icon>
                </v-btn>
               </div>
              </div>
              <div class="price">
                 <h4> Rs:{{item.price}}</h4>
               </div>
                <v-btn icon @click="deleteCartItem(item.id)">
                  <v-icon medium>mdi-delete</v-icon>
                </v-btn>
            </div>
          </v-card>
        </v-list-item-group>
      </v-list>
     </div>
      <!-- <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          class="checkout"
        >
          Click Me
        </v-btn> -->
        <button class="checkout header-bar" @click="Checkout">Checkout</button>
        <div>

 
</div>
    </v-navigation-drawer>

<!-- dialog -->
      
    
  </div>
  
  
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from "vuex";

// import Dialog from '../Dialog.vue'

export default {
  computed:mapGetters(['cartProducts','drawerValue']),
  data: function() {
  
    return {
      drawer: false,
     modalShow: false,
     totalAmount:0,
     text:'',
     isPurchased:true,
     isEmpty:true,

    }
 
  },
   components:{
   
    },
  watch:{
  cartProducts(val,oldVal){
    console.log(val,oldVal);
  }
  },
  methods:{
      ...mapActions(["drawerOpen","DeleteCartItem","incrementQuanity","decrementQuanity","conformOrder"]),
    deleteCartItem(id){
      console.log('id',id);
     this.DeleteCartItem(id)
    },
    IncrementQuantity(id){
      this.incrementQuanity(id)
    },
    DecrementQuantity(id){
      this.decrementQuanity(id)
    },
    // checkoutToCart(){
    
    // },
     showModal() {
       this.drawer=false
        this.$refs['my-modal'].show()
      },
      hideModal() {
         console.log('hide');
        this.$refs['my-modal'].hide()
        console.log('hide');
        this.totalAmount=0;
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
        console.log('hi')
      }
      ,
      Checkout(){
      this.totalAmount=0;
     this.cartProducts.map(({quantity,price})=> {
       console.log(quantity,price)
         this.totalAmount = this.totalAmount + (Number(quantity) * Number(price))
     }
     )
     this.showModal();
      },
    ConfirmOrder(){
      this.conformOrder();
      this.totalAmount=0;
      this.isPurchased=false
      this.text="successfuly purchased"
    },
    ClosedModal(){
      if(this.text==="successfuly purchased"){
          this.totalAmount=0;
      this.isPurchased=false
        this.text=''
      }
    },


  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header-bar{
  background: cadetblue !important ;
}
.header-title {
  font-size: 34px;
  margin: 0 28px;
  font-family: cursive;
}
a {
  text-decoration: none;
  color: white;
}
ul li {
  display: inline;
  margin-left: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}
.drawer-head{
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: rgb(43, 43, 43);
  border: 2px solid white;
  color: white;
  text-align: center;
  font-size: 25px;
  font-family: cursive;
  padding: 5px;
 
}
.cart-item-card{
  margin-bottom: 10px;
}
.cart-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.checkout {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: rgb(12, 12, 12);
  color: white;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 50px;
}
.name-quantity-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.name-quantity-container p {
  font-family: cursive;
}
.inc-dec-buttons{
  display: flex;
  align-items: center;
}
</style>