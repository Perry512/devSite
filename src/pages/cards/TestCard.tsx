import React from 'react';

import styles from './../../styles/styles.module.css';
const CardContent = () => {
 
return (
    <div className={styles.cardcontent}>
    <h2>I hope you enjoy the rest of this websites content found below! </h2>
    </div>
    );

}

export default function TestCard() {

    return (
        <div className={styles.deck.div}>
            <CardContent />
        </div>
    );

}

