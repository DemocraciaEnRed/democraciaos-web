import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"

import Jerarquizacion from "./assets/iconos/Jerarquizacion.svg"
import ApoyarCausa from "./assets/iconos/ApoyarCausa.svg"
import EncuestaMultiple from "./assets/iconos/EncuestaMultiple.svg"
import VotacionAB from "./assets/iconos/VotacionAB.svg"
import Rango from "./assets/iconos/Rango.svg"
import ProponerIdea from "./assets/iconos/ProponerIdea.svg"
import Parametrizacion from "./assets/iconos/Parametrizacion.svg"
import Propuesta from "./assets/iconos/PropuestaCiudadana.svg"
import Analisis from "./assets/iconos/Analisis.svg"
import VotacionRosa from "./assets/iconos/VotacionRosa.svg"
import Publicacion from "./assets/iconos/Publicacion.svg"
import Seguimiento from "./assets/iconos/Seguimiento.svg"
import Objetivos from "./assets/iconos/Objetivos.svg"
import Metas from "./assets/iconos/Metas.svg"
import Reportes from "./assets/iconos/Reportes.svg"
import Validaciones from "./assets/iconos/Validaciones.svg"
import AltaProyecto from "./assets/iconos/AltaProyecto.svg"
import Explicacion from "./assets/iconos/Explicacion.svg"
import Apoyar from "./assets/iconos/Apoyar.svg"
import Aportes from "./assets/iconos/Aportes.svg"
import Versiones from "./assets/iconos/Versiones.svg"

import feature_1_1 from './assets/IconosFeatures/propuestaciudadana_2_1.svg'
import feature_1_2 from './assets/IconosFeatures/propuestaciudadana_2_2.svg'
import feature_1_3 from './assets/IconosFeatures/propuestaciudadana_2_3.svg'
import feature_1_4 from './assets/IconosFeatures/propuestaciudadana_2_4.svg'
import feature_1_5 from './assets/IconosFeatures/propuestaciudadana_2_5.svg'
import feature_1_6 from './assets/IconosFeatures/propuestaciudadana_2_6.svg'
import feature_1_7 from './assets/IconosFeatures/propuestaciudadana_2_7.svg'
import feature_1_8 from './assets/IconosFeatures/propuestaciudadana_2_8.svg'
import feature_1_9 from './assets/IconosFeatures/propuestaciudadana_2_9.svg'
import feature_1_10 from './assets/IconosFeatures/propuestaciudadana_2_10.svg'
import feature_1_11 from './assets/IconosFeatures/propuestaciudadana_2_11.svg'
import feature_1_12 from './assets/IconosFeatures/propuestaciudadana_2_12.svg'
import feature_1_13 from './assets/IconosFeatures/propuestaciudadana_2_13.svg'
import feature_1_14 from './assets/IconosFeatures/propuestaciudadana_2_14.svg'
import feature_2_1 from './assets/IconosFeatures/consultadigital_1_1.svg'
import feature_2_2 from './assets/IconosFeatures/consultadigital_1_2.svg'
import feature_2_3 from './assets/IconosFeatures/consultadigital_1_3.svg'
import feature_2_4 from './assets/IconosFeatures/consultadigital_1_4.svg'
import feature_2_5 from './assets/IconosFeatures/consultadigital_1_5.svg'
import feature_2_6 from './assets/IconosFeatures/consultadigital_1_6.svg'
import feature_2_7 from './assets/IconosFeatures/consultadigital_1_7.svg'
import feature_2_8 from './assets/IconosFeatures/consultadigital_1_8.svg'
import feature_3_1 from './assets/IconosFeatures/seguimientometas_3_1.svg'
import feature_3_2 from './assets/IconosFeatures/seguimientometas_3_2.svg'
import feature_3_3 from './assets/IconosFeatures/seguimientometas_3_3.svg'
import feature_3_4 from './assets/IconosFeatures/seguimientometas_3_4.svg'
import feature_3_5 from './assets/IconosFeatures/seguimientometas_3_5.svg'
import feature_3_6 from './assets/IconosFeatures/seguimientometas_3_6.svg'
import feature_3_7 from './assets/IconosFeatures/seguimientometas_3_7.svg'
import feature_3_8 from './assets/IconosFeatures/seguimientometas_3_8.svg'
import feature_3_9 from './assets/IconosFeatures/seguimientometas_3_9.svg'
import feature_3_10 from './assets/IconosFeatures/seguimientometas_3_10.svg'
import feature_3_11 from './assets/IconosFeatures/seguimientometas_3_11.svg'
import feature_3_12 from './assets/IconosFeatures/seguimientometas_3_12.svg'
import feature_3_13 from './assets/IconosFeatures/seguimientometas_3_13.svg'
import feature_3_14 from './assets/IconosFeatures/seguimientometas_3_14.svg'
import feature_3_15 from './assets/IconosFeatures/seguimientometas_3_15.svg'
import feature_4_1 from './assets/IconosFeatures/coconstruccion_4_1.svg'
import feature_4_2 from './assets/IconosFeatures/coconstruccion_4_2.svg'
import feature_4_3 from './assets/IconosFeatures/coconstruccion_4_3.svg'
import feature_4_4 from './assets/IconosFeatures/coconstruccion_4_4.svg'
import feature_4_5 from './assets/IconosFeatures/coconstruccion_4_5.svg'
import feature_4_6 from './assets/IconosFeatures/coconstruccion_4_6.svg'
import feature_4_7 from './assets/IconosFeatures/coconstruccion_4_7.svg'
import feature_4_8 from './assets/IconosFeatures/coconstruccion_4_8.svg'
import feature_4_9 from './assets/IconosFeatures/coconstruccion_4_9.svg'
import feature_4_10 from './assets/IconosFeatures/coconstruccion_4_10.svg'
import feature_4_11 from './assets/IconosFeatures/coconstruccion_4_11.svg'
import feature_4_12 from './assets/IconosFeatures/coconstruccion_4_12.svg'
import feature_4_13 from './assets/IconosFeatures/coconstruccion_4_13.svg'
import feature_4_14 from './assets/IconosFeatures/coconstruccion_4_14.svg'
import feature_4_15 from './assets/IconosFeatures/coconstruccion_4_15.svg'

