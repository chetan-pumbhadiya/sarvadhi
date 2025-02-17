import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services";

export const fetchProductsAsync = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await fetchProducts();
        return response;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "idle",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.status = "loading";
                state.loading = true;
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchProductsAsync.rejected, (state) => {
                state.status = "failed";
                state.loading = false;
            });
    },
});

export default productsSlice.reducer;
