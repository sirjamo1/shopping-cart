import React, { useState, useEffect } from "react";

const Checkout = ({
    items,
    cartItems,
    checkoutDecrement,
    checkoutIncrement,
    onCartClick,
    handleDelete
}) => {
    const [grandTotal, setGrandTotal] = useState(0);
    useEffect(() => {
        let total = 0;
        cartItems.items.forEach((item) => {
            for (let i = 0; i < items.length; i += 1) {
                if (item.id === items[i].id) {
                    total = total + items[i].price * item.count;
                }
            }
        });
        setGrandTotal(total.toFixed(2));
    }, [cartItems, items]);

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="checkout-card-container">
                {cartItems.items.map((item) => {
                    for (let i = 0; i < items.length; i += 1) {
                        if (item.id === items[i].id) {
                            return (
                                <div key={item.id} className="checkout-card">
                                    <h4>{items[i].name}</h4>
                                    <img
                                        src={items[i].image}
                                        width="100px"
                                        alt={items[i].name}
                                    />
                                    <button
                                        onClick={() => {
                                            handleDelete(item.id);
                                        }}
                                        className="checkout-delete-button"
                                    >
                                        X
                                    </button>
                                    <div className="product-input">
                                        <button
                                            className="minus-button"
                                            onClick={() =>
                                                checkoutDecrement(item.id)
                                            }
                                        >
                                            -
                                        </button>
                                        <p>{item.count}</p>
                                        <button
                                            className="plus-button"
                                            onClick={() =>
                                                checkoutIncrement(item.id)
                                            }
                                        >
                                            +
                                        </button>
                                        <p>
                                            $
                                            {(
                                                items[i].price * item.count
                                            ).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            );
                        }
                    }
                })}
            </div>
            <div className="checkout-total-container">
                <p>Total items : {cartItems.totalCount}</p>
                <p>Total : ${grandTotal}</p>
                <button onClick={() => onCartClick()}>Continue Shopping</button>
                <button>Checkout</button>
            </div>
        </div>
    );
};
export default Checkout;
