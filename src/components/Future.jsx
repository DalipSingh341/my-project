import React from "react";
import futuresmall2 from "../assets/images//webp/futurecard2small.webp";
import futuresmall3 from "../assets/images//svg/futurecard2small3.svg";
import futuresmall4 from "../assets/images//svg/futurecard2small4.svg";
import futuresmall5 from "../assets/images//svg/futurecard2small5.svg";
import futuresmall6 from "../assets/images//svg/futurecard2small6.svg";
import futuresmall7 from "../assets/images//svg/futurecard2small7.svg";
import futuresmall8 from "../assets/images//svg/futurecard2small8.svg";
import futuresmall9 from "../assets/images//svg/futurecard2small9.svg";
import nftcircle from "../assets/images//svg/NftSmall2.svg";
import nftcircle4 from "../assets/images//svg/NftSmall4.svg";
import nftcircle5 from "../assets/images//svg/NftSmall5.svg";
import nftcircle6 from "../assets/images//svg/NftSmall6.svg";
import nftcircle7 from "../assets/images//svg/NftSmall7.svg";
import nftcircle8 from "../assets/images//svg/NftSmall8.svg";
import nftcircle9 from "../assets/images//svg/NftSmall9.svg";
import futurehoverimg2 from "../assets/images//webp/futurehovercard.webp";
    
