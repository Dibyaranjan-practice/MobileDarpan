import React from "react";
import { useSelector } from "react-redux";

import { IMG_URL } from "../../Constant";
import Stealthbutton from "./../main/Stealthbutton";
import { useMediaQuery } from "react-responsive";

function FourthBanner() {
  const banners = useSelector(
    (store) => store.bannerReducer.banners["fourth_banner_1"]
  );
  const isMobile = useMediaQuery({ maxWidth: 992 });
  let imgUrl = "";
  let index, firstWord, lastWord;
  if (banners) {
    imgUrl = isMobile ? banners.MobBannerUrl : banners.bannerUrl;
    index = banners.title.trim().lastIndexOf(" ");
    firstWord = banners.title.substring(0, index);
    lastWord = banners.title.substring(index);
  }

  return (
    <div className="fourth_banner bg-black-darkblack w-full relative top-0 left-0">
      <div className="fourth_banner_image w-full flex justify-center">
        {banners && (
          <img
            src={IMG_URL + imgUrl}
            alt={banners.title}
            className="object-cover object-center h-full w-full"
          />
        )}
      </div>
      <div className="fourth_banner_content h-full w-full absolute left-0 top-0 flex flex-col justify-center items-center text-white">
        {banners && (
          <React.Fragment>
            <div
              className={
                "sf-font-regular font-medium whitespace-normal " + isMobile
                  ? "text-[3rem]"
                  : "text-[4.5rem]"
              }
            >
              {firstWord}
              <span className="text-6xl lg:text-7xl">{lastWord}</span>
            </div>
            <div className="sf-font-regular text-[1rem] font-normal text-grey-500">
              {banners.subtitle}
            </div>
            <Stealthbutton className="text-white p-[1rem] w-[184px] h-[56px] border border-white rounded-md text-center">
              Shop Now
            </Stealthbutton>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default FourthBanner;
