import React from "react";
import { IMG_URL } from "../../Constant";
import { Link } from "react-router-dom";
import SubBannerText from "./SubBannerText";
import { useMediaQuery } from "react-responsive";

function SubBanner({
  title,
  description,
  imageBg,
  mobileBg,
  className,
  linkClass,
  hClass,
  pClass,
  hasBtn,
  to,
}) {
  const isMobile = useMediaQuery({ maxWidth: 992 });

  const imageUrl = isMobile ? mobileBg : imageBg;
  return (
    <>
      <Link className={linkClass}>
        <div
          className={
            className +
            " flex items-center w-full flex-col lg:flex-row py-[2.5rem] lg:py-[0rem]"
          }
        >
          <img
            src={IMG_URL + imageUrl}
            alt={title}
            className={hasBtn && "lg:order-2"}
          />
          <SubBannerText
            title={title}
            description={description}
            hClass={hClass}
            pClass={pClass}
            hasBtn={hasBtn}
          />
        </div>
      </Link>
    </>
  );
}

export default SubBanner;
