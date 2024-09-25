import HomeLayout from "@/components/Layout/HomeLayout";
import React from "react";

const Cookies = () => {
  return (
    <HomeLayout>
      <section>
        <div className="bg-[#E7EBF6] px-[100px] flex items-center justify-between ">
          <div>
            <p>{"Product category" < "frozenfoods"} </p>
            <p className="md:text-[54px] text-[22px] font-bold text-black font-montserrat">
              Cookies Policy
            </p>
          </div>
          <div>
            <img src="/images/privacycartbanner.png" alt="" />
          </div>
        </div>

        <div className="py-20 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px] font-urbanist xl:py-[100px]">
          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              What Are Cookies:
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              As is common practice with almost all professional websites this
              site uses cookies, which are tiny files that are downloaded to
              your computer, to improve your experience. This section describes
              what information they gather, how we use it and why we sometimes
              need to store these cookies. We will also share how you can
              prevent these cookies from being stored however this may downgrade
              or ‘break’ certain elements of the site’s functionality.
            </p>
          </div>
          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              How We Use Cookies{" "}
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              We use cookies for a variety of reasons detailed below.
              Unfortunately, in most cases, there are no industry standard
              options for disabling cookies without completely disabling the
              functionality and features they add to this site. It is
              recommended that you leave on all cookies if you are not sure
              whether you need them or not in case they are used to provide a
              service that you use.
            </p>
          </div>
          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              Disabling Cookies{" "}
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              You can prevent the setting of cookies by adjusting the settings
              on your browser (see your browser Help for how to do this). Be
              aware that disabling cookies will affect the functionality of this
              and many other websites that you visit. Disabling cookies will
              usually result in also disabling certain functionality and
              features of this site. Therefore, it is recommended that you do
              not disable cookies.{" "}
            </p>
          </div>
          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              The Cookies We Set
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              This site offers newsletter or email subscription services and
              cookies may be used to remember if you are already registered and
              whether to show certain notifications which might only be valid to
              subscribe/unsubscribed users. When you submit data to through a
              form such as those found on contact pages or comment forms cookies
              may be set to remember your user details for future
              correspondence. In order to provide you with a great experience on
              this site we provide the functionality to set your preferences for
              how this site runs when you use it. In order to remember your
              preferences, we need to set cookies so that this information can
              be called whenever you interact with a page that is affected by
              your preferences.
            </p>
          </div>{" "}
          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              Third-Party Cookies
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              In some special cases, we also use cookies provided by trusted
              third parties. The following section details which third-party
              cookies you might encounter through this site. This site uses
              Google Analytics which is one of the most widespread and trusted
              analytics solutions on the web to help us to understand how you
              use the site and ways that we can improve your experience. These
              cookies may track things such as how long you spend on the site
              and the pages that you visit so we can continue to produce
              engaging content. For more information on Google Analytics
              cookies, see the official Google Analytics page. From time to time
              we test new features and make subtle changes to the way that the
              site is delivered. When we are still testing new features these
              cookies may be used to ensure that you receive a consistent
              experience whilst on the site whilst ensuring we understand which
              optimizations our users appreciate the most. We also use social
              media buttons and plugins on this site that allow you to connect
              with your social network in various ways. For these to work the
              following social media sites including; Facebook, and Twitter,
              will set cookies through our site which may be used to enhance
              your profile on their site or contribute to the data they hold for
              various purposes outlined in their respective privacy policies.
            </p>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Cookies;
