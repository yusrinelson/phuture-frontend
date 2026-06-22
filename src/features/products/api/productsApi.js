import {products} from "../data/products";


export const getProducts = async () => {
    return products
}

export const getProductById = async (id) => {
    return products.find((p) => p._id === id)
}


// when backend is ready!
// import apiClient from "@/services/apiClient";

// export const getProducts = async () => {
//   const res = await apiClient.get("/products");
//   return res.data;
// };