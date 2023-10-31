import React from 'react'
import bull from "../assets/images/png/bullone.png"
import bear from "../assets/images/png/bearone.png"
const Gains = () => {
  return (
    <div className="bg-black relative">
      <img className='absolute top-[12%] left-[10%]' src={bull} alt="bull" />
      <img className='absolute top-[18%] right-[10%]' src={bear} alt="bull" />
      <div className="xl:w-[1140px] 2xl:w-[1320px]  mx-auto px-3 sm:px-5 2xl:px-0">
        <h2 className="font-Jakarta text-2xl text-center font-extrabold leading-[120%] uppercase text-white pt-[27px] pb-[31px] z-[2] relative">
          <span className="capitalize"> Amplify</span>{" "}
          <span className="lowercase">and</span> stretch gains
        </h2>
      </div>
      <div className="bg_gains pt-[346px] pb-[257px] ">
        <p className="font-Raleway text-xm font-normal leading-[160%] text-white max-w-[554px] mx-auto text-center z-[2] relative">
          We take a different balanced approach to finding and creating yield
          opportunities in the everchanging crypto market. Our yield strategies
          help users stay protected and hedged during bear markets and amplify
          yield during bull markets without resorting to leverage or other
          dangerous techniques.
        </p>
      </div>
    </div>
  );
}

export default Gains
