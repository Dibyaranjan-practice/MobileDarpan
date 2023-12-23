import React from "react";
import Stealthbutton from "../main/Stealthbutton";

function SubBannerText({ title, description, hClass, pClass, hasBtn }) {
  const horPadding = hasBtn ? "mx-[2rem]" : "";
  return (
    <div className="text-wrapper">
      <h3 className={hClass}>{title}</h3>
      <p className={pClass + " mb-[1rem]"}>{description}</p>
      {hasBtn && (
        <Stealthbutton
          className={
            horPadding +
            " text-dark-black p-[1rem] w-[184px] h-[56px] border border-black rounded-md text-center inline-block"
          }
        >
          Shop Now
        </Stealthbutton>
      )}
    </div>
  );
}

export default SubBannerText;
