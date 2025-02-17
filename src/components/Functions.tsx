export const Wishlist = () => {
    return (
        <span className="text-xs text-[#1C1F1F] uppercase tracking-wider absolute top-2 right-2 cursor-pointer">
            Add to wishlist
        </span>
    );
};

export const Variations = () => {
    return (
        <div className="flex mt-2">
            {["bg-neutral-300", "bg-yellow-600", "bg-rose-300"].map(
                (color, index) => (
                    <div
                        key={index}
                        className={`w-5 h-5 ${color} rounded-full mr-2`}
                    ></div>
                )
            )}
        </div>
    );
};
