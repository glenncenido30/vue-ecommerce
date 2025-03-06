
import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [
      { id: 1, name: 'Laptop', price: 1000 },
      { id: 2, name: 'Phone', price: 500 },
      { id: 3, name: 'Tablet', price: 300 },
      { id: 4, name: 'Headphones', price: 100 },
      { id: 5, name: 'Keyboard', price: 50 },
      { id: 6, name: 'Mouse', price: 30 },
      { id: 7, name: 'Monitor', price: 200 },
      { id: 8, name: 'Smartwatch', price: 150 },
      { id: 9, name: 'Speakers', price: 120 },
      { id: 10, name: 'Gaming Chair', price: 250 }
    ],
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, productId) {
      const item = state.cart.find(i => i.id === productId);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ id: productId, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    DECREASE_QUANTITY(state, productId) {
      const item = state.cart.find(i => i.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        state.cart = state.cart.filter(i => i.id !== productId);
      }
    }
  },
  actions: {
    addToCart({ commit }, productId) {
      commit('ADD_TO_CART', productId);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    decreaseQuantity({ commit }, productId) {
      commit('DECREASE_QUANTITY', productId);
    }
  },
  getters: {
    cartItems(state) {
      return state.cart.map(item => {
        const product = state.products.find(p => p.id === item.id);
        return { ...product, quantity: item.quantity };
      });
    },
    cartTotal(state) {
      return state.cart.reduce((total, item) => {
        const product = state.products.find(p => p.id === item.id);
        return total + product.price * item.quantity;
      }, 0);
    },
    cartCount(state) {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    }
  }
});
