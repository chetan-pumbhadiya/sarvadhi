import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Index";
import AppRoutes from "./routes/AppRoutes";
import { ConfigProvider } from "antd";

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token
                    colorPrimary: "#00b96b",
                    borderRadius: 0,
                    fontFamily: `"Raleway", sans-serif`,

                    // Alias Token
                    colorBgContainer: "#ffffff",
                    colorBgBase: "#ffffff",
                    colorBgLayout: "#ffffff",
                },
            }}
        >
            <div className="App">
                <AppRoutes />
            </div>
        </ConfigProvider>
    );
}

export default App;