import img_1_1_es from "./assets/imagenes/PP_1_es.png"
import img_1_2_es from "./assets/imagenes/PP_2_es.png"
import img_1_3_es from "./assets/imagenes/PP_3_es.png"
import img_1_4_es from "./assets/imagenes/PP_4_es.png"
import img_1_5_es from "./assets/imagenes/PP_5_es.png"
import img_1_6_es from "./assets/imagenes/PP_6_es.png"
import img_2_1_es from "./assets/imagenes/CD_1_es.png"
import img_2_2_es from "./assets/imagenes/CD_2_es.png"
import img_2_3_es from "./assets/imagenes/CD_3_es.png"
import img_2_4_es from "./assets/imagenes/CD_4_es.png"
import img_2_5_es from "./assets/imagenes/CD_5_es.png"
import img_2_6_es from "./assets/imagenes/CD_6_es.png"
import img_3_1_es from "./assets/imagenes/SM_1_es.png"
import img_3_2_es from "./assets/imagenes/SM_2_es.png"
import img_3_3_es from "./assets/imagenes/SM_3_es.png"
import img_3_4_es from "./assets/imagenes/SM_4_es.png"
import img_4_1_es from "./assets/imagenes/CL_1_es.png"
import img_4_2_es from "./assets/imagenes/CL_2_es.png"
import img_4_3_es from "./assets/imagenes/CL_3_es.png"
import img_4_4_es from "./assets/imagenes/CL_4_es.png"
import img_4_5_es from "./assets/imagenes/CL_5_es.png"

