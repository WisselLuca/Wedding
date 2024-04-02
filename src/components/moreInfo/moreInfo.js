import React, { Fragment, useState } from 'react'
import './moreInfo.css'
import { isMobile } from 'react-device-detect';

import Accordion from '../accordion';

const MoreInfo = ({ setPageChange }) => {

    const accordionDataITA = [
        {
            title: 'Quando?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
        },
        {
            title: 'Dove?',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: 'Come vestirsi?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
        },
        {
            title: 'Vuoi FArci un regalo? Ecco come',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
        },
        {
            title: 'Consigli Utili',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
        }
    ];

    const accordionDataENG = [
        {
            title: 'When?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
        },
        {
            title: 'Where?',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: 'How To Dress?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
        },
        {
            title: 'Whant to make a Gift? here is how',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
        },
        {
            title: 'Usefull Tips',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
        }
    ];

    const language = [{
        label: "ITA",
        content: accordionDataITA
    }, {
        label: "ENG",
        content: accordionDataENG
    }]

    let [contentToShow, setContentToShow] = useState(language[1].content)
    let [labelinEvidenza, setLabelinEvidenza] = useState(language[1].label)

    return (
        <div className='flex_column'>
            <h1>Useful Info</h1>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {language.map((singleLanguage) => (
                    <div style={{ paddingRight: 8, paddingLeft: 8 }}>
                        <div
                            className={singleLanguage.label == labelinEvidenza ? "bold" : ""}
                            onClick={() => {
                                setContentToShow(singleLanguage.content)
                                setLabelinEvidenza(singleLanguage.label)
                            }}>{singleLanguage.label}</div>
                    </div>
                ))}
            </div>
            <div className={isMobile ? "accordion_mobile" : "accordion"}>
                {contentToShow.map(({ title, content }) => (
                    <Accordion title={title} content={content} key={title} />
                ))}
            </div>
            <div onClick={() => { setPageChange(true) }}>
                <h3 >Back to the animation</h3>
            </div>
        </div>
    );
};

export default MoreInfo;