import React from "react";
import { BackTop } from "./IconSvg";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 400) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed bottom-[15px] right-[20px] z-[20]  animate-bounce " onClick={top}>
        <span style={{height:40,display:backToTop?"flex":"none"}} className="bg-red-500  p-2 fill-white">
          <BackTop />
        </span>
      </div>
    </>
  );
};

export default BackToTop;
