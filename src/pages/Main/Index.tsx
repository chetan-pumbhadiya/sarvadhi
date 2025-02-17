import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider, Input, Spin } from "antd";
import { RootState, AppDispatch } from "../../redux/store";
import {
    fetchCategoriesAsync,
    fetchProductsByCategoryAsync,
    setSelectedCategory,
} from "../../redux/slices/categoriesSlice";
import { setSearchQuery } from "../../redux/slices/searchSlice";
import {
    IconClover,
    IconDiamond,
    IconHeadphones,
    IconShirtSport,
} from "@tabler/icons-react";
import ProductList from "./ProductList";

const { Search } = Input;

const Main: React.FC = () => {
    const [category, setCategory] = useState<string | null>(null);
    const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

    const dispatch: AppDispatch = useDispatch();
    const categories = useSelector(
        (state: RootState) => state.categories.items
    );
    const categoriesStatus = useSelector(
        (state: RootState) => state.categories.status
    );
    const selectedCategory = useSelector(
        (state: RootState) => state.categories.selectedCategory
    );
    const products = useSelector(
        (state: RootState) => state.categories.products
    );
    const searchQuery = useSelector((state: RootState) => state.search.query);

    useEffect(() => {
        if (categoriesStatus === "idle") {
            dispatch(fetchCategoriesAsync());
        }
    }, [categoriesStatus, dispatch]);

    useEffect(() => {
        if (selectedCategory && !products[selectedCategory]) {
            dispatch(fetchProductsByCategoryAsync(selectedCategory));
        }
    }, [selectedCategory, dispatch, products]);

    useEffect(() => {
        const searchBar = document.getElementById("search-bar");
        if (searchBar) {
            searchBar.style.display = showSearchBar ? "block" : "none";
        }
    }, [showSearchBar]);

    const handleCategoryClick = (category: string) => {
        setCategory(category);
        dispatch(setSelectedCategory(category));
    };

    const handleSearch = (value: string) => {
        dispatch(setSearchQuery(value));
    };

    const filteredProducts: any = selectedCategory
        ? products[selectedCategory]?.filter((product: any) =>
              product.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : [];

    const categoryIcon = (category: string) => {
        switch (category) {
            case "electronics":
                return <IconHeadphones className="w-10 h-10 text-[#18484F]" />;
            case "jewelery":
                return <IconDiamond className="w-10 h-10 text-[#18484F]" />;
            case "men's clothing":
                return <IconShirtSport className="w-10 h-10 text-[#18484F]" />;
            case "women's clothing":
                return <IconClover className="w-10 h-10 text-[#18484F]" />;
            default:
                return null;
        }
    };

    if (categoriesStatus === "loading") {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spin size="large" />
            </div>
        );
    }

    return (
        <div className="mx-auto">
            <h1 className="text-lg font-semibold text-center mb-8 uppercase">
                PRODUCTS
            </h1>
            <Search
                id="search-bar"
                placeholder="Search products"
                onSearch={handleSearch}
                enterButton
                className="mb-8"
                style={{ maxWidth: "400px", margin: "0 auto", display: "none" }}
            />
            <div className="grid-cols-4 gap-4 grid md:flex justify-center space-x-4 mb-8 flex-wrap">
                {categories.map((category) => (
                    <div
                        key={category}
                        className="text-center min-w-[80px] cursor-pointer"
                        onClick={() => handleCategoryClick(category)}
                    >
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex justify-center items-center">
                            {categoryIcon(category)}
                        </div>
                        <span className="text-xs text-gray-700 tracking-wider capitalize">
                            {category}
                        </span>
                    </div>
                ))}
            </div>
            <Divider />

            <ProductList
                isFiltered={
                    !!category &&
                    filteredProducts &&
                    filteredProducts.length > 0
                }
                filteredProducts={filteredProducts}
            />
        </div>
    );
};

export default Main;
