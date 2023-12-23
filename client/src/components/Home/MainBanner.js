import React from "react";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { BASE_URL, IMG_URL } from "../../Constant";
import Stealthbutton from "../main/Stealthbutton";

function MainBanner() {
  const [banner, setBanner] = useState(null);

  let lastWord, index, firstWord;

  useEffect(() => {
    const bannerFunction = async function () {
      const response = await fetch(BASE_URL + "Api/banner/findall");
      const data = await response.json();
      setBanner(data);
    };

    bannerFunction();
  }, []);

  if (banner) {
    index = banner[0].subtitle.trim().lastIndexOf(" ");
    firstWord = banner[0].subtitle.substring(0, index);
    lastWord = banner[0].subtitle.substring(index);
  }

  return (
    <>
      {banner && (
        <section className="banner-wrapper bg-light-black">
          <div className="container grid grid-cols-1 lg:grid-cols-2">
            <div className="content-wrapper flex flex-col self-center lg:items-baseline items-center my-[3rem] lg:my-[0]">
              <h3 className="text-2xl text-white opacity-40 mb-[1rem]">
                {banner[0].title}
              </h3>
              <h2 className="text-4xl lg:text-7xl text-white sf-font-regular mb-[1rem]">
                {firstWord}
                <span className="sf-font-bold text-4xl lg:text-7xl">
                  {lastWord}
                </span>
              </h2>
              <p className="text-lg grey-400 mb-[1rem]">
                {banner[0].description}
              </p>
              <Stealthbutton className="text-white p-[1rem] w-[184px] h-[56px] border border-white rounded-md text-center">
                Shop Now
              </Stealthbutton>
            </div>
            <div className="banner-wrapper">
              <img
                src={IMG_URL + banner[0].bannerUrl}
                alt="main-banner"
                className="mx-auto lg:ml-auto"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default MainBanner;
