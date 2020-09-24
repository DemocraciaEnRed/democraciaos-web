import React from "react"
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
import UsSection from "../components/us-section"
import usData from "../../content/nosotros.json"
import CasesSection from "../components/cases-section"
import casesData from "../../content/cases.json"
import Footer from "../components/footer"
import WorkWithSection from "../components/work-with-section"

//Sets smooth scroll animation for anchor links
if (typeof window !== "undefined") {
    const SmoothScroll = require("smooth-scroll");
    new SmoothScroll('a[href*="#"]');
}

export default () =>  (
    <React.Fragment>
        <SEO />
        <Navbar />
        <ProductHeader data={productsData}/>
        <FeaturesSection data={FeaturesData}/>
  
        {productsSpecsData.map((product) => 
            <ProductSpecs data={product} key={product.id}/>
        )}

        <InstalationsSection data={instalationsData}/>
        <UsSection data={usData}/>
        <WorkWithSection />
        <CasesSection data={casesData}/>
        <Footer /> 
    </React.Fragment>
)