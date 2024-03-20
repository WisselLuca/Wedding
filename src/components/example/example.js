import React from 'react'
import './example.css'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Example = () => {
	const ref = useRef([]);
	ref.current = [];

	useEffect(() => {
		ref.current.forEach((el) => {
			gsap.fromTo(el, { autoAlpha: 0 }, {
				autoAlpha: 1, left: 0,
				duration: 0.5, scrollTrigger: {
					trigger: el,
					start: "top bottom-=100",
					toggleActions: "play none none reverse"
				}
			})
		})
	}, [])

	const addtoRefs = (el) => {
		if (el && !ref.current.includes(el)) {
			ref.current.push(el);
		}
	}

	return (
		<div className='App'>
			<div className='divSpace'>Scroll Down</div>
			<div className='box-container'>
				<div ref={addtoRefs} className="box">box1</div>
				<div ref={addtoRefs} className="box">box2</div>
				<div ref={addtoRefs} className="box">box3</div>
				<div ref={addtoRefs} className="box">box4</div>
				<div ref={addtoRefs} className="box">box5</div>
				<div ref={addtoRefs} className="box">box6</div>
				<div ref={addtoRefs} className="box">box7</div>
				<div ref={addtoRefs} className="box">box7</div>
				<div ref={addtoRefs} className="box">box7</div>
				<div ref={addtoRefs} className="box">box7</div>
				<div ref={addtoRefs} className="box">box7</div>
				<div ref={addtoRefs} className="box">box7</div>
			</div>
		</div>
	)
}

export default Example;
