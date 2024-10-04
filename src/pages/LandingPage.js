// FirstPageContent.js

import React from "react";
import styles from '../styles/styles.module.css';

const FirstPageContent = () => {
    return (
        <>
            <div className={styles.background}>
                <div className={styles.infoContainer}>
                    <div className={styles.infoTop}>
                        <div className={styles.infoWelcomeTop}> 
                            Hello, my name is&nbsp; <span style={{textDecoration: 'none', color:"#0D1821"}}>  Tyler </span>,    
                        </div>
                        <div className={styles.infoWelcomeBottom}> 
                            Thank you for visiting my site 
                        </div>
                    </div>
                    <div className={styles.infoBottom}>
                        <div className={styles.navButtonBase}>
                            <a className={styles.navButton} href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About Me</a>
                        </div>
                        <div className={styles.navButtonBase}>
                            <a className={styles.navButton} href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</a>
                        </div>
                        <div className={styles.navButtonBase}>
                            <a className={styles.navButton} href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FirstPageContent;

