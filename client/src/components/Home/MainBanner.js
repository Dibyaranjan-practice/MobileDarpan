import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BASE_URL from "../../Constant";

function MainBanner() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const bannerFunction = async function () {
      const response = await fetch(BASE_URL + "Api/banner/findall");
      const data = await response.json();
      console.log(data);
      setBanner(data);
    };

    bannerFunction();
  }, []);

  return (
    <>
      {banner && (
        <section className="banner-wrapper">
          <div className="container grid grid-cols-1 lg:grid-cols-2">
            <div className="content-wrapper">
              <h3>{banner[0].title}</h3>
              <h2>{banner[0].subtitle}</h2>
              <p>{banner[0].description}</p>
              <Link to="/">Shop Now</Link>
            </div>
            <div className="banner-wrapper">
              <img src={BASE_URL + banner[0].bannerUrl} alt="main-banner" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default MainBanner;
