import React from 'react';

import styles from '../../styles/styles.module.css';

const WelcomeCardContent = () => {

	return (
		<div className={styles.outerCard}>
		<div className={styles.middleCard}>
		<div className={styles.innerCard}>
		<div className={styles.cardcontent}>
			<h2> Welcome to my website! </h2>
			<div className={styles.yellowHorLine}> </div>
			<br></br>
			<p> Thank you for visiting my personal development website! </p>
			<br></br>
			<div className={styles.yellowHorLine}></div>
			<br></br>
			<p> This site is still very much in progress, currently working on making it look visually appealing, so please mind the dust!</p>
		</div>
		</div>
		</div>
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
