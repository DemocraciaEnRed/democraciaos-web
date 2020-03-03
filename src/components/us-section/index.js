import React from "react"
import "./styles.scss"
import image from "./assets/slider1.jpg"

export default ({ data }) =>  (
    <section id="nosotros" className="hero is-fullheight is-large is-dark us-section" style={{ backgroundImage:`url("${image}")`}}>
        <div className="hero-body">
            <div className="container has-text-centered">
                <h3 className="title is-spaced is-size-1-desktop">
                    {data.title}
                </h3>
                <p className="subtitle is-size-4-desktop">
                    {data.subtitle}
                </p>
                <a className="has-text-white has-text-underline is-size-5" href={data.link} target="_blank" rel="noopener noreferrer">{data.text_link}</a>
            </div>
        </div>
    </section>
)