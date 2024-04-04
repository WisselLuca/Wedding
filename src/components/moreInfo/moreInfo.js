import React, { Fragment, useState } from 'react'
import './moreInfo.css'
import { isMobile } from 'react-device-detect';

import Accordion from '../accordion';

const MoreInfo = ({ setPageChange }) => {

    const accordionDataITA = [
        {
            title: 'Dove e Quando?',
            content: `<div>
            <p>La cerimonia si terrà sulla spiaggia dell'Ariana presso <a href="https://www.google.com/maps/place/Stabilimento+Lido+Bahia+Blanca/@41.2154848,13.5404798,17z/data=!3m1!4b1!4m9!3m8!1s0x13252cb5ab8e5ced:0x8198e8f5c621905c!5m2!4m1!1i2!8m2!3d41.2154848!4d13.5404798!16s%2Fg%2F11b6ztbnzv?entry=ttu" target="_blank" rel="noopener noreferrer"> Bahia Blanca</a> Via Flacca, Km 25/700, 04024 Gaeta LT il 21 Giugno 2024.</p>
            <p>Il rito civile sarà sulla sabbia e inizierà alle 18:30 per poi proseguire con aperitivo e ricevimento sul prato</p>
            </div>`
        },
        {
            title: 'Come vestirsi?',
            content: `<div><p>Non abbiamo pensato a nessun dress code, vogliamo che i nostri ospiti si sentano liberi di indossare ciò che li fa sentire belli e a proprio agio</p>
            </div>`
        },
        {
            title: 'Vuoi Farci un regalo? Ecco come',
            content: `<div><p>Poter condividere con voi un giorno così speciale sarà il dono più grande! Se desiderate farci un regalo potete contribuire a rendere speciale la nostra Luna di Miele mediante un bonifico alle seguenti coordinate:</p>
            <p>IBAN: IT13P0623005054000064117810</p> 
            <p>BENEFICIARIO: Giulia Vellozzi oppure Luca Wissel</p></div>`
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

    let [contentToShow, setContentToShow] = useState(language[0].content)
    let [labelinEvidenza, setLabelinEvidenza] = useState(language[0].label)

    return (
        <div className='flex_column'>
            <h1>Useful Info</h1>
            <div style={{ display: 'flex', flexDirection: 'row' }} className='helveticaNeue_font_family_light'>
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
                <h3>Back to the animation</h3>
            </div>
        </div>
    );
};

export default MoreInfo;