const Future = () => {
  return (
    <div className="py-[50px] md:py-[80px] lg:py-[126px]">
      <div className="xl:w-[1140px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 2xl:px-0 ">
        <div>
          <h4 className="font-Machine text-[28px] sm:text-[46px] font-bold leading-[120%] text-[#1643C3] text-center capitalize mb-5">
            Future Use Cases (Strategies){" "}
          </h4>
          <p className="font-Raleway text-xs font-normal leading-[160%] text-black opacity-80 text-center max-w-[330px] sm:max-w-[882px] mx-auto mb-[30px] md:mb-[50px] lg:mb-[82px]">
            Elastic Protocol will continue to pioneer an expanding ecosystem of
            yield strategies that will cater to DeFi users across a range of
            blockchains, communities, and interests. Each will help in
            generating sustainable yield and expanding the utility of the native
            utility token $EEFI. Here is some of what we are planning and
            looking into:
          </p>
          {/* <div className="flex justify-between">
            <div className="flex flex-col justify-between future-card futurecard1 bg-black w-full max-w-[364px] min-h-[502px] rounded-[8px] p-5 relative overflow-hidden">
              <img
                className="absolute left-0 top-[100%] z-[2] hovercard h-full"
                src={futurehoverimg2}
                alt="futurehoverimg2"
              />
              <div className="flex justify-between ">
                <div className="pt-[5px] w-[71px] nft_box rounded-[8px] h-[35px] flex item-center justify-center">
                  <p className="font-Raleway text-xm font-medium leading-[160%] text-white inline-block">
                    NFT
                  </p>
                </div>
                <img src={futuresmall2} alt="futuresmall2" />
              </div>
              <div>
                <p className="font-Machine text-[20px] font-bold capitalize leading-[120%] text-white mb-3">
                  NFT
                </p>
                <p className="font-Machine text-xs font-medium capitalize leading-[160%] text-white mb-[15px]">
                  24 NFTs
                </p>
                <div className=" py-[3px] ps-[5px] pe-[8px] rounded-[47px] nft_circle inline-block ">
                  <div className="flex gap-[8px] items-center">
                    <img src={nftcircle} alt="nftcircle" />
                    
                    <p className="text-white">@NFTs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between future-card futurecard1 bg-black w-full max-w-[364px] min-h-[502px] rounded-[8px] p-5 relative overflow-hidden">
              <img
                className="absolute left-0 top-[100%] z-[2] hovercard h-full"
                src={futurehoverimg2}
                alt="futurehoverimg2"
              />
              <div className="flex gap-5 justify-between ">
                <div className="pt-[5px] w-[71px] nft_box rounded-[8px] h-[35px] flex item-center justify-center">
                  <p className="font-Raleway text-xm font-medium leading-[160%] text-white inline-block">
                    NFT
                  </p>
                </div>
                <img src={futuresmall2} alt="futuresmall2" />
              </div>
              <div>
                <p className="font-Machine text-[20px] font-bold capitalize leading-[120%] text-white mb-3">
                  NFT
                </p>
                <p className="font-Machine text-xs font-medium capitalize leading-[160%] text-white mb-[15px]">
                  24 NFTs
                </p>
                <div className=" py-[3px] ps-[5px] pe-[8px] rounded-[47px] nft_circle inline-block ">
                  <div className="flex gap-[8px] items-center">
                    <img src={nftcircle} alt="nftcircle" />
                    
                    <p className="text-white">@NFTs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between future-card futurecard1 bg-black w-full max-w-[364px] min-h-[502px] rounded-[8px] p-5 relative overflow-hidden">
              <img
                className="absolute left-0 top-[100%] z-[2] hovercard h-full"
                src={futurehoverimg2}
                alt="futurehoverimg2"
              />
              <div className="flex justify-between ">
                <div className="pt-[5px] w-[71px] nft_box rounded-[8px] h-[35px] flex item-center justify-center">
                  <p className="font-Raleway text-xm font-medium leading-[160%] text-white inline-block">
                    NFT
                  </p>
                </div>
                <img src={futuresmall2} alt="futuresmall2" />
              </div>
              <div>
                <p className="font-Machine text-[20px] font-bold capitalize leading-[120%] text-white mb-3">
                  NFT
                </p>
                <p className="font-Machine text-xs font-medium capitalize leading-[160%] text-white mb-[15px]">
                  24 NFTs
                </p>
                <div className=" py-[3px] ps-[5px] pe-[8px] rounded-[47px] nft_circle inline-block ">
                  <div className="flex gap-[8px] items-center">
                    <img src={nftcircle} alt="nftcircle" />
                    
                    <p className="text-white">@NFTs</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="grid gap-5  sm:grid-cols-2 lg:grid-cols-3">
          {" "}
          <div className="flex flex-col mx-auto justify-between  future-card futurecard1 bg-black w-full max-w-[100%] lg:max-w-full min-h-[502px] rounded-[8px] p-5 relative overflow-hidden">
            <img
              className="absolute left-0 w-full top-[100%] z-[2] hovercard h-full"
              src={futurehoverimg2}
              alt="futurehoverimg2"
            />
            <div className="flex justify-between ">
              <div className="pt-[5px] w-[71px] nft_box rounded-[8px] h-[35px] flex item-center justify-center">
                <p className="font-Raleway text-xm font-medium leading-[160%] text-white inline-block">
                  NFT
                </p>
              </div>
              <img src={futuresmall2} alt="futuresmall2" />
            </div>
            <div>
              <p className="font-Machine text-[20px] font-bold capitalize leading-[120%] text-white mb-3">
                NFT
              </p>
              <p className="font-Machine text-xs font-medium capitalize leading-[160%] text-white mb-[15px]">
                24 NFTs
              </p>
              <div className=" py-[3px] ps-[5px] pe-[8px] rounded-[47px] nft_circle inline-block ">
                <div className="flex gap-[8px] items-center">
                  <img src={nftcircle} alt="nftcircle" />
                  
                  <p className="text-white">@NFTs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto justify-between  future-card futurecard1 bg-black w-full max-w-[100%] lg:max-w-full min-h-[502px] rounded-[8px] p-5 relative overflow-hidden">
            <img
              className="absolute w-full left-0 top-[100%] z-[2] hovercard h-full"
              src={futurehoverimg2}
              alt="futurehoverimg2"
            />
            <div className="flex gap-5 justify-between ">
              <div className="pt-[5px] w-[71px] nft_box rounded-[8px] h-[35px] flex item-center justify-center">
                <p className="font-Raleway text-xm font-medium leading-[160%] text-white inline-block">
                  NFT
                </p>
              </div>
              <img src={futuresmall2} alt="futuresmall2" />
            </div>
            <div>
              <p className="font-Machine text-[20px] font-bold capitalize leading-[120%] text-white mb-3">
                NFT
              </p>
              <p className="font-Machine text-xs font-medium capitalize leading-[160%] text-white mb-[15px]">
                24 NFTs
              </p>
              <div className=" py-[3px] ps-[5px] pe-[8px] rounded-[47px] nft_circle inline-block ">
                <div className="flex gap-[8px] items-center">
                  <img src={nftcircle} alt="nftcircle" />
                  
                  <p className="text-white">@NFTs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto justify-between  future-card futurecard3 bg-black w-full max-w-[100%] lg:max-w-full min-h-[502px] rounded-[8px] p-5 relative overflow-hidden">
            <img
              className="absolute w-full left-0 top-[100%] z-[2] hovercard h-full"
              src={futurehoverimg2}
              alt="futurehoverimg2"
            />
            <div className="flex justify-between ">
              <div className="pt-[5px] w-[113px] nft_box rounded-[8px] h-[35px] flex item-center justify-center">
                <p className="font-Raleway text-xm font-medium leading-[160%] text-white inline-block">
                  OPTIONS
                </p>
              </div>
              <img src={futuresmall3} alt="futuresmall3" />
            </div>
            <div>
              <p className="font-Machine text-[20px] font-bold capitalize leading-[120%] text-white mb-3">
                OPTIONS
              </p>
              <p className="font-Machine text-xs font-medium capitalize leading-[160%] text-white mb-[15px]">
                24 NFTs
              </p>
              <div className=" py-[3px] ps-[5px] pe-[8px] rounded-[47px] nft_circle inline-block ">
                <div className="flex gap-[8px] items-center">
                  <img src={nftcircle} alt="nftcircle" />
                  
                  <p className="text-white">@OPTIONS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto justify-between  future-card futurecard4 bg-black w-full max-w-[100%] lg:max-w-full min-h-[502px] rounded-[8px] p-5 relative overflow-hidden">
            <img
              className="absolute left-0 w-full top-[100%] z-[2] hovercard h-full"
              src={futurehoverimg2}
              alt="futurehoverimg2"
            />
            <div className="flex justify-between ">
              <div className="pt-[5px] w-[71px] nft_box rounded-[8px] h-[35px] flex item-center justify-center">
                <p className="font-Raleway text-xm font-medium leading-[160%] text-white inline-block">
                  BONDs
                </p>
              </div>
              <img src={futuresmall4} alt="futuresmall4" />
            </div>
            <div>
              <p className="font-Machine text-[20px] font-bold capitalize leading-[120%] text-white mb-3">
                BONDs
              </p>
              <p className="font-Machine text-xs font-medium capitalize leading-[160%] text-white mb-[15px]">
                24 NFTs
              </p>
              <div className=" py-[3px] ps-[5px] pe-[8px] rounded-[47px] nft_circle inline-block ">
                <div className="flex gap-[8px] items-center">
                  <img src={nftcircle} alt="nftcircle" />
                  <p className="text-white">@BONDs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto justify-between  future-card futurecard5 bg-black w-full max-w-[100%] lg:max-w-full min-h-[502px] rounded-[8px] p-5 relative overflow-hidden">
            <img
              className="absolute w-full left-0 top-[100%] z-[2] hovercard h-full"
              src={futurehoverimg2}
              alt="futurehoverimg2"
            />
            <div className="flex gap-5 justify-between ">
              <div className="py-[5px] w-[121px] nft_box rounded-[8px] h-[35px] flex item-center justify-center">
                <p className="font-Raleway text-xm font-medium leading-[160%] text-white inline-block">
                  Social Trading
                </p>
              </div>
              <img src={futuresmall5} alt="futuresmall5" />
            </div>
            <div>
              <p className="font-Machine text-[20px] font-bold capitalize leading-[120%] text-white mb-3">
                Social Trading
              </p>
              <p className="font-Machine text-xs font-medium capitalize leading-[160%] text-white mb-[15px]">
                24 NFTs
              </p>
              <div className=" py-[3px] ps-[5px] pe-[8px] rounded-[47px] nft_circle inline-block ">
                <div className="flex gap-[8px] items-center">
                  <img src={nftcircle5} alt="nftcircle5" />
                  
                  <p className="text-white">@Social Trading</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto justify-between  future-card futurecard6 bg-black w-full max-w-[100%] lg:max-w-full min-h-[502px] rounded-[8px] p-5 relative overflow-hidden">
            <img
              className="absolute w-full left-0 top-[100%] z-[2] hovercard h-full"
              src={futurehoverimg2}
              alt="futurehoverimg2"
            />
            <div className="flex justify-between ">
              <div className="pt-[5px] py-3 px-2 nft_box rounded-[8px] h-[35px] flex item-center justify-center">
                <p className="font-Raleway text-xm font-medium leading-[160%] text-white inline-block">
                  PERPS and Delta Neutral
                </p>
              </div>
              <img src={futuresmall6} alt="futuresmall6" />
            </div>
            <div>
              <p className="font-Machine text-[20px] font-bold capitalize leading-[120%] text-white mb-3">
                PERPS and Delta Neutral
              </p>
              <p className="font-Machine text-xs font-medium capitalize leading-[160%] text-white mb-[15px]">
                24 NFTs
              </p>
              <div className=" py-[3px] ps-[5px] pe-[8px] rounded-[47px] nft_circle inline-block ">
                <div className="flex gap-[8px] items-center">
                  <img src={nftcircle6} alt="nftcircle6" />
                  
                  <p className="text-white">@PERPS and Delta Neutral</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto justify-between  future-card futurecard7 bg-black w-full max-w-[100%] lg:max-w-full min-h-[502px] rounded-[8px] p-5 relative overflow-hidden">
            <img
              className="absolute left-0 w-full top-[100%] z-[2] hovercard h-full"
              src={futurehoverimg2}
              alt="futurehoverimg2"
            />
            <div className="flex justify-between ">
              <div className="pt-[5px] py-[13px] px-[14px] nft_box rounded-[8px] h-[35px] flex item-center justify-center">
                <p className="font-Raleway text-xm font-medium leading-[160%] text-white inline-block">
                  STABLECOINs
                </p>
              </div>
              <img src={futuresmall7} alt="futuresmall7" />
            </div>
            <div>
              <p className="font-Machine text-[20px] font-bold capitalize leading-[120%] text-white mb-3">
                STABLECOINs
              </p>
              <p className="font-Machine text-xs font-medium capitalize leading-[160%] text-white mb-[15px]">
                24 NFTs
              </p>
              <div className=" py-[3px] ps-[5px] pe-[8px] rounded-[47px] nft_circle inline-block ">
                <div className="flex gap-[8px] items-center">
                  <img src={nftcircle7} alt="nftcircle7" />
                  <p className="text-white">@STABLECOINs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto justify-between  future-card futurecard8 bg-black w-full max-w-[100%] lg:max-w-full min-h-[502px] rounded-[8px] p-5 relative overflow-hidden">
            <img
              className="absolute w-full left-0 top-[100%] z-[2] hovercard h-full"
              src={futurehoverimg2}
              alt="futurehoverimg2"
            />
            <div className="flex gap-5 justify-between ">
              <div className="py-[5px] px-2 min-w-[121px] nft_box rounded-[8px] h-[35px] flex item-center justify-center">
                <p className="font-Raleway text-xm font-medium leading-[160%] text-white inline-block">
                  Borrowing and Lending
                </p>
              </div>
              <img src={futuresmall8} alt="futuresmall8" />
            </div>
            <div>
              <p className="font-Machine text-[20px] font-bold capitalize leading-[120%] text-white mb-3">
                Borrowing and Lending
              </p>
              <p className="font-Machine text-xs font-medium capitalize leading-[160%] text-white mb-[15px]">
                24 NFTs
              </p>
              <div className=" py-[3px] ps-[5px] pe-[8px] rounded-[47px] nft_circle inline-block ">
                <div className="flex gap-[8px] items-center">
                  <img src={nftcircle8} alt="nftcircle" />
                  
                  <p className="text-white">@Borrowing and Lending</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto justify-between  future-card futurecard9 bg-black w-full max-w-[100%] lg:max-w-full min-h-[502px] rounded-[8px] p-5 relative overflow-hidden">
            <img
              className="absolute w-full left-0 top-[100%] z-[2] hovercard h-full"
              src={futurehoverimg2}
              alt="futurehoverimg2"
            />
            <div className="flex justify-between ">
              <div className="pt-[5px] py-[13px] px-[22px] nft_box rounded-[8px] h-[35px] flex item-center justify-center">
                <p className="font-Raleway text-xm font-medium leading-[160%] text-white inline-block">
                  Ai Smart Vaults
                </p>
              </div>
              <img src={futuresmall9} alt="futuresmall9" />
            </div>
            <div>
              <p className="font-Machine text-[20px] font-bold capitalize leading-[120%] text-white mb-3">
                Ai Smart Vaults
              </p>
              <p className="font-Machine text-xs font-medium capitalize leading-[160%] text-white mb-[15px]">
                24 NFTs
              </p>
              <div className=" py-[3px] ps-[5px] pe-[8px] rounded-[47px] nft_circle inline-block ">
                <div className="flex gap-[8px] items-center">
                  <img src={nftcircle9} alt="nftcircle9" />
                  
                  <p className="text-white">@Ai Smart Vaults</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
