<template>

  <content>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="product in products" :key="product.id">
          <div class="card text-center" style="border:2px solid gray;">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">{{ product.category_name }}</h6>
              <p class="card-text">{{ product.description}}</p>
            </div>
            <div class="card-footer text-danger">
              Prcio: $ {{ product.price}} - Por {{ product.price_type_description }}
            </div>
          </div>
        </div>
       
      </div>
  </content>

</template>

<script>
// @ is an alias to /src
  import axios from 'axios'

  export default {
    name: 'HomeView',

    data(){
      return{
        products: []
      }
    },

    mounted(){
      axios.get('http://127.0.0.1:8000/api/products/')
      .then(response=>{
        this.products=(response.data)
        // console.log(response.data)
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }

</script>
