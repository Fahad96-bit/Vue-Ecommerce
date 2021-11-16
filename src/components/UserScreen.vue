<template>
<div>
    <UserTable/>
<!-- <h1>Dashboard here</h1> -->
</div>
</template>


<script>
    import UserTable from './UserTable.vue'
export default {

  name: 'UserScreen',
  components: {
   UserTable
  }
}

</script>


<style scoped>
</style>