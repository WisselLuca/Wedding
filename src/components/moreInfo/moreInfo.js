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
            content: `<div>
            <p>Poter condividere con voi un giorno così speciale sarà il dono più grande!</p>
            <p>Se desiderate farci un regalo potete contribuire a rendere speciale la nostra Luna di Miele mediante un bonifico alle seguenti coordinate:</p>
            <p>IBAN: IT13P0623005054000064117810</p> 
            <p>BENEFICIARIO: Giulia Vellozzi oppure Luca Wissel</p>
            <p>Abbiamo in programma di trascorrere la nostra luna di miele in Giappone, dove esploreremo le vivaci città di Tokyo e Kyoto, visiteremo gli antichi templi di Nara e ci rilasseremo nella tranquilla campagna. Siamo entusiasti di immergerci nella ricca cultura e storia del Giappone, e non vediamo l'ora di condividere i nostri ricordi con voi!</p>
            </div>`
        },
        {
            title: 'Come dare Conferma?',
            content: `<div>
            <b>Conferma la tua presenza:</b>
            <p>Per aiutarci a organizzare al meglio il nostro grande giorno, ti preghiamo di confermare la tua presenza per via telefonica al numero +39 3200116673 oppure al +39 3881296125.</p>
            <b>Intolleranze alimentari o esigenze varie:</b>
            <p>Ci teniamo a rendere il nostro matrimonio un evento piacevole per tutti gli invitati. Se hai intolleranze alimentari o esigenze specifiche, ti preghiamo di segnalarcelo al momento della conferma della tua presenza.
            In caso di allergie o intolleranze gravi, saremo lieti di collaborare con te e con il nostro catering per garantirti un menù sicuro e gustoso.
            Per qualsiasi altra esigenza, non esitare a contattarci.</p>
            <b>Grazie per la tua collaborazione!</b>
            </div>`
        }
    ];

    const accordionDataENG = [
        {
            title: 'When and Where?',
            content: `<div>
            <p>The ceremony will be held on Ariana beach at <a href="https://www.google.com/maps/place/Stabilimento+Lido+Bahia+Blanca/@41.2154848,13.5404798,17z/data=!3m1!4b1!4m9!3m8!1s0x13252cb5ab8e5ced:0x8198e8f5c621905c!5m2!4m1!1i2!8m2!3d41.2154848!4d13.5404798!16s%2Fg%2F11b6ztbnzv?entry=ttu" target="_blank" rel="noopener noreferrer"> Bahia Blanca</a> Via Flacca, Km 25/700, 04024 Gaeta LT on June 21, 2024.</p>
            <p>The civil ceremony will take place on the sand at 6:30 pm, followed by an aperitif and reception on the lawn.</p>
            </div>`
        },
        {
            title: 'Dress Code?',
            content: `<div><p>We have not chosen a dress code for our wedding. We want our guests to feel free to wear whatever makes them feel beautiful and comfortable.</p>
            </div>`
        },
        {
            title: `Whant to make a Gift? Here is how`,
            content: `<div>
            <p>Sharing this special day with you will be the greatest gift!</p>
            <p>If you would like to give us a gift, you can contribute to making our honeymoon special by making a bank transfer to the following details:</p>
            <p>IBAN: IT13P0623005054000064117810</p> 
            <p>TO: Giulia Vellozzi oppure Luca Wissel</p>
            <p>We are planning to spend our honeymoon in Japan, where we will explore the vibrant cities of Tokyo and Kyoto, visit the ancient temples of Nara, and relax in the serene countryside. We are so excited to experience the rich culture and history of Japan, and we can't wait to share our memories with you!</p>
            </div>`
        },
        {
            title: 'How To confirm?',
            content: `<div>
            <b>Confirm your attendance:</b>
            <p>To help us better organize our big day, please confirm your attendance by phone at +39 3200116673 or +39 3881296125.</p>
            <b>Food intolerances or special needs:</b>
            <p>We want to make our wedding a pleasant event for all guests. If you have food intolerances or special needs, please let us know when you confirm your attendance.
            In case of severe allergies or intolerances, we will be happy to work with you and our caterer to ensure a safe and delicious menu.
            For any other needs, please do not hesitate to contact us.</p>
            <b>Thank you for your cooperation!</b>
            </div>`
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