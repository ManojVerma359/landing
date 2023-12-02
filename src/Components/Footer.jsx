import React from "react";
import { Facebook, Instagram, Keys, Twitter } from "./IconSvg";

const Footer = () => {
  return (
    <>
      <div id="contact" className="bg_clr">
        <div className="container px-3 pb-24 mx-auto flex md:gap-36 gap-2  flex-wrap md:justify-start justify-center ">
          <div className="pt-24">
            <p className="text-base font-bold ff_poppins text-white">RP</p>
            <p className="sm:text-[16px] text-[14px] font-light ff_poppins text-white pt-2">
              Painting with RP means never painting your house{" "}
              <span className="sm:text-[16px] text-[14px] font-light ff_poppins text-white block">
                again! Our special paint coating comes with a 20
              </span>{" "}
              years warranty.
            </p>
            <div className="flex gap-7 pt-5">
              <span className="cursor-pointer	link">
                <Keys />
              </span>
              <span className="cursor-pointer	link">
                <Facebook />
              </span>
              <span className="cursor-pointer	link">
                <Twitter />
              </span>{" "}
              <span className="cursor-pointer	link">
                {" "}
                <Instagram />
              </span>
            </div>
            </div>
       <div className="md:pt-20 pt-14 flex gap-16">
       <div>
                <p className="text-[18px] font-light ff_poppins text-white">Links </p>
                <p  className="text-[12px] font-light ff_poppins text-white cursor-pointer">Home </p>
                <p className="text-[12px] font-light ff_poppins text-white cursor-pointer">About Us </p>
                <p className="text-[12px] font-light ff_poppins text-white cursor-pointer">Gallery  </p>
                <p className="text-[12px] font-light ff_poppins text-white cursor-pointer">Contact Us </p>
            </div>
            <div>
                <p className="text-[18px] font-light ff_poppins text-white">Contact Us </p>
                <p className="text-[12px] font-light ff_poppins text-white cursor-pointer">+91 1234567890 </p>
                <p className="text-[12px] font-light ff_poppins text-white cursor-pointer">XYZ@gmail.com  </p>
                <p className="text-[12px] font-light ff_poppins text-white cursor-pointer">Address  </p>
            </div>
       </div>
          
        </div>
      </div>
    </>
  );
};

export default Footer;
