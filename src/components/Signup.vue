<template>
  
     <form @submit="onSubmit" class="add-form container">
       <h1 class="login-text">Signup</h1>
    <div class="formcontrol">
      
    
   
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

     <div class="formcontrol">
      
    <v-text-field
               class="username"
              v-model="username"
              :rules="rules.name"
              color="purple darken-2"
              label="Username"
              required
            ></v-text-field>


           <i class="fa fa-user icon"></i>
    </div>

       <div class="formcontrol">
    
      <v-text-field
             class="contact"
              v-model="contact"
               :rules="[rules.required, rules.contact]"
              color="purple darken-2"
              label="Contact"
              required
              
            >   </v-text-field>
            <i class="fa fa-id-card icon"></i>
    </div>
    <div class="formcontrol">
   
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
<button  type="submit" class="submit">Signup</button>
</div>
<div class="router-link-container">
    Already have an account?
        <router-link class="navigation-login" to="/">Login</router-link>
    </div>
   
  </form>

</template>

<script>
export default {
  name: 'Signup',
  data(){
        return{
       
            email: '',
           username:'',
           contact:'',
             password: '',

        reminder:false,
        show1: false,
        show2: true,
        show3: false,
        show4: false,
      
          rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          contact: v => v.length === 11|| 'Min 11 numbers',
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
              

                const user={
                id:Math.floor(Math.random()*100000),
                email:this.email,
                 //Custom Filters
                username:this.username.charAt(0).toUpperCase() + this.username.slice(1),
                contact:this.contact,
                password:this.password
            }

           users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
         
               this.email=''
                this.username=''
                this.contact=''
                this.password=''

        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.container{
   max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;

}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.username{
      position: relative;
}
.router-link-container{
    margin-top: 20px;
    display: flex;
    justify-content: end;
}
.navigation-login{
      color:#00b3e3;
    padding-left: 5px;
    text-decoration: none;
}
.v-icon notranslate v-icon--link mdi mdi-eye-off theme--light{
    color:#00b3e3;
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
.contact{
    position: relative;
}
.email{
  position: relative;
}
.icon{
  position: absolute;
   
    right: 546px;
      color:#00b3e3;
;
}

h1{
 text-align: center; 
}
.add-form {
  margin-bottom: 40px;
}
.formcontrol {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
.formcontrol label {
  display: block;
}
.formcontrol input {
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

</style>
