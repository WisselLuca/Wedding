import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item helveticaNeue_font_family_roman">
            <div className={isActive ? "accordion-title active" : "accordion-title "} onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content">
                <div dangerouslySetInnerHTML={
                    { __html: content }
                } />
            </div>
            }
        </div >
    );
};

export default Accordion;