import React, { useState } from "react";

import SliderComp from "../components/SliderComp.tsx";
import styles from '../styles/slider.module.css';

export default function Slider() {

    const [counter, setCounter] = useState(0);

    return (
        <div className={styles.container}>
            <h3> Widget Example </h3>
            <SliderComp setCounter={setCounter}> 
                <div className={styles.containerText}>
                    <span style={{color: "#B66A5E"}}>-</span> 
                    <span style={{color: "#3D6567"}}>+</span>
                </div>
                </SliderComp>
            <div className={styles.counterDisplay}> Counter: {counter} </div>
        </div>
    )
}