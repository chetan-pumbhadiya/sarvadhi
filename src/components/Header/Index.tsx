import React from "react";
import Topbar from "./Topbar";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/slices/searchSlice";

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const handleSearchClick = () => {
        dispatch(setSearchQuery(""));
        // Toggle search bar visibility
        const searchBar = document.getElementById("search-bar");
        if (searchBar) {
            searchBar.style.display =
                searchBar.style.display === "none" ? "block" : "none";
        }
    };

    return (
        <>
            <Topbar />
            <div className="bg-[#18484F] h-[88px] flex items-center justify-center">
                <span className="text-base text-[#F4F5F5] uppercase font-medium tracking-wider mx-5">
                    About us
                </span>
                <span
                    className="text-base text-[#F4F5F5] uppercase font-medium tracking-wider mx-5 cursor-pointer"
                    onClick={handleSearchClick}
                >
                    Search
                </span>
                <span className="text-base text-[#F4F5F5] uppercase font-medium tracking-wider mx-5">
                    Wishlist
                </span>
            </div>
        </>
    );
};

export default Header;
