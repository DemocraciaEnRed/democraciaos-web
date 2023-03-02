import React, { useState } from "react"
import "./styles.scss"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

import ProductHeader from "../components/products-header"
import productsData from "../../content/header.json"


import FeaturesSection from "../components/features-section"
import FeaturesData from "../../content/features_section.json"

import ProductSpecs from "../components/product-specs"
import productsSpecsData from "../../content/products-specs.json"

import InstalationsSection from "../components/instalations-section"
import instalationsData from "../../content/instalations.json"
import Footer from "../components/footer"

//Sets smooth scroll animation for anchor links
if (typeof window !== "undefined") {
    const SmoothScroll = require("smooth-scroll");
    new SmoothScroll('a[href*="#"]');
}

const CoConstruccionLeyes = () => {
    const title = "Co-construcción de leyes"
    const description = "Comentarios y aportes en proyectos de ley."
    
    return (
        <React.Fragment>
            <SEO title={title} description={description}/>
            <Navbar />
            <ProductHeader data={productsData[3]} />
            <FeaturesSection data={FeaturesData[3]} />

            {productsSpecsData[3].map((product) =>
                <ProductSpecs data={product} key={'cl'+product.id} />
            )}

            <InstalationsSection data={instalationsData} />
            <Footer />
        </React.Fragment>
    )
}

export default CoConstruccionLeyes;