import React from "react";

import styles from "../../styles/styles.module.css";

const CardContent = () => {

    return(
        <div className={styles.cardcontent}>
            <h2> What is this website for? </h2>
            <div className={styles.yellowHorLine}></div>
            <br></br>
            <br></br>
            <p> This site is meant to show off my ability in developing web technologies, like a free form portfolio </p>
            <br></br>
            <br></br>
            <div className={styles.yellowHorLine}></div>
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