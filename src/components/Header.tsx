import React from 'react';

import styles from '../styles/styles.module.css'

const HeaderComponent = () => {

    return (
        <header className={styles.header}>
            <div className={styles.headerSections}>
            <h1> TylerNicholas.dev </h1>
            </div>
        </header>
    )
}

export default function Header() {

    return (
        <HeaderComponent />
    )
}