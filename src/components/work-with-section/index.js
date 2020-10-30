import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"
import legislatura_caba from "./assets/legislatura_caba.jpg"
import sanmartin from "./assets/sanmartin.jpg"
import xr from "./assets/xr.jpg"
import sunchales_ciudad from "./assets/sunchales_ciudad.jpg"
import vicente_lopez from "./assets/vicente_lopez.jpg"
import extituto from "./assets/extituto.jpg"
import gob_mx from "./assets/gob_mx.jpg"
import san_lorenzo from "./assets/san_lorenzo.jpg"
import presupuesto_participativo from "./assets/presupuestoparticipativo.png"
import presidencia_nacion from "./assets/presidencianacion.png"
import diputados from "./assets/diputados.jpg"
import bs_as_ciudad from "./assets/bs_as_ciudad.jpeg"
import red_innovacion from "./assets/red_innovacion.jpg"
import rosario from "./assets/rosario.jpg"
import argentina_unida from "./assets/argentina_unida.png"


export default () =>  {
    const intl = useIntl()

    return (
        <section id="work-with" className="section work-with">
            <div className="container has-text-centered">
                <h3 className="main-title title is-4 is-size-1-desktop">
                    {intl.formatMessage({ id: 'work_with'})}
                </h3>
                <div className="columns is-multiline">
                    <div className="column is-one-quarter-tablet is-one-quarter-desktop is-half-mobile">
                        <figure className="image">
                            <img src={legislatura_caba} className="client-logo legislatura" alt="Legislatura Ciudad Autoónoma de Buenos Aires"/>
                        </figure>
                    </div>
                    <div className="column is-one-quarter-tablet is-one-quarter-desktop is-half-mobile">
                        <figure className="image">
                            <img src={sanmartin} className="client-logo san-martin" alt="San Martin"/>
                        </figure>
                    </div>
                    <div className="column is-one-quarter-tablet is-one-quarter-desktop is-half-mobile">
                        <figure className="image">
                            <img src={xr} className="client-logo" alt="XR Rebelion o Extinsión"/>
                        </figure>
                    </div>
                    <div className="column is-one-fifth-tablet is-one-fifth-desktop is-half-mobile">
                        <figure className="image">
                            <img src={sunchales_ciudad} className="client-logo" alt="Ciudad de Sunchales"/>
                        </figure>
                    </div>
                    <div className="column is-one-fifth-tablet is-one-fifth-desktop is-half-mobile">
                        <figure className="image">
                            <img src={vicente_lopez} className="client-logo" alt="Vivamos Vicente López"/>
                        </figure>
                    </div>
                    <div className="column is-one-fifth-tablet is-one-fifth-desktop is-half-mobile">
                        <figure className="image">
                            <img src={extituto} className="client-logo" alt="Extituto Politica Abierta"/>
                        </figure>
                    </div>
                    <div className="column is-one-fifth-tablet is-one-fifth-desktop is-half-mobile">
                        <figure className="image">
                            <img src={gob_mx} className="client-logo" alt="Gobierno de Mexico"/>
                        </figure>
                    </div>
                    <div className="column is-one-fifth-tablet is-one-fifth-desktop is-half-mobile">
                        <figure className="image">
                            <img src={san_lorenzo} className="client-logo san-lorenzo" alt="Municipalidad de San Lorenzo"/>
                        </figure>
                    </div>
                    <div className="column is-one-fifth-tablet is-one-fifth-desktop is-half-mobile">
                        <figure className="image">
                            <img src={presupuesto_participativo} className="client-logo presupuesto_participativo" alt="presupuesto_participativo"/>
                        </figure>
                    </div>
                    <div className="column is-one-fifth-tablet is-one-fifth-desktop is-half-mobile">
                        <figure className="image">
                            <img src={presidencia_nacion} className="client-logo presidencia_nacion" alt="presidencia_nacion"/>
                        </figure>
                    </div>
                    <div className="column is-one-quarter-tablet is-one-quarter-desktop is-half-mobile">
                        <figure className="image">
                            <img src={diputados} className="client-logo diputados" alt="Diputados Argentina"/>
                        </figure>
                    </div>
                    <div className="column is-one-quarter-tablet is-one-quarter-desktop is-half-mobile">
                        <figure className="image">
                            <img src={bs_as_ciudad} className="client-logo buenos-aires" alt="Buenos Aires Ciudad"/>
                        </figure>
                    </div>
                    <div className="column is-one-quarter-tablet is-one-quarter-desktop is-half-mobile">
                        <figure className="image">
                            <img src={red_innovacion} className="client-logo red-innovacion" alt="Red de Innovacion Politica en America Latina"/>
                        </figure>
                    </div>
                    <div className="column is-one-quarter-tablet is-one-quarter-desktop is-half-mobile">
                        <figure className="image">
                            <img src={rosario} className="client-logo" alt="Municipalidad de Rosario"/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}