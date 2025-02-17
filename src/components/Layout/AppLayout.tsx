import React, { useState } from "react";
import { Breadcrumb, Layout } from "antd";
import Header from "../Header/Index";
import AppFooter from "../Footer/Index";
import { IconChevronRight } from "@tabler/icons-react";

const { Content, Footer } = Layout;
const AppLayout = (props: { children: React.ReactNode }) => {
    return (
        <Layout className="app-layout">
            <Layout className="site-layout">
                <Header />
                <Content className="app-content px-5 md:px-10 lg:px-40">
                    <Breadcrumb
                        className="items-center py-5"
                        separator={
                            <IconChevronRight className="text-[#949D9E] w-5 h-5" />
                        }
                        items={[
                            {
                                title: "Home",
                                className:
                                    "text-[#949D9E] text-sm uppercase tracking-wider",
                            },
                            {
                                title: "Products",
                                className:
                                    "text-[#1C1F1F] text-sm font-semibold uppercase tracking-wider",
                            },
                        ]}
                    />
                    <div className="app-content-wrapper">{props.children}</div>
                </Content>
                <Footer className="app-footer p-0">
                    <AppFooter />
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
