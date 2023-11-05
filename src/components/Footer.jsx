import React from "react";
import footerlogo from "../assets/images/webp/footerlogo.webp";
import {
  Au,
  Cat,
  Discord2,
  FooterCopy,
  FooterCopy2,
  M,
  Mail,
  Twitter2,
  Youtube,
} from "./Icons";
const Footer = () => {
  return (
    <>
      <div className="xl:w-[1140px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 2xl:px-0 ">
        <div className="pt-[66px] pb-12 sm:py-[71px]  ">
          <img className="mx-auto " src={footerlogo} alt="footerlogo" />
          <p className="font-Raleway font-normal text-xs text-light-blue text-center pt-2 md:pt-5 pb-5 leading-normal">
            Join Our Community
          </p>
          <div className="flex gap-[14px] md:gap-[25px]  flex-wrap items-center justify-center pb-[23px] sm:pb-[20px]">
            <p className="font-Raleway font-normal text-xs text-black leading-normal cursor-pointer duration-500">
              About
            </p>
            <p className="font-Raleway font-normal text-xs text-black leading-normal opacity-70 hover:opacity-100 cursor-pointer duration-500">
              IBO Event
            </p>
            <p className="font-Raleway font-normal text-xs text-black leading-normal opacity-70 hover:opacity-100 cursor-pointer duration-500">
              EEFI Tokenomics
            </p>
            <p className="font-Raleway font-normal text-xs text-black leading-normal opacity-70 hover:opacity-100 cursor-pointer duration-500">
              Team
            </p>
            <p className="font-Raleway font-normal text-xs text-black leading-normal opacity-70 hover:opacity-100 cursor-pointer duration-500">
              Roadmap
            </p>
            <p className="font-Raleway font-normal text-xs text-black leading-normal opacity-70 hover:opacity-100 cursor-pointer duration-500">
              Partners
            </p>
            <p className="font-Raleway font-normal text-xs text-black leading-normal opacity-70 hover:opacity-100 cursor-pointer duration-500">
              Contact Us
            </p>
          </div>
          <div className="flex flex-wrap px-6 items-center gap-5 justify-center">
            <a
              href="https://www.youtube.com/"
              target="blank"
              className="w-8 h-8 rounded-[50%] border-[1px] border-light-blue flex items-center justify-center hover:translate-y-[-10px] duration-500"
            >
              <Youtube />
            </a>
            <a
              href="https://www.cat.com/"
              target="blank"
              className="w-8 h-8 rounded-[50%] border-[1px] border-light-blue flex items-center justify-center hover:translate-y-[-10px] duration-500"
            >
              <Cat />
            </a>
            <a
              href="https://www.twitter.com/"
              target="blank"
              className="w-8 h-8 rounded-[50%] border-[1px] border-light-blue flex items-center justify-center hover:translate-y-[-10px] duration-500"
            >
              <Twitter2 />
            </a>
            <a
              href="https://www.au.com/"
              target="blank"
              className="w-8 h-8 rounded-[50%] border-[1px] border-light-blue flex items-center justify-center hover:translate-y-[-10px] duration-500"
            >
              <Au />
            </a>
            <a
              href="https://www.Discord.com/"
              target="blank"
              className="w-8 h-8 rounded-[50%] border-[1px] border-light-blue flex items-center justify-center hover:translate-y-[-10px] duration-500"
            >
              <Discord2 />
            </a>
            <a
              href="https://www.m.com/"
              target="blank"
              className="w-8 h-8 rounded-[50%] border-[1px] border-light-blue flex items-center justify-center hover:translate-y-[-10px] duration-500"
            >
              <M />
            </a>
            <a
              href="https://www.mail.com/"
              target="blank"
              className="w-8 h-8 rounded-[50%] border-[1px] border-light-blue flex items-center justify-center hover:translate-y-[-10px] duration-500"
            >
              <Mail />
            </a>
            <a
              href="https://www.copy.com/"
              target="blank"
              className="w-8 h-8 rounded-[50%] border-[1px] border-light-blue flex items-center justify-center hover:translate-y-[-10px] duration-500"
            >
              <FooterCopy />
            </a>
            <a
              href="https://www.copy2.com/"
              target="blank"
              className="w-8 h-8 rounded-[50%] border-[1px] border-light-blue flex items-center justify-center hover:translate-y-[-10px] duration-500"
            >
              <FooterCopy2 />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] py-[31px] lg:py-[13.5px]">
        <div className="xl:w-[1140px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 2xl:px-0 flex items-center justify-between">
          <p className="font-Raleway text-black text-xm font-normal opacity-70 leading-normal">@Copyright 2023</p>
          <p className="font-Raleway text-black text-xm font-normal opacity-70 leading-normal">Privacy policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
