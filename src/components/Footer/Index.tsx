import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandPinterest,
} from "@tabler/icons-react";
import { Button, Input } from "antd";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#D2E0E6] py-12">
            <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 md:px-20 lg:px-40">
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">
                            CONTACT US
                        </h3>
                        <p className="text-lg font-medium text-gray-900">
                            FOLLOW US ON
                        </p>
                        <div className="mt-4 flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                <IconBrandInstagram className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                <IconBrandFacebook className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                <IconBrandPinterest className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                <IconBrandLinkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">
                            SIGN UP FOR NEWSLETTER
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Send me news and updates
                        </p>
                        <div className="mt-4 flex">
                            <Input
                                placeholder="Enter your email"
                                className="flex-1 bg-transparent border-[#18484F] hover:bg-transparent focus:bg-transparent"
                            />
                            <Button
                                type="primary"
                                className="bg-[#18484F] hover:bg-[#18484F]"
                            >
                                SUBMIT
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-600">
                    <p>© 2025 SSPL</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
