import React, { useState } from "react";
import greenChartreuseBottle from "./assets/greenChartreuseBottle.png";
import greenChartreuseBottleVEP from "./assets/greenChartreuseBottleVEP.png";
import yellowChartreuseBottle from "./assets/yellowChartreuseBottle.png";
import yellowChartreuseBottleVEP from "./assets/yellowChartreuseBottleVEP.png";
import Checkout from "./Checkout";
//import chartreuseLogoTransparent from "./assets/chartreuseLogoTransparent.png";

const Shop = () => {
    const yellowChartreuseImage = yellowChartreuseBottle;
    const yellowChartreuseImageVEP = yellowChartreuseBottleVEP;
    const greenChartreuseImage = greenChartreuseBottle;
    const greenChartreuseImageVEP = greenChartreuseBottleVEP;
    const [items, setItems] = useState([
        {
            name: "Yellow Chartreuse",
            alcohol: "43%",
            standardDrinks: 23.7,
            size: 700,
            image: yellowChartreuseImage,
            info: "Yellow Chartreuse was first introduced to the world in 1838, and it is milder and sweeter than the famed Green Chartreuse. ",
            price: 82.99,
            id: 1,
            count: 0,
            totalCount: 0,
        },
        {
            name: "Yellow Chartreuse VEP",
            alcohol: "42%",
            standardDrinks: 33.1,
            size: 1000,
            image: yellowChartreuseImageVEP,
            info: "A 1-liter bottle of Chartreuse V.E.P. Yellow, a light yet deliciously mellow liqueur produced with a magnificent blend of herbs and aged for at least 8 years.",
            price: 239.5,
            id: 2,
            count: 0,
            totalCount: 0,
        },
        {
            name: "Green Chartreuse",
            alcohol: "55%",
            standardDrinks: 30,
            size: 700,
            image: greenChartreuseImage,
            info: "Chartreuse is an aromatic French inebriate flavored with a hundred thirty herbs.",
            price: 92.99,
            id: 3,
            count: 0,
            totalCount: 0,
        },
        {
            name: "Green Chartreuse VEP",
            alcohol: "54%",
            standardDrinks: 42.6,
            size: 1000,
            image: greenChartreuseImageVEP,
            info: "Chartreuse Green VEP Liqueur is a unique and sophisticated French liqueur.",
            price: 249.5,
            id: 4,
            count: 0,
            totalCount: 0,
        },
    ]);
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const [cartItems, setCartItems] = useState({
        totalCount: 0,
        items: [
            // { id: 1, count: 0 },
            // { id: 2, count: 0 },
            // { id: 3, count: 0 },
            // { id: 4, count: 0 },
        ],
    });
    const onCartClick = () => {
        setCheckoutOpen(!checkoutOpen);
    };
    const increment = (id) => {
        let itemsCopy = [...items];
        for (let i = 0; i < itemsCopy.length; i += 1) {
            if (itemsCopy[i].id === id) {
                itemsCopy[i].count = items[i].count + 1;
            }
        }
        setItems(itemsCopy);
    };
    const decrement = (id) => {
        let itemsCopy = [...items];
        for (let i = 0; i < itemsCopy.length; i += 1) {
            if (itemsCopy[i].id === id) {
                if (items[i].count > 0) {
                    itemsCopy[i].count = items[i].count - 1;
                }
            }
        }
        setItems(itemsCopy);
    };
    const checkoutDecrement = (id) => {
        let cartItemsCopy = { ...cartItems };
        cartItemsCopy.items.forEach((item) => {
            if (item.id === id) {
                if (item.count <= 0) {
                    return;
                } else {
                    item.count = item.count - 1;
                    cartItemsCopy.totalCount = cartItemsCopy.totalCount - 1;
                }
            }
        });
        setCartItems(cartItemsCopy);
    };
    const checkoutIncrement = (id) => {
        let cartItemsCopy = { ...cartItems };
        cartItemsCopy.totalCount = cartItemsCopy.totalCount + 1;
        cartItemsCopy.items.forEach((item) => {
            if (item.id === id) {
                item.count = item.count + 1;
            }
        });
        setCartItems(cartItemsCopy);
    };
    const addItemsToCart = (item) => {
        const id = item.id;
        let cartItemsCopy = { ...cartItems };
        for (let i = 0; i < items.length; i += 1) {
            if (items[i].id === id) {
                cartItemsCopy.totalCount  += items[i].count;
                for (let j = 0; j < cartItems.items.length; j += 1) {
                    if (cartItems.items[j].id === id) {
                        cartItems.items[j].count += items[i].count;
                        resetCount(id);
                    }
                }
                if (items[i].count > 0) {
                    cartItems.items[cartItems.items.length] = {
                        id: id,
                        count: items[i].count,
                    };
                }
            }
        }
        setCartItems(cartItemsCopy);
        resetCount(id);
    };
    const handleDelete = (id) => {
        let cartItemsCopy = { ...cartItems };
        for (let i = 0; i < cartItemsCopy.items.length; i += 1) {
            if (cartItemsCopy.items[i].id === id) {
                cartItemsCopy.totalCount -= cartItemsCopy.items[i].count;
                cartItemsCopy.items.splice(i, 1);
            }
        }
        setCartItems(cartItemsCopy);
    };
    const resetCount = (id) => {
        let itemsCopy = [...items];
        for (let i = 0; i < itemsCopy.length; i += 1) {
            if (itemsCopy[i].id === id) {
                if (items[i].count > 0) {
                    itemsCopy[i].count = 0;
                }
            }
        }
        setItems(itemsCopy);
    };

    return (
        <div className="shop-container">
            {!checkoutOpen ? (
                <div className="cart-sticky">
                    <p>items : {cartItems.totalCount}</p>
                    <button onClick={onCartClick}>Go to cart</button>
                </div>
            ) : (
                <Checkout
                    items={items}
                    cartItems={cartItems}
                    checkoutDecrement={checkoutDecrement}
                    checkoutIncrement={checkoutIncrement}
                    onCartClick={onCartClick}
                    handleDelete={handleDelete}
                />
            )}
            {items.map((item) => (
                <div className="product-card" key={item.id}>
                    <h3>{item.name}</h3>

                    <div className="image-and-details">
                        <img src={item.image} width="100px" alt={item.name} />
                        <div className="product-details">
                            <p>Alc : {item.alcohol}</p>
                            <p>Size : {item.size}ml </p>
                            <p>Standard Drinks : {item.standardDrinks}</p>
                            <p>Price : ${item.price}</p>
                        </div>
                    </div>
                    <div className="product-info">
                        <p>{item.info}</p>
                    </div>
                    <div className="product-input-container">
                        <div className="product-input">
                            <button
                                className="minus-button"
                                onClick={() => decrement(item.id)}
                                disabled={checkoutOpen}
                            >
                                -
                            </button>
                            <p>{item.count}</p>
                            <button
                                className="plus-button"
                                onClick={() => increment(item.id)}
                                disabled={checkoutOpen}
                            >
                                +
                            </button>
                        </div>
                        <div>
                            <button
                                className="add-to-cart-button"
                                onClick={() => addItemsToCart(item)}
                                disabled={checkoutOpen}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shop;
