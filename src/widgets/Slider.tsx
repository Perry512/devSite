import React, {  ReactNode } from "react";
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from "react-use-gesture";

import styles from './../styles/styles.module.css';

const left = {
    bg:'#B66A5E',
    justifySelf: 'end',
}

const right = {
    bg: '#3D6567',
    justifySelf: 'start',
}

const SliderComp = ({ children}: { children: ReactNode }) => {
    const [{ x, bg, scale, justifySelf }, api] = useSpring(() => ({
        x: 0,
        scale: 1,
        ...left,
    }))

    const bind = useDrag(({ active, movement: [x] }) =>
        api.start({
            x: active ? x : 0,
            scale: active ? 1.1 : 1,
            ...(x < 0 ? left : right),
            immediate: name => active && name === 'x',
        })
    )

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

export default function Slider() {
    return (
        <div className={styles.container}>
            <SliderComp>Slide.</SliderComp>
        </div>
    )
}