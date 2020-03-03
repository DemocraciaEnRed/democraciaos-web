import React from "react"
import Slider from "react-slick";

import slider1 from "./assets/slider1.jpg"
import slider3 from "./assets/slider3.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss"

export default ({ slides }) =>  {
    const images = {
        'slider1': slider1,
        'slider3': slider3
    };

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };
    
    return (
        <section className="hero is-fullheight is-large is-primary is-bold">
            <Slider {...sliderSettings}>
                {slides.map((slider, index) =>
                <div key={index}>
                    <div className={`hero-slider-item item-${index}`} style={{backgroundImage: `url(${images[slider.data.bg_image]})`}}>
                        <div className="hero-body">
                            <div className="container has-text-centered">
                                {slider.type === "text" ?
                                    <React.Fragment>
                                        <h2 className="title is-spaced is-size-1-desktop">
                                            {slider.data.title}
                                        </h2>
                                        <h3 className="subtitle is-5 is-size-4-desktop">
                                            {slider.data.subtitle}
                                        </h3>
                                    </React.Fragment>
                                :
                                    <React.Fragment>
                                        <h2 className="title is-spaced is-size-1-desktop is-hidden-touch">
                                            {slider.data.title}
                                        </h2>
                                        <div className="columns">
                                        {slider.data.assets.map((asset, index) =>
                                            <div className="column" key={index}>
                                                {/* TODO: Add icon */}
                                                <h4 className="subtitle is-5 is-size-4-desktop">
                                                    {asset.title}
                                                </h4>
                                            </div>
                                        )}
                                        </div>
                                    </React.Fragment>               
                                }
                            </div>
                        </div>
                    </div>
                </div>             
                )}
            </Slider>
        </section>
    )
}