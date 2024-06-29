import React, { useState, ReactNode } from "react";
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from "react-use-gesture";

import styles from './../widgets/slider.module.css';

const left = {
    bg:'#B66A5E',
    justifySelf: 'end',
}

const right = {
    bg: '#3D6567',
    justifySelf: 'start',
}

const SliderComp = ({ children, setCounter }: { children: ReactNode, setCounter: React.Dispatch<React.SetStateAction<number>> }) => {
    const [{ x, bg, scale, justifySelf }, api] = useSpring(() => ({
        x: 0,
        scale: 1,
        ...left,
    }))

    const [thresholdCrossed, setThresholdCrossed] = useState(false);
    const threshold = 100;

    const bind = useDrag(({ active, movement: [mx] }) => {

        if (!active) {
            if (Math.abs(mx) > threshold && !thresholdCrossed) {
                if ((mx) > 0 ) {
                    setCounter(prevCounter => prevCounter+ 1);
                } else  {
                    setCounter(prevCounter => prevCounter- 1);
                }
                setThresholdCrossed(true);
            } else if (Math.abs(mx) <= threshold) {
                setThresholdCrossed(false);
            }
        } else {
            setThresholdCrossed(false);
        }
    
        api.start({
            x: active ? mx : 0,
            scale: active ? 1.1 : 1,
            ...(mx < 0 ? left : right),
            immediate: name => active && name === 'x',
        })
    });

    const avSize = x.to({
        map: Math.abs,
        range: [50, 300],
        output: [0.5, 1],
        extrapolate: 'clamp',

    })

    return (
        <animated.div {...bind()} className={styles.item} style={{ background: bg }}> 
            <animated.div className={styles.av} style={{scale:avSize, justifySelf }} />
            <animated.div className={styles.fg} style={{ x, scale }}>
                {children}
            </animated.div>
        </animated.div>
    )
}

export default SliderComp;