import React from "react";
import nav_logo from "../assets/images/nav_logo.png";
import hero_ellpis1 from "../assets/images/hero_ellips1.png";
import hero_ellpis2 from "../assets/images/hero_ellips2.png";
import white_sapce from "../assets/images/white_space.png";
import { useState } from "react";
import { Close } from "./IconSvg";
import { Navicons } from "./IconSvg";

const Header = () => {
    const [show, setShow] = useState(false);
  if(show===true){
    document.body.classList.add("max-lg:overflow-hidden")
 }
 else{
  document.body.classList.remove("max-lg:overflow-hidden")
 }
const moment=()=>{
  setShow(!true)
}
  return (
    <>
  <div className=" bg_clr sm:h-[100vh] h-[80vh] relative">
  <div className=" flex flex-col pt-4 z-20 ">
        <img
          className="absolute lg:top-[39%] sm:top-[48%] top-[56%] left-0 lg:w-[24%] w-[43%]"
          src={hero_ellpis1}
          alt="#id"
        />
        <img
          className="absolute lg:top-[35%] sm:top-[48%] top-[56%] right-0 lg:w-[24%] w-[43%]"
          src={hero_ellpis2}
          alt=""
        />
        <img
          className="absolute bottom-[-1px] w-[100%] z-0"
          src={white_sapce}
          alt="#id"
        />
      
        <nav>
          <div className="container mx-auto flex   items-center justify-between px-3 z-20 ">
            <img
              src={nav_logo}
              alt="header-logo"
              className="h-[70px] lg:h-[168px] z-30"
            />
            <ul
              className={`${
                show ? "start-0" : "right-[-100%]"
              } flex flex-col z-[15]   min-h-screen lg:min-h-fit fixed lg:static w-full lg:w-auto items-center justify-center top-0 : max-lg:right-[-100%] bg-red-400 lg:bg-[unset] lg:flex-row right-0 gap-12 ps-0 `}
            >
              <li>
                <a
                  href="#home"
                  className=" text-white text-[21px] ff_poppins relative after:absolute after:w-0 after:h-1 after:start-1/2 after:bottom-0 after:bg-fuchsia-700 hover:after:w-[40%] hover:after:start-[30%] after:transition-all after:duration-300 after:ease-linear font-bold after:rounded"onClick={moment}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white text-[21px] font-bold ff_poppins relative after:absolute after:w-0 after:h-1 after:start-1/2 after:bottom-0 after:bg-fuchsia-700 hover:after:w-[40%] hover:after:start-[30%] after:transition-all after:duration-300 after:ease-linear after:rounded"onClick={moment}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white text-[21px] font-bold ff_poppins relative after:absolute after:w-0 after:h-1 after:start-1/2 after:bottom-0 after:bg-fuchsia-700 hover:after:w-[40%] hover:after:start-[30%] after:transition-all after:duration-300 after:ease-linear after:rounded"onClick={moment}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white text-[21px] font-bold ff_poppins relative after:absolute after:w-0 after:h-1 after:start-1/2 after:bottom-0 after:bg-fuchsia-700 hover:after:w-[40%] hover:after:start-[30%] after:transition-all after:duration-300 after:ease-linear after:rounded"onClick={moment}
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <button
              className=" z-40 lg:hidden relative"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ?
              <div className="fill-[white]"><Close /></div> : <Navicons />}
            </button>
          </div>
        </nav>
        <div className="container mx-auto flex  justify-center sm:pt-48 pt-28   ">
          <div className=" flex-col flex  justify-center ">
            <h1 className="text-white ff_poppins sm:text-5xl text-3xl font-semibold max-sm:text-center">
              We Make Your Home
              <span className="block text-white ff_poppins sm:text-5xl text-3xl font-semibold">
                More Beautiful
              </span>{" "}
            </h1>
            <p className="text-white ff_poppins sm:text-[21px] text-[18px] font-light pt-4 max-sm:text-center">
              From choosing the right paint to getting{" "}
              <span className="text-white ff_poppins sm:text-[21px] text-[18px] font-light block">
                an expert touch - leave it on us.
              </span>
            </p>
          </div>
        </div>
      </div>
  </div>
    </>
  );
};

export default Header;


