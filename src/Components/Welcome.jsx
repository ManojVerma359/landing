import React from "react";
import section2_img from "../assets/images/section_2img.png";

const Welcome = () => {
  return (
    <>
      <div className="">
        <div className="container mx-auto z-10 relative flex justify-between flex-wrap px-3">
          
            <div className="lg:w-[40%] w-[100%] flex justify-center">
              <img className="z-[5] img_hov" src={section2_img} alt="" />
            </div>
            <div className="  flex flex-col   lg:w-[50%] xsm:w-[100%]">
              <h2 className="welcome_txt text-[32px] font-bold ff_poppins ">
                Welcome to RP
              </h2>
              <p className="text-base font-normal ff_poppins sm:leading-[52px] leading-[33px] mt-6">
                A family-run business, with our own factory nestled in India, we
                are producing{" "}
              
                  a complete range of traditional and modern paints. We
                  formulate high
               
                performance paint, blended with the best ingredients. Our
                company includes{" "}
             
                  interior and exterior paints, oil-based paints, floor paints
                  and a special range of
               
                antimicrobial paints.
                
                  With a color palette you can easily mix the colors together to
                  expand the range.
              
                The numbers of creating different textures, finishes and shades
                are unlimited.{" "}
              </p>
              <div className="mt-6">
                <button className="flex text-base font-normal  ff_poppins more_btn block py-5 px-10 rounded-[100px] w-44 justify-center text-white">
                  MORE
                </button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
