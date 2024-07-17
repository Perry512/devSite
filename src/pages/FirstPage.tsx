import React, { useState, useEffect } from "react";
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';  

import styles from '../styles/styles.module.css';

import IntroCard from "./cards/IntroCard.tsx"
import WhatIsSite from "./cards/WhatIsSite.tsx";
import TestCard from "./cards/TestCard.tsx";
import WelcomeCard from "./cards/WelcomeCard.tsx";

// const cards = [
//     'https://www.dustloop.com/wiki/images/7/71/GGST_Goldlewis_Dickinson_jD.png',
//     'https://www.dustloop.com/wiki/images/9/91/GGST_Goldlewis_Dickinson_236D.png',
//     'https://wiki.supercombo.gg/images/b/bd/SF6_Dee_Jay_66.png',
// ]

const cardsHTML = [
  <TestCard />,
  <IntroCard />,
  <WhatIsSite />,
  <WelcomeCard />,
]

const to = (i: number) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: 9 + (i * -0.2) * 20,
    delay: i * 100,

})

console.log(cardsHTML);

const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1750px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`


function Deck() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cardsHTML.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };

  }, []);

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 ; // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cardsHTML.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              background: "#F4F5F4",
              //backgroundImage:`url(${cards[i]})`,
            }}
          >
            {cardsHTML[i]}
          </animated.div>
        </animated.div>
      ))}
    </>
  )
}

export default function Test() {
  return (
    <div className={styles.container}>
      <Deck />
    </div>
  )
}