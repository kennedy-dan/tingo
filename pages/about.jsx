import HomeLayout from "@/components/Layout/HomeLayout";
import React from "react";

const About = () => {
  return (
    <HomeLayout>
      <section>
        <div className="bg-[#E7EBF6]  py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px]  md:flex items-center justify-between flex  ">
          <div>
            <p>{"Product category" < "frozenfoods"} </p>
            <p className="md:text-[45px] text-[22px] font-bold text-black font-montserrat">
              About Us
            </p>
          </div>
          <div className="hidden md:block">
            <img src="/images/abb.png" alt="" />
          </div>
        </div>
        <div className="md:flex justify-between font-montserrat md:space-x-10 py-10 px-6 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]  ">
          <img src="/images/ab1.png" alt="" />
          <div>
            <p className="md:text-[30px] text-[17px] mt-10 font-semibold ">
              Our Vission
            </p>
            <p className="font-[400] md:text-[14px] text-[13px] pt-3 pb-2 ">
              At Tingo Express, we believe that grocery shopping should be fast,
              easy, and convenient. Our mission is to bring the supermarket
              experience right to your fingertips, offering a wide selection of
              quality products at competitive prices. Whether you’re stocking up
              on household essentials, fresh produce, or your favorite snacks,
              Tingo Express has got you covered.
            </p>
            <p className="md:text-[30px] text-[17px] mt-6 font-semibold ">
              Our Mission
            </p>
            <p className="font-[400] md:text-[14px] text-[13px] pt-3 pb-5 ">
              We are dedicated to providing a seamless online shopping
              experience, complete with quick delivery and exceptional customer
              service. Explore our extensive range of products, enjoy the
              convenience of shopping from home, and let us take care of the
              rest.
            </p>{" "}
            <p className="md:text-[30px] text-[17px] mt-6 font-semibold ">
              Core Values
            </p>
            <p className="font-[400] md:text-[14px] text-[13px] pt-3 pb-5 ">
              Your satisfaction is our priority—shop smarter, shop faster,
              with Tingo Express!
            </p>
          </div>
        </div>
        <div className="md:flex justify-between font-montserrat md:space-x-10 py-10 px-6 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
          <div className="md:w-1/2">
            <p className="md:text-[30px] text-[18px] mt-10 font-semibold ">
              Who We Are
            </p>
            <p className="font-[400] md:text-[16px] text-[13px] pt-3 pb-5 ">
              Welcome to Tingo Express, where grocery shopping is made fast,
              easy, and convenient.
            </p>
          </div>

          <div className="md:w-1/2">
            <img src="/images/about2.png" alt="" />
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default About;
