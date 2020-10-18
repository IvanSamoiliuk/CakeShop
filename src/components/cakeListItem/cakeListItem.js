import React from "react";
import "./cakeListItem.css";

const CakeListItem = ({ cake }) => {
    const { name, imgURL, price } = cake;
    return (
        <li className="sweet_item">
            <div className="sweet_title">{name}</div>
            <img className="sweet_image" src={imgURL} alt={name} />
            <div className="sweet_price">{price} грн/кг</div>
            <button className="btn btn-info sweet_btn">Заказать</button>
        </li>
    );
};

export default CakeListItem;
