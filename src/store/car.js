import { defineStore } from 'pinia'
export const useCart = defineStore("card", {
    state: () => {
        return {
            cart: []
        }
    }, getters: { carLength: (state) => state.cart.length },
    actions: {
        addProduct(product) { this.cart.push(product) }
    }
})