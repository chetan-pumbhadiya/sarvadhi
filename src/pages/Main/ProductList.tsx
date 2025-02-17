import React from "react";
import { Variations, Wishlist } from "../../components/Functions";
import { Space, Typography } from "antd";
import ProductCard from "../../components/ProductCard/Index";

const { Text } = Typography;

interface ProductListProps {
    isFiltered: boolean;
    filteredProducts: any[];
}

const ProductList: React.FC<ProductListProps> = ({ isFiltered, filteredProducts }) => {
    return isFiltered ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {filteredProducts.map((product: any) => (
                <div className="col-span-1" key={product.id}>
                    <ProductCard data={product} />
                </div>
            ))}
        </div>
    ) : (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-6 mb-6">
                <div className="col-span-1 ">
                    <div className="h-[652px] overflow-hidden flex items-center justify-center relative">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/262d/29d4/a67b8a7196d382d64f2f96dbb4cee86c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X3VPqz2~6ksu-P4jHbnuBsvopt4wAQS93DiqDTlkSVEclYRlB5woAnsDNQc-Ql1h2zsbLlK3pyO4Ni1YNnMu0SLdkyuabcPuABjz0cKuLPKI3SIzGmfbT31eciN1MWPBrSuYTEkurpYTrA4lmnS7gyRoOBqwVvH5CFyY4nFjULXzyJoOJHQltHHHz0a7junhzUdRET3enX7AGaHL9hEZjywg-SAECEbY7IZTL8xp~UcRieGKobRdfDHHKkeY7gFkTunxoYXCZXGW5~bIxRyvw6IsZKJ4QMG5jrNrTZLynvb6BOPaeVhRvw4PQ88Z1qWFrubcVLdgLI3g5ayIvcpy0w__"
                            alt="img-1"
                            className="w-full h-full object-cover"
                        />
                        <Wishlist />
                    </div>
                    <h1 className="text-base font-semibold text-left mt-2 mb-1 uppercase">
                        Halo Ring
                    </h1>
                    <Space>
                        <Text
                            type="secondary"
                            className="tracking-wider uppercase"
                        >
                            Price:
                        </Text>
                        <Text className="tracking-wider ">$3000</Text>
                        <Text type="secondary" className="tracking-wider">
                            $5000
                        </Text>
                    </Space>
                    <Variations />
                </div>
                <div className="col-span-1">
                    <div className="flex flex-col justify-between h-[652px]">
                        <div className="h-[314px] overflow-hidden flex items-center justify-center relative">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/df64/1b2a/d1ffe6936f970de47be18018f8c41548?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t-fikfy8dq4GTLo13X6CAo~S6IBySZIG8BaVVrCWtH0sB0Zp35XTZhqbdyCp34OR-cwBlcnz04cnK3ZMr9p5FECo7c3-AXS18sondcPSZu9tVEmpAddhvHIHB9Qr~aLeZv96-kZLsoqwmmj6bWlxDSQVMpIXy~XA-yw-Cv6JG2ftgJKpbgQHkM3godA15-uR2MJdClKFOzMlCoiqlxs-sN0B7-l6HOhdtBDleU2IelPaglperRvDz-AhFxaEXKmjPYy8pg4SvtOP~bJn3YvlxsEv~rQiow1yXccybxWUdbGV9aAXMJDy-ZriRS9juNRCIwj2bdT0oqanel501tetOQ__"
                                alt="img-2"
                                className="w-full h-full object-cover"
                            />
                            <Wishlist />
                        </div>
                        <div className="h-[314px] overflow-hidden flex items-center justify-center relative">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/d281/cb80/4e1c9e66602a77a715f15eeb7706fda3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WtxmAgPQ6Xq~lCcUQ2Qz6e32CQERGP4PiagZr3w6GZFhvnGe4CIzf~XMPsYexIzCvCjRSecqDM4BBUovmXF0uEi-s28702RVo1KKW9H0Hs~w25jPb-rxAUbMPM6A0oWdiUCkjmuEp-NKCrA-xepGeEIjBFT-8U0h8J5uqFpHKMneYadfh-GItruM7Wpa6XTK7OpdjW6Hn8My4mi8uoksw9e8uh7f305tFpbc~DeW~Ed8fFdIu-kB445Vxn7BbX9Dp9i08aWQohgm6-Vqu0Op4-grwBwbsiRUmJ0zb04pPFGUESesIggdXtVntZF~NhrhuezFUZEdA7dwdjoz-kDiLA__"
                                alt="img-3"
                                className="w-full h-full object-cover"
                            />
                            <Wishlist />
                        </div>
                    </div>
                    <h1 className="text-base font-semibold text-left mt-2 mb-1 uppercase">
                        Halo Ring
                    </h1>
                    <Space>
                        <Text
                            type="secondary"
                            className="tracking-wider uppercase"
                        >
                            Price:
                        </Text>
                        <Text className="tracking-wider ">$3000</Text>
                        <Text type="secondary" className="tracking-wider">
                            $5000
                        </Text>
                    </Space>
                    <Variations />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                {[1, 2, 3].map((_, index) => (
                    <div className="col-span-1 " key={index}>
                        <div className="h-[200px] md:h-[260px] lg:h-[360px] overflow-hidden flex items-center justify-center relative">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/262d/29d4/a67b8a7196d382d64f2f96dbb4cee86c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X3VPqz2~6ksu-P4jHbnuBsvopt4wAQS93DiqDTlkSVEclYRlB5woAnsDNQc-Ql1h2zsbLlK3pyO4Ni1YNnMu0SLdkyuabcPuABjz0cKuLPKI3SIzGmfbT31eciN1MWPBrSuYTEkurpYTrA4lmnS7gyRoOBqwVvH5CFyY4nFjULXzyJoOJHQltHHHz0a7junhzUdRET3enX7AGaHL9hEZjywg-SAECEbY7IZTL8xp~UcRieGKobRdfDHHKkeY7gFkTunxoYXCZXGW5~bIxRyvw6IsZKJ4QMG5jrNrTZLynvb6BOPaeVhRvw4PQ88Z1qWFrubcVLdgLI3g5ayIvcpy0w__"
                                alt="img-1"
                                className="w-full h-full object-cover"
                            />
                            <Wishlist />
                        </div>
                        <h1 className="text-base font-semibold text-left mt-2 mb-1 uppercase">
                            Halo Ring
                        </h1>
                        <Space>
                            <Text
                                type="secondary"
                                className="tracking-wider uppercase"
                            >
                                Price:
                            </Text>
                            <Text className="tracking-wider ">$3000</Text>
                            <Text type="secondary" className="tracking-wider">
                                $5000
                            </Text>
                        </Space>
                        <Variations />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-6 mb-6">
                <div className="col-span-1">
                    <div className="flex flex-col justify-between h-[652px]">
                        <div className="h-[314px] overflow-hidden flex items-center justify-center relative">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/df64/1b2a/d1ffe6936f970de47be18018f8c41548?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t-fikfy8dq4GTLo13X6CAo~S6IBySZIG8BaVVrCWtH0sB0Zp35XTZhqbdyCp34OR-cwBlcnz04cnK3ZMr9p5FECo7c3-AXS18sondcPSZu9tVEmpAddhvHIHB9Qr~aLeZv96-kZLsoqwmmj6bWlxDSQVMpIXy~XA-yw-Cv6JG2ftgJKpbgQHkM3godA15-uR2MJdClKFOzMlCoiqlxs-sN0B7-l6HOhdtBDleU2IelPaglperRvDz-AhFxaEXKmjPYy8pg4SvtOP~bJn3YvlxsEv~rQiow1yXccybxWUdbGV9aAXMJDy-ZriRS9juNRCIwj2bdT0oqanel501tetOQ__"
                                alt="img-2"
                                className="w-full h-full object-cover"
                            />
                            <Wishlist />
                        </div>
                        <div className="h-[314px] overflow-hidden flex items-center justify-center relative">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/d281/cb80/4e1c9e66602a77a715f15eeb7706fda3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WtxmAgPQ6Xq~lCcUQ2Qz6e32CQERGP4PiagZr3w6GZFhvnGe4CIzf~XMPsYexIzCvCjRSecqDM4BBUovmXF0uEi-s28702RVo1KKW9H0Hs~w25jPb-rxAUbMPM6A0oWdiUCkjmuEp-NKCrA-xepGeEIjBFT-8U0h8J5uqFpHKMneYadfh-GItruM7Wpa6XTK7OpdjW6Hn8My4mi8uoksw9e8uh7f305tFpbc~DeW~Ed8fFdIu-kB445Vxn7BbX9Dp9i08aWQohgm6-Vqu0Op4-grwBwbsiRUmJ0zb04pPFGUESesIggdXtVntZF~NhrhuezFUZEdA7dwdjoz-kDiLA__"
                                alt="img-3"
                                className="w-full h-full object-cover"
                            />
                            <Wishlist />
                        </div>
                    </div>
                    <h1 className="text-base font-semibold text-left mt-2 mb-1 uppercase">
                        Halo Ring
                    </h1>
                    <Space>
                        <Text
                            type="secondary"
                            className="tracking-wider uppercase"
                        >
                            Price:
                        </Text>
                        <Text className="tracking-wider ">$3000</Text>
                        <Text type="secondary" className="tracking-wider">
                            $5000
                        </Text>
                    </Space>
                    <Variations />
                </div>
                <div className="col-span-1 ">
                    <div className="h-[652px] overflow-hidden flex items-center justify-center relative">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/262d/29d4/a67b8a7196d382d64f2f96dbb4cee86c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X3VPqz2~6ksu-P4jHbnuBsvopt4wAQS93DiqDTlkSVEclYRlB5woAnsDNQc-Ql1h2zsbLlK3pyO4Ni1YNnMu0SLdkyuabcPuABjz0cKuLPKI3SIzGmfbT31eciN1MWPBrSuYTEkurpYTrA4lmnS7gyRoOBqwVvH5CFyY4nFjULXzyJoOJHQltHHHz0a7junhzUdRET3enX7AGaHL9hEZjywg-SAECEbY7IZTL8xp~UcRieGKobRdfDHHKkeY7gFkTunxoYXCZXGW5~bIxRyvw6IsZKJ4QMG5jrNrTZLynvb6BOPaeVhRvw4PQ88Z1qWFrubcVLdgLI3g5ayIvcpy0w__"
                            alt="img-1"
                            className="w-full h-full object-cover"
                        />
                        <Wishlist />
                    </div>
                    <h1 className="text-base font-semibold text-left mt-2 mb-1 uppercase">
                        Halo Ring
                    </h1>
                    <Space>
                        <Text
                            type="secondary"
                            className="tracking-wider uppercase"
                        >
                            Price:
                        </Text>
                        <Text className="tracking-wider ">$3000</Text>
                        <Text type="secondary" className="tracking-wider">
                            $5000
                        </Text>
                    </Space>
                    <Variations />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                {[1, 2, 3].map((_, index) => (
                    <div className="col-span-1 " key={index}>
                        <div className="h-[200px] md:h-[260px] lg:h-[360px] overflow-hidden flex items-center justify-center relative">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/262d/29d4/a67b8a7196d382d64f2f96dbb4cee86c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X3VPqz2~6ksu-P4jHbnuBsvopt4wAQS93DiqDTlkSVEclYRlB5woAnsDNQc-Ql1h2zsbLlK3pyO4Ni1YNnMu0SLdkyuabcPuABjz0cKuLPKI3SIzGmfbT31eciN1MWPBrSuYTEkurpYTrA4lmnS7gyRoOBqwVvH5CFyY4nFjULXzyJoOJHQltHHHz0a7junhzUdRET3enX7AGaHL9hEZjywg-SAECEbY7IZTL8xp~UcRieGKobRdfDHHKkeY7gFkTunxoYXCZXGW5~bIxRyvw6IsZKJ4QMG5jrNrTZLynvb6BOPaeVhRvw4PQ88Z1qWFrubcVLdgLI3g5ayIvcpy0w__"
                                alt="img-1"
                                className="w-full h-full object-cover"
                            />
                            <Wishlist />
                        </div>
                        <h1 className="text-base font-semibold text-left mt-2 mb-1 uppercase">
                            Halo Ring
                        </h1>
                        <Space>
                            <Text
                                type="secondary"
                                className="tracking-wider uppercase"
                            >
                                Price:
                            </Text>
                            <Text className="tracking-wider ">$3000</Text>
                            <Text type="secondary" className="tracking-wider">
                                $5000
                            </Text>
                        </Space>
                        <Variations />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductList;
