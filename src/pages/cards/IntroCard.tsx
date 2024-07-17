import React from 'react';

import styles from '../../styles/styles.module.css';

const IntroCardContent = () => {
    return (

        <div className={styles.cardcontent}>
            <h2> Who am I? </h2>
            <div className={styles.yellowHorLine}></div>
            <br></br>
            <p> I am a Computer Science graduate with a passion for web design and fighting games </p>
        </div>

    );
}

export default function IntroCard() {

    return (
        <div className={styles.deck.div}>
            <IntroCardContent />
        </div>
    );

}
