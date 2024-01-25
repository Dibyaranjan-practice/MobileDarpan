import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ThirdBannerItem from "./ThirdBannerItem";

function ThirdBanner() {
  const banners = useSelector((store) => store.bannerReducer.banners);
  const first = banners["third_banner_1"];
  const second = banners["third_banner_2"];
  const third = banners["third_banner_3"];
  const fourth = banners["third_banner_4"];

  return (
    <div className="third-banner-container w-full flex flex-wrap ">
      {first && (
        <ThirdBannerItem
          url={first.bannerUrl}
          title={first.title}
          subtitle={first.subtitle}
          className="bg-white"
          btnColor="border-black text-black"
          imageAlign="object-center"
        />
      )}
      {second && (
        <ThirdBannerItem
          url={second.bannerUrl}
          title={second.title}
          subtitle={second.subtitle}
          className="bg-grey-600"
          btnColor="border-black text-black"
          imageAlign="object-right"
        />
      )}
      {third && (
        <ThirdBannerItem
          url={third.bannerUrl}
          title={third.title}
          subtitle={third.subtitle}
          className="bg-grey-700"
          btnColor="border-black text-black"
          imageAlign="object-center"
        />
      )}
      {fourth && (
        <ThirdBannerItem
          url={fourth.bannerUrl}
          title={fourth.title}
          subtitle={fourth.subtitle}
          className="bg-dark-grey text-white"
          btnColor="border-white text-white"
          imageAlign="object-right"
        />
      )}
    </div>
  );
}

export default ThirdBanner;