import img_1_1_en from "./assets/imagenes/PP_1_en.png"
import img_1_2_en from "./assets/imagenes/PP_2_en.png"
import img_1_3_en from "./assets/imagenes/PP_3_en.png"
import img_1_4_en from "./assets/imagenes/PP_4_en.png"
import img_1_5_en from "./assets/imagenes/PP_5_en.png"
import img_1_6_en from "./assets/imagenes/PP_6_en.png"
import img_2_1_en from "./assets/imagenes/CD_1_en.png"
import img_2_2_en from "./assets/imagenes/CD_2_en.png"
import img_2_3_en from "./assets/imagenes/CD_3_en.png"
import img_2_4_en from "./assets/imagenes/CD_4_en.png"
import img_2_5_en from "./assets/imagenes/CD_5_en.png"
import img_2_6_en from "./assets/imagenes/CD_6_en.png"
import img_3_1_en from "./assets/imagenes/SM_1_en.png"
import img_3_2_en from "./assets/imagenes/SM_2_en.png"
import img_3_3_en from "./assets/imagenes/SM_3_en.png"
import img_3_4_en from "./assets/imagenes/SM_4_en.png"
import img_4_1_en from "./assets/imagenes/CL_1_en.png"
import img_4_2_en from "./assets/imagenes/CL_2_en.png"
import img_4_3_en from "./assets/imagenes/CL_3_en.png"
import img_4_4_en from "./assets/imagenes/CL_4_en.png"
import img_4_5_en from "./assets/imagenes/CL_5_en.png"

const iconosTitle = {
    'icon1': Parametrizacion,
    'icon2': Propuesta,
    'icon3': Analisis,
    'icon4': VotacionRosa,
    'icon5': Publicacion,
    'icon6': Seguimiento,
    'icon7': Jerarquizacion,
    'icon8': ApoyarCausa,
    'icon9': EncuestaMultiple,
    'icon10': VotacionAB,
    'icon11': Rango,
    'icon12': ProponerIdea,
    'icon13': Objetivos,
    'icon14': Metas,
    'icon15': Reportes,
    'icon16': Validaciones,
    'icon17': AltaProyecto,
    'icon18': Explicacion,
    'icon19': Apoyar,
    'icon20': Aportes,
    'icon21': Versiones
};

const iconosFeature = {
    'icon1_1': feature_1_1,
    'icon1_2': feature_1_2,
    'icon1_3': feature_1_3,
    'icon1_4': feature_1_4,
    'icon1_5': feature_1_5,
    'icon1_6': feature_1_6,
    'icon1_7': feature_1_7,
    'icon1_8': feature_1_8,
    'icon1_9': feature_1_9,
    'icon1_10': feature_1_10,
    'icon1_11': feature_1_11,
    'icon1_12': feature_1_12,
    'icon1_13': feature_1_13,
    'icon1_14': feature_1_14,
    'icon2_1': feature_2_1,
    'icon2_2': feature_2_2,
    'icon2_3': feature_2_3,
    'icon2_4': feature_2_4,
    'icon2_5': feature_2_5,
    'icon2_6': feature_2_6,
    'icon2_7': feature_2_7,
    'icon2_8': feature_2_8,
    'icon3_1': feature_3_1,
    'icon3_2': feature_3_2,
    'icon3_3': feature_3_3,
    'icon3_4': feature_3_4,
    'icon3_5': feature_3_5,
    'icon3_6': feature_3_6,
    'icon3_7': feature_3_7,
    'icon3_8': feature_3_8,
    'icon3_9': feature_3_9,
    'icon3_10': feature_3_10,
    'icon3_11': feature_3_11,
    'icon3_12': feature_3_12,
    'icon3_13': feature_3_13,
    'icon3_14': feature_3_14,
    'icon3_15': feature_3_15,
    'icon4_1': feature_4_1,
    'icon4_2': feature_4_2,
    'icon4_3': feature_4_3,
    'icon4_4': feature_4_4,
    'icon4_5': feature_4_5,
    'icon4_6': feature_4_6,
    'icon4_7': feature_4_7,
    'icon4_8': feature_4_8,
    'icon4_9': feature_4_9,
    'icon4_10': feature_4_10,
    'icon4_11': feature_4_11,
    'icon4_12': feature_4_12,
    'icon4_13': feature_4_13,
    'icon4_14': feature_4_14,
    'icon4_15': feature_4_15
};

