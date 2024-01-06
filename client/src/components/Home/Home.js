import React from "react";
import MainBanner from "./MainBanner";
import Category from "../Category/Category";
import FourthBanner from "./FourthBanner";
import ThirdBanner from "./ThirdBanner";

export default function Home() {
  return (
    <>
      <MainBanner />
      <Category />
      <ThirdBanner />
      <FourthBanner />
    </>
  );
}
