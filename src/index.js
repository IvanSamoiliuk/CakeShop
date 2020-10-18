import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import ErrorBoundry from "./components/errorBoundry";
import CakeShopService from "./services";
import { CakeShopServiceProvider } from "./components/cakeShopServiceContext";
import App from "./components/app";

import store from "./store";

const cakeShopService = new CakeShopService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <CakeShopServiceProvider value={cakeShopService}>
                <Router>
                    <App />
                </Router>
            </CakeShopServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById("root")
);
