import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterBlock from "../components/filtter_block";
import PageStyeCSS from "./pages_style.module.css"
import AppText from "../appCSS/appText_css.module.css"

const AboutPage = () => {
    return (<div className={PageStyeCSS.schoolPage}>
        <Header />
        <div className={PageStyeCSS.ourStory}>
            <span>
                <h2 className={AppText.largeText}> Our Story</h2>
                <p>
                At SchoolMint, we’re here to help schools create bright, sustainable futures. That’s our purpose. And we’re on a path forward, guided by our vision to becoming the leading edtech company for trusted, student-centric experiences.
                </p>

            </span>
            <img src="/our-story.png" alt="image corrupt"/>
        </div>
        <div className={PageStyeCSS.statics}>
        <div>
          <h1 className={AppText.largeText}>300+</h1>
          <p>Universities</p>
        </div>
        <div>
          <h1 className={AppText.largeText}>300+</h1>
          <p>Scholarships</p>
        </div>
        <div>
          <h1 className={AppText.largeText}>40+</h1>
          <p>Countries</p>
        </div>
        <div>
          <h1 className={AppText.largeText}>1000+</h1>
          <p>student rechead</p>
        </div>
      </div>
      <div className={PageStyeCSS.reachOut}>
      <h1 className={AppText.largeText}>Reach Out</h1>
      <input placeholder="Names"></input>
      <input placeholder="Email"></input>
      <textarea placeholder="message..."></textarea>
      <button>Send</button>


      </div>

        <Footer />
    </div>)
}
export default AboutPage;