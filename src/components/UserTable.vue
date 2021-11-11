<template>
<div>
<h1 style="text-align:center">UserName: {{selected}}</h1>
<div class="table-container">

<v-simple-table dense style="text-align:left">
    
      <thead>
        <tr>
          <th v-for="(head,index) of headers" :key="index">
              {{head}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr @click="handleClick(user)"
          v-for="(user,index) in users"
          :key="index"
        >
         <td>{{ user.id}}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.contact }}</td>
        </tr>
      </tbody>
 
  </v-simple-table>


  </div>
  </div>
</template>

<script>
  export default {
        name: 'UserTable',
      
      
    data () {
      return {
          selected:'',
             users:[],
              className :"start",
        headers: ['Id','Username','Email','Contact'],
   
      
      }
    },
    methods:{
        handleClick (value) {
            console.log('value',value)
        this.selected = value.username;
  }
    },
     created(){
            console.log(JSON.parse(localStorage.getItem("users") || "[]"))
            this.users= JSON.parse(localStorage.getItem("users") || "[]");
        }
  }
</script>

<style scoped>
.table-container{
    margin: 42px;
    border: 4px 12px steelblue;
    border: 1px solid steelblue;
}

th{
   background: white; 
    }
tr:nth-child(even){
    background: rgb(4, 245, 229);
}
tr:nth-child(odd){
    background: rgb(86, 172, 98);
}
</style>