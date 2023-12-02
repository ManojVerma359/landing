import React from "react";
import ellips_top from "../assets/images/section3_ellips-top.png";
import slider_img1 from "../assets/images/slider_img1.png";
import slider_img2 from "../assets/images/slider_img2.png";
import slider_img3 from "../assets/images/slider_img3.png";
import Section4_ellips from "../assets/images/section4_ellips-top.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Interior = () => {
  var settingss = {
    dots: false,
    // infinite: true,
    autoplay: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
      }},
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]}

  return (
    <>
      <div id="about" className="relative bg_clr  mt-[-1px] flex justify-center items-center">
        <img
          className="absolute top-[-1px] z-0 w-[100%]"
          src={ellips_top}
          alt=""
        />
        <img className='absolute md:bottom-[-59px] bottom-[-5px]  w-[100%]' src={Section4_ellips} alt="#id" />


        <div className="container mx-auto px-3 lg:pt-36 md:pt-16 lg:pb-16">
          <div>
            <Slider {...settingss}>
              <div className=" border border-solid bg-white flex flex-col p-3 items-center  rounded-[15px] ">
                <p className="text-[28px] font-bold ff_poppins living_txt text-center">
                  Interior
                </p>
                <img className="w-[100%]" src={slider_img2} alt="#id" />
                <div className="flex pt-3 justify-center">
                  <button className="more_btn text-base font-bold ff_poppins text-white py-3 px-9 rounded-[100px]">
                    MORE
                  </button>
                </div>{" "}
              </div>
              <div className=" border border-solid bg-white flex flex-col p-3 items-center rounded-[15px]">
                <p className="text-[28px] font-bold ff_poppins living_txt text-center">
                  Interior
                </p>
                <img className="w-[100%]" src={slider_img1} alt="#id" />
                <div className="flex pt-3 justify-center">
                  <button className="more_btn text-base font-bold ff_poppins text-white py-3 px-9 rounded-[100px]">
                    MORE
                  </button>
                </div>{" "}
              </div>
              <div className=" border border-solid bg-white flex flex-col p-3 items-center rounded-[15px] slider_scale">
                <p className="text-[28px] font-bold ff_poppins living_txt text-center">
                  Interior
                </p>
                <img className="w-[100%]" src={slider_img3} alt="#id" />
                <div className="flex pt-3 justify-center">
                  <button className="more_btn text-base font-bold ff_poppins text-white py-3 px-9 rounded-[100px]">
                    MORE
                  </button>
                </div>{" "}
              </div>
              <div className=" border border-solid bg-white flex flex-col p-3 items-center rounded-[15px]">
                <p className="text-[28px] font-bold ff_poppins living_txt text-center">
                  Interior
                </p>
                <img className="w-[100%]" src={slider_img1} alt="#id" />
                <div className="flex pt-3 justify-center">
                  <button className="more_btn text-base font-bold ff_poppins text-white py-3 px-9 rounded-[100px]">
                    MORE
                  </button>
                </div>{" "}
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interior;
