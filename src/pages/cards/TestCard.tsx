import React from 'react';

import styles from './../../styles/styles.module.css';
const CardContent = () => {
 
return (
    <div className={styles.cardcontent}>
    <h2>Fourth Card </h2>
    <p>This is the fourth cards text</p>
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

