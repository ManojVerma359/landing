import React from "react";
import Around_ellips from "../assets/images/around_ellipstop.png";
// import upper_img from '../assets/images/upper_img.png'
import {Five_star} from "./IconSvg";
import tringle_img from '../assets/images/tringle_img.png';
import trignle from '../assets/images/tringle.png';
import white_ellips from '../assets/images/white_ellips.png'

const Around = () => {
  return (
    <>
      <div className="bg_clr relative ">
        <img className="absolute  bottom-[-10%] w-[100%]" src={white_ellips} alt="#id" />
        {/* <img className="w-[100%] bottom-[-1px] "  src={upper_img} alt="#id" /> */}
        <img
          className="w-[100%] top-[0] mt-[-1px]"
          src={Around_ellips}
          alt="#id"
        />
        <div className="container mx-auto pt-20 pb-36 px-3">
          <div className="flex flex-col text-center justify-center ">
            <h4 className="text-[32px] font-bold ff_poppins text-white">
              10,000 Satisfied clients
              <span className="text-[32px] font-bold ff_poppins text-white block">
                around the world
              </span>
            </h4>
            <p className="text-base font-light ff_poppins text-white leading-[40px] pt-12">
              Yeah! we’re proud with numbers. We’ve helped thousands of clients{" "}
              <span className="text-base font-light ff_poppins text-white block">
                all around the world with our bespoke service. Hover ontop of
                them
              </span>{" "}
              pic to view their testimonials.
            </p>
          </div>

          <div className="flex md:flex-nowrap flex-wrap sm:justify-between justify-center gap-10 ">
            <div className="bg-[#C4C4C4] flex flex-col rounded-[15px] lg:w-[410px] md:w-[350px] h-[117px] py-4 px-4 relative  ">
                <img className="absolute right-[-28px] top-[39px]" src={tringle_img} alt="#id" />
              <p className="text-base font-light ff_poppins ">Neya from Goa</p>
           
              <Five_star />
              <h4 className="text-[14px] font-bold ff_poppins ">
                {" "}
                Best service
              </h4>
              <p className="text-[14px] font-light ff_poppins">
                Good material, Thank you.
              </p>
            </div>
            <div className="bg-[#C4C4C4] flex flex-col rounded-[15px] lg:w-[410px] md:w-[350px] h-[117px] py-4 px-4 relative md:translate-y-[50%]">
                <img className="absolute left-[-29px] top-[39px] sm:block hidden flex" src={trignle} alt="#id" />
                <img className="absolute right-[-28px] top-[39px] sm:hidden flex" src={tringle_img} alt="#id" />
              <p className="text-base font-light ff_poppins ">Neya from Goa</p>
              <Five_star />
              <h4 className="text-[14px] font-bold ff_poppins ">
                {" "}
                Best service
              </h4>
              <p className="text-[14px] font-light ff_poppins">
                Good material, Thank you.
              </p>
            </div>
          
          </div>
          <div className="flex justify-center md:justify-start  sm:pt-20 pt-10 flex-wrap md:flex-nowrap">
            <div className="bg-[#C4C4C4] flex flex-col rounded-[15px] lg:w-[410px] md:w-[350px] h-[117px] py-4 px-4 relative  md:translate-x-[50%]">
                <img className="absolute right-[-28px] top-[39px]" src={tringle_img} alt="#id" />
              <p className="text-base font-light ff_poppins ">Neya from Goa</p>
           
              <Five_star />
              <h4 className="text-[14px] font-bold ff_poppins ">
                {" "}
                Best service
              </h4>
              <p className="text-[14px] font-light ff_poppins">
                Good material, Thank you.
              </p>
            </div>
        
          </div>
          <div className="flex sm:justify-between sm:pt-20 pt-10 flex-wrap md:flex-nowrap justify-center ">
            <div className="bg-[#C4C4C4] flex flex-col rounded-[15px] lg:w-[410px] md:w-[350px] h-[117px] py-4 px-4 relative ">
                <img className="absolute right-[-28px] top-[39px]" src={tringle_img} alt="#id" />
              <p className="text-base font-light ff_poppins ">Neya from Goa</p>
           
              <Five_star />
              <h4 className="text-[14px] font-bold ff_poppins ">
                {" "}
                Best service
              </h4>
              <p className="text-[14px] font-light ff_poppins">
                Good material, Thank you.
              </p>
            </div>
            <div className="bg-[#C4C4C4] flex flex-col rounded-[15px] lg:w-[410px] md:w-[350px] h-[117px] py-4 px-4 relative sm:mt-0 mt-10  md:translate-y-[-50%]">
            <img className="absolute left-[-29px] top-[39px] sm:block hidden flex" src={trignle} alt="#id" />
                <img className="absolute right-[-28px] top-[39px] sm:hidden flex" src={tringle_img} alt="#id" />
              <p className="text-base font-light ff_poppins ">Neya from Goa</p>
              <Five_star />
              <h4 className="text-[14px] font-bold ff_poppins ">
                {" "}
                Best service
              </h4>
              <p className="text-[14px] font-light ff_poppins">
                Good material, Thank you.
              </p>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Around;
