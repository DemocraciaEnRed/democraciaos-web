import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"

export default () =>  {
    const intl = useIntl()

    return (
        <section className="footer section has-background-grey-dark	has-text-white">
            <div className="columns">
                <div className="column">
                        <h4 className="title is-4 is-spaced">{intl.formatMessage({ id: "footer.title" })}</h4>
                        <p className="subtitle is-hidden-desktop">{intl.formatMessage({ id: "footer.description" })}</p>
                        <p className="is-size-7 is-hidden-touch">{intl.formatMessage({ id: "footer.copyright_1" })}<a className="has-text-underline" href="https://democraciaenred.org/" target="_blank" rel="noopener noreferrer">Democracia en Red</a>{intl.formatMessage({ id: "footer.copyright_2" })}</p>
                </div>
                <div className="column">
                    <ul>
                            <li><a className="footer-link" href="#productos">{intl.formatMessage({ id: "products_title" })}</a></li>
                            <li><a className="footer-link" href="#nosotros">{intl.formatMessage({ id: "us" })}</a></li>
                            <li><a className="footer-link" href="https://preguntarparaacordar.typeform.com/to/bkXtFW" target="_blank" rel="noopener noreferrer">{intl.formatMessage({ id: "contact" })}</a></li>
                            <li className="footer-link has-text-underline"><a href="mailto:	contacto@democraciaenred.org">contacto@democraciaenred.org</a></li>
                            <li>
                                <a href="https://www.facebook.com/democraciaenred/" target="_blank" rel="noopener noreferrer">
                                    <span className="icon">
                                        <i className="fas fab fa-facebook-square"></i>
                                    </span>
                                </a>
                                <a href="https://twitter.com/fundacionDER" target="_blank" rel="noopener noreferrer">
                                    <span className="icon">
                                        <i className="fas fab fa-twitter"></i>
                                    </span>
                                </a>
                                <a href="https://www.instagram.com/democraciaenred/" target="_blank" rel="noopener noreferrer">
                                    <span className="icon">
                                        <i className="fas fab fa-instagram"></i>
                                    </span>
                                </a>
                                <a href="https://github.com/democraciaenred" target="_blank" rel="noopener noreferrer">
                                    <span className="icon">
                                        <i className="fas fab fa-github"></i>
                                    </span>
                                </a>
                            </li>
                    </ul>
                    </div>
                    <div className="column">
                        <p className="is-size-7 is-hidden-desktop">{intl.formatMessage({ id: "footer.copyright_1" })}<a className="has-text-underline" href="https://democraciaenred.org/" target="_blank" rel="noopener noreferrer">Democracia en Red</a>{intl.formatMessage({ id: "footer.copyright_2" })}</p>
                        <p className="subtitle is-hidden-touch">{intl.formatMessage({ id: "footer.description" })}</p>
                    </div>
            </div>   
        </section>
    )
}