import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Page1Bottom = () => {

  useGSAP(function () {
    gsap.to('#banner img', { 
      rotation: 360, 
      duration: 5, 
      repeat: -1, 
      ease: "linear"
    });
  });
  return (
    <>
      <div className="flex text-white absolute bottom-0 w-full left-0 pl-18 items-end mb-14 justify-between">
        <div className="">
          <div className="text-3xl font-[anzo4]">WEB | BRAND IDENTITY</div>
          <div className="text-1xl font-[anzo3]">BESPOKE DESIGN</div>
        </div>
        <div id="banner" className="flex flex-col items-end mr-10 gap-3 ">  
          <img src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_74,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt=""/>
          <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_74,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" alt=""/>
        </div>
      </div>
    </>
  );
};

export default Page1Bottom;
