import React from 'react'
import './working.css'
import { MobileView, BrowserView, isMobile } from 'react-device-detect';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';


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


    useGSAP(() => {
        const animationEnvelope = gsap.fromTo(".envelope",
            { height: '100%' },
            {
                height: 0,
                ease: "none",
                duration: 1000,
                stagger: 0.7
            }
        )

        const animationZoom = gsap.fromTo(".envelopeCointainer",
            { scale: 1 },
            {
                scale: 0.85,
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


        //sbustare
        ScrollTrigger.create({
            trigger: ".scroll_element",
            start: vh(100) + " 40%",
            end: vh(140) + " 50%",
            markers: true,
            animation: animationEnvelope,
            scrub: true,
        })

        //pin dell'immagine
        ScrollTrigger.create({
            trigger: '.scroll_element',
            start: vh(100) /*per mobile non deve esserci + " 10%"*/,
            endTrigger: '',
            end: 'bottom top',
            pin: '.envelopeCointainer'
        })



        //zoom dell'immagine
        ScrollTrigger.create({
            trigger: '.scroll_element',
            start: vh(140) + " 40%",
            end: vh(180) + " 50%",
            markers: true,
            animation: animationZoom,
            scrub: true,
        })


        //ruota la cosa sotto
        ScrollTrigger.create({
            trigger: ".scroll_element",
            start: vh(190) + 10 + " 50%",
            end: vh(210) + " 50%",
            markers: true,
            animation: animationRotate,
            scrub: true,
        })

        //flip della partecipazione front 
        ScrollTrigger.create({
            trigger: ".scroll_element",
            start: vh(220) + 10 + " 50%",
            end: vh(250) + " 50%",
            markers: true,
            animation: animationRotateYFront,
            scrub: true,
        })

        ScrollTrigger.create({
            trigger: ".scroll_element",
            start: vh(250) + " 50%",
            end: vh(280) + " 50%",
            markers: true,
            animation: animationRotateYBack,
            scrub: true,
        })

        //flip della parte rotante
        ScrollTrigger.create({
            trigger: ".scroll_element",
            start: vh(220) + 10 + " 50%",
            end: vh(250) + " 50%",
            markers: true,
            animation: animationRotateYFrontParteRotante,
            scrub: true,
        })

        ScrollTrigger.create({
            trigger: ".scroll_element",
            start: vh(250) + " 50%",
            end: vh(280) + " 50%",
            markers: true,
            animation: animationRotateYBackParteRotante,
            scrub: true,
        })
    })


    return (
        <fragment>
            <BrowserView>
                <div className='App'>
                    <div className="page_container" style={{ width: '100%', height: '100vh' }}>
                        <div className='scroll_element' style={{ backgroundColor: '#fff6f5' }}>
                        </div>
                        <div style={{ flex: 1, backgroundColor: '#fff6f5' }}>
                        </div>
                        <div style={{ flex: 1, backgroundColor: '#fff6f5' }}>
                            <div className='divSpace-working'>
                                <div>
                                    Scroll Down
                                </div>
                                <div>
                                    &#x25BC;
                                </div>
                            </div>
                            <div className='box-container-working'>
                                <div className="envelopeCointainer">
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
                        <div style={{ flex: 1, backgroundColor: '#fff6f5' }}>
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                TEST
            </MobileView>
        </fragment>
    )
}

export default Working;
