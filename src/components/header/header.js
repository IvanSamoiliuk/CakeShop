import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ numItems, total }) => {
    return (
        <header className="header">
            <Link to="/" className="logo" href="#">
                Сласти от Насти
            </Link>
            <Link to="/cart" href="#">
                <i>
                    {numItems} сладостей | {total} гривен{" "}
                </i>
            </Link>
        </header>
    );
};

export default Header;
