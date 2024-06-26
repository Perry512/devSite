import React from 'react';

import styles from '../../styles/styles.module.css';

const WelcomeCardContent = () => {

	return (
		<div className={styles.cardcontent}>
			<h2> Welcome to my website! </h2>
			<p> This is still very much a work in progress, but more will be added day by day as my journey continues! </p>
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
