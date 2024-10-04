import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/styles.module.css'

const HeaderComponent = () => {

    return (
        <header className={styles.header}>
            <div className={styles.headerSections}>
                <div className={styles.headerLinks}>
                <Link to="/" className={styles.headerTitle}><h1> TylerNicholas.dev </h1></Link>
                <Link to="/resume"><p className={styles.headerTitle}>View my Resume</p></Link>
                </div>
            </div>
        </header>
    )
}

export default function Header() {

    return (
        <HeaderComponent />
    )
}