import HomeLayout from "@/components/Layout/HomeLayout";
import React from "react";

const Privacy = () => {
  return (
    <HomeLayout>
      <section>
        <div className="bg-[#E7EBF6] py-20 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] flex items-center justify-between ">
          <div>
            {/* <p>{"Product category" < "frozenfoods"} </p> */}
            <p className="md:text-[54px] text-[22px] font-bold text-black font-montserrat">
              Privacy Policy
            </p>
          </div>
          <div className="md:block hidden">
            <img src="/images/privacycartbanner.png" alt="" />
          </div>
        </div>
        <div className="py-20 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px] font-urbanist xl:py-[100px]">
          <p>
            Welcome to Tingo Express! Your privacy is important to us, and we
            are committed to protecting your personal information. This Privacy
            Policy outlines how Tingo Express collects, uses, and safeguards
            your information when you use our website.
          </p>
          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              1.Information We Collect
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              <span className="font-[600]">Personal Information:</span> When you
              register, make a purchase, or contact us, we may collect personal
              information such as your name, email address, phone number,
              shipping address, and payment details.
            </p>
            <p>
              <span className="font-[600]"> Non-Personal Information:</span> We
              may collect non-personal information such as your IP address,
              browser type, and browsing behavior to improve our website and
              services
            </p>
          </div>
          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              2.How We Use Your Information
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              <span className="font-[600]">To Process Orders:</span> We use your
              personal information to fulfill your orders, process payments, and
              deliver products to your specified address.
            </p>
            <p>
              <span className="font-[600]"> To Improve Our Services:</span> Your
              feedback and browsing data help us enhance our website, products,
              and customer service. services
            </p>
            <p>
              <span className="font-[600]"> To Communicate With You:</span> We
              may send you order updates, promotional offers, and important
              notices. You can opt-out of marketing communications at any time.
              services
            </p>
          </div>

          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              3.Data Protection
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              We implement a variety of security measures to ensure the safety
              of your personal information. However, please note that no method
              of transmission over the internet or electronic storage is 100%
              secure.
            </p>
          </div>

          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              4. Sharing Your Information
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              Tingo Express does not sell, trade, or otherwise transfer your
              personal information to third parties, except for trusted partners
              who assist us in operating our website, conducting our business,
              or servicing you, provided they agree to keep your information
              confidential.
            </p>
          </div>

          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              5. Cookies
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              Our website uses cookies to enhance your experience. Cookies are
              small files that are stored on your device and help us recognize
              your preferences. You can choose to disable cookies through your
              browser settings, but this may affect your experience on our site.
            </p>
          </div>
          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              6. Your Rights
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              You have the right to access, update, or delete your personal
              information. If you wish to exercise these rights, please contact
              us at [insert contact email].
            </p>
          </div>
          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              7. Changes to This Privacy Policy
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              Tingo Express may update this Privacy Policy from time to time.
              Any changes will be posted on this page with an updated effective
              date.
            </p>
          </div>
          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              8. Contact Us
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
          </div>
          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              Tingo Express
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              6 Ahmed Onibudo Street, VI, Lagos <br />
              Email: Support@tingoexpress.com
            </p>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Privacy;
