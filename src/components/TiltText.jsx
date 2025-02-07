import React from "react";

const TiltText = (props) => {
  return (
    <>
      <div id="tiltDiv" ref={props.abc} className="mt-30 text-white text-6xl font-bold uppercase font-[anzo1]">
        <h1>
          I AM <span className="text-black">DARK MODET</span>
          <sup>TM</sup>
        </h1>
        <h1 className="text-8xl">DESIGNER</h1>
        <h1>TO HIRE</h1>
      </div>
    </>
  );
};

export default TiltText;
