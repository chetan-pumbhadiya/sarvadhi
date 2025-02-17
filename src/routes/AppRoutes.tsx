import { Space, Spin } from "antd";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "../components/Layout/AppLayout";

const Main = lazy(() => import("../pages/Main/Index"));
const AboutUs = lazy(() => import("../pages/About/Index"));

const routes = [
    { path: "/", component: <Main /> },
    { path: "/about-us", component: <AboutUs /> },
];

const FallbackComponent = () => {
    return (
        <AppLayout>
            <Space
                style={{
                    width: "100%",
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Spin size="large" />
            </Space>
        </AppLayout>
    );
};

const PageRoutes = () => {
    return (
        <Suspense fallback={<FallbackComponent />}>
            <BrowserRouter>
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                // currentUser ? (
                                <AppLayout>{route.component}</AppLayout>
                                // ) : (
                                //     <FallbackComponent />
                                // )
                            }
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default PageRoutes;
