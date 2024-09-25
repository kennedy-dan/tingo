import HomeLayout from "@/components/Layout/HomeLayout";
import React, { useState, useEffect } from "react";
import { Modal } from "antd/lib";
import { useDispatch, useSelector } from "react-redux";
import { orderHistory } from "@/store/slice/productSlice";
import { format, parseISO } from "date-fns";

import Image from "next/image";
const Orderhistory = () => {
  const dispatch = useDispatch();
  const [openTrack, setOpenTrack] = useState(false);
  const { getOrder } = useSelector((state) => state.product);

  const handleTrackClose = () => {
    setOpenTrack(false);
  };

  const handleTrackOpen = () => {
    setOpenTrack(true);
  };

  useEffect(() => {
    dispatch(orderHistory());
  }, []);

  const data = getOrder?.results?.data?.data;

  return (
    <HomeLayout>
      <section className="py-20 px-4 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] font-montserrat ">
        {data?.length < 1 && <p>No Order History</p>}
        {data?.map((items, index) => (
          <div
            key={index}
            className="border border-gray-300 mb-8 rounded-lg md:p-[50px] p-[15px] "
          >
            <div className="border md:px-9 px-3 md:space-y-0 space-y-4 py-4 md:flex justify-between bg-[#EBF6F6] ">
              <div className="md:flex md:space-y-0 space-y-4">
                <div>
                  <p className="text-black  font-bold text-[17px] ">
                    Order number
                  </p>
                  <p className="text-gray-600 text-[16px] ">
                    {items?.reference}
                  </p>
                </div>
                <div className="md:ml-16">
                  <p className="text-black font-bold text-[17px] ">Date</p>
                  {/* {console.log(items?.payment?.date)} */}
                  {items?.payment?.date
                    ? format(parseISO(items.payment.date), "MMM d, yyyy")
                    : "N/A"}{" "}
                </div>{" "}
                <div className="md:ml-16">
                  <p className="text-black font-bold text-[17px] ">
                    Total aount
                  </p>
                  <p className="text-black text-[16px] ">N{items?.amount}</p>
                </div>
              </div>
              {items?.payment?.status === 'Completed' &&  <div>
                <button
                  onClick={handleTrackOpen}
                  className=" bg-secondary text-white py-4 px-4 rounded-lg font-semibold text-[16px] "
                >
                  Tracking Order
                </button>
              </div>}
             
            </div>
            {items?.items?.map((item, index) => (
              <div key={index}>
                <div className="md:flex py-4 md:space-x-3">
                  <Image
                  width={500}
                  height={500}
                    src={
                      item?.product?.image_url
                        ? item?.product?.image_url
                        : "/images/checkoutrightimg.png"
                    }
                    alt=""
                    className='md:w-[120px] md:h-[120px] w-[100px] h-[100px] object-contain'
                  />
                  <div className="md:flex text-[17px] justify-between w-full font-[500] ">
                    <div>
                      <p>{item?.product?.name}</p>
                      <p className="font-[400] py-1">QTY: {item?.quantity}</p>
                      <p>N {item?.unit_price}</p>

                      <div className='flex  ' >status: {items?.payment?.status === 'Completed'?<p className='text-green-600 font-[400] ml-2' >Successful</p>  : <p className='text-red-700 font-[400] ml-2 ' >Failed</p> }</div>
                    </div>
                    {/* <p className="text-green-400 mt-3 md:mt-0 text-[14px] font-semibold ">
                    Buy Again
                  </p> */}
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        ))}
      </section>
      <Modal open={openTrack} onCancel={handleTrackClose} footer={false}>
        <img src="/images/tracking.png" alt="" />
      </Modal>
    </HomeLayout>
  );
};

export default Orderhistory;
