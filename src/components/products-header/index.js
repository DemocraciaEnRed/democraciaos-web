import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"

 import personalizable from "./assets/personalizable.svg"
 import codigo_abierto from "./assets/codigoabierto.svg"
 import instalacion from "./assets/instalacion.svg"

 import presupuestoParticipativo from "./assets/presupuesto.svg"
 import consultadigital from "./assets/consultadigital.svg"
 import seguimientometas from "./assets/seguimientometas.svg"
 import coconstruccionleyes from "./assets/coconstruccion.png"

import consulta_publica from "./assets/consulta_publica.png"
import co_construccion from "./assets/co_construccion.png"
import presupuesto_participativo from "./assets/presupuesto_participativo.png"
import seguimiento_metas from "./assets/seguimiento_metas.png"

const img = {
    consulta_publica,
    co_construccion,
    seguimiento_metas,
    presupuesto_participativo
}

const iconTitle = {
    presupuestoParticipativo,
    consultadigital,
    seguimientometas,
    coconstruccionleyes
}

 const icons = {
     personalizable,
     codigo_abierto,
     instalacion
 };

 export default ({ data }) =>  {
    const intl = useIntl()

    return (
        <section id="implementar" className={`hero product product-${data.color} header`}>
            <div className="hero-body">
            <div className="container ">
                <div className="columns header-columns">
                    <div className="column is-two-fifths">
                        <div className="is-hidden-desktop">
                            <br/>
                            <br/>
                        </div>
                        <div className="title-header-container">
                            <div className="flex-contaiener">
                                <div className="image-container">
                                    <img src={`${iconTitle[data.icon]}`} className="title-image"/>
                                </div>
                                <div className="">
                                    <h3 className="main-title title-header is-3 is-size-1-desktop">{intl.formatMessage({ id: data.title})}</h3>
                                </div>
                            </div>
                        </div>
                        <p className="main-title subtitle-header">{intl.formatMessage({ id: data.description})}</p>
                    </div>
                    <div className="column title-image-container">
                        <img src={`${img[data.image]}`} alt="" />    
                    </div>
                </div>
            
                    <div className="columns is-vcentered">
                        {data.header.map((header, index) => 
                            <div key={index} className="column has-text-centered-touch icon-container">
                                <div className="img-container">
                                    <img src={`${icons[header.icon]}`} className={`image the-icons ${header.icon}`} width="140" alt=""/>
                                </div>
                                <div className="title-container">
                                    <h4 className="title-header is-size-3-desktop is-4 is-spaced">{intl.formatMessage({ id: header.title})}</h4>                              
                                </div>
                            </div>
                        )}
                    </div>
            </div>
            </div>
            </section>

            
        )
}