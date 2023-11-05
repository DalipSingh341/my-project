import React from "react";
import { Link } from "react-router-dom";
import { Token1, Token2, Token3, Token4, Token5 } from "./Icons";
import tokenbgblue from  "../assets/images/webp/tokenbluebg.webp"
import tokensmallbg from "../assets/images/webp/tokensmallbluebg.webp";
import tokenbg1 from "../assets/images/webp/tokenomicsbg.webp";
import tokenbg2 from "../assets/images/webp/tokenomicsbg2.webp";

const Tokenomics = () => {
  return (
    <div className=" relative ">
      <img
        className="absolute hidden lg:block w-[50%] h-full right-0"
        src={tokenbgblue}
        alt="tokenbgblue"
      />
      <img
        className="absolute w-full lg:w-[50%] top-[20%] lg:top-[55%] 2xl:top-[45%] left-0"
        src={tokenbg1}
        alt="tokenbg1"
      />
      <img
        className="absolute w-100% top-[15%] right-0"
        src={tokenbg2}
        alt="tokenbg2"
      />

      <div className="xl:w-[1140px] 2xl:[1320px] mx-auto px-3 md:px-5 2xl:px-0 z-[2] relative">
        <div className="grid lg:grid-cols-2 py-[50px] md:py-[100px] xl:pt-[170px]  xl:pb-[221px]">
          <div className="py-5 lg:py-0">
            <h2 className="font-Machine text-[28px] sm:text-[40px] md:text-xl font-bold text-black leading-[120%] capitalize mb-5">
              EEFI Tokenomics
            </h2>
            <p className="font-Raleway text-xs font-normal text-black leading-[160%] mb-[35px] lg:max-w-[448px]">
              EEFI is the special rewards token of the protocol that is minted
              and distributed in a decentralized fashion. It produces amplified
              yield during uptrends and protects from downside action during
              downtrends.
            </p>
            <Link className="font-Raleway text-xs font-medium text-white inline-block py-[17px] px-4 view_btn mb-[50px]">
              View Contract Address
            </Link>
            <p className="font-Machine text-2lg font-bold text-black leading-[120%] capitalize mb-[30px]">
              IBO TOKENOMICS
            </p>
            <div className="mb-[25px]">
              <p className="font-Machine text-md font-bold text-black leading-[134%] capitalize mb-[18px]">
                IBO Round 1 Price
              </p>
              <p className="font-Raleway text-xs font-semibold leading-[134%] text-[#1643C3]">
                1 EEFI = $12
              </p>
            </div>
            <div>
              <p className="font-Machine text-md font-bold text-black leading-[134%] capitalize mb-[18px]">
                IBO Round 2 Price
              </p>
              <p className="font-Raleway text-xs font-semibold leading-[134%] text-[#1643C3]">
                1 EEFI = $18
              </p>
            </div>
            <div className="mt-[25px]">
              <p className="font-Machine text-md font-bold text-black leading-[134%] capitalize mb-[18px]">
                IBO Round 3 Price
              </p>
              <p className="font-Raleway text-xs font-semibold leading-[134%] text-[#1643C3]">
                1 EEFI = $26
              </p>
            </div>
            <div className="mt-[25px]">
              <p className="font-Raleway text-md font-bold leading-[134%] text-black mb-[18px]">
                TOTAL SUPPLY
              </p>
              <p className="font-Raleway text-xs font-semibold leading-[134%] text-black">
                170,000
              </p>
            </div>
          </div>

          <div className="hidden  lg:ps-[40px] xl:ps-[69px] lg:flex flex-col justify-between py-5 lg:py-0 relative tokenbluesmall">
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <div className="w-[80px] h-[80px] bg-[#10318C] rounded-[50%] border-[5px] border-white flex items-center justify-center">
                <Token1 />
              </div>
              <div>
                <p className="font-Machine text-2lg font-bold text-white text-center sm:text-start leading-[120%] capitalize mb-[4px]">
                  Decentralized Yield
                </p>
                <p className="font-Raleway text-xs font-normal text-white leading-[183%] opacity-80 max-w-[415px]">
                  Protocol’s native utility | rewards token
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 items-center mt-[31px]">
              <div className="w-[80px] h-[80px] bg-[#10318C] rounded-[50%] border-[5px] border-white flex items-center justify-center">
                <Token2 />
              </div>
              <div>
                <p className="font-Machine text-2lg font-bold text-white text-center sm:text-start leading-[120%] capitalize mb-[4px]">
                  Extra Value
                </p>
                <p className="font-Raleway text-xs font-normal text-white text-center sm:text-start leading-[183%] opacity-80 max-w-[415px]">
                  Can be highly deflationary during market uptrends
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 items-center mt-[31px]">
              <div className="w-[80px] h-[80px] bg-[#10318C] rounded-[50%] border-[5px] border-white flex items-center justify-center">
                <Token3 />
              </div>
              <div>
                <p className="font-Machine text-2lg font-bold text-white text-center sm:text-start leading-[120%] capitalize mb-[4px]">
                  Smart Index
                </p>
                <p className="font-Raleway text-xs font-normal text-white text-center sm:text-start leading-[183%] opacity-80 max-w-[415px]">
                  Token can be viewed as an index of all strategy performance on
                  the protocol
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start mt-[31px]">
              <div className="w-[80px] h-[80px] bg-[#10318C] rounded-[50%] border-[5px] border-white flex items-center justify-center">
                <Token4 />
              </div>
              <div>
                <p className="font-Machine text-2lg font-bold text-white text-center sm:text-start leading-[120%] capitalize mb-[4px]">
                  Social Coordination (E,E)
                </p>
                <p className="font-Raleway text-xs font-normal text-white text-center sm:text-start leading-[183%] opacity-80 max-w-[415px]">
                  Promotes hyper social coordination around all strategies on
                  the protocol (E,E) (makes hedging fun and working together
                  produces more benefits to all vault users)
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start mt-[31px] ">
              <div className="w-[80px] h-[80px] bg-[#10318C] rounded-[50%] border-[5px] border-white flex items-center justify-center">
                <Token5 />
              </div>
              <div>
                <p className="font-Machine text-2lg font-bold text-white text-center sm:text-start leading-[120%] capitalize mb-[4px]">
                  Expansive Utility Dimensions
                </p>
                <p className="font-Raleway text-xs font-normal text-white text-center sm:text-start leading-[183%] opacity-80 max-w-[415px]">
                  EEFI’s utility will expand as more strategies are added to the
                  protocol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:ps-[40px] xl:ps-[69px] flex lg:hidden flex-col justify-between py-5  lg:py-0 relative">
        <img
          className="absolute lg:hidden h-full w-full"
          src={tokensmallbg}
          alt="tokensmallbg"
        />
        <div className="flex flex-col sm:flex-row gap-5 items-center mt-[40px] lg:mt-0  z-[2] relative px-5">
          <div className="w-[80px] h-[80px] bg-[#10318C] rounded-[50%] border-[5px] border-white flex items-center justify-center">
            <Token1 />
          </div>
          <div>
            <p className="font-Machine text-2lg font-bold text-white text-center sm:text-start leading-[120%] capitalize mb-[4px]">
              Decentralized Yield
            </p>
            <p className="font-Raleway text-xs font-normal text-white leading-[183%] opacity-80 max-w-[415px]">
              Protocol’s native utility | rewards token
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 items-center mt-[31px] z-[2] relative px-5">
          <div className="w-[80px] h-[80px] bg-[#10318C] rounded-[50%] border-[5px] border-white flex items-center justify-center">
            <Token2 />
          </div>
          <div>
            <p className="font-Machine text-2lg font-bold text-white text-center sm:text-start leading-[120%] capitalize mb-[4px]">
              Extra Value
            </p>
            <p className="font-Raleway text-xs font-normal text-white text-center sm:text-start leading-[183%] opacity-80 max-w-[415px]">
              Can be highly deflationary during market uptrends
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 items-center mt-[31px] z-[2] relative px-5">
          <div className="w-[80px] h-[80px] bg-[#10318C] rounded-[50%] border-[5px] border-white flex items-center justify-center">
            <Token3 />
          </div>
          <div>
            <p className="font-Machine text-2lg font-bold text-white text-center sm:text-start leading-[120%] capitalize mb-[4px]">
              Smart Index
            </p>
            <p className="font-Raleway text-xs font-normal text-white text-center sm:text-start leading-[183%] opacity-80 max-w-[415px]">
              Token can be viewed as an index of all strategy performance on the
              protocol
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start mt-[31px] z-[2] relative px-5">
          <div className="w-[80px] h-[80px] bg-[#10318C] rounded-[50%] border-[5px] border-white flex items-center justify-center">
            <Token4 />
          </div>
          <div>
            <p className="font-Machine text-2lg font-bold text-white text-center sm:text-start leading-[120%] capitalize mb-[4px]">
              Social Coordination (E,E)
            </p>
            <p className="font-Raleway text-xs font-normal text-white text-center sm:text-start leading-[183%] opacity-80 max-w-[415px]">
              Promotes hyper social coordination around all strategies on the
              protocol (E,E) (makes hedging fun and working together produces
              more benefits to all vault users)
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start mt-[31px] z-[2] relative px-5 ">
          <div className="w-[80px] h-[80px] bg-[#10318C] rounded-[50%] border-[5px] border-white flex items-center justify-center">
            <Token5 />
          </div>
          <div>
            <p className="font-Machine text-2lg font-bold text-white text-center sm:text-start leading-[120%] capitalize mb-[4px]">
              Expansive Utility Dimensions
            </p>
            <p className="font-Raleway text-xs font-normal text-white text-center sm:text-start leading-[183%] opacity-80 max-w-[415px]">
              EEFI’s utility will expand as more strategies are added to the
              protocol.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
