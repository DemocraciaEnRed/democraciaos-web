import React, {useState} from "react"
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

const PresupuestoParticipativo = () => {
    const title="Presupuesto Participativo"
    const description="Procesos enteramente digitales en permanente actualización."
     return (
    <React.Fragment>
        <SEO title={title} description={description}/>
        <Navbar/>
        <ProductHeader data={productsData[0]}/>
        <FeaturesSection data={FeaturesData[0]}/>
  
        {productsSpecsData[0].map((product) => 
            <ProductSpecs data={product} key={'pp'+product.id}/>
        )}
        <hr/>
        <InstalationsSection data={instalationsData}/>
        <Footer/> 
    </React.Fragment>
)}

export default PresupuestoParticipativo;