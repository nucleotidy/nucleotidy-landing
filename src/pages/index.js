import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { RingSpinner } from "react-spinners-kit";
import Navbar from '../containers/navbar'
import Banner from "../containers/bannerwithp5"
//import Mission from "../containers/mission"
import Features from "../containers/features"
import About from "../containers/about"
/*
import Blog from "../containers/blog"
import Video from "../containers/video"
import Skills from "../containers/skills"
import Project from "../containers/project"
import Portfolio from '../containers/portfolio'
import Testimonial from '../containers/testimonial'
import Brand from '../containers/brands'
*/
import Contact from '../containers/contact'
import Footer from '../containers/footer'
import CopyRight from '../containers/copyright_text'
import "../assets/scss/style.scss"

const IndexPage = () => {
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            setLoader(true)
        }, 2000);
        return () => clearInterval(interval);
    }, [])

    return (
        loader ?
            <div className="main-wrapper">
                <Navbar />
                <div id="main-content">
                    <Banner ChangeClass={'demo1'} BannerPreview={'minibrowser'} />
                    <Features />
                    <About />
                    {/*
                    <Blog />
                    <Video />
                    <Skills />
                    <Project />
                    <Portfolio />
                    <Testimonial />
                    <Brand />
                    */}
                    <Contact />
                    <Footer />
                    <CopyRight />
                </div>
            </div>
            :

            <div className="theme-loader">
                <RingSpinner size={80} color="linear-gradient(to right, #073a4d  0%, #2a4151 100%)" loading={!loader} />

            </div>
    )
}

export default IndexPage
