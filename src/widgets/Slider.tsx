import React, { useState } from "react";

import SliderComp from "../components/SliderComp.tsx";

import styles from './slider.module.css';

export default function Slider() {

    const [counter, setCounter] = useState(0);

    return (
        <div className={styles.container}>
            <SliderComp setCounter={setCounter}> </SliderComp>
            <div className={styles.counterDisplay}> Counter: {counter} </div>
        </div>
    )
}