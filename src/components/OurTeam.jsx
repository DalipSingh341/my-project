import React from "react";
import team1 from "../assets/images/webp/ourteam1.webp";
import team2 from "../assets/images/webp/ourteam2.webp";
import team3 from "../assets/images/webp/ourteam3.webp";
import twitterafter from "../assets/images/webp/twitterafter.webp";
import { Link } from "react-router-dom";
import { Discord, Linkdin, Twitter } from "./Icons";

const OurTeam = () => {
    return (
      <div>
        <div className="teambg bg-center bg-cover bg-no-repeat pt-[56px] sm:pt-[87px] lg:pt-[132px] pb-[142px] lg:pb-0  bg-black relative">
          <div className="xl:w-[1140px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 2xl:px-0 ">
            <h4 className="font-Machine text-xl leading-[120%] text-center font-bold text-white capitalize ">
              our Team
            </h4>
            <div className="hidden lg:flex flex-col lg:flex-row gap-5 xl:gap-[50px] items-center justify-center absolute lg:static top-[70%] left-[35%] lg:translate-y-[37%]">
              <div className="teamcard max-w-[310px] p-3 rounded-[10px] bg-white hover:translate-y-[-10px] duration-300">
                <img src={team1} alt="team1" />
                <p className="font-Raleway text-2lg font-medium leading-[120%] capitalize text-black text-center mt-[19px]">
                  Davoice
                </p>
                <p className="font-Raleway text-xs font-normal leading-[120%] capitalize text-black text-center mt-[11px]">
                  co-founder
                </p>

                <div className="flex justify-center gap-[15px] pt-5">
                  <Link className="inline-block">
                    <Twitter />
                  </Link>
                  <div>
                    <img src={twitterafter} alt="twitterafter" />
                  </div>
                  <Link className="inline-block">
                    <Discord />
                  </Link>
                </div>
              </div>
              <div className="teamcard max-w-[310px] p-3 rounded-[10px] bg-white hover:translate-y-[-10px] duration-300">
                <img src={team2} alt="team2" />
                <p className="font-Raleway text-2lg font-medium leading-[120%] capitalize text-black text-center mt-[19px]">
                  Solomon Adekale
                </p>
                <p className="font-Raleway text-xs font-normal leading-[120%] capitalize text-black text-center mt-[11px]">
                  co-founder
                </p>

                <div className="flex justify-center gap-[15px] pt-5">
                  <Link className="inline-block">
                    <Twitter />
                  </Link>
                  <div>
                    <img src={twitterafter} alt="twitterafter" />
                  </div>
                  <Link className="inline-block">
                    <Discord />
                  </Link>
                  <div>
                    <img src={twitterafter} alt="twitterafter" />
                  </div>
                  <Link className="inline-block">
                    <Linkdin />
                  </Link>
                </div>
              </div>
              <div className="teamcard max-w-[310px] p-3 rounded-[10px] bg-white hover:translate-y-[-10px] duration-300">
                <img src={team3} alt="team3" />
                <p className="font-Raleway text-2lg font-medium leading-[120%] capitalize text-black text-center mt-[19px]">
                  Anton
                </p>
                <p className="font-Raleway text-xs font-normal leading-[120%] capitalize text-black text-center mt-[11px]">
                  Co-Founder | Lead Developer
                </p>

                <div className="flex justify-center gap-[15px] pt-5">
                  <Link className="inline-block">
                    <Twitter />
                  </Link>
                  <div>
                    <img src={twitterafter} alt="twitterafter" />
                  </div>
                  <Link className="inline-block">
                    <Discord />
                  </Link>
                  <div>
                    <img src={twitterafter} alt="twitterafter" />
                  </div>
                  <Link className="inline-block">
                    <Linkdin />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex flex-col lg:flex-row gap-5 xl:gap-[50px] items-center justify-center  translate-y-[-7%]">
            <div className="teamcard max-w-[310px] p-3 rounded-[10px] bg-white ">
              <img src={team1} alt="team1" />
              <p className="font-Raleway text-2lg font-medium leading-[120%] capitalize text-black text-center mt-[19px]">
                Davoice
              </p>
              <p className="font-Raleway text-xs font-normal leading-[120%] capitalize text-black text-center mt-[11px]">
                co-founder
              </p>

              <div className="flex justify-center gap-[15px] pt-5">
                <Link className="inline-block">
                  <Twitter />
                </Link>
                <div>
                  <img src={twitterafter} alt="twitterafter" />
                </div>
                <Link className="inline-block">
                  <Discord />
                </Link>
              </div>
            </div>
            <div className="teamcard max-w-[310px] p-3 rounded-[10px] bg-white ">
              <img src={team2} alt="team2" />
              <p className="font-Raleway text-2lg font-medium leading-[120%] capitalize text-black text-center mt-[19px]">
                Solomon Adekale
              </p>
              <p className="font-Raleway text-xs font-normal leading-[120%] capitalize text-black text-center mt-[11px]">
                co-founder
              </p>

              <div className="flex justify-center gap-[15px] pt-5">
                <Link className="inline-block">
                  <Twitter />
                </Link>
                <div>
                  <img src={twitterafter} alt="twitterafter" />
                </div>
                <Link className="inline-block">
                  <Discord />
                </Link>
                <div>
                  <img src={twitterafter} alt="twitterafter" />
                </div>
                <Link className="inline-block">
                  <Linkdin />
                </Link>
              </div>
            </div>
            <div className="teamcard max-w-[310px] p-3 rounded-[10px] bg-white ">
              <img src={team3} alt="team3" />
              <p className="font-Raleway text-2lg font-medium leading-[120%] capitalize text-black text-center mt-[19px]">
                Anton
              </p>
              <p className="font-Raleway text-xs font-normal leading-[120%] capitalize text-black text-center mt-[11px]">
                Co-Founder | Lead Developer 
              </p>

              <div className="flex justify-center gap-[15px] pt-5">
                <Link className="inline-block">
                  <Twitter />
                </Link>
                <div>
                  <img src={twitterafter} alt="twitterafter" />
                </div>
                <Link className="inline-block">
                  <Discord />
                </Link>
                <div>
                  <img src={twitterafter} alt="twitterafter" />
                </div>
                <Link className="inline-block">
                  <Linkdin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurTeam;
