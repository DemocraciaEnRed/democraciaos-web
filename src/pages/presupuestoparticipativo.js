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

export default () => {
    const [show, setShow] = useState(false);

    const handleForm = () =>{
        setShow(true);
        console.log(show);
    }
     return (
    <React.Fragment>
        <SEO />
        <Navbar handleForm={handleForm}/>
        <ProductHeader data={productsData[0]}/>
        <FeaturesSection data={FeaturesData[0]}/>
  
        {productsSpecsData[0].map((product) => 
            <ProductSpecs data={product} key={product.id}/>
        )}

        <InstalationsSection data={instalationsData} handleForm={handleForm} show={show} />
        <Footer /> 
    </React.Fragment>
)}