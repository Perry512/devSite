import React from 'react';
import styles from '../styles/styles.module.css';

import Slider from '../widgets/Slider.tsx';
import Weather from '../widgets/Weather.tsx';
import ToDo from '../widgets/ToDo.tsx';

const MainPageContent = () => {

    return (
        <div  className={styles.middlecontainer}>
            {/* <body> This is the beginning of my resume site! </body> */}
            <section>
                <div> <ToDo /> </div>
                <div> <Weather />
                </div>
                <div> <Slider /> </div>
            </section>
            <section> Section 2 </section>
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
