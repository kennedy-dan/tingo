import HomeLayout from "@/components/Layout/HomeLayout";
import React from "react";

const DataPrivacy = () => {
  return (
    <HomeLayout>
      <section>
        <div className="bg-[#E7EBF6] py-20 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] flex items-center justify-between ">
          <div>
            <p>{"Product category" < "frozenfoods"} </p>
            <p className="md:text-[54px] text-[22px] font-bold text-black font-montserrat">
              Data Privacy Statement
            </p>
          </div>
          <div className='md:block hidden' >
            <img src="/images/privacycartbanner.png" alt="" />
          </div>
        </div>

        <div className="py-20 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px] font-urbanist xl:py-[100px]">
          <p className="font-bold md:text-[20px] text-[16px] capitalize">
            Data Privacy Statement
          </p>
          <p>
            Protecting your privacy is as important to us as it is to you. For
            us, it’s more than just making sure we comply with the relevant
            legislation; you trust us with your personal information, and we
            respect that trust. This Privacy Statement explains why and how we
            collect, use, and store your personal information. Our processing of
            personal data must be transparent and secure, in conformity with the
            privacy legislations of Nigeria as contained in Nigeria Data
            Protection Regulation (NDPR) act 2019, the Nigeria Data Protection
            Act (NDPA) of 2023. the Protection of Personal Information Act
            (POPIA), and the European Union General Data Protection Regulation
            (GDPR). This Privacy Statement contains the information required by
            NDPR, NDPA, POPIA, GDPR and other relevant privacy legislation.
          </p>
          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              1.What is this notice about?
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              We want you to understand who you are sharing your information
              with, what kind of information we collect and how we use the
              information. In your day-to-day dealings with the Tingo Express we
              obtain information about you. We want you to know exactly what
              that information is and what we do with it. This Privacy Statement
              describes how we collect, use, process, and disclose your personal
              information, in conjunction with your access to and use of RSNL’s
              web and app platforms. This Privacy Statement is part of our
              agreement with you.  This Privacy Statement forms part of our
              agreement with you. You should read it along with the terms and
              conditions that apply. These terms and conditions can be accessed
              on the specific RSNL websites or products. This notice may change
              from time to time. From time to time, we may have to amend this
              notice to accommodate changes in our business or services or if
              legal requirements change. It is your responsibility to check that
              you have read the latest version.
            </p>
          </div>
    

        </div>
      </section>
    </HomeLayout>
  );
};

export default DataPrivacy;
