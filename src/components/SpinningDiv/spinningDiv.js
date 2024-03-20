import React from "react";
import ReactDOM from "react-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import './spinningDiv.css'

const { useRef } = React;

function SpinningDiv() {
    const container = useRef();
    const circle = useRef();

    useGSAP(() => {
        // use selectors...
        gsap.to(".box", { rotation: "+=360", duration: 3 });


        // or refs...
        gsap.to(circle.current, {duration: 3, rotationY:"360"});

    },
        { scope: container }
    ); // <-- scope for selector text (optional)

    return (
        <div className="App">
            <div ref={container} className="container">
                <div className="box blue">selector</div>
                <div className="circle green" ref={circle}>
                    Ref
                </div>
            </div>
        </div>
    );
}

export default SpinningDiv