import React, { useEffect } from 'react'
import man from './images/men-trans.gif'
import bushes from './images/bushes-min.png'
import forward from './images/forward.gif'
import arrow from './images/forward-arrow.gif'
import flipArrow from './images/flip-fwd.gif'
import roadRunner from './images/road-runner.gif'
import steps from './images/steps.gif'
import logo from './images/logo.svg'

import useWebAnimations from "@wellyshen/use-web-animations"

export default function PathImages() {
    const { ref: fwd } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: [
            {transform: `translate3d(0, 0, 0)`},
            {transform: `translate3d(5616px, 0, 0)`}
        ],
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity, 
        }
    })
    const { ref: back } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: [
            {transform: `translate3d(0, 0, 0)`},
            {transform: `translate3d(5616px, 0, 0)`}
        ],
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity, 
        }
    })
    const { ref: bush, getAnimation: animateBush } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: [
            {transform: `translate3d(0, 0, 0)`},
            {transform: `translate3d(-5616px, 0, 0)`}
        ],
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity,
            easing: 'ease-in' 
        }
    })
    const { ref: bush2, getAnimation: animateBush2 } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: [
            {transform: `translate3d(0, 0, 0)`},
            {transform: `translate3d(-5616px, 0, 0)`}
        ],
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity,
            easing: 'ease-in' 
        }
    })
    const { ref: bush3, getAnimation: animateBush3 } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: [
            {transform: `translate3d(0, 0, 0)`},
            {transform: `translate3d(-5616px, 0, 0)`}
        ],
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity, 
            easing: 'ease-in'
        }
    })
    const { ref: bush4, getAnimation: animateBush4 } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: [
            {transform: `translate3d(0, 0, 0)`},
            {transform: `translate3d(-5616px, 0, 0)`}
        ],
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity, 
            easing: 'ease-in'
        }
    })
    const { ref: bush5, getAnimation: animateBush5 } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: [
            {transform: `translate3d(0, 0, 0)`},
            {transform: `translate3d(-5616px, 0, 0)`}
        ],
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity, 
            easing: 'ease-in'
        }
    })
    const { ref: bush6, getAnimation: animateBush6 } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: [
            {transform: `translate3d(0, 0, 0)`},
            {transform: `translate3d(-5616px, 0, 0)`}
        ],
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity, 
            easing: 'ease-in'
        }
    })
    const { ref: bush7, getAnimation: animateBush7 } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: [
            {transform: `translate3d(0, 0, 0)`},
            {transform: `translate3d(-5616px, 0, 0)`}
        ],
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity, 
            easing: 'ease-in'
        }
    })
    const { ref: bush8, getAnimation: animateBush8 } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: [
            {transform: `translate3d(0, 0, 0)`},
            {transform: `translate3d(-5616px, 0, 0)`}
        ],
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity, 
            easing: 'ease-in'
        }
    })
    const { ref: bush9, getAnimation: animateBush9 } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: [
            {transform: `translate3d(0, 0, 0)`},
            {transform: `translate3d(-5616px, 0, 0)`}
        ],
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity, 
            easing: 'ease-in'
        }
    })

    const { ref: men, getAnimation: animateMen } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: {
            transform: [`translate3d(0, 0, 0)`, `translate3d(5616px, 0, 0)`],
        },
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity,
        }
    })

    const playMan = () => {
        animateMen().play();
    }
    const pauseMan = () => {
        animateMen().pause();
    }

    const speedUp = () => {
        animateMen().updatePlaybackRate(animateMen().playbackRate * 1.2)
        animateBush().updatePlaybackRate(animateBush().playbackRate * 1.2)
        animateBush2().updatePlaybackRate(animateBush2().playbackRate * 1.2)
        animateBush3().updatePlaybackRate(animateBush3().playbackRate * 1.2)
        animateBush4().updatePlaybackRate(animateBush4().playbackRate * 1.2)
        animateBush5().updatePlaybackRate(animateBush5().playbackRate * 1.2)
        animateBush6().updatePlaybackRate(animateBush6().playbackRate * 1.2)
        animateBush7().updatePlaybackRate(animateBush7().playbackRate * 1.2)
        animateBush8().updatePlaybackRate(animateBush8().playbackRate * 1.2)
        animateBush9().updatePlaybackRate(animateBush9().playbackRate * 1.2)

    }

    const { ref: runner } = useWebAnimations({
        keyframes: {
            transform: [`translate3d(0, 0, 0)`, `translate3d(7616px, 0, 0)`],
        },
        timing: {
            delay: 6000,
            duration: 20000,
            iterations: Infinity,
        }
    })
    const { ref: runner2 } = useWebAnimations({
        keyframes: {
            transform: [`translate3d(0, 0, 0)`, `translate3d(7616px, 0, 0)`],
        },
        timing: {
            delay: 6000,
            duration: 20000,
            iterations: Infinity,
        }
    })
    const { ref: step } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: {
            transform: [`translate3d(0, 0, 0)`, `translate3d(5616px, 0, 0)`],
        },
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity,
        }
    })
    const { ref: div } = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        keyframes: {
            transform: [`translate3d(0, 0, 0)`, `translate3d(5616px, 0, 0)`],
        },
        timing: {
            delay: 4000,
            duration: 270000,
            iterations: Infinity
        }
    })
    const { ref: Mylogo } = useWebAnimations({
        keyframes: [
            {transform: 'rotate(0deg)'},
            {transform: 'rotate(-360deg)'}
        ],
        timing: {
            duration: 1000,
            iterations: Infinity,
            easing: `linear`
        }
    })

    useEffect(() => {
        //  It will slow down the speed of boy until he reaches the playback of 0.5
            setInterval(() => {
                if (animateMen().playbackRate >= 0.6 ) {
                    animateMen().playbackRate = animateMen().playbackRate - 0.3
                    animateBush().updatePlaybackRate(animateBush().playbackRate - 0.3)
                    animateBush2().updatePlaybackRate(animateBush2().playbackRate - 0.3)
                    animateBush3().updatePlaybackRate(animateBush3().playbackRate - 0.3)
                    animateBush4().updatePlaybackRate(animateBush4().playbackRate - 0.3)
                    animateBush5().updatePlaybackRate(animateBush5().playbackRate - 0.3)
                    animateBush6().updatePlaybackRate(animateBush6().playbackRate - 0.3)
                    animateBush7().updatePlaybackRate(animateBush7().playbackRate - 0.3)
                    animateBush8().updatePlaybackRate(animateBush8().playbackRate - 0.3)
                    animateBush9().updatePlaybackRate(animateBush9().playbackRate - 0.3)
                }
                else {
                // clearInterval(timer)
                }
            }, 1000)
    }, [
        animateMen, animateBush, animateBush2, animateBush3, 
        animateBush4, animateBush5, animateBush6, animateBush7,
        animateBush8, animateBush9
    ])
    
    return (
        <>
            <img
                src={roadRunner} alt="road-runner"
                ref={runner2}
                style={{position: "absolute", bottom: 243, height: "20%"}}
            />
            <img 
                src={bushes} alt="bush"
                ref={bush}
                style={{position: "absolute", left: 590, bottom: 230, height: "20%" }}
            />
            <img 
                src={bushes} alt="bush"
                ref={bush2}
                style={{position: "absolute", left: 1590, bottom: 230, height: "20%" }}
            />
            <img 
                src={bushes} alt="bush"
                ref={bush3}
                style={{position: "absolute", left: 2590, bottom: 230, height: "20%" }}
            />
            <img 
                src={bushes} alt="bush"
                ref={bush4}
                style={{position: "absolute", left: 3590, bottom: 230, height: "20%" }}
            />
            <img 
                src={bushes} alt="bush"
                ref={bush5}
                style={{position: "absolute", left: 4590, bottom: 230, height: "20%" }}
            />
            <img 
                src={bushes} alt="bush"
                ref={bush6}
                style={{position: "absolute", left: 5590, bottom: 230, height: "20%" }}
            />
            <img 
                src={bushes} alt="bush"
                ref={bush7}
                style={{position: "absolute", left: 6590, bottom: 230, height: "20%" }}
            />
            <img 
                src={bushes} alt="bush"
                ref={bush8}
                style={{position: "absolute", left: 7590, bottom: 230, height: "20%" }}
            />
            <img 
                src={bushes} alt="bush"
                ref={bush9}
                style={{position: "absolute", left: 8590, bottom: 230, height: "20%" }}
            />
            <img
                src={roadRunner} alt="road-runner"
                ref={runner}
                style={{position: "absolute", bottom: 170, left: -350, height: "50%"}}
            />
            <img
                src={forward} alt="forward"
                style={{position: "absolute", left: `1100px`, top: `70px`, height: `40px`}}
            />
            <img
                src={arrow} alt="arrow"
                ref={fwd}
                style={{position: "absolute", left: `1200px`, bottom: `10px`}}
                onClick={playMan}
            />
            <img
                src={flipArrow} alt="arrow"
                ref={back}
                style={{position: "absolute", left: `1200px`, top: `30px`}}
                onClick={pauseMan}
            />
            <img 
                src={man} alt="man"
                ref={men} 
                onClick={speedUp}
                style={{position: "absolute", bottom: 30, height: "150%"}} 
            />
            <img 
                src={steps} alt="steps"
                ref={step} 
                style={{position: "absolute", bottom: 2, height: "60%"}} 
            />
            <div ref={div}>
                <img 
                    ref={Mylogo} 
                    src={logo} alt="logo" 
                    style={{position: "absolute", left: 1310, top: 175, width: `50px`, height: `100px`}} 
                />
            </div>
        </>
    )
}