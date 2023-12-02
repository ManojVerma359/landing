import React from "react";
import gallery_img1 from "../assets/images/gallery_img1.png";
import gallery_img2 from "../assets/images/gallery_img2.png";
import gallery_img3 from "../assets/images/gallery_img3.png";
import gallery_img4 from "../assets/images/gallery_img4.png";
import gallery_img5 from "../assets/images/gallery_img5.png";

const Gallery = () => {
  return (
    <>
      <div id="gallery" className="relative">
        <div className="container mx-auto px-3">
          <div className="flex flex-col justify-center items-center max-md:pt-20 ">
            <h3 className="text-[32px] font-bold ff_poppins welcome_txt z-10 ">
              Gallery
            </h3>
            <div className="flex justify-between items-center md:gap-[122px] gap-14 md:flex-nowrap flex-wrap pt-14">
              <div className="md:w-[50%] w-[100%] flex flex-col md:gap-40 gap-14  items-center">
                <div className="md:items-start flex items-center  flex-col">
                  <img className="img_hov" src={gallery_img3} alt="#id" />
                  <p className="text-[28px] font-medium ff_poppins living_txt pt-2">
                    Living Room
                  </p>
                </div>
                <div className="md:items-start flex items-center  flex-col">
                  <img className="img_hov" src={gallery_img4} alt="#id" />
                  <p className="text-[28px] font-medium ff_poppins living_txt pt-2">
                    Kitchen
                  </p>
                </div>
              </div>
              <div className="md:w-[50%] w-[100%] flex flex-col md:gap-40 gap-14">
                <div className="md:items-start flex items-center  flex-col">
                  <img className="img_hov" src={gallery_img2} alt="#id" />
                  <p className="text-[28px] font-medium ff_poppins living_txt pt-2">
                    Office
                  </p>
                </div>

                <div className="md:items-start flex items-center  flex-col">
                  <img className="img_hov" src={gallery_img1} alt="#id" />
                  <p className="text-[28px] font-medium ff_poppins living_txt pt-2">
                    Bath
                  </p>
                </div>

                <div className="md:items-start flex items-center  flex-col">
                  <img className="img_hov" src={gallery_img5} alt="#id" />
                  <p className="text-[28px] font-medium ff_poppins living_txt pt-2">
                    Bed Room
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
