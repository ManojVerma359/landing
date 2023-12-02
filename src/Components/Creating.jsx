import React from "react";
import ellips_img from "../assets/images/lower_img.png";
import house1 from "../assets/images/house1.png";
import house2 from "../assets/images/house2.png";
import mask from "../assets/images/Mask.png";

const Creating = () => {
  return (
    <>
      <div className="relative bg_clr md:pt-80 pt-40 sm:pb-10 pb-20   ">
        <img className="absolute right-[5%] bottom-[0]" src={mask}
         alt="" />
        <div>
          <img
            className="absolute top-[-1px] w-[100%] "
            src={ellips_img}
            alt="#id"
          />
        </div>

        <div className="container mx-auto flex items-center gap-10 lg:flex-nowrap flex-wrap px-3 lg:justify-around justify-center">
         <div className="flex items-center justify-center  gap-5 flex-wrap-reverse">
         <div className="flex items-center  ">
            <img className="img_hov" src={house1} alt="#id" />
          </div>
          <div className="sm:text-[42px] text-[35px] font-bold text-white ff_poppins justify-center flex flex-col">
            Creating a Warm,
            <span className="sm:text-[42px] text-[35px] font-bold text-white ff_poppins block xl:translate-x-[10%]">
              Welcoming Home
            </span>{" "}
          </div>
         </div>
          <div className="lg:translate-y-[-30%] lg:translate-x-[9%] flex align-items justify-center pt-20 ">
          <img className="w-[400px] h-[309px] img_hov"  src={house2} alt="#id" />
        </div>
        </div>
       
      </div>
    </>
  );
};

export default Creating;
