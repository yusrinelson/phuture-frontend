import { defineStore } from "pinia";
import { getProducts, getProductById } from "../api/productsApi";


const useProductsStore = defineStore("products", {
    state: () => ({
        products: [],
        selectedProduct: null,
    }),

    actions: {
        async fetchProducts() {
            this.products = await getProducts();
        },

        async fetchProductById(id) {
            this.selectedProduct = await getProductById(id);
        },
    }
})

export default useProductsStore;