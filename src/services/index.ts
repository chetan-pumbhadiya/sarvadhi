import { axiosInstance } from "./instance";

export const fetchProducts = async () => {
    const response = await axiosInstance.get("/products");
    return response.data;
};

export const fetchCategories = async () => {
    const response = await axiosInstance.get("/products/categories");
    return response.data;
};

export const fetchProductsByCategory = async (category: string) => {
    const response = await axiosInstance.get(`/products/category/${category}`);
    return response.data;
};
