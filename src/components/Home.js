import React from "react";

const Home = () => {
    const text = "Chartreuse";
    return (
        <div className="home-container">
            <h1 className="home-title" data-testid="homeTitle">{text}</h1>
            <div className="home-banner"></div>
            <div className="general-info">
                <h4>What is Chartreuse</h4>
                <p>
                    Chartreuse is a unique and well-known liqueur that has a
                    rich history dating back to the 18th century. The recipe for
                    Chartreuse was originally created by a group of Carthusian
                    monks in the French Alps. The recipe was said to have been
                    passed down to the monks by a marshal of France, François
                    Annibal d'Estrées, in the early 1700s. The recipe consisted
                    of a secret blend of over 130 herbs, plants, and flowers,
                    and it was said to have medicinal properties.
                </p>
            </div>
        </div>
    );
};



export default Home