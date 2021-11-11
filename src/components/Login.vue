<template>
  
     <form @submit="onSubmit" class="add-form container">
       <h1 class="login-text">Login</h1>
       <h2  v-if="visible === true"
       :class="[islogged ? 'login-success' : 'login-failed','msg']"
       >{{text}}</h2>
    <div class="form-control">

      <v-text-field
             class="email"
              v-model="email"
              :rules="rules.email"
              color="purple darken-2"
              label="Email"
              required
              
            >   </v-text-field>
            <i class="fa fa-envelope icon"></i>
    </div>
    <div class="form-control">
   
       <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"

          ></v-text-field>
    </div>
  <div class="btn-container">
<button  type="submit" class="submit">Login</button>
</div>
<div class="router-link-container">
    Don't have an account?
        <router-link class="navigation-signup" to="/signup">Signup</router-link>
    </div>
  </form>

</template>

<script>
export default {
  name: 'Login',
  data(){
        return{
          islogged:false,
            visible:false,
            text:'',
            email: '',
        reminder:false,
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
          rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
          name: [val => (val || '').length > 0 || 'This field is required'],
          email:[v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid']
        
        },
        
        
        }
       
    },
      methods:{
        onSubmit(e){
            e.preventDefault()
          
         const users = JSON.parse(localStorage.getItem("users") || "[]");
         const activeUser= users.find(({email,password}) => email === this.email && password === this.password )
         console.log('activeuser',activeUser);
       
         this.email=''
         this.password=''
         if(activeUser) {
            this.visible=true
            localStorage.setItem("activeUser", JSON.stringify(activeUser));
             this.text="successfully logged in"
             this.islogged=true
            this.$router.push('dashboard') 
             }
         else{
         this.visible=true
        this.text="Incorrect email or password"
         this.islogged=false
         }
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.msg{
  text-align: center;
}
.router-link-container{
    margin-top: 20px;
    display: flex;
    justify-content: end;
}
.navigation-signup{
      color:#00b3e3;
    padding-left: 5px;
    text-decoration: none;
}
.append-icon{
    color:#00b3e3;
}
.login-text{
  color:#00b3e3;
}
.btn-container{
    height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
      border-radius: 10px
;
  background-color:#00b3e3;
}
.submit{
  width: 100%;
  color: white;
  text-align: center;

}
.email{
  position: relative;
}
.icon{
  position: absolute;
     color:#00b3e3;
    right: 546px
;
}

h1{
 text-align: center; 
}
.add-form {
  
  margin-bottom: 40px;
}
.form-control {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
.v-text-field{
  width: 100%;
}
.login-failed{
color: red;
}
.login-success{
color: green;
}
.container{
   max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;

}
</style>
