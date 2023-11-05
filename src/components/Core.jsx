import React from "react";
import Slider from "react-slick";
import corecard from "../assets/images/webp/corecard.webp";
import ampl from "../assets/images/webp/ampl.webp";
import { Corelogo, Token } from "./Icons";
import corelogo from "../assets/images/webp/corelogo.webp";
import { Tilt } from "react-tilt";
const Core = () => {
  // const defaultOptions = {
  //   reverse: false, // reverse the tilt direction
  //   max: 35, // max tilt rotation (degrees)
  //   perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  //   scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  //   speed: 2000, // Speed of the enter/exit transition
  //   transition: true, // Set a transition on enter/exit.
  //   axis: null, // What axis should be disabled. Can be X or Y.
  //   reset: true, // If the tilt effect has to be reset on exit.
  //   easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  // };
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-core">
      <div className="xl:w-[1140px] 2xl:w-[1320px] px-3 sm:px-5 2xl:px-0 mx-auto">
        <div className=" lg:py-[213px] py-[50px] md:py-[100px] lg:pb-[99px]">
          <h3 className="font-Machine text-xl text-white text-center font-bold leading-[120%] capitalize mb-5 sm:mb-6">
            Core Strategies
          </h3>
          <p className="font-Raleway font-normal leading-[160%] text-center mx-auto text-white max-w-[331px] sm:max-w-[819px] opacity-80 mb-4 sm3mb-5 md:mb-11">
            Our initial strategies use powerful burgeoning trends like Real
            Yield, Rebase, and others to generate cutting-edged yield
            innovations. These yield strategies stretch beyond the drought in
            stable coins and set the value for our native protocol token $EEFI.
            Check them out!'
          </p>

          {/* <Tilt options={defaultOptions} style={{ height: 500, width: 334 }}>
            <div className="corecard rounded-[10px] border-[0.9   1px] border-solid border-[#1643c3] pt-4 sm:pt-[17px] sm:px-[19px] sm:pb-[31px]   px-4 pb-7 max-w-[304px] sm:max-w-[335px]">
              <span className="py-[10px] px-[11px] bg-[#2b45ad] rounded-[7px] font-Raleway text-xm font-normal leading-[160%] text-white inline-block">
                Innovation
              </span>
              <div className="w-[194px] h-[194px] sm:w-[213px] sm:h-[213px] flex items-center justify-center mx-auto rounded-[50%] bg-[#1440b1] my-[34px] ">
                <Corelogo />
              </div>
              <div className="flex items-center justify-between pb-[14px]">
                <p className="font-Raleway text-xm sm:text-xs font-normal leading-[155%] text-white">
                  Projected Yield (APY)
                </p>
                <p className="font-inter text-xm sm:text-xs font-bold text-[#4878FF] leading-[155%]">
                  7,777,777%
                </p>
              </div>
              <div className="flex items-center justify-between pb-[9px]">
                <p className="font-Raleway text-xm sm:text-xs font-normal leading-[155%] text-white opacity-50">
                  Current Deposits
                </p>
                <p className="font-inter text-xm sm:text-xs font-medium text-white leading-[155%]">
                  0.00 AMPL
                </p>
              </div>
              <div className="w-full h-[2.73px] bg-white opacity-20 rounded-2xl"></div>
              <div className="flex items-center justify-between pt-[13px]">
                <p className="font-Raleway text-xm sm:text-xs font-normal leading-[155%] text-white opacity-50">
                  Max Capacity
                </p>
                <p className="font-inter text-xm sm:text-xs font-medium text-white leading-[155%]">
                  0.00 AMPL
                </p>
              </div>
            </div>
          </Tilt> */}

          <Slider className=" mx-auto" {...settings}>
            <div>
              <div className="flex flex-col md:flex-row  items-center justify-center relative">
                <div className="md:px-[57px] my-4 md:my-0 ">
                  <img
                    className="z-[2] relative w-full "
                    src={corecard}
                    alt="corecard"
                  />
                  <img
                    className="absolute w-[70%] md:w-[50%] max-w-[449px] top-[30%] left-[15%] md:left-[3%] lg:left-[7%] 2xl:left-[15%] z-[1] opacity-50"
                    src={ampl}
                    alt="ampl"
                  />
                </div>
                <div className="sm:pl-[77px] my-4 md:my-0 ">
                  <p className="font-Machine text-[38px] font-normal leading-[120%] capitalize text-white text-start mb-3 lg:mb-[35px]">
                    Elastic Vault
                  </p>
                  <p className="font-Raleway flex items-center text-lg font-medium leading-[160%] capitalize text-white text-start mb-3 lg:mb-[22px]">
                    Deposit Token
                    <span className="ms-[5px] inline-block">
                      <Token />
                    </span>
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%] capitalize text-white text-start mb-3 lg:mb-5 opacity-80">
                    {" "}
                    $AMPL
                  </p>
                  <p className="font-Raleway text-lg font-medium leading-[160%] capitalize text-white text-start mb-3 lg:mb-[22px]">
                    Flagship Hedging Strategy
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start mb-5 max-w-[442px] opacity-80">
                    This one-of-a-kind strategy combines the benefits of
                    Rebase’s force multiplier effect and Real Yield’s
                    sustainability.
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80">
                    Helps users to protect against downtrends and amplify yield
                    rewards during market up trends.{" "}
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%] md:hidden text-white text-start max-w-[442px] opacity-80 pt-5">
                    Those who choose to hedge with the Vault or participate in
                    its economic cycles are the ones greatly rewarded when
                    markets return to optimal conditions
                  </p>
                  <ul className="list-decimal hidden sm:block  md:hidden pt-5">
                    <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80">
                      Initially utilizes both OG rebase tokens $AMPL and $OHM. 
                      <ul className="list-disc">
                        <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-5">
                          Deposit $AMPL and receive $EEFI and $OHM rewards;
                        </li>
                        <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-3">
                          Vault activities are determined by $AMPL’s rebase
                          status; when AMPL supply is expanding, $EEFI is
                          automatically purchased and burned daily; when AMPL
                          supply is stable or contracting, $EEFI is minted
                          (learn more).
                        </li>
                      </ul>
                    </li>
                    <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-5">
                      Potentially any token can be rebase-enabled and added to
                      this strategy (subject to governance)
                    </li>
                    <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-5">
                      Sub vaults can be created to add extra “yield” utility
                      dimensions to $EEFI (and take advantage of sub-trends and
                      viral movements within crypto)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row  items-center justify-center relative">
                <div className="md:px-[57px] my-4 md:my-0">
                  <img
                    className="z-[2] relative w-full"
                    src={corecard}
                    alt="corecard"
                  />
                  <img
                    className="absolute w-[70%] md:w-[50%] max-w-[449px] top-[30%] left-[15%] md:left-[3%] lg:left-[7%] 2xl:left-[15%] z-[1]  opacity-50"
                    src={ampl}
                    alt="ampl"
                  />
                </div>
                <div className="sm:pl-[77px] my-4 md:my-0">
                  <p className="font-Machine text-[38px] font-normal leading-[120%] capitalize text-white text-start mb-3 lg:mb-[35px]">
                    Elastic Vault
                  </p>
                  <p className="font-Raleway flex items-center text-lg font-medium leading-[160%] capitalize text-white text-start mb-3 lg:mb-[22px]">
                    Deposit Token
                    <span className="ms-[5px] inline-block">
                      <Token />
                    </span>
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%] capitalize text-white text-start mb-3 lg:mb-5 opacity-80">
                    {" "}
                    $AMPL
                  </p>
                  <p className="font-Raleway text-lg font-medium leading-[160%] capitalize text-white text-start mb-3 lg:mb-[22px]">
                    Flagship Hedging Strategy
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start mb-5 max-w-[442px] opacity-80">
                    This one-of-a-kind strategy combines the benefits of
                    Rebase’s force multiplier effect and Real Yield’s
                    sustainability.
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80">
                    Helps users to protect against downtrends and amplify yield
                    rewards during market up trends.{" "}
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%] md:hidden text-white text-start max-w-[442px] opacity-80 pt-5">
                    Those who choose to hedge with the Vault or participate in
                    its economic cycles are the ones greatly rewarded when
                    markets return to optimal conditions
                  </p>
                  <ul className="list-decimal hidden sm:block  md:hidden pt-5">
                    <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80">
                      Initially utilizes both OG rebase tokens $AMPL and $OHM. 
                      <ul className="list-disc">
                        <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-5">
                          Deposit $AMPL and receive $EEFI and $OHM rewards;
                        </li>
                        <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-3">
                          Vault activities are determined by $AMPL’s rebase
                          status; when AMPL supply is expanding, $EEFI is
                          automatically purchased and burned daily; when AMPL
                          supply is stable or contracting, $EEFI is minted
                          (learn more).
                        </li>
                      </ul>
                    </li>
                    <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-5">
                      Potentially any token can be rebase-enabled and added to
                      this strategy (subject to governance)
                    </li>
                    <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-5">
                      Sub vaults can be created to add extra “yield” utility
                      dimensions to $EEFI (and take advantage of sub-trends and
                      viral movements within crypto)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row  items-center justify-center relative">
                <div className="md:px-[57px] my-4 md:my-0">
                  <img
                    className="z-[2] relative w-full"
                    src={corecard}
                    alt="corecard"
                  />
                  <img
                    className="absolute w-[70%] md:w-[50%] max-w-[449px] top-[30%] left-[15%] md:left-[3%] lg:left-[7%] 2xl:left-[15%] z-[1]  opacity-50"
                    src={ampl}
                    alt="ampl"
                  />
                </div>
                <div className="sm:pl-[77px] my-4 md:my-0">
                  <p className="font-Machine text-[38px] font-normal leading-[120%] capitalize text-white text-start mb-3 lg:mb-[35px]">
                    Elastic Vault
                  </p>
                  <p className="font-Raleway flex items-center text-lg font-medium leading-[160%] capitalize text-white text-start mb-3 lg:mb-[22px]">
                    Deposit Token
                    <span className="ms-[5px] inline-block">
                      <Token />
                    </span>
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%] capitalize text-white text-start mb-3 lg:mb-5 opacity-80">
                    {" "}
                    $AMPL
                  </p>
                  <p className="font-Raleway text-lg font-medium leading-[160%] capitalize text-white text-start mb-3 lg:mb-[22px]">
                    Flagship Hedging Strategy
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start mb-5 max-w-[442px] opacity-80">
                    This one-of-a-kind strategy combines the benefits of
                    Rebase’s force multiplier effect and Real Yield’s
                    sustainability.
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80">
                    Helps users to protect against downtrends and amplify yield
                    rewards during market up trends.{" "}
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%] md:hidden text-white text-start max-w-[442px] opacity-80 pt-5">
                    Those who choose to hedge with the Vault or participate in
                    its economic cycles are the ones greatly rewarded when
                    markets return to optimal conditions
                  </p>
                  <ul className="list-decimal hidden sm:block  md:hidden pt-5">
                    <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80">
                      Initially utilizes both OG rebase tokens $AMPL and $OHM. 
                      <ul className="list-disc">
                        <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-5">
                          Deposit $AMPL and receive $EEFI and $OHM rewards;
                        </li>
                        <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-3">
                          Vault activities are determined by $AMPL’s rebase
                          status; when AMPL supply is expanding, $EEFI is
                          automatically purchased and burned daily; when AMPL
                          supply is stable or contracting, $EEFI is minted
                          (learn more).
                        </li>
                      </ul>
                    </li>
                    <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-5">
                      Potentially any token can be rebase-enabled and added to
                      this strategy (subject to governance)
                    </li>
                    <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-5">
                      Sub vaults can be created to add extra “yield” utility
                      dimensions to $EEFI (and take advantage of sub-trends and
                      viral movements within crypto)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row  items-center justify-center relative">
                <div className="md:px-[57px] my-4 md:my-0">
                  <img
                    className="z-[2] relative w-full"
                    src={corecard}
                    alt="corecard"
                  />
                  <img
                    className="absolute w-[70%] md:w-[50%] max-w-[449px] top-[30%] left-[15%] md:left-[3%] lg:left-[7%] 2xl:left-[15%] z-[1]  opacity-50"
                    src={ampl}
                    alt="ampl"
                  />
                </div>
                <div className="sm:pl-[77px] my-4 md:my-0">
                  <p className="font-Machine text-[38px] font-normal leading-[120%] capitalize text-white text-start mb-3 lg:mb-[35px]">
                    Elastic Vault
                  </p>
                  <p className="font-Raleway flex items-center text-lg font-medium leading-[160%] capitalize text-white text-start mb-3 lg:mb-[22px]">
                    Deposit Token
                    <span className="ms-[5px] inline-block">
                      <Token />
                    </span>
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%] capitalize text-white text-start mb-3 lg:mb-5 opacity-80">
                    {" "}
                    $AMPL
                  </p>
                  <p className="font-Raleway text-lg font-medium leading-[160%] capitalize text-white text-start mb-3 lg:mb-[22px]">
                    Flagship Hedging Strategy
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start mb-5 max-w-[442px] opacity-80">
                    This one-of-a-kind strategy combines the benefits of
                    Rebase’s force multiplier effect and Real Yield’s
                    sustainability.
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80">
                    Helps users to protect against downtrends and amplify yield
                    rewards during market up trends.{" "}
                  </p>
                  <p className="font-Raleway text-xs font-normal leading-[160%] md:hidden text-white text-start max-w-[442px] opacity-80 pt-5">
                    Those who choose to hedge with the Vault or participate in
                    its economic cycles are the ones greatly rewarded when
                    markets return to optimal conditions
                  </p>
                  <ul className="list-decimal hidden sm:block  md:hidden pt-5">
                    <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80">
                      Initially utilizes both OG rebase tokens $AMPL and $OHM. 
                      <ul className="list-disc">
                        <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-5">
                          Deposit $AMPL and receive $EEFI and $OHM rewards;
                        </li>
                        <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-3">
                          Vault activities are determined by $AMPL’s rebase
                          status; when AMPL supply is expanding, $EEFI is
                          automatically purchased and burned daily; when AMPL
                          supply is stable or contracting, $EEFI is minted
                          (learn more).
                        </li>
                      </ul>
                    </li>
                    <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-5">
                      Potentially any token can be rebase-enabled and added to
                      this strategy (subject to governance)
                    </li>
                    <li className="font-Raleway text-xs font-normal leading-[160%]  text-white text-start max-w-[442px] opacity-80 pt-5">
                      Sub vaults can be created to add extra “yield” utility
                      dimensions to $EEFI (and take advantage of sub-trends and
                      viral movements within crypto)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Core;
