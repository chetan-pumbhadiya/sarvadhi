import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories, fetchProductsByCategory } from "../../services";
import { RootState } from "../store";

interface CategoriesState {
    items: string[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    selectedCategory: string | null;
    products: { [key: string]: any[] };
}

const initialState: CategoriesState = {
    items: [],
    status: "idle",
    error: null,
    selectedCategory: null,
    products: {},
};

export const fetchCategoriesAsync = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        const response = await fetchCategories();
        return response;
    }
);

export const fetchProductsByCategoryAsync = createAsyncThunk(
    "categories/fetchProductsByCategory",
    async (category: string, { getState }) => {
        const state = getState() as RootState;
        if (state.categories.products[category]) {
            return state.categories.products[category];
        }
        const response = await fetchProductsByCategory(category);
        return response;
    }
);

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoriesAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchCategoriesAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || null;
            })
            .addCase(fetchProductsByCategoryAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(
                fetchProductsByCategoryAsync.fulfilled,
                (state, action) => {
                    state.status = "succeeded";
                    state.products[state.selectedCategory!] = action.payload;
                }
            )
            .addCase(fetchProductsByCategoryAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || null;
            });
    },
});

export const { setSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
