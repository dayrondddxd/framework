<template>


    <section class="mt-5 text-center mx-auto">
    <h1 class="text-danger">PANADERIA</h1>
    <div class="mt-3" v-if="$route.path !== '/about'">
      <button type="button" class="btn btn-info" v-for="category in categories" :key="category.id">{{ category.name }}</button>
    </div>
    <hr>
  </section>



</template>





<script>
import axios from 'axios'

export default {
  name: 'NavegationComponent',
  data(){
    return{
      categories:[]
    }
  },

    mounted() {
      axios.get('http://127.0.0.1:8000/api/categories/')
      .then(response=>{
        this.categories=response.data
        // console.log(response.data)
      })
      .catch(error=>{
        console.log(error)
      })
    }  
    
    }

</script>





<style>


</style>
