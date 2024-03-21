import React from 'react'
import './working.css'
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

    /* useEffect(() => {
         gsap.fromTo(envelope.current,
             { autoAlpha: 0 },
             {
                 autoAlpha: 1,
                 left: 0,
                 duration: 1,
                 scrollTrigger: {
                     trigger: envelope.current,
                     start: "top bottom-=100",
                     toggleActions: "play none none reverse"
                 }
             })
         gsap.fromTo(rotatingPart.current,
             { autoAlpha: 0 },
             {
                 autoAlpha: 1,
                 left: 0,
                 duration: 1,
                 scrollTrigger: {
                     trigger: rotatingPart.current,
                     start: "top bottom-=100",
                     toggleActions: "play none none reverse"
                 }
             })
     }, [])
 */
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
        const animationRotate = gsap.to(".rotating_part",
            {
                rotation: "180",
                transformOrigin: '50% 100%'
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

        //pinn dell'immagine
        ScrollTrigger.create({
            trigger: '.scroll_element',
            start: vh(100) + " 10%",
            endTrigger: '',
            end: 'bottom top',
            pin: '.envelopeCointainer'
        })

        gsap.fromTo("#linear img", {scale:0.1}, {scale:0.4, duration: 10, ease: "none", repeat: -1});

        //ruota la cosa sotto
        ScrollTrigger.create({
            trigger: ".scroll_element",
            start: vh(140) + 10 + " 50%",
            end: vh(160) + " 50%",
            markers: true,
            animation: animationRotate,
            scrub: true,
        })

    })

    return (
        <div className='App'>
            <div className="page_container" style={{ width: '100%', height: '100vh' }}>
                <div className='scroll_element' style={{ backgroundColor: '#ffdab9' }}>
                </div>
                <div style={{ flex: 1, backgroundColor: '#faebd7' }}>
                </div>
                <div style={{ flex: 1, backgroundColor: '#00ff00' }}>
                    <div className='divSpace-working'>Welcome</div>
                    <div className='box-container-working'>
                        <div className="envelopeCointainer">
                            <div ref={partecipatzioneFront} className="partecipazione_front">
                                <div ref={envelope} className="envelope">
                                </div>
                                <div ref={rotatingPart} className="rotating_part">
                                </div>
                            </div>
                        </div >
                    </div >
                </div>
                <div style={{ flex: 1, backgroundColor: '#faebd7' }}>
                </div>
            </div>
            {/*<div className='divSpace-working'>Welcome</div>
            <div className='box-container-working'>
                <div className="envelopeCointainer">
                    <div ref={partecipatzioneFront} className="partecipazione_front"> 
            <div ref={envelope} className="envelope">
            </div>
            <div ref={rotatingPart} className="rotating_part">
            </div>
        </div>
                </div >
            </div >*/}
        </div >
    )
}

export default Working;
