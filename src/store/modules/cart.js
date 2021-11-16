

const state={
    cart:[],
    drawer:false,
};
// let flag=false;
const getters={
    cartProducts:state=>state.cart,
    drawerValue:state=>state.drawer
}
const actions={
    addProduct({commit},product){
        console.log('product',product)
        commit('addProducts',product)
    },
    DeleteCartItem({commit},productId){
        commit('deleteItem',productId)
    },

    drawerOpen({commit},openDrawer){
        commit('isDrawerOpen',openDrawer)
    },
    incrementQuanity({commit},itemId){
        commit('increment',itemId)
    },
    decrementQuanity({commit},itemId){
        commit('decrement',itemId)
    },
    conformOrder({commit}){
    commit('confirm')
    },
}
const mutations={
    confirm(state){
        state.cart=[]
    },
    addProducts(state,product){
        state.cart.push(product)
    }
    ,
    // isDrawerOpen:(state,openDrawer)=>( state.drawer=openDrawer),
    deleteItem(state,productId){
       state.cart=state.cart.filter(({id})=> (id !== productId ))
       
    },
     increment(state,itemId){
        
        const cartItem = state.cart.find(item => item.id === itemId)
        cartItem.quantity++
//    let index= state.cart.findIndex(({id}) =>( id === itemId))

     },
    decrement(state,itemId){
        
        const cartItem = state.cart.find(item => item.id === itemId)
        cartItem.quantity--
//    let index= state.cart.findIndex(({id}) =>( id === itemId))

     },


        // console.log('hi',{...state.cart[index],quantity:quantity++})
     

//     increment:(state,itemId)=>(
        
//    state.cart= state.cart.findIndex(({id,quantity},index) => {
//         // console.log('hi',{...state.cart[index],quantity:quantity++})
     
//         if(id === itemId){
           
//             console.log('id',id)
//             Vue.set(state.cart[index],quantity++)
          
           
//         }
    
      
//     }
//     ))
    // state.cart[index]={}
    // increment:(state,itemId)=>(
    //     state.cart=state.cart.map(({id,quantity},index) => (
        
    //         id === itemId ? 
    //            {...state.cart[index],quantity:quantity++}
           
    //             : {...state.cart[index],quantity}
        
        
    //     )))
    // ,
    
    // decrement(state,itemId)=>(
        
    // state.cart.map(({id},index) => {
    //     // console.log('hi',{...state.cart[index],quantity:quantity++})
     
    //     if(id === itemId){
           
    //         console.log('id',id)
    //         state.cart[index].quantity--;
           
    //     }
      
    // }
    // ))

   
}
export default {
    state,
    getters,
    actions,
    mutations
}