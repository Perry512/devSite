import React from 'react';

import styles from './../styles/styles.module.css';

const IntroCardContent = () => {
    return (

        <div className='card-content'>
            <h2> Who am I? </h2>
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
