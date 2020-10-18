import React from "react";
import "./app.css";
import { Switch, Route } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import Header from "../header/header";

const App = ({ cakeShopService }) => {
    return (
        <main role="main" className="app_bg">
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/cart" component={CartPage} />
            </Switch>
        </main>
    );
};

export default App;
