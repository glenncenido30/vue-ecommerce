<template>
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          <span>{{ item.name }} - ${{ item.price }} x {{ item.quantity }}</span>
          <button @click="decreaseQuantity(item.id)">-</button>
          <button @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <p>Total Items: {{ cartCount }}</p>
      <p>Total Price: ${{ cartTotal }}</p>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['cartItems', 'cartTotal', 'cartCount'])
    },
    methods: {
      ...mapActions(['decreaseQuantity', 'removeFromCart'])
    }
  };
  </script>
  
  <style scoped>
  button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #dc3545;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #c82333;
  }
  </style>
  