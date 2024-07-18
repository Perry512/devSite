import React from 'react';
import styles from '../styles/styles.module.css';

import Slider from '../widgets/Slider.tsx';
import Weather from '../widgets/Weather.tsx';
import ToDo from '../widgets/ToDo.tsx';
import Pictures from '../widgets/Pictures.tsx';

const MainPageContent = () => {

    return (
        <div className={styles.middlecontainer}>
            <section>
                <div> <ToDo /> </div>
                <div> <Weather /></div>
                <div> <Slider /> </div>
            </section>
            <div className={styles.outerPhoto}> <Pictures /> </div>
        </div>
    );

}

export default function MainPage() {

    return (
        <div className={styles.middleouterbox}>
            <MainPageContent />
        </div>
    )
}
