import React from "react";

import styles from "../styles/styles.module.css";

const CardContent = () => {

    return(
        <div className="card-content">
            <h2> What is this website for? </h2>
            <p> While it probably looks goofy right now, it is in general meant to show off my ability in developing web technologies, like a free form portfolio </p>
        </div>
    );

};

export default function WhatIsSite() {

    return (
        <div className={styles.deck.div}>
            <CardContent />
        </div>
    )

}