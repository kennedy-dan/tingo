import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="contact" className="bg-[#0F001F] pt-10 pb-20 font-urbanist">
      <div className="lg:flex justify-between lg:px-20 md:px-10 px-6">
        <div>
          <img src="/images/navbarlogo.png" alt="" className=" " />
          <p className="text-white mt-4 md:block hidden ">
        Tingo Express,<br /> where grocery shopping is made fast, <br /> easy, and convenient. 
          </p>
          <p className="my-6 text-white ">Follow us on</p>
          <div>
            <img src="/images/socials.png" alt="" />
          </div>
        </div>
        <div className="text-white lg:pt-6 pt-6">
          <p className="text-white text-[18px] md:text-[24px] font-semibold pb-4 ">
            Explore
          </p>
          <Link href="/about">
            <p className="md:text-[18px] text-[13px] mb-3  ">About us</p>
          </Link>
          <Link href="/product">
            <p className="md:text-[18px] text-[13px] mb-3  ">Products</p>
          </Link>

     
          <Link href="/location">
            <p className="md:text-[18px] text-[13px] mb-3  ">Location</p>
          </Link>
        </div>

        <div className="text-white lg:pt-6 pt-6">
          <p className="text-white text-[18px] md:text-[24px] font-semibold pb-4 ">
            Terms & Conditions
          </p>

          <Link href="/returnpolicy">
            <p className="md:text-[18px] text-[13px] mb-3  ">Return Poicy</p>
          </Link>
          <Link href="/privacy-policy">
            <p className="md:text-[18px] text-[13px] mb-3  ">Privacy Policy</p>
          </Link>
          <Link href="/cookies">
            <p className="md:text-[18px] text-[13px] mb-3  ">Cookie Policy</p>
          </Link>
          <Link href="/dataprivacy">
            <p className="md:text-[18px] text-[13px] mb-3  ">
              Data Privacy Statement
            </p>
          </Link>
        </div>

        <div className="lg:w-[40%] w-full lg:pt-6 pt-6">
          <p className="text-[18px] md:text-[24px] font-  text-white pb-2">
            Sign up for our newsletters
          </p>
          <div className="flex h-[54px]  ">
            <input
              className=" border border-gray-400 bg-transparent rounded-l-md w-full px-6 "
              placeholder="Enter Your Email Address "
            />
            <button className="text-white rounded-r-md px-3 bg-[#128B8E] font-bold text-[24px] ">
              Submit
            </button>
          </div>
          <p className="text-[16px] font-bold text-white mb-3 mt-14 ">
            COMING SOON
          </p>
          <div>
            <img src="/images/gooapp.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-gray-600 h-[1px] w-full px-0 my-8"></div>

      <div className="md:flex justify-between lg:px-20 md:px-10 px-6 ">
        <p className="text-white lg:text-base text-[10px]">
          Copyright © 2024 Tingo BV. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
