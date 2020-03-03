import React, { useState } from "react"
import "./styles.scss"

export default () => {
    const [isActive, setIsActive] = useState(false);
    // TODO: check if it is the best way to animate
    const scrollToSectionHandler = (e) => {
        e.preventDefault();
        setIsActive(false);
        window.scroll({ 
            behavior: 'smooth', 
            left: 0, 
            top: document.getElementById(e.target.dataset.target).getBoundingClientRect().top + 
                window.scrollY 
        });
    };

    return (
        <nav className={(isActive ? 'navbar is-active' : 'navbar')} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <h1 className="navbar-item is-size-2-desktop">democraciaOS</h1>
                <a onClick={() => setIsActive(prevState => !prevState)} role="button" className={(isActive ? 'navbar-burger is-active' : 'navbar-burger')} aria-label="menu" aria-expanded="false" data-target="navbarColapse">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarColapse" className={(isActive ? 'navbar-menu is-active' : 'navbar-menu')}>
                <div className="navbar-start">
                    <a className="navbar-item" onClick={scrollToSectionHandler} href="#productos" data-target="productos">
                        productos
                    </a>

                    <a className="navbar-item" onClick={scrollToSectionHandler} href="#nosotros" data-target="nosotros">
                        nosotros
                    </a>

                    <a className="navbar-item contact" href="https://preguntarparaacordar.typeform.com/to/bkXtFW" target="_blank">
                        contactar
                    </a>
                    <a className="navbar-item is-hidden-desktop" href="mailto:speak@democracyos.org">
                        speak@democracyos.org
                    </a>
                    <a className="navbar-item is-hidden-desktop is-inline-block" href="https://www.facebook.com/democraciaenred/" target="_blank">
                        <span className="icon">
                            <i className="fas fab fa-facebook-square"></i>
                        </span>
                    </a>
                    <a className="navbar-item is-hidden-desktop is-inline-block" href="https://twitter.com/fundacionDER" target="_blank">
                        <span className="icon">
                            <i className="fas fab fa-twitter"></i>
                        </span>
                    </a>
                    <a className="navbar-item is-hidden-desktop is-inline-block" href="https://www.instagram.com/democraciaenred/" target="_blank">
                        <span className="icon">
                            <i className="fas fab fa-instagram"></i>
                        </span>
                    </a>
                    <a className="navbar-item is-hidden-desktop is-inline-block" href="https://github.com/democraciaenred" target="_blank">
                        <span className="icon">
                            <i className="fas fab fa-github"></i>
                        </span>
                    </a>
                    <p className="is-size-7 is-hidden-desktop has-text-white">Democracia OS es un proyecto de <a className="has-text-underline has-text-white" href="https://democraciaenred.org/" target="_blank">Democracia en Red</a>, una ONG con base en Buenos Aires, Argentina.</p>
                </div>
            </div>
        </nav>
    )
};