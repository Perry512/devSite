import React from 'react';

import styles from '../styles/styles.module.css'

const FooterComponent = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerSections}>
            <h1> TylerNicholas.dev </h1>
            </div>
        </footer>
    )
}

export default function Footer() {

    return (
        <FooterComponent />
    )
}