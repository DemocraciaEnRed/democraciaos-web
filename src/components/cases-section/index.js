import React from "react"
import "./styles.scss"

export default ({data}) =>  (
    <section className="section">
        <div className="container has-text-centered">
            <h3 className="title is-4 is-size-1-desktop">{data.title}</h3>
            <div className="columns">
                {data.cases.map((useCase, index) =>
                    <div key={index} className={`column use-case-item use-case-item-${useCase.color}`}>
                        <figure className="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </figure>
                        <h4 className="title is-4 is-size-3-desktop">{useCase.title}</h4>
                        <p className="subtitle is-6 is-spaced">{useCase.subtitle}</p>
                        <a className="icon is-large" target="_blank" href={useCase.link} rel="noopener noreferrer">
                            <i className="fas fa-plus fa-inverse"></i>
                        </a>
                    </div>
                )}
            </div>
        </div>
    </section>
)