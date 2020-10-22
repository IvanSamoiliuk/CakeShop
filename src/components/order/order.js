import React from "react";
import { connect } from "react-redux";
import { onIncrease, onDecrease, onDelete } from "../../actions";
import "./order.css";

const Order = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    if (items.length === 0) {
        return <div className="cart_title"> Ваша корзина пуста :( </div>;
    }
    return (
        <>
            <div className="cart_title">Ваш заказ:</div>
            <div className="cart_list">
                {items.map((item) => {
                    const { total, name, imgURL, id } = item;
                    return (
                        <div key={id} className="cart_item">
                            <img
                                src={imgURL}
                                className="cart_item_img"
                                alt={name}
                            ></img>
                            <div className="cart_item_title">{name}</div>
                            <div className="cart_item_price">{total} грн.</div>
                            <div
                                onClick={() => onDecrease(id)}
                                className="cart_minus"
                            >
                                &mdash;
                            </div>
                            <div
                                onClick={() => onIncrease(id)}
                                className="cart_plus"
                            >
                                +
                            </div>
                        </div>
                    );
                })}
            </div>
            <button onClick={() => {}} className="btn btn-info order">
                Оформить заказ
            </button>
        </>
    );
};

const OrderContainer = ({ cartItems, onDecrease, onIncrease, onDelete }) => {
    console.log(cartItems);
    return (
        <Order
            items={cartItems}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
            onDelete={onDelete}
        />
    );
};

const mapStateToProps = ({ cartItems, total }) => {
    return {
        cartItems: cartItems,
        total: total,
    };
};

const mapDispatchToProps = {
    onDecrease,
    onIncrease,
    onDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);
