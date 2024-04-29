import React from "react";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";

const Sponsers = () => {
  return (
   <div>
    <h1 className="text-center text-4xl font-bold font-raleway my-4">Our Sponsors</h1>
     <div className="bg-black rounded-2xl grid grid-cols-5  justify-center items-center py-6">
      <img src={logo1} alt="" className="w-4/6" />
      <img src={logo2} alt="" className="w-4/6"/>
      <img src={logo3} alt="" className="w-4/6"/>
      <img src={logo4} alt="" className="w-4/6"/>
      <img src={logo5} alt="" className="w-4/6"/>
    </div>
   </div>
  );
};

export default Sponsers;
