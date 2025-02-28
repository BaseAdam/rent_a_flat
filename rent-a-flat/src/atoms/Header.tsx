import React from "react";
import styles  from "./Header.module.css";
export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <h1>FlatRentalMarket</h1>
            <div>
                <ul className={styles.pointsContainer}>
                    <li>Flats</li>
                    <li>Houses</li>
                    <li>Prices</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    );
};