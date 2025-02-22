import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { fetchProductsAsync } from "./redux/slices/productsSlice";
import { fetchCategoriesAsync } from "./redux/slices/categoriesSlice";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

store.dispatch(fetchProductsAsync());
store.dispatch(fetchCategoriesAsync());

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
