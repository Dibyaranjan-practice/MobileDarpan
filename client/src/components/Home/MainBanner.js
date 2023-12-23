import React from "react";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { BASE_URL, IMG_URL } from "../../Constant";
import Stealthbutton from "../main/Stealthbutton";
import SubBanner from "./SubBanner";

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
        <div>
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
          <div className="sub-banner-wrapper flex w-[100%] flex-col lg:flex-row justify-center text-center lg:text-left">
            <div>
              <SubBanner
                title={banner[1].title}
                description={banner[1].description}
                imageBg={banner[1].bannerUrl}
                mobileBg={banner[1].MobBannerUrl}
                className="lg:h-[328px] bg-white"
                hClass="text-5xl sf-font-medium mb-[1rem] mx-[2rem] pt-[1.5rem] lg:pt-[0]"
                pClass="text-sm grey-400 sf-font-medium mx-[2rem]"
                hasBtn={false}
                // to={home}
              />
              <div className="flex items-center flex-wrap">
                <SubBanner
                  title={banner[2].title}
                  description={banner[2].description}
                  imageBg={banner[2].bannerUrl}
                  mobileBg={banner[2].MobBannerUrl}
                  className="lg:h-[272px] grey-300"
                  linkClass="flex-[0_0_100%] lg:flex-[0_0_50%]"
                  hClass="text-3xl sf-font-medium mb-[0.5rem] mx-[2rem] pt-[1.5rem] lg:pt-[0]"
                  pClass="text-sm grey-400 sf-font-medium mx-[2rem]"
                  hasBtn={false}
                  // to={home}
                />
                <SubBanner
                  title={banner[3].title}
                  description={banner[3].description}
                  imageBg={banner[3].bannerUrl}
                  mobileBg={banner[3].MobBannerUrl}
                  className="lg:h-[272px] bg-mellow-black flex-[0_0_100%] lg:flex-[0_0_50%]"
                  linkClass="flex-[0_0_100%] lg:flex-[0_0_50%]"
                  hClass="text-3xl sf-font-medium text-white mb-[0.5rem] mx-[2rem] pt-[1.5rem] lg:pt-[0]"
                  pClass="text-sm grey-400 sf-font-medium mx-[2rem]"
                  hasBtn={false}
                  // to={home}
                />
              </div>
            </div>
            <div>
              <SubBanner
                title={banner[4].title}
                description={banner[4].description}
                imageBg={banner[4].bannerUrl}
                mobileBg={banner[4].MobBannerUrl}
                className="pb-[1rem] lg:p-0 lg:h-[600px] bg-right grey-300"
                hClass="text-[2rem] lg:leading-none lg:text-[4rem] sf-font-medium mb-[1rem] px-[2rem] pt-[1.5rem] lg:pt-[0]"
                pClass="text-sm grey-400 sf-font-medium px-[2rem]"
                hasBtn={true}
                // to={home}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainBanner;
