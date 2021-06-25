import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"

import jerarquizacion from "./assets/1.svg"
import causa from "./assets/2.svg"
import encuesta from "./assets/3.svg"
import votacion from "./assets/4.svg"
import rango from "./assets/5.svg"
import idea from "./assets/6.svg"
import parametrizacion from "./assets/7.svg"
import propuesta from "./assets/8.svg"
import analisis from "./assets/9.svg"
import votacionrosa from "./assets/10.svg"
import publicacion from "./assets/11.svg"
import seguimiento from "./assets/12.svg"
import objetivos from "./assets/13.svg"
import metas from "./assets/14.svg"
import reportes from "./assets/15.svg"
import validaciones from "./assets/16.svg"
import altas from "./assets/17.svg"
import explicacion from "./assets/18.svg"
import apoyar from "./assets/19.svg"
import aportes from "./assets/20.svg"
import versiones from "./assets/21.svg"


const icons = {
    jerarquizacion,
    causa,
    encuesta,
    votacion,
    rango,
    idea,
    parametrizacion,
    propuesta,
    analisis,
    votacionrosa,
    publicacion,
    seguimiento,
    objetivos,
    metas,
    reportes,
    validaciones,
    altas,
    explicacion,
    apoyar,
    aportes,
    versiones
};

export default ({ data }) =>  {
    const intl = useIntl()
    console.log(data)
    return (
        <section id="features" className="section">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h3 className="main-title has-text-left is-size-5 is-size-1-desktop">{intl.formatMessage({ id: data.title})}</h3>
                        </div>                   
                    </div>
                    <div className="columns is-multiline feature-container">
                        {data.data.map((product) =>
                            <div key={product.id} className={`feature feature-item feature-item-green column has-text-centered is-parent ${data.data[0].icon == 'objetivos' ? 'is-3' : 'is-4'}`}>
                                <img src={`${icons[product.icon]}`} alt="" className="image is-centered" />
                                <h4 className="subtitle is-size-4 has-text-grey-dark">{intl.formatMessage({id: product.title})}</h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}