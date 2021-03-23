import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";

const SocialShare = [
  { Social: <FaGithub />, link: "https://github.com/kvadou" },
  { Social: <FaFacebookF />, link: "https://www.facebook.com/DPKlol/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/dougkvamme/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/dpkalltheway/" },
  { Social: <FaTwitter />, link: "https://twitter.com/DougKvamme" },
];

class Header extends Component {
  constructor(props) {
    super(props);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const { color = "default-color" } = this.props;

    return (
      <header
        className={`header-area header-style-two header--transparent ${color}`}
      >
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center">
            <nav className="mainmenunav d-lg-block ml--50">
              <ul className="mainmenu">
                <li>
                  <Link to="aboutme" href="#" className="nav-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="projects">Projects</Link>
                </li>
                <li>
                  <Link to="contactme">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className="social-share-inner">
              <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
