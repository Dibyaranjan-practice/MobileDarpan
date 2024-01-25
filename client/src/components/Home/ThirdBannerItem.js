import React from "react";
import { BASE_URL } from "../../Constant";
import Stealthbutton from "./../main/Stealthbutton";

function ThirdBannerItem({
  url,
  title,
  subtitle,
  className,
  btnColor,
  imageAlign,
}) {
  return (
    <div
      className={
        className +
        " third_banner_item lg:w-1/4 md:w-1/2 sm:w-full flex flex-col"
      }
    >
      <div className=" banner_image w-full h-[26.5rem]">
        <img
          src={BASE_URL + "assets/images/" + url}
          alt="banner_logo"
          className={imageAlign + " object-contain h-full w-full"}
        />
      </div>
      <div className="content flex flex-col gap-4 w-full h-[13rem] px-8">
        <div className="title sf-font-regular text-[1.5rem] w-full break-normal">
          {title}
        </div>
        <div className="subtitle w-full sf-font-regular text-[0.8rem] grey-400 break-normal">
          {subtitle}
        </div>
        <div className="shop_now h-[3.5rem]">
          <Stealthbutton
            className={
              "px-14 py-4 w-[184px] h-[56px] border rounded-md text-center " +
              btnColor
            }
          >
            Shop Now
          </Stealthbutton>
        </div>
      </div>
    </div>
  );
}

export default ThirdBannerItem;
