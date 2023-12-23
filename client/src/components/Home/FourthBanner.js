import React from "react";
import { useSelector } from "react-redux";

import { IMG_URL } from "../../Constant";
import Stealthbutton from "./../main/Stealthbutton";

function FourthBanner() {
  const banners = useSelector(
    (store) => store.bannerReducer.banners["fourth_banner_1"]
  );

  return (
    <div className="fourth_banner bg-black-darkblack w-full relative top-0 left-0">
      <div className="fourth_banner_image w-full flex justify-center">
        {banners && (
          <img src={IMG_URL + banners.bannerUrl} alt={banners.title} />
        )}
      </div>
      <div className="fourth_banner_content w-full h-full absolute left-0 top-0 flex flex-col justify-center items-center text-white">
        {banners && (
          <React.Fragment>
            <div className="sf-font-regular text-[4.5rem] font-medium">
              {banners.title}
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
