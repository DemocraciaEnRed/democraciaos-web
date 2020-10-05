import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"

import jerarquizacion from "./assets/1.svg"
import causa from "./assets/2.svg"
import encuesta from "./assets/3.svg"
import votacion from "./assets/4.svg"
import rango from "./assets/5.svg"
import idea from "./assets/6.svg"

const icons = {
    jerarquizacion,
    causa,
    encuesta,
    votacion,
    rango,
    idea
};

export default ({ data }) =>  {
    const intl = useIntl()

    return (
        <section id="features" className="section">
               <div className="hero-body">
            <div className="container">
            <div className="columns">
                <div className="column">
                    <h3 className="main-title has-text-centered is-4 is-size-2-desktop">{intl.formatMessage({ id: data.title})}</h3>
               
                    </div>
                   
                </div>
                <div className="columns is-multiline">
                    {data.data.map((product) =>
                        <div key={product.id} className={`feature feature-item feature-item-green column has-text-centered is-parent is-4`}>
                                <img src={`${icons[product.icon]}`} alt="" className="image is-centered" />
                            <h5 className="subtitle is-5 has-text-grey-dark">{intl.formatMessage({id: product.title})}</h5>
                        </div>
                    )}
                </div>
            </div>
            </div>
        </section>
    )
}