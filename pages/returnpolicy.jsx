import HomeLayout from "@/components/Layout/HomeLayout";
import React from "react";

const Return = () => {
  return (
    <HomeLayout>
      <section>
        <div className="bg-[#E7EBF6] py-20 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] flex items-center justify-between  ">
          <div>
            {/* <p>{"Product category" < "frozenfoods"} </p> */}
            <p className="md:text-[54px] text-[22px] font-bold text-black font-montserrat">
              Return Policy
            </p>
          </div>
          <div className='md:block hidden' >
            <img src="/images/privacycartbanner.png" />
          </div>
        </div>

        <div className="py-20 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px] font-urbanist xl:py-[100px]">
          <p>
            At Tingo Express, we value your satisfaction and strive to provide
            you with the best shopping experience. We understand that sometimes
            you may need to return or exchange a product, and we are here to
            assist you with our return policy. Please read the following
            guidelines regarding returns and exchanges:
          </p>
          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              1.Eligibility for Returns:
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              We accept returns within 24 hours of the original purchase date.
              To be eligible for a return, the item must be unused, in its
              original packaging, and in the same condition as when it was
              purchased.
            </p>
            <p>
              Certain products may be excluded from our return policy due to
              hygiene or safety reasons. These include but are not limited to
              opened food items, personal care products, and intimate apparel.
              Please check with our customer service representatives for more
              information on specific product categories.
            </p>
          </div>
          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              2.Return Process
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              To initiate a return, please contact our customer service team
              either by phone or email to obtain a return authorization (RA)
              number. This number must be clearly marked on the package to
              ensure proper processing. When returning the item, please include
              a copy of the original receipt or proof of purchase. This will
              help us identify your transaction and expedite the return process.
              Customers are responsible for any shipping or handling fees
              associated with returning the product, unless the return is due to
              an error on our part (e.g., wrong item shipped or defective
              product). For in-store purchases, returns can be made directly at
              our customer service desk. Online purchases may require a
              different process, which will be communicated to you by our
              customer service team.
            </p>
            <p>
              Products purchased through our online store or physical retail
              locations are eligible for returns as per our policy.
            </p>
          </div>

          <div className="mt-10">
            <p className="font-bold md:text-[20px] text-[16px] capitalize">
              3.Refunds and Store Credit:
            </p>
            <p className="md:text-[16px] text-[13px]  ">
              Once we receive and inspect the returned item, we will notify you
              regarding the status of your refund or exchange. If eligible for a
              refund, the amount will be credited back to the original payment
              method used for the purchase. Please note that it may take a few
              business days for the refund to appear on your statement,
              depending on your financial institution. In some cases, store
              credit may be offered as an alternative to a refund. This credit
              can be used towards future purchases at [Your Store Name].
            </p>
          </div>

     
        </div>
      </section>
    </HomeLayout>
  );
};

export default Return;
