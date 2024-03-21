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

    useGSAP(() => {
        const animation = gsap.fromTo(".envelope",
            { height: '100%' },
            {
                height: 0,
                ease: "none",
                duration: 1000,
                stagger: 0.7
            }
        )

        let envelopeDisappear = gsap.timeline();
        envelopeDisappear.fromTo(".envelope",
            { height: '80%' },
            {
                height: 0,
                ease: "none",
                duration: 1000,
                stagger: 0.7
            }
        )
        ScrollTrigger.create({
            animation: envelopeDisappear,
            trigger: ".scroll_element",
            start: "top 40%",
            end: "12% 50%",
            scrub: 1,
            markers: true,
        });



        /* ScrollTrigger.create({
             trigger: ".envelopeCointainer",
             start: "top 40%",
             end: "bottom 50%",
             markers: true,
             animation: animation,
             scrub: true,
         })*/


    })

    return (
        <div className='App'>
            <div className="page_container" style={{ width: '100%', height: '100vh' }}>
                <div className='scroll_element' style={{ backgroundColor: '#ffdab9' }}>
                </div>
                <div style={{ flex: 1, backgroundColor: '#faebd7' }}>
                </div>
                <div style={{ flex: 1, backgroundColor: '#00ff00' }}>
                    <div className='divSpace-working'>Welcomeeeeee</div>
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
