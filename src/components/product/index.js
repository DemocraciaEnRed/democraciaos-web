import React from "react"
import "./styles.scss"

export default ({ data }) =>  (
    <section id={data.id} className={`hero product product-${data.color}`}>
        <div className="hero-body">
            <div className="container">
                <div className="text-content">
                    <h4 className="title is-4 is-spaced is-size-2-desktop">{data.title}</h4>
                    <figure className="image is-square is-hidden-desktop">
                        <img src="https://bulma.io/images/placeholders/480x480.png" />
                    </figure>
                    <p className="subtitle is-6 is-spaced">{data.description}</p>
                    <div className="list-wrapper">
                        <span className="list-title">Características</span>
                        <ul className="list">
                            {data.features.map((feature, index) =>
                                <li key={index}>{feature}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <figure className="image is-square is-hidden-touch">
                    <img src="https://bulma.io/images/placeholders/480x480.png" />
                </figure>
                <a className="button is-rounded is-medium" href="#implementar">Implementar</a>
            </div>
        </div>    
    </section>
)