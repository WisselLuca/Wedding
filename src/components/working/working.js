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

        ScrollTrigger.create({
            trigger: ".envelopeCointainer",
            start: "top 40%",
            end: "bottom 50%",
            markers: true,
            animation: animation,
            scrub: true
        })


    })

    return (
        <div className='App'>
            <div className='divSpace-working'>Welcome</div>
            <div className='box-container-working'>
                <div className="envelopeCointainer">
                    <div ref={partecipatzioneFront} className="partecipazioneFront"> {/*orange*/}
                        <div ref={envelope} className="envelope">{/* green */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Working;
