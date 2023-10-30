import React from 'react'
import { Link } from 'react-router-dom';
import heromen from "../assets/images/png/heroMens.png"
import heromen2 from "../assets/images/png/hero_bg2.png";
const Hero = () => {
  return (
    <div className="z-[2] relative">
      <div className="xl:w-[1140px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 2xl:px-0 hero-content flex items-start justify-center flex-col">
        <div className="grid lg:grid-cols-2 items-center pt-[42px] sm:pt-[132px] lg:pt-0">
          <div>
            <h1 className="font-Machine text-white text-center lg:text-start text-[46px] sm:text-[72px] lg:text-3xl font-medium leading-[112%] uppercase lg:max-w-[463px] mb-5 sm:mb-[30px]">
              Building elastic Protocol
            </h1>
            <p className="font-Raleway text-xs text-white font-normal leading-[150%] capitalize text-center lg:text-start mx-auto  lg:mx-0 max-w-[330px] sm:max-w-[524px] mb-5 sm:mb-[26px]">
              An ecosystem of unique yield strategies that help you earn yield,
              amplify, and stretch it across all market conditions
            </p>
            <div className=" text-center lg:text-start">
              <Link className="font-Raleway text-md font-bold underline text-white leading-[150%]  capitalize mb-5 inline-block">
                Audited by Omniscia{" "}
              </Link>
            </div>
          </div>
          <div>
            <img
              className="w-full hidden lg:block xl:translate-y-[-8%]"
              src={heromen}
              alt="heromen"
            />
            <img
              className="w-full lg:hidden translate-y-[8%] sm:translate-y-[-10%]"
              src={heromen2}
              alt="heromen2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
