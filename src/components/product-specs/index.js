import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"

import icon1 from "./assets/1.svg"
import icon2 from "./assets/2.svg"
import icon3 from "./assets/3.svg"
import icon4 from "./assets/4.svg"
import icon5 from "./assets/5.svg"
import icon6 from "./assets/6.svg"

import img1 from "./assets/1.png"
import img2 from "./assets/2.png"
import img3 from "./assets/3.png"
import img4 from "./assets/4.png"
import img5 from "./assets/5.png"
import img6 from "./assets/6.png"
import img7 from "./assets/7.png"
import img8 from "./assets/8.png"
import img9 from "./assets/9.png"
import img10 from "./assets/10.png"
import img11 from "./assets/11.png"
import img12 from "./assets/12.png"
import img13 from "./assets/13.png"
import img14 from "./assets/14.png"
import img15 from "./assets/15.png"
import img16 from "./assets/16.png"
import img17 from "./assets/17.png"
import img18 from "./assets/18.png"

const icon = {
    'icon1': icon1,
    'icon2': icon2,
    'icon3': icon3,
    'icon4': icon4,
    'icon5': icon5,
    'icon6': icon6
};

const images = {
    'img1': img1,
    'img2': img2,
    'img3': img3,
    'img4': img4,
    'img5': img5,
    'img6': img6,
    'img7': img7,
    'img8': img8,
    'img9': img9,
    'img10': img10,
    'img11': img11,
    'img12': img12,
    'img13': img13,
    'img14': img14,
    'img15': img15,
    'img16': img16,
    'img17': img17,
    'img18': img18,
};


export default ({ data }) =>  {
    const intl = useIntl()
    console.log(data)
    return (
        <section id={data.id} className="section product-specs has-text-centered-mobile">
            <div className="hero-body">
                <div className="container ">
                    <div className="">
                        <div className="columns ">
                            <div className="column ">
                                <h4 className="title green is-3 has-text-weight-bold">{intl.formatMessage({id: data.title})}</h4>
                                    <img src={`${icon[data.icon]}`}  className="image the-icon" alt="" />
                            </div>
                            <div className="column">
                                
                                <div className="list-wrapper ">
                                <h3 className="title is-3">{intl.formatMessage({id: "features"})}</h3>
                                    <ul className="list ">
                                        {data.features.map((feature, index) =>
                                            <li key={index}>{intl.formatMessage({id: feature})}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="column">
                            <h3 className="title is-3 has-text-centered">{intl.formatMessage({id: "preview"})}</h3>

                                    <img src={`${images[intl.formatMessage({id: data.image})]}`}  className="image is-centered"alt="" />
                            </div>
                        </div>
                    </div>
              
                </div>
            </div>    
        </section>
    )
}