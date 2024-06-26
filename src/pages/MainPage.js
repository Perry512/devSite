import React from 'react';
import styles from '../styles/styles.module.css';

const MainPageContent = () => {

    return (
        <div  className={styles.middlecontainer}>
            {/* <body> This is the beginning of my resume site! </body> */}
            <section>
                <h1> Who am I?</h1>
                <p> I am a computer science graduate who is delving down into the world of web development </p>
            </section>
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
