import React from "react";
import styles  from "./Header.module.css";
import account from "../../public/account.svg";

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.brandContainer}>
                <h1>FlatRentalMarket</h1>
                    <ul className={styles.pointsContainer}>
                        <li>Flats</li>
                        <li>Houses</li>
                        <li>Prices</li>
                        <li>About</li>
                    </ul>
            </div>
            <img src={account.src} alt="Account" className={styles.accountImg}/>
        </div>
    );
};