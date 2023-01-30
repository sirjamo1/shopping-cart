import React, { useState, useEffect } from "react";

const Checkout = ({
    items,
    cartItems,
    checkoutDecrement,
    checkoutIncrement,
    onCartClick,
    handleDelete,
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
        <div data-testid="checkout-component" className="checkout-container">
            <h2>Checkout</h2>
            <div className="checkout-card-container">
                {cartItems.items.length > 0 ? (
                    cartItems.items.map((item, i) => {
                        for (let j = 0; j < items.length; j += 1) {
                            if (item.id === items[j].id) {
                                return (
                                    <div
                                        key={item.id}
                                        className="checkout-card"
                                    >
                                        <h4>{items[j].name}</h4>
                                        <img
                                            src={items[j].image}
                                            width="100px"
                                            alt={items[j].name}
                                        />
                                        <button
                                            data-testid={`checkout-delete-button-${i}`}
                                            onClick={() => {
                                                handleDelete(item.id);
                                            }}
                                            className="checkout-delete-button"
                                        >
                                            X
                                        </button>
                                        <div className="product-input">
                                            <button
                                                data-testid={`checkout-decrement-button-${i}`}
                                                className="minus-button"
                                                onClick={() =>
                                                    checkoutDecrement(item.id)
                                                }
                                            >
                                                -
                                            </button>
                                            <p
                                                data-testid={`checkout-item-count-${i}`}
                                            >
                                                {item.count}
                                            </p>
                                            <button
                                                data-testid={`checkout-increment-button-${i}`}
                                                className="plus-button"
                                                onClick={() =>
                                                    checkoutIncrement(item.id)
                                                }
                                            >
                                                +
                                            </button>
                                            <p
                                                data-testid={`checkout-item-count-total-${i}`}
                                            >
                                                $
                                                {(
                                                    items[j].price * item.count
                                                ).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                );
                            }
                        }
                    })
                ) : (
                    <div>
                        <p data-testid="nothing-in-cart">Nothing in cart...</p>
                    </div>
                )}
            </div>
            <div className="checkout-total-container">
                <p>Total items : {cartItems.totalCount}</p>
                <p data-testid="checkout-grand-total">Total : ${grandTotal}</p>
                <button onClick={() => onCartClick()}>Continue Shopping</button>
                <button>Checkout</button>
            </div>
        </div>
    );
};
export default Checkout;
