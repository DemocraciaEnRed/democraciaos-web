import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"

import diy from "./assets/diy.svg"
import standard from "./assets/standard.svg"
import custom from "./assets/custom.svg"

const icons = {
    diy,
    custom,
    standard
};

export default ({ data }) =>  {
    const intl = useIntl()

    return (
        <section id="implementar" className="section instalations">
            <div className="container has-text-centered">
                    <h3 className="main-title title is-4 is-size-1-desktop">{intl.formatMessage({ id: data.title})}</h3>
                    <div className="columns has-text-left">
                        {data.instalations.map((instalation, index) => 
                            <div key={index} className="column">
                                <figure className="image">
                                    <img src={`${icons[instalation.icon]}`} className={`${instalation.icon}`} alt=""/>
                                </figure>
                                <div className="text-wrapper">
                                    <h4 className="title is-4 is-spaced">{intl.formatMessage({ id: instalation.title})}</h4>
                                    <p className="subtitle is-6 is-spaced">{intl.formatMessage({ id: instalation.description})}</p>
                                </div>
                                <div className="list-wrapper">
                                    <span className="list-title">{intl.formatMessage({ id: "requirements" })}</span>
                                    <ul className="list">
                                        {instalation.requirements.map((requirement, index) =>
                                            <li key={index}>{intl.formatMessage({ id: requirement })}</li>
                                        )}
                                    </ul>
                                </div>
                                <a className="button is-rounded is-medium is-dark" href={instalation.button_link} target="_blank" rel="noopener noreferrer">{intl.formatMessage({ id: instalation.button_text})}</a>
                            </div>
                        )}
                    </div>
            </div>
            <div class="typeform-widget" data-url="https://form.typeform.com/to/bkXtFW" data-transparency="50" data-hide-headers=true data-hide-footer=true style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=bkXtFW&utm_source=typeform.com-01D8JT2MK6CEEY9P7R38Q3Q9RT-professional&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=ES" style="color: #999" target="_blank">Typeform</a> </div>
            </section>

            
        )
}