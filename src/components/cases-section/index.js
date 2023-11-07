import React from "react"
import "./styles.scss"
import presupuesto_participativo from "./assets/presupuesto_participativo.png"
import leyes_abiertas from "./assets/leyes_abiertas.png"
import consulta_publica from "./assets/consulta_publica.png"
import seguimiento_metas from "./assets/seguimiento_metas.png"
import { useIntl } from "gatsby-plugin-intl"

const images = {
    'presupuesto_participativo': presupuesto_participativo,
    'consulta_publica': consulta_publica,
    'leyes_abiertas': leyes_abiertas,
    'seguimiento_metas': seguimiento_metas,
};

export default ({data}) =>  {
    const intl = useIntl()

    return (
        <section className="section">
            <div className="container has-text-centered">
                <h3 className="title is-4 is-size-1-desktop">{intl.formatMessage({ id: data.title})}</h3>
                <div className="columns">
                    {data.cases.map((useCase, index) =>
                        <div key={index} className={`column use-case-item use-case-item-${useCase.color}`}>
                            <figure className="image">
                                <img src={`${images[useCase.image]}`} alt="" />
                            </figure>
                            <h4 className="title is-4 is-size-3-desktop">{intl.formatMessage({ id: useCase.title})}</h4>
                            <p className="subtitle is-6 is-spaced">{intl.formatMessage({ id: useCase.subtitle})}</p>
                            <a className="icon is-large" target="_blank" href={useCase.link} rel="noopener noreferrer">
                                <i className="fas fa-plus fa-inverse"></i>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}