import React from "react";
import { Variations, Wishlist } from "../Functions";
import { Space, Typography } from "antd";

const { Text } = Typography;

interface ProductCardProps {
    data: {
        id: number;
        title: string;
        price: number;
        image: string;
    };
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    if (!data) return null;

    return (
        <div>
            <div
                key={data.id}
                className="h-[200px] md:h-[260px] lg:h-[360px] overflow-hidden flex items-center justify-center relative"
            >
                <img
                    src={data.image}
                    alt="img-1"
                    className="w-full h-full object-cover"
                />
                <Wishlist />
            </div>
            <h1 className="text-base font-semibold text-left mt-2 mb-1 uppercase truncate">
                {data.title}
            </h1>
            <Space>
                <Text type="secondary" className="tracking-wider uppercase">
                    Price:
                </Text>
                <Text className="tracking-wider ">${data.price}</Text>
                <Text type="secondary" className="tracking-wider">
                    ${data.price + data.price}
                </Text>
            </Space>
            <Variations />
        </div>
    );
};

export default ProductCard;
