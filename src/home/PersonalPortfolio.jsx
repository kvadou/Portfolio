import React, { Component, Fragment } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderTwo from "../component/header/HeaderTwo";
import FooterTwo from "../component/footer/FooterTwo";
// import Brand from "../elements/Brand";
import PortfolioList from "../elements/portfolio/PortfolioList";
import TabTwo from "../elements/tab/TabTwo";
import ContactOne from "../elements/contact/ContactOne";
import Helmet from "../component/common/Helmet";

const SlideList = [
  {
    textPosition: "text-left",
    category: "",
    title: "Hello, I’m <span>Doug</span> Welcome to my World.",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];
class PersonalPortfolio extends Component {
  render() {
    let title = "About Me",
      description =
        "My name is Doug Kvamme and I currently work as a Talent Advocate at Nerdery in Edina, MN. I have 7 years professional experience as a Technical Recruiter, primarily focused on hiring Software Engineers in the Twin Cities metro area. I am in the process of transitioning my career into software development and this portfolio site is intended to showcase the projects I have worked on thus far. Check out the links below and connect with me online!";
    return (
      <Fragment>
        <Helmet pageTitle="Doug Kvamme" />

        <HeaderTwo logo="symbol-dark" color="color-black" />

        {/* Start Slider Area   */}
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--17"
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      {value.title ? (
                        <h1
                          className="title"
                          dangerouslySetInnerHTML={{ __html: value.title }}
                        ></h1>
                      ) : (
                        ""
                      )}
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="rn-button-style--2 btn-primary-color"
                            href={`${value.buttonLink}`}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
        {/* End Slider Area   */}

        {/* Start About Area */}
        <div id="aboutme">
          <div className="about-area about-position-top pb--120  bg_color--1">
            <div className="about-wrapper">
              <div className="container">
                <div className="row row--35 align-items-center">
                  <div className="col-lg-5">
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        src="/assets/images/about/about-5.jpg"
                        alt="About Images"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="about-inner inner pt--100">
                      <div className="section-title">
                        <h2 className="title">{title}</h2>
                        <p className="description">{description}</p>
                      </div>
                      <div className="row mt--30">
                        <TabTwo tabStyle="tab-style--1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area */}

        {/* Start Portfolio Area */}
        <div id="projects">
          <div className="portfolio-area pb--60 bg_color--1">
            <div className="portfolio-sacousel-inner mb--55 mb_sm--0">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                      <h2 className="title">My Latest Projects</h2>
                      <p>
                        Recent projects I completed while attending bootcamp.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <PortfolioList
                    styevariation="text-center mt--40"
                    column="col-lg-4 col-md-6 col-sm-6 col-12"
                    item="6"
                  />
                </div>
                {/* <div className="row">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--60 mt_sm--30 text-center">
                    <a className="rn-button-style--2 btn-solid" href="/blog">
                      <span>View More</span>
                    </a>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start Contact Area */}
        <div id="contactme">
          <div className="portfolio-area pb--120 bg_color--1">
            <ContactOne />
          </div>
        </div>
        {/* End Contact Area */}

        <FooterTwo />

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}

export default PersonalPortfolio;
