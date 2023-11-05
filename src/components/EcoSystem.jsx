import React from 'react'
import eco1 from "../assets/images/webp/eco1.webp"
import eco2 from "../assets/images/webp/eco2.webp"
import eco3 from "../assets/images/webp/eco3.webp"
import eco4 from "../assets/images/webp/eco4.webp"
import eco5 from "../assets/images/webp/eco5.webp"
import eco6 from "../assets/images/webp/eco6.webp"
import { Link } from 'react-router-dom'

const EcoSystem = () => {
  return (
    <div className="pt-[105px] md:pt-[220px] pb-[140px] md:pb-[124px]">
      <div className="xl:w-[1140px] 2xl:w-[1320px] px-3 sm:px-5 2xl:px-0 mx-auto">
        <h5 className="font-Machine  text-[28px] sm:text-xl text-light-blue leading-[120%] capitalize font-bold  text-center mb-[52px] sm:mb-[63px]">
          Ecosystem Partners
        </h5>
        <div className="flex flex-wrap items-center justify-center md:flex-nowrap   gap-[25px] md:justify-between  mx-auto">
          <div className="bluebox  h-[145px] max-w-[326px] xl:max-w-[100%] xl:min-w-[326px] w-[100%] flex items-center justify-center rounded-[12px] px-[44px] bg-light-blue ">
            <img src={eco1} alt="eco1" />
          </div>
          <div className="bluebox  h-[145px] max-w-[326px] xl:max-w-[100%] xl:min-w-[326px] w-[100%] flex items-center justify-center rounded-[12px] px-[44px] bg-light-blue ">
            <img src={eco2} alt="eco2" />
          </div>
          <div className="bluebox  h-[145px] max-w-[326px] xl:max-w-[100%] xl:min-w-[326px] w-[100%] flex items-center justify-center rounded-[12px] px-[44px] bg-light-blue ">
            <img src={eco3} alt="eco3" />
          </div>
          <div className="bluebox max-w-[326px] md:hidden  xl:max-w-[100%] xl:min-w-[326px] w-[100%] h-[145px] flex items-center justify-center rounded-[12px] px-[44px] bg-light-blue ">
            <img src={eco4} alt="eco4" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center md:flex-nowrap md:justify-between gap-[25px] mx-auto pt-[42px]">
          <div className="bluebox max-w-[326px]  xl:max-w-[100%] xl:min-w-[326px] w-[100%] h-[145px] hidden md:flex items-center justify-center rounded-[12px] px-[44px] bg-light-blue ">
            <img src={eco4} alt="eco4" />
          </div>
          <div className="bluebox max-w-[326px]  xl:max-w-[100%] xl:min-w-[326px] w-[100%] h-[145px] flex items-center justify-center rounded-[12px] px-[44px] bg-light-blue ">
            <img src={eco5} alt="eco5" />
          </div>
          <div className="bluebox max-w-[326px] xl:max-w-[100%] xl:min-w-[326px] w-[100%] h-[145px] flex items-center justify-center rounded-[12px] px-[44px] bg-light-blue ">
            <img src={eco6} alt="eco6" />
          </div>
        </div>
        <div className="text-center">
          <Link className="font-Raleway font-semibold text-light-blue text-xs py-[25px] px-[31px] border-[1px] hover:text-white hover:bg-light-blue duration-5f00 border-light-blue rounded-[8px] mt-[61px] sm:mt-[71px]  inline-block">
            More To Be Announced
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EcoSystem
