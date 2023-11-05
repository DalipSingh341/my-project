import React, { useState } from 'react'
import logo from "../assets/images/webp/navlogo.webp" 
import herobg from "../assets/images/webp/hero_bg.webp" 
import headerdots from "../assets/images/png/headerdots.png"; 
import herorightbg from "../assets/images/webp/herorightbg.webp" 
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import { Link } from 'react-router-dom';
import Hero from './Hero';


const EeNav = () => {
    const [nav, setNav] = useState(true);

     function shownav() {
       setNav(false);
       document.body.classList.add("overflow-hidden");
     }
     function hidenav() {
       setNav(true);
       document.body.classList.remove("overflow-hidden");
     }
  return (
    <div className="bg-[0B2261] lg:bg-white relative nav_content overflow-hidden bg_nav">
      <img
        className="absolute top-[4%] right-[3%]  z-[1]"
        src={headerdots}
        alt="headerdots"
      />
      <img
        className="absolute top-0 left-0 max-w-[1155px] 2xl:max-w-[1370px] 2xl:w-full z-[1]"
        src={herobg}
        alt="herobg"
      />
      <img
        className="absolute bottom-[3%] right-0 "
        src={herorightbg}
        alt="herorightbg"
      />

      <div className="xl:w-[1140px] 2xl:w-[1320px]  mx-auto px-3 sm:px-5 2xl:px-0 z-[100] relative py-[10px]">
        <div className="flex items-center justify-between">
          <div>
            <img className="w-[68px] cursor-pointer" src={logo} alt="logo" />
          </div>
          <label htmlFor="menuIcon" className="z-50">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <input type="checkbox" id="menuIcon" hidden className="d-none" />
          <ul
            className={
              nav
                ? "flex nav_bar mb-0 ps-0 items-center gap-[25px] "
                : "ps-0 flex nav_bar items-center show mb-0 gap-[25px] "
            }
          >
            <li onClick={hidenav}>
              <a
                href="#section_2"
                className="hover-line font-Raleway font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-xs leading-normal"
              >
                About
              </a>
            </li>
            <li onClick={hidenav}>
              <a
                href="#section_3"
                className="hover-line font-Raleway font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-xs leading-normal"
              >
                IBO Event
              </a>
            </li>
            <li onClick={hidenav}>
              <a
                href="#section_4"
                className="hover-line font-Raleway font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-xs leading-normal"
              >
                EEFI Tokenomics
              </a>
            </li>
            <li onClick={hidenav}>
              <a
                href="#section_5"
                className="hover-line font-Raleway font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-xs leading-normal"
              >
                Team
              </a>
            </li>
            <li onClick={hidenav}>
              <a
                href="#section_6"
                className="hover-line whitespace-nowrap font-Raleway font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-xs leading-normal"
              >
                Partners
              </a>
            </li>
            <li onClick={hidenav}>
              <a
                href="#section_7"
                className="hover-line font-Raleway font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-xs leading-normal"
              >
                Roadmap
              </a>
            </li>
            <li>
              <select
                name="cars"
                id="cars"
                className="border-none outline-none bg-transparent text-white font-Raleway font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-xs leading-normal"
              >
                <option
                  className="bg-black text-white font-Raleway font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-xs leading-normal"
                  value="More"
                >
                  More
                </option>
                <option
                  className="bg-black text-white font-Raleway font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-xs leading-normal"
                  value="contact"
                >
                  Contc
                </option>
                <option
                  className="bg-black text-white font-Raleway font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-xs leading-normal"
                  value="faqs"
                >
                  Faqs
                </option>
                <option
                  className="bg-black text-white font-Raleway font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-xs leading-normal"
                  value="feedback"
                >
                  Feed
                </option>
              </select>
            </li>
            <li onClick={hidenav}>
              <Link className="py-4 px-[31px] sm:hidden text-white border border-white border-solid rounded-[8px] font-Raleway font-medium text-xs leading-normal inline-block hover:text-white hover:bg-light-blue duration-500">
                Enter App
              </Link>
            </li>
          </ul>
          <Link className="hidden lg:block py-4 px-[31px] text-light-blue border border-light-blue border-solid rounded-[8px] font-Raleway font-medium text-xs leading-normal hover:text-white hover:bg-light-blue duration-500">
            Enter App
          </Link>
          <div className=" lg:hidden cross_btn  flex items-center gap-5">
            <div
              className="position-relative z-3 lg:hidden cross_btn  flex items-center gap-5"
              onClick={nav ? shownav : hidenav}
            >
              {" "}
              {nav ? (
                <Icon icon={menu} size={45} className="icons_color z-[100]" />
              ) : (
                <Icon icon={x} size={45} className="icons_color2 z-[100]" />
              )}
            </div>
            <Link className="py-4 hidden sm:block lg:hidden px-[31px] text-white border border-white border-solid rounded-[8px] font-Raleway font-medium text-xs leading-normal hover:text-white hover:bg-light-blue duration-500">
              Enter App
            </Link>
          </div>
        </div>
      </div>
      <Hero />
    </div>
  );
}

export default EeNav
