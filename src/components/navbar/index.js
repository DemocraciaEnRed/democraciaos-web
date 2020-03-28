import React, { useState, useEffect } from "react"
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import "./styles.scss"

export default () => {
    const [isActive, setIsActive] = useState(false);
    
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
                    <a className="navbar-item" onClick={() => setIsActive(false)} href="#productos" data-target="productos">
                        productos
                    </a>

                    <a className="navbar-item" onClick={() => setIsActive(false)} href="#nosotros" data-target="nosotros">
                        ¿quiénes somos?
                    </a>

                    <a className="navbar-item contact" href="https://preguntarparaacordar.typeform.com/to/bkXtFW" target="_blank" rel="noopener noreferrer">
                        contactar
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
                    <p className="is-size-7 is-hidden-desktop has-text-white">Democracia OS es un proyecto de <a className="has-text-underline has-text-white" href="https://democraciaenred.org/" target="_blank" rel="noopener noreferrer">Democracia en Red</a>, una ONG con base en Buenos Aires, Argentina.</p>
                </div>
            </div>
        </nav>
    )
};