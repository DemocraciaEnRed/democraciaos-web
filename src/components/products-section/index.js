import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"

import consulta_publica from "./assets/consulta_publica.svg"
import co_construccion from "./assets/co_construccion.svg"
import presupuesto_participativo from "./assets/presupuesto_participativo.svg"
import seguimiento_metas from "./assets/seguimiento_metas.svg"
import votacion_autoridades from "./assets/votacion_autoridades.svg"


const icons = {
    consulta_publica,
    co_construccion,
    presupuesto_participativo,
    seguimiento_metas,
    votacion_autoridades,
};

export default ({ products }) =>  {
    const intl = useIntl()

    return (
        <section id="productos" className="section">
            <div className="container">
                <div className="columns is-multiline is-mobile is-centered">
                    {products.map((product) =>
                        <div key={product.id} className={`product-item product-item-${product.color} column has-text-centered is-half-tablet is-half-desktop is-full-mobile`}>
                            <figure className="image">
                                <img src={`${icons[product.icon]}`} alt="" className={`${product.icon}`} />
                            </figure>
                            <h4 className="title is-spaced has-text-grey-dark">{intl.formatMessage({id: product.title})}</h4>
                            <p className="subtitle is-6 is-spaced has-text-grey-dark">{intl.formatMessage({id: product.subtitle})}</p>
                            <a className="icon is-large" href={`#${product.id}`}>
                                <i className="fas fa-plus fa-inverse"></i>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}