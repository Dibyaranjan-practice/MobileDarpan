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
    <div className="third-banner-container w-full hidden lg:flex h-[40rem] ">
      {first && (
        <ThirdBannerItem
          url={first.bannerUrl}
          title={first.title}
          subtitle={first.subtitle}
          className="bg-white"
          btnColor="border-black text-black"
        />
      )}
      {second && (
        <ThirdBannerItem
          url={second.bannerUrl}
          title={second.title}
          subtitle={second.subtitle}
          className="bg-grey-600"
          btnColor="border-black text-black"
        />
      )}
      {third && (
        <ThirdBannerItem
          url={third.bannerUrl}
          title={third.title}
          subtitle={third.subtitle}
          className="bg-grey-700"
          btnColor="border-black text-black"
        />
      )}
      {fourth && (
        <ThirdBannerItem
          url={fourth.bannerUrl}
          title={fourth.title}
          subtitle={fourth.subtitle}
          className="bg-dark-grey text-white"
          btnColor="border-white text-white"
        />
      )}
    </div>
  );
}

export default ThirdBanner;
