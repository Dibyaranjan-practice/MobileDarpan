import React from "react";
import Footerlogo from "../../images/svg/footer_logo.svg";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <footer className="dark-black py-[6.5rem]">
      <div className="grid lg:grid-cols-3 grid-cols-1 container gap-[2rem] mx-auto pb-[1.5rem]">
        <div className="logo-wrapper">
          <img src={Footerlogo} alt="footerlogo" className="pb-[1.5rem]" />
          <p className="grey-200">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className="services-wrapper">
          <h3 className="white pb-[0.5rem]">Services</h3>
          <ul className="grey-200">
            <li className="pb-[1rem]">
              <Link className="grey-200">Bonus program</Link>
            </li>
            <li className="pb-[1rem]">
              <Link className="grey-200">Gift cards</Link>
            </li>
            <li className="pb-[1rem]">
              <Link className="grey-200">Credit and payment</Link>
            </li>
            <li className="pb-[1rem]">
              <Link className="grey-200">Service contracts</Link>
            </li>
            <li className="pb-[1rem]">
              <Link className="grey-200 ">Non-cash account</Link>
            </li>
            <li className="pb-[1rem]">
              <Link className="grey-200">Payment</Link>
            </li>
          </ul>
        </div>
        <div className="assistance-wrapper">
          <h3 className="white pb-[0.5rem]">Assistance to the buyer</h3>
          <ul>
            <li className="pb-[1rem]">
              <Link className="grey-200">Find an order</Link>
            </li>
            <li className="pb-[1rem]">
              <Link className="grey-200">Terms of delivery</Link>
            </li>
            <li className="pb-[1rem]">
              <Link className="grey-200">Exchange and return of goods</Link>
            </li>
            <li className="pb-[1rem]">
              <Link className="grey-200">Guarantee</Link>
            </li>
            <li className="pb-[1rem]">
              <Link className="grey-200">Frequently asked questions</Link>
            </li>
            <li className="pb-[1rem]">
              <Link className="grey-200">Terms of use of the site</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="social-media-wrapper container">
        <ul className="flex items-center">
          <li className="mr-[1rem]">
            <Link
              className="icon md inline-block twitter"
              to="https://twitter.com/home"
              target="_blank"
            ></Link>
          </li>
          <li className="mr-[1rem]">
            <Link
              className="icon md inline-block facebook"
              to="https://www.facebook.com/"
              target="_blank"
            ></Link>
          </li>
          <li className="mr-[1rem]">
            <Link
              className="icon md inline-block tiktok"
              to="https://www.tiktok.com/en/"
              target="_blank"
            ></Link>
          </li>
          <li>
            <Link
              className="icon md inline-block instagram"
              to="https://www.instagram.com/"
              target="_blank"
            ></Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterComponent;
