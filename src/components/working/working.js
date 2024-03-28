import React from 'react'
import './working.css'
import { MobileView, BrowserView, isMobile } from 'react-device-detect';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import part_front from '../../img/part_front.png'
import part_back from '../../img/part_back.png'
import rotating_front from '../../img/rotating_front.png'
import rotating_back from '../../img/rotating_back.png'


import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Working = () => {
    const ref = useRef([]);
    ref.current = [];

    const envelope = useRef();
    const partecipatzioneFront = useRef();
    const rotatingPart = useRef();

    const vh = (coef) => window.innerHeight * (coef / 100);
    const vw = (coef) => window.innerWidth * (coef / 100);


    console.log("isMobile", isMobile)

    useGSAP(() => {
        const animationEnvelope = gsap.fromTo(".envelope",
            { height: '70%' },
            {
                height: 0,
                ease: "none",
                duration: 1000,
                stagger: 0.7
            }
        )

        const animationZoomBrowser = gsap.fromTo(".envelopeContainer",
            { scale: 1 },
            {
                scale: 0.85,
                translateY: -25,
                ease: "none"
            })

        const animationZoomMobile = gsap.fromTo(".envelopeContainer",
            { scale: 1 },
            {
                scale: 0.75,
                translateY: -55,
                ease: "none"
            })


        gsap.to(".rotating_part_front",
            {
                rotation: "180",
                transformOrigin: '50% 0%'
            }
        )

        gsap.to(".rotating_part_back",
            {
                rotationY: "-270",
                transformOrigin: '50%',
            }
        )

        gsap.to(".partecipazione_back",
            {
                rotationY: "-270",
                transformOrigin: '50%',
            }
        )

        const animationRotate = gsap.fromTo(".rotating_part_front",
            {
                rotation: "-180",
                transformOrigin: '50% 0%'
            },
            {
                rotation: "0",
                transformOrigin: '50% 0%'
            }
        )

        const animationRotateYFront = gsap.to(".partecipazione_front",
            {
                rotationY: "90",
                transformOrigin: '50%',
            }
        )

        const animationRotateYBack = gsap.fromTo(".partecipazione_back",
            {
                rotationY: "-90",
                transformOrigin: '50%'
            },
            {
                rotationY: "0",
                transformOrigin: '50%'
            }
        )
        const animationRotateYFrontParteRotante = gsap.to(".rotating_part_front",

            {
                rotationY: "90",
                transformOrigin: '50%'
            }, 1
        )

        const animationRotateYBackParteRotante = gsap.fromTo(".rotating_part_back",

            {
                rotationY: "-90",
                transformOrigin: '50%'
            },
            {
                rotationY: "0",
                transformOrigin: '50%'
            }
        )


        //pin dell'immagine
        ScrollTrigger.create({
            trigger: '.scroll_element',
            start: vh(100), //per mobile non deve esserci + " 10%"
            endTrigger: '',
            end: 'bottom top',
            pin: '.envelopeContainer'
        })

        //zoom dell'immagine
        ScrollTrigger.create({
            trigger: '.scroll_element',
            start: vh(180) + " 40%", //old 140
            end: vh(240) + " 50%", //old 180
            markers: true,
            animation: (isMobile ? animationZoomMobile : animationZoomBrowser),
            scrub: true,
        })


        //sbustare
        ScrollTrigger.create({
            trigger: ".scroll_element",
            start: vh(280) + " 40%", //old 100
            end: vh(380) + " 50%", //old 140
            markers: true,
            animation: animationEnvelope,
            scrub: true,
        })


        //ruota la cosa sotto
        ScrollTrigger.create({
            trigger: ".scroll_element",
            start: vh(430) + 10 + " 50%",
            end: vh(560) + " 50%",
            markers: true,
            animation: animationRotate,
            scrub: true,
        })


        //le prossive 2 animazioni vanno eseguite in contemporanea
        //flip della partecipazione front 
        ScrollTrigger.create({
            trigger: ".scroll_element",
            start: vh(600) + 10 + " 50%", //190
            end: vh(680) + " 50%", //210
            markers: true,
            animation: animationRotateYFront,
            scrub: true,
        })

        //flip della parte rotante
        ScrollTrigger.create({
            trigger: ".scroll_element",
            start: vh(600) + 10 + " 50%",//190
            end: vh(680) + " 50%", //210
            markers: true,
            animation: animationRotateYFrontParteRotante,
            scrub: true,
        })


        //queste 2 animazioni devono iniziare quando termina quella precedente
        ScrollTrigger.create({
            trigger: ".scroll_element",
            start: vh(680) + " 50%", //old 250
            end: vh(760) + " 50%", //old 280
            markers: true,
            animation: animationRotateYBack,
            scrub: true,
        })

        ScrollTrigger.create({
            trigger: ".scroll_element",
            start: vh(680) + " 50%",//old 250
            end: vh(760) + " 50%", //old 280
            markers: true,
            animation: animationRotateYBackParteRotante,
            scrub: true,
        })
    })
    //fff6f5

    return (
        <fragment>
            <BrowserView>
                <div className='App'>
                    <div className="page_container" style={{ width: '100%', height: '100vh' }}>
                        <div className='scroll_element background_color_pink'>
                        </div>
                        <div className='background_color_pink' style={{ flex: 1 }}>
                        </div>
                        <div className='background_color_pink' style={{ flex: 2 }}>
                            <div className='divSpace-working'>
                                <div>
                                    Scroll Down
                                </div>
                                <div>
                                    &#x25BC;
                                </div>
                            </div>
                            <div className='box-container-working'>
                                <div className="envelopeContainer">
                                    <div ref={partecipatzioneFront} className="partecipazione">
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '100%',
                                        }}>
                                            <img src={part_front} className="img_contain partecipazione_front" />
                                            <div ref={envelope} className="envelope">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="partecipazione">
                                        <img src={part_back} className="img_contain partecipazione_back" />
                                    </div>
                                    <div ref={rotatingPart} className="rotating_part">
                                        <img src={rotating_front} className="img_contain rotating_part_front" />
                                    </div>
                                    <div ref={rotatingPart} className="rotating_part ">
                                        <img src={rotating_back} className="img_contain rotating_part_back" />
                                    </div>
                                </div >
                            </div >
                        </div>
                        <div className='background_color_pink' style={{ flex: 1 }}>
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className='Mobile'>
                    <div className="page_container" style={{ width: '100%', height: '100vh' }}>
                        <div className='scroll_element background_color_pink'>
                        </div>
                        <div className='background_color_pink' style={{ flex: 1 }}>
                        </div>
                        <div className='background_color_pink' style={{ flex: 2 }}>
                            <div className='divSpace-working'>
                                <div>
                                    Scroll Down Mobile
                                </div>
                                <div>
                                    &#x25BC;
                                </div>
                            </div>
                            <div className='box-container-working'>
                                <div className="envelopeContainer">
                                    <div ref={partecipatzioneFront} className="partecipazione partecipazione_front">
                                        <div ref={envelope} className="envelope">
                                        </div>
                                    </div>
                                    <div className="partecipazione partecipazione_back">
                                    </div>
                                    <div ref={rotatingPart} className="rotating_part rotating_part_front">
                                    </div>
                                    <div ref={rotatingPart} className="rotating_part  rotating_part_back">
                                    </div>
                                </div >
                            </div >
                        </div>
                        <div className='background_color_pink' style={{ flex: 1 }}>
                        </div>
                    </div>
                </div>
            </MobileView>
        </fragment>
    )
}

export default Working;
