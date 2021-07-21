import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"

import presupuesto_participativo from "./assets/presupuesto_participativo.png"
import co_construccion from "./assets/co_construccion.png"
import consulta_publica from "./assets/consulta_publica.png"
import seguimiento_metas from "./assets/seguimiento_metas.png";
import votacion_autoridades from "./assets/votacion_autoridades.png";


const images = {
    'presupuesto_participativo': presupuesto_participativo,
    'consulta_publica': consulta_publica,
    'co_construccion': co_construccion,
    'seguimiento_metas': seguimiento_metas,
    'votacion_autoridades': votacion_autoridades,
};

export default ({ data }) =>  {
    const intl = useIntl()
    console.log(data)
    return (
        <section id={data.id} className={`hero product product-${data.color}`}>
            <div className="hero-body">
                <div className="container">
                    <div className="text-content">
                        <div className="columns">
                            <div className="column is-one-third">
                                <h4 className="title is-4 is-spaced is-size-2-desktop">{intl.formatMessage({id: data.title})}</h4>
                                <figure className="image is-hidden-desktop is-hidden-tablet">
                                    <img src={`${images[data.image]}`} alt="" />
                                </figure>
                                <p className="subtitle is-6 is-spaced">{intl.formatMessage({id: data.description})}</p>
                                <div className="list-wrapper">
                                    <ul className="list">
                                        {data.features.map((feature, index) =>
                                            <li key={index}>{intl.formatMessage({id: feature})}</li>
                                        )}
                                    </ul>
                                </div>
                                <div className="button-container">
                                    <a className="button is-rounded is-medium is-black" href="#implementar">{intl.formatMessage({id: "implementation"})}</a>    
                                    <a className="button is-rounded is-medium" href={intl.formatMessage({id: data.link})}>{intl.formatMessage({id: "see_more"})}</a>
                                </div>
                            </div>
                            <div className="column">
                            <figure className="image is-hidden-mobile">
                                <img src={`${images[data.image]}`} alt="" />
                            </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    )
}