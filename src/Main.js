import React from 'react'
import path from './images/foreground-min.png'
import sky from './images/sky-min.png'

import sound from './images/impact-combo.mp3'

import useWebAnimations from "@wellyshen/use-web-animations"

// importing components
import SkyImages from './SkyImages'
import PathImages from './PathImages'

export default function Demo() {
    const { ref: bg } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: [
            {transform: `translate3d(0, 0, 0)`},
            {transform: `translate3d(-5616px, 0, 0)`}
        ],
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity, 
        }
    })

    return (
        <>
            <audio autoplay="true" preload="auto" loop>
                <source src={sound}/>
            </audio>

            <div style={{overflow: "hidden"}}>
                <div style={{
                        position: "relative",
                        backgroundImage: `url(${sky})`,
                        backgroundPosition: `top`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `100% 100%`,
                        minHeight: `60vh`,
                    }}
                >
                    <SkyImages/>  
                </div>

                <div style={{
                        position: "relative",
                        backgroundImage: `url(${path})`,
                        backgroundPosition: `bottom`,
                        backgroundRepeat: `repeat-x`,
                        backgroundSize: `1000px 100%`,
                        minHeight: `40vh`,
                        minWidth: "56160000000px"
                    }}
                    ref={bg}
                >
                    <PathImages/>
                    
                </div>
            </div>
        </>
    )
}