const images = {
    'img_1_1_es': img_1_1_es,
    'img_1_2_es': img_1_2_es,
    'img_1_3_es': img_1_3_es,
    'img_1_4_es': img_1_4_es,
    'img_1_5_es': img_1_5_es,
    'img_1_6_es': img_1_6_es,
    'img_2_1_es': img_2_1_es,
    'img_2_2_es': img_2_2_es,
    'img_2_3_es': img_2_3_es,
    'img_2_4_es': img_2_4_es,
    'img_2_5_es': img_2_5_es,
    'img_2_6_es': img_2_6_es,
    'img_3_1_es': img_3_1_es,
    'img_3_2_es': img_3_2_es,
    'img_3_3_es': img_3_3_es,
    'img_3_4_es': img_3_4_es,
    'img_4_1_es': img_4_1_es,
    'img_4_2_es': img_4_2_es,
    'img_4_3_es': img_4_3_es,
    'img_4_4_es': img_4_4_es,
    'img_4_5_es': img_4_5_es,
    'img_1_1_en': img_1_1_en,
    'img_1_2_en': img_1_2_en,
    'img_1_3_en': img_1_3_en,
    'img_1_4_en': img_1_4_en,
    'img_1_5_en': img_1_5_en,
    'img_1_6_en': img_1_6_en,
    'img_2_1_en': img_2_1_en,
    'img_2_2_en': img_2_2_en,
    'img_2_3_en': img_2_3_en,
    'img_2_4_en': img_2_4_en,
    'img_2_5_en': img_2_5_en,
    'img_2_6_en': img_2_6_en,
    'img_3_1_en': img_3_1_en,
    'img_3_2_en': img_3_2_en,
    'img_3_3_en': img_3_3_en,
    'img_3_4_en': img_3_4_en,
    'img_4_1_en': img_4_1_en,
    'img_4_2_en': img_4_2_en,
    'img_4_3_en': img_4_3_en,
    'img_4_4_en': img_4_4_en,
    'img_4_5_en': img_4_5_en,
};


export default ({ data }) =>  {
    const intl = useIntl()
    console.log(data)
    return (
        <section id={data.id} className={`section product-specs has-text-centered-mobile ${data.color}`}>
            <div className="hero-body">
                <div className="container ">
                    <div className="">
                        <div className="columns ">
                            <div className="column feature-title-container">
                                <img src={`${iconosTitle[data.icon]}`}  className="image the-icon" alt="" />
                                <h4 className="is-3 is-size-3-desktop has-text-weight-bold">{intl.formatMessage({id: data.title})}</h4>
                            </div>
                            <div className="column list-container">
                                
                                <div className="list-wrapper ">
                                {/* <h3 className="title is-3">{intl.formatMessage({id: "features"})}</h3> */}
                                    <ul className="list ">
                                        {data.features.map((feature, index) =>
                                            <li key={index}>
                                                <div className="feature-desc-container">
                                                    {iconosFeature[feature.icon] === undefined ? '' :
                                                    <div className="feature-icon">
                                                        <img src={`${iconosFeature[feature.icon]}`}  className="" alt="" />
                                                    </div>}
                                                    <div className="feature-description">
                                                        {intl.formatMessage({id: feature.description})}
                                                    </div>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="column">
                            {/* <h3 className="title is-3 has-text-centered">{intl.formatMessage({id: "preview"})}</h3> */}

                                    <img src={`${images[intl.formatMessage({id: data.image})]}`}  className="image is-centered"alt="" />
                            </div>
                        </div>
                    </div>
              
                </div>
            </div>    
        </section>
    )
}