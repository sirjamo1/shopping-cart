import React, { useState } from "react";
import greenChartreuseBottle from "./assets/greenChartreuseBottle.png";
import greenChartreuseBottleVEP from "./assets/greenChartreuseBottleVEP.png";
import yellowChartreuseBottle from "./assets/yellowChartreuseBottle.png";
import yellowChartreuseBottleVEP from "./assets/yellowChartreuseBottleVEP.png";
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
        },
        {
            name: "Yellow Chartreuse VEP",
            alcohol: "42%",
            standardDrinks: 33.1,
            size: 1000,
            image: yellowChartreuseImageVEP,
            info: "A 1-liter bottle of Chartreuse V.E.P. Yellow, a light yet deliciously mellow liqueur produced with a magnificent blend of herbs and aged for at least 8 years.",
            price: 239.50,
            id: 2,
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
        },
        {
            name: "Green Chartreuse VEP",
            alcohol: "54%",
            standardDrinks: 42.6,
            size: 1000,
            image: greenChartreuseImageVEP,
            info: "Chartreuse Green VEP Liqueur is a unique and sophisticated French liqueur.",
            price: 249.50,
            id: 4,
        },
    ]);
    const [cartItems, setCartItems] = useState();
    return (
        <div className="shop-container">
            <div className="cart-sticky">
                <p>items : 5</p> <button>Go to cart</button>
            </div>
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
                    <div className="product-button-container">
                        <input type="number" min="0" max="5" />
                        <button>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shop;
