import React from 'react'
import fly from './images/butterfly-png.gif'
import swan from './images/swan.gif'

import useWebAnimations from "@wellyshen/use-web-animations"

export default function SkyImages() {

  const { ref: bird } = useWebAnimations({
    keyframes: {
      transform: [`translate3d(0, 0, 0)`, `translate3d(5616px, 0, 0)`],
    },
    timing: {
      delay: 8000,
      duration: 30000,
      iterations: Infinity
    }
  })
  const { ref: bird2 } = useWebAnimations({
    keyframes: {
      transform: [`translate3d(0, 0, 0)`, `translate3d(5616px, 0, 0)`],
    },
    timing: {
      delay: 12000,
      duration: 170000,
      iterations: Infinity
    }
  })
  const { ref: butterfly } = useWebAnimations({
    keyframes: {
      transform: [`translateX(0)`, `translateX(-5616px)`],
    },
    timing: {
      delay: 8500,
      duration: 21000,
      iterations: Infinity
    }
  })
    
  return (
    <>
      <img
        src={swan} alt="swan"
        ref={bird}
        style={{position: "absolute", top: "30px", height: "20%"}}
      />
      <img
        src={swan} alt="swan"
        ref={bird2}
        style={{position: "absolute", top: "10px", left: "-40px", height: "10%"}}
      />
      <img 
        src={fly} alt="fly"
        ref={butterfly}
        style={{position: "absolute", left: `5500px`, top: "120px", height: "10%"}}
      />
    </>
  )
}