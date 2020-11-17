import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"

import presupuesto_participativo from "./assets/presupuesto_participativo.png"
import co_construccion from "./assets/co_construccion.png"
import consulta_publica from "./assets/consulta_publica.png"

const images = {
    'presupuesto_participativo': presupuesto_participativo,
    'consulta_publica': consulta_publica,
    'co_construccion': co_construccion
};

export default ({ data }) =>  {
    const intl = useIntl()
    console.log(data.title)

    return (
        <section id={data.id} className={`hero product product-${data.color}`}>
            <div className="hero-body">
                <div className="container">
                    <div className="text-content">
                        <div className="columns">
                            <div className="column">
                                <h4 className="title is-4 is-spaced is-size-2-desktop">{intl.formatMessage({id: data.title})}</h4>
                                <figure className="image is-hidden-desktop is-hidden-tablet">
                                    <img src={`${images[data.image]}`} alt="" />
                                </figure>
                            </div>
                            <div className="column">
                                <p className="subtitle is-6 is-spaced">{intl.formatMessage({id: data.description})}</p>
                            </div>
                            <div className="column">
                                <div className="list-wrapper">
                                    <span className="list-title">{intl.formatMessage({id: "features"})}</span>
                                    <ul className="list">
                                        {data.features.map((feature, index) =>
                                            <li key={index}>{intl.formatMessage({id: feature})}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figure className="image is-hidden-mobile">
                        <img src={`${images[data.image]}`} alt="" />
                    </figure>
                    <div className="button-container">
                        <a className="button is-rounded is-medium" href="#implementar">{intl.formatMessage({id: "implementation"})}</a>
                        {data.title === 'products.title_2' ? <a className="button is-rounded is-medium" href="https://democraciaos.org/es/consultadigital/">{intl.formatMessage({id: "see_more"})}</a> : null }
                    </div>
                </div>
            </div>    
        </section>
    )
}