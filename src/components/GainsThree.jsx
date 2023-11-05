import React from 'react'
import gainsfull from "../assets/images/webp/gainsfullbg.webp";
import gainscloud from "../assets/images/webp/gainscloud.webp";


const GainsThree = () => {
  return (
    <div className="bg-black">
      <h2 className="font-Jakarta text-[28px] sm:text-[40px] md:text-2xl text-center font-semibold  sm:font-extrabold leading-[120%] uppercase text-white pt-[27px] pb-[31px]  z-[2] relative">
        <span className="capitalize"> Amplify</span>{" "}
        <span className="lowercase">and</span> stretch{" "}
        <span className="block sm:inline-block">gains</span>
      </h2>
      <div className="bg_gains2 flex flex-col justify-center">
        {/* <img
          className="absolute bottom-[-8%] md:bottom-[-18%] w-full"
          src={gainscloud}
          alt="gainscloud"
        /> */}

        <div className='py-[100px] sm:py-[300px] lg:pt-[330px] lg:pb-[409px] 2xl:pb-[600px]'>
          <p className=" font-Raleway text-xxs sm:text-xm font-normal leading-[160%] text-white max-w-[319px] sm:max-w-[554px] mx-auto text-center z-[2] relative">
            We take a different balanced approach to finding and creating yield
            opportunities in the everchanging crypto market. Our yield
            strategies help users stay protected and hedged during bear markets
            and amplify yield during bull markets without resorting to leverage
            or other dangerous techniques.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GainsThree
