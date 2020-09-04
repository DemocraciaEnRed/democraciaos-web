import React, { useState, useEffect } from "react"
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useIntl, IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import "./styles.scss"

export default () => {
    const [isActive, setIsActive] = useState(false);
    const intl = useIntl()
    const languageName = {
        es: "ESP",
        en: "ENG",
        pt: "POR",
    }

    useEffect(() => {
        const navbarElement = document.querySelector('#navbar');
        if(isActive) {
            disableBodyScroll(navbarElement);
            document.querySelector('html').style.overflowY =  "hidden";
        } else {
            document.querySelector('html').style.overflowY =  "scroll";
            enableBodyScroll(navbarElement);
        }
    }, [isActive]);

    return (
        <nav id="navbar" className={(isActive ? 'navbar is-active' : 'navbar')} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <h1 className="navbar-item is-size-2-desktop">democraciaOS</h1>
                <button onClick={() => setIsActive(prevState => !prevState)} className={(isActive ? 'navbar-burger is-active' : 'navbar-burger')} aria-label="menu" aria-expanded="false" data-target="navbarColapse">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarColapse" className={(isActive ? 'navbar-menu is-active' : 'navbar-menu')}>
                <div className="navbar-start">
                    <div className="left-wrapper">
                        <a className="navbar-item" onClick={() => setIsActive(false)} href="#productos" data-target="productos">
                            {intl.formatMessage({ id: "products_title" })}
                        </a>

                        <a className="navbar-item" onClick={() => setIsActive(false)} href="#nosotros" data-target="nosotros">
                            {intl.formatMessage({ id: "us" })}
                        </a>
                    </div>
                    <div className="lang-switch">
                    <IntlContextConsumer>
                        {({ languages, language: currentLocale }) =>
                            languages.map(language => (
                                <button className="navbar-item navbar-item-lang"
                                key={language}
                                onClick={() => changeLocale(language)}
                                style={{
                                    color: currentLocale === language ? `#CCCCCC` : `white`,
                                }}
                                >
                                {languageName[language]}
                                </button>
                            ))
                        }
                    </IntlContextConsumer>
                    </div>

                    <a className="navbar-item contact" href="https://preguntarparaacordar.typeform.com/to/bkXtFWs" target="_blank" rel="noopener noreferrer">
                        {intl.formatMessage({ id: "contact" })}
                    </a>
                    <a className="navbar-item is-hidden-desktop" href="mailto:contacto@democraciaenred.org">
                        contacto@democraciaenred.org
                    </a>
                    <a className="navbar-item is-hidden-desktop is-inline-block" href="https://www.facebook.com/democraciaenred/" target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                            <i className="fas fab fa-facebook-square"></i>
                        </span>
                    </a>
                    <a className="navbar-item is-hidden-desktop is-inline-block" href="https://twitter.com/fundacionDER" target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                            <i className="fas fab fa-twitter"></i>
                        </span>
                    </a>
                    <a className="navbar-item is-hidden-desktop is-inline-block" href="https://www.instagram.com/democraciaenred/" target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                            <i className="fas fab fa-instagram"></i>
                        </span>
                    </a>
                    <a className="navbar-item is-hidden-desktop is-inline-block" href="https://github.com/democraciaenred" target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                            <i className="fas fab fa-github"></i>
                        </span>
                    </a>
                    <p className="is-size-7 is-hidden-desktop has-text-white">{intl.formatMessage({ id: "footer.copyright_1" })}<a className="has-text-underline has-text-white" href="https://democraciaenred.org/" target="_blank" rel="noopener noreferrer">Democracia en Red</a>{intl.formatMessage({ id: "footer.copyright_2" })}</p>
                </div>
            </div>
        </nav>
    )
};