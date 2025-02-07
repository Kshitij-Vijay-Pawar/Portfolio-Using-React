import React, { useRef, useState, useEffect } from "react";
import Page1Bottom from "../components/Page1Bottom";
import { gsap } from "gsap";
import TiltText from "../components/TiltText";

const page1 = () => {

  const tiltRef = useRef(null);
  const [xVal, setxVal] = useState(0);
  const [yVal, setyVal] = useState(0);

  const mouseMoving = (e) => {
    setxVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 70);
    setyVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 20);
  };

  useEffect(() => {
    if (tiltRef.current) {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 2,
        ease:'elastic.out(1, 0.3)',
      });
    }
  }, [xVal, yVal]);

  return (
    <>
      <div onMouseMove={(e) => { mouseMoving(e); }} className="h-screen p-7 bg-white">
        <div id="page1-in" className="h-full w-full p-10 rounded-[50px] bg-cover bg-center shadow-xl shadow-gray-700 bg-[url(https://www.visitbalve.de/fileadmin/_processed_/3/9/csm_geran-de-klerk-136351_798ef2ab0c.jpg)] ">
          <img className="h-24 ml-5" src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="" />
          
          <TiltText abc ={tiltRef}/>
          <Page1Bottom />
        </div>
      </div>
    </>
  );
};

export default page1;
