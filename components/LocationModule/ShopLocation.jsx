import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ShopLocation = () => {
  const { getcats, getstore, topsell, singleproducts, addcart } = useSelector((state) => state.product);
  const storedata = getstore?.results?.data?.data

  const tngorea = [
    {
      place: "Tingo supermarket- Ikeja",
      loc: "Tingo mall- ikeja 22, adefowora str, off Adefisan. Ikeja, Lagos Nigeria",
      time: " 9:00am - 10:00pm",
      email: "Tingo.ikeja@Tignoexpress.com",
      p1: "08023476581",
      p2: "08023476581",
    },
    {
      place: "Tingo supermarket- Ikeja",
      loc: "Tingo mall- ikeja 22, adefowora str, off Adefisan. Ikeja, Lagos Nigeria",
      time: " 9:00am - 10:00pm",
      email: "Tingo.ikeja@Tignoexpress.com",
      p1: "08023476581",
      p2: "08023476581",
    },
  ];
  return (
    <section>
      <div className="bg-[#E7EBF6] py-20 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px]  md:flex items-center justify-between ">
        <div>
          <p>{"Product category" < "frozenfoods"} </p>
          <p className="md:text-[39px]  text-[22px] font-bold text-black font-montserrat">
            Explore Tingos Store location
          </p>
        </div>
        <div className="md:flex hidden">
          <img src="/images/locationcartbanner.png" alt='' />
        </div>
      </div>
      <div className="py-10 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] font-montserrat ">
        {storedata?.map((data, index) => (
          <div key={index}  className="border rounded-xl mb-9 border-gray-300 md:p-[50px] p-[7px]    w-full">
            <p className="font-[500] text-[18px] md:text-[24px]"> {data?.location}</p>

            <div className="mt-2 flex justify-between items-center font-[400] text-[13px] md:text-[16px]">
              <p className='md:py-0 py-3' >{data.location}</p>
              <div className='md:py-0 py-3'>
                <p>Opening time</p>
                <p>9:00am - 10:00pm</p>
              </div>
            </div>
                <p className="text-gray-400 text-[16px]  md:text-[18px] md:mb-2 " >Contact Information</p>
            <div className='md:space-y-4 md:text-base text-[13px]'>

                <p>Tingo.ikeja@Tignoexpress.com</p>
                <p>08023476581</p>
                {/* <p>{data.p2}</p> */}
            </div>
            <div className='flex md:justify-end my-4' >
                <p className="md:text-[16px] text-[14px] font-[400] text-primary " >Show direction on map</p>
            </div>
            <Link href={`/location/${data.location}`} >
            <button className="w-full bg-secondary mt-3 text-white flex justify-center space-x-3 py-4 rounded-lg  " >
                <img src='/images/cartwhiteicon.png' alt='' />
                <p className='md:text-[16px] text-[14px] font-semibold' >View Store page</p>
            </button>
            </Link>
      
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopLocation;
