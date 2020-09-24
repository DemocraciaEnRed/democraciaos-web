import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"

 import personalizable from "./assets/personalizable.svg"
 import codigo_abierto from "./assets/codigoabierto.svg"
 import instalacion from "./assets/instalacion.svg"

import image from "./assets/consulta_publica.png"

 const icons = {
     personalizable,
     codigo_abierto,
     instalacion
 };

 export default ({ data }) =>  {
    const intl = useIntl()

    return (
        <section id="implementar" className=" hero product product-green header">
            <div className="hero-body">
            <div className="container ">
                <div className="columns">
                <div className="column">
                    <h3 className="main-title title is-4 is-size-2-desktop">{intl.formatMessage({ id: data.title})}</h3>
                    <p className="main-title subtitle has-text-left">{intl.formatMessage({ id: data.description})}</p>
                    </div>
                    <div className="column">
                    <figure className="header-image ">
                    <img src={`${image}`} alt="" />    
                    </figure>
                    </div>
                </div>
            
                    <div className="columns ">
                        {data.header.map((header, index) => 
                            <div key={index} className="column">
                                <figure className="image">
                                    <img src={`${icons[header.icon]}`} className={`${header.icon}`} alt=""/>
                                </figure>
                                <div className="">
                                    <h4 className="title is-4 is-spaced">{intl.formatMessage({ id: header.title})}</h4>
                                </div>
                              
                            </div>
                        )}
                    </div>
            </div>
            </div>
            </section>

            
        )
}