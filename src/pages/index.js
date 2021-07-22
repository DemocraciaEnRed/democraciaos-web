import React, {useState} from "react"
import "./styles.scss"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import HeroSlider from "../components/hero-slider"
import heroSliderData from "../../content/hero-slider.json"
import ProductsSection from "../components/products-section"
import Product from "../components/product"
import productsData from "../../content/products.json"
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

const Home = () => {
    return (
    <React.Fragment>
        <SEO />
        <Navbar/>
        <HeroSlider slides={heroSliderData}/>
        <ProductsSection products={productsData}/>
        {productsData.map((product) => 
            <Product data={product} key={product.id}/>
        )}
        <InstalationsSection data={instalationsData}/>        
        <UsSection data={usData}/>
        <WorkWithSection />
        <CasesSection data={casesData}/>
        <Footer />
    </React.Fragment>
    )

}

export default Home;
