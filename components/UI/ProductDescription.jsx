import React from "react";
import { Modal } from "antd/lib";
import { ClipLoader } from "react-spinners";
import Image from "next/image";

const ProductDescription = ({
  openTrack,
  handleTrackClose,
  singleproducts,
  getSingleProductData,
  handleSubtract,
  quantity,
  handleAdd,
  addcart,
  addToCart,
}) => {
  return (
    <div>
      {singleproducts?.isLoading && (
        <div className="w-full h-[300px] items-center justify-center flex">
          <ClipLoader className="w-9 h-9" />
        </div>
      )}
      {!singleproducts?.isLoading && (
        <div className="md:flex md:mt-0 mt-4 md:space-x-5 font-montserrat">
          <div>
            <Image
              src={
                getSingleProductData?.image_url
                  ? getSingleProductData?.image_url
                  : "/images/topsell.png"
              }
              alt=""
              className="md:w-[300px] w-full h-[300px] md:object-contain object-cover rounded-lg "
              width={500}
              height={500}
            />
          </div>
          <div>
            <p className="text-[20px] md:mt-0 mt-4 font-semibold  ">
              {getSingleProductData?.name}
            </p>

            <p className="pt-4 font-[500] text-black">
              SKU: {getSingleProductData?.sku}
            </p>
            <p className="pt-4 font-[500] text-black ">
              category: {getSingleProductData?.category?.name}{" "}
              {/* <span>
                {" "}
                | similar product from {
                  getSingleProductData?.category?.name
                }{" "}
              </span>{" "} */}
            </p>

            <div className="text-black font-[500] md:font-semibold md:text-[24px] text-[32px] pt-3 space-x-1 font-urbanist flex items-center ">
              <div>
                <img src="/images/Naira.png" alt="" />
              </div>
              <p>{Math.floor(getSingleProductData?.unit_price)}</p>
            </div>
            <p className="pt-2 font-[500]">Quantity</p>
            <div className="flex md:mt-0 mt-2  items-center">
              <button onClick={handleSubtract}>
                <img src={"/images/sub.png"} alt="" />
              </button>
              <p className="text-black font-bold px-2 text-[13px]">
                {quantity}
              </p>
              <button onClick={handleAdd}>
                <img src={"/images/add.png"} alt="" />
              </button>
            </div>
            <button
              onClick={() => addToCart(getSingleProductData?.product_id)}
              className="bg-secondary w-[200px] text-white mt-6 font-[500] tet-[17px]  py-3 rounded-md "
            >
              {addcart?.isLoading ? (
                <ClipLoader size={12} color="white" />
              ) : (
                <div className="flex space-x-4 items-center justify-center">
                  <img alt="" src="/images/cartwhiteicon.png" />

                  <p>Add to cart</p>
                </div>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
