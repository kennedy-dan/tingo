import React from "react";
import HomeLayout from "@/components/Layout/HomeLayout";

const Contact = () => {
  return (
    <HomeLayout>
      <section>
        <div className="bg-[#E7EBF6] py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] md:flex items-center justify-between ">
          <div>
            <p>{"Product category" < "frozenfoods"} </p>
            <p className="md:text-[54px] text-[22px] font-bold text-black font-montserrat">
              Contact Us
            </p>
          </div>
          <div className="md:flex hidden">
            <img src="/images/contactcartbanner.png" alt="" />
          </div>
        </div>

        <div className="md:flex py-20 px-6 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] font-montserrat">
          <div className="md:w-1/2 font-montserrat ">
            <p className="font-semibold text-[18px] md:text-[34px] ">
              Leave A Message
            </p>
            <div className="md:mt-16 mt-10">
              <p className="font-semibold md:text-base text-[16px]">
                Enter Full Name
              </p>
              <input
                placeholder="Enter Your Email Address"
                className=" w-full md:w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
              />
            </div>{" "}
            <div className="mt-4">
              <p className="font-semibold md:text-base text-[16px]">Email</p>
              <input
                placeholder="Enter Email"
                className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
              />
            </div>
            {/* <div className="flex justiy-end ">
              <p className="text-[#4FA9AB] text-[16px]">Forget password</p>
            </div> */}
            <div className="mt-4">
              <p className="font-semibold md:text-base text-[16px]">Message</p>
              <textarea
                placeholder="Type Your Message Here"
                className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
              />
            </div>
            <div className="mt-10">
              <button className="w-[96%] bg-secondary text-white py-6 rounded-lg font-semibold text-[16px] ">
                Send Message
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:mt-0 mt-20 ">
            <p className="font-semibold text-[18px] md:text-[34px] ">
              We would love to hear from you!
            </p>
            <p className="md:text-[20px] text-[16px] mt-8 md:mt-16 font-semibold ">
              HEAD OFFICE
            </p>
            <p className="font-[400] md:text-[16px] text-[13px] pt-3 pb-2 ">
              6 Ahmed Onibudo street, VI, Lagos.
            </p>
            {/* <p className="md:text-[20px] text-[16px]] mt-1 font-semibold ">
              BUSINESS HOURS
            </p>
            <p className="font-[400] md:text-[16px] text-[13px] pt-3 pb-5 ">
              Lorem ipsum dolor sit amet consectetur. Sodales velit elementum
              gravida nibh ultrices urna egestas lectus tempus. Eu eu dui tellus
              mattis feugiat et elementum convallis sit. Velit porttitor nam
              auctor a commodo at risus nisl elementum.
            </p>{" "} */}
            <p className="md:text-[20px] text-[13px] mt-1 font-semibold ">
              CONTACT INFORMATION
            </p>
            <p className="font-[400] md:text-[16px] text-[13px] pt-3 pb-5 ">
              support@tingoexpress.com
            </p>
            <div className="flex text-[13px] md:text-[20px] mt-1 pb-4 font-semibold justify-between">
              <p>Tingo’s Supermarket location</p>
              <p>Phone Number</p>
            </div>
            <div className="flex justify-between md:text-base text-[13px] font-[500]">
              <div className="border border-1 py-3 px-2 border-gray-400 rounded-xl">
                <p>Tingo supermarket- Ikeja</p>
              </div>
              <div className="border border-1 py-3 px-2 border-gray-400 rounded-xl">
                <p>08023476581</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Contact;
