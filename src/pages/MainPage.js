import React from 'react';
import styles from '../styles/styles.module.css';

import Slider from '../widgets/Slider.tsx';

const MainPageContent = () => {

    return (
        <div  className={styles.middlecontainer}>
            {/* <body> This is the beginning of my resume site! </body> */}
            <section>
                <div>
                <h1> Who am I?</h1>
                <p> I am a computer science graduate who is delving down into the world of web development </p>
                </div>
                <div> 
                    <h1> Hello! </h1>
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
