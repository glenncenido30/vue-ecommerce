<template>
    <div>
      <h2>Product List</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          <span>{{ product.name }} - ₱{{ product.price }}</span>
          <button @click="addToCart(product.id)">Add to Cart</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['products'])
    },
    methods: {
      ...mapActions(['addToCart'])
    }
  };
  </script>
  
  <style scoped>
  button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #218838;
  }
  </style>
  
