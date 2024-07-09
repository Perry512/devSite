import React from 'react';

import styles from '../../styles/styles.module.css';

const WelcomeCardContent = () => {

	return (
		<div className={styles.cardcontent}>
			<h2> Welcome to my website! </h2>
			<p> Thank you for visiting my personal development website! </p>
		</div>
	);
}

export default function WelcomeCard() {

	return (
		<div className={styles.deck.div}>
			<WelcomeCardContent />
		</div>
	);
}
