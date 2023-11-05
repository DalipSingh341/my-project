import React from 'react'

const Total = () => {
  return (
    <div className="tokenbg bg-center bg-cover bg-no-repeat ">
      <div className="xl:w-[1140px] 2xl:[1320px] px-3 sm:px-5 2xl:px-0 mx-auto ">
        <div className="pt-[81px] pb-[43px] lg:py-[96px]">
          <h3 className="font-Jakarta text-[32px] sm:text-[46px] lg:text-2xl font-bold leading-[120%] text-white  text-center mb-6">
            170k Total Starting Supply
          </h3>
          <p className="font-Raleway text-xs font-medoum leading-[183%] text-white  text-center mb-6">
            Initial BONDing Offering (IBO)* Phases
          </p>
          <div className="pb-[70px] md:pb-[100px]   " >
            <div className="pt-[71px] pb-[18px] border-b-[1px] border-[#345CCB]">
              <div className="flex justify-between items-center">
                <p className="font-Raleway font-normal text-xm sm:text-md leading-[183%] text-white uppercase proportional-nums lining-nums">
                  Round 1
                </p>
                <p className="font-Raleway font-medium text-xs sm:text-[20px] leading-[183%] text-white capitalize proportional-nums lining-nums">
                  10,000 EEFI Bonds
                </p>
                <p className="font-Raleway font-normal leading-[183%] text-white text-[18px] sm:text-[36px] proportional-nums lining-nums">
                  <span className="text-xm sm:text-md">@ </span>$12
                </p>
              </div>
            </div>
            <p className="font-Jakarta font-normal text-[12px] sm:text-xs leading-[183%] text-white  text-end proportional-nums lining-nums pt-[10px]">
              Vested (locked) for 1 Year
            </p>
            <div className="pt-[45px] sm:pt-[36px] md:pt-[71px] pb-[18px] border-b-[1px] border-[#345CCB] ">
              <div className="flex justify-between items-center">
                <p className="font-Raleway font-normal text-xm sm:text-md leading-[183%] text-white uppercase proportional-nums lining-nums">
                  Round 2
                </p>
                <p className="font-Raleway font-medium text-xs sm:text-[20px] leading-[183%] text-white capitalize proportional-nums lining-nums">
                  12,777 EEFI Bonds
                </p>
                <p className="font-Raleway font-normal leading-[183%] text-white text-[18px] sm:text-[36px] proportional-nums lining-nums">
                  <span className="text-xm sm:text-md">@ </span>$18
                </p>
              </div>
            </div>
            <p className="font-Jakarta font-normal text-[12px] sm:text-xs leading-[183%] text-white  text-end proportional-nums lining-nums pt-[10px]">
              Vested (locked) for six months
            </p>
            <div className="pt-[45px] sm:pt-[36px] md:pt-[71px] pb-[18px] border-b-[1px] border-[#345CCB] ">
              <div className="flex justify-between items-center">
                <p className="font-Raleway font-normal text-xm sm:text-md leading-[183%] text-white uppercase proportional-nums lining-nums">
                  Round 3
                </p>
                <p className="font-Raleway font-medium text-xs sm:text-[20px] leading-[183%] text-white capitalize proportional-nums lining-nums">
                  25,000 EEFI Bonds
                </p>
                <p className="font-Raleway font-normal leading-[183%] text-white text-[18px] sm:text-[36px] proportional-nums lining-nums">
                  <span className="text-xm sm:text-md">@ </span>$26
                </p>
              </div>
            </div>
            <p className="font-Jakarta font-normal text-[12px] sm:text-xs leading-[183%] text-white  text-end proportional-nums lining-nums pt-[10px]">
              No vesting or lock up periods. Available at launch.
            </p>
          </div>
          <div>
            <p className="font-Raleway text-[18px] sm:text-[20px] font-normal leading-[183%] text-center  text-white  proportional-nums lining-nums mb-[21px] sm:mb-[10px]">
              <span className="underline">(47,777 or around </span>
              <span className="text-[36px] underline px-3">28% </span>
              <span className="underline">
                {" "}
                of total starting supply is up for IBO)
              </span>
            </p>
            <p className="font-Raleway text-xm text-center text-white opacity-80 mx-auto font-normal leading-[183%] max-w-[521px]">
              Individuals who hold $EEFI will also receive an airdrop of the
              protocol's governance token $EFT{" "}
              <span className="text-xxs">...learn more</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Total
