<template>
  <div id="app">
    <h1>Vue E-Commerce Store</h1>
    <ProductList />
    <ShoppingCart />  
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";  

export default {
  name: "App",
  components: {
    ProductList,
    ShoppingCart,  
  },
};
</script>
