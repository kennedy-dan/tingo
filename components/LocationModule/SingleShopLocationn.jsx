import React, { useState, useEffect } from "react";
import { Modal } from "antd/lib";
import { Pagination } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  addtocart,
  getSingleProduct,
  getcartData,
  getSingleCats,
  getAllProducts
} from "@/store/slice/productSlice";
import ProductDescription from "../UI/ProductDescription";
import Image from "next/image";

const SingleShopLocationn = ({name}) => {
  const dispatch = useDispatch();
  const [openTrack, setOpenTrack] = useState(false);
  const { getcats, allproducts, singleproducts, addcart, singlecats } = useSelector(
    (state) => state.product
  );

  const { token } = useSelector((state) => state.auth);
  // console.log(id)

  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState("product");
  const [quantity, setQuantity] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  let data;
  let metadata

  
  if ((type === "product")) {
    data = allproducts?.results?.data?.data?.data;
    metadata = allproducts?.results?.data?.data?.pagination_meta?.total;

  }
  if(type === "cats"){
    data = singlecats?.results?.data?.data?.data
  metadata = singlecats?.results?.data?.data?.pagination_meta?.total;

  }

  const getSingleProductData = singleproducts?.results?.data?.data;

  const itemsPerPage = 15;

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(data?.slice(indexOfFirstItem, indexOfLastItem) || []);
  }, [currentPage, data]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  if ((type === "product")) {
    dispatch(getAllProducts({ page: page }));

  }
  if(type === "cats"){
    dispatch(getSingleCats({page: page, id:id }))

  }


  };

  const handleTrackClose = () => {
    setOpenTrack(false);
  };

  const handleTrackOpen = (id) => {
    setOpenTrack(true);
    dispatch(getSingleProduct(id));
  };

  const handleSubtract = () => {
    if (quantity < 2) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const catsData = getcats?.results?.data;

  const addToCart = (id) => {
    const data = {
      product_id: id,
      quantity: quantity,
    };
    dispatch(addtocart(data));
  };

  useEffect(() => {
    if (token) {
      dispatch(getcartData());
    }
  }, [addcart, token]);

  useEffect(() => {
    if (addcart.success) {
      setOpenTrack(false);
      setQuantity(1);
    }
  }, [addcart.success]);

  const fetchCats = (id) => {
    dispatch(getSingleCats({id:id}));
    setType("cats");
  };

  const handleprodset = () => {
    setType("product");

  }

  let from 
  let to
  if ((type === "cats")) {
   from = singlecats?.results?.data?.data?.pagination_meta?.from
   to = singlecats?.results?.data?.data?.pagination_meta?.to
  }

  if ((type === "product")) {
    from = allproducts?.results?.data?.data?.pagination_meta?.from;
    to = allproducts?.results?.data?.data?.pagination_meta?.to;

  }
  


  return (
    <section>
      <div className="bg-[#E7EBF6] py-20 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px]  md:flex items-center justify-between ">
        <div>
          <p>{"Product category" < "frozenfoods"} </p>
          <p className="md:text-[39px] text-[22px] font-bold text-black font-montserrat">
            {name}
          </p>
        </div>
        <div className="md:flex hidden">
          <img src="/images/locationcartbanner.png" alt="" />
        </div>
      </div>
      <div className="py-20 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] md:flex md:space-x-10 justify-between font-montserrat">
        <div className="md:w-[25%] shadow-md h-fit border   rounded-lg ">
          <div className="font-bold pl-8 py-2 text-[18px]">
            <p>Categories</p>
          </div>
          <hr />

          <div className=' py-4 pl-8 cursor-pointer' onClick={handleprodset} >
            <p>All Products</p>
          </div>

          <div className="space-y-10 pl-8 py-4">
            {catsData?.map((info, index) => (
              <div
                className="cursor-pointer"
                onClick={() => fetchCats(info?.category_id)}
                key={index}
              >
                <p>{info?.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[75%] mt-20 md:mt-0 ">
          <div className="">
            <div className="flex justify-between ">
              <p className="md:text-[24px] text-[14px] font-montserrat font-semibold ">
                Showing {from}-{to} of {metadata} results
              </p>

              <p className="md:text-[24px] hidden text-[14px] font-montserrat font-semibold ">
                Sort by: Price Low To High
              </p>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-2 md:gap-6 gap3 ">
              {data?.map((items, index) => (
                <div
                  key={index}
                  onClick={() => handleTrackOpen(items?.product_id)}
                  className="mt-6 cursor-pointer font-urbanist p-[13px] hover:border hover:border-1 hover:shadow-lg rounded-2xl "
                >
                  <div className="flex ">
                    <Image
                      src={
                        items.image_url
                          ? items.image_url
                          : "/images/topsell.png"
                      }
                      alt=""
                      className=" md:h-[300px] h-[200px] md:object-contain object-cover  rounded-lg "
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className=" ">
                  <p className="text-black  font-semibold md:text-[20px] text-[13px] md:pt-0 pt-1">
                  {items?.name}
                </p>
                <div className="text-black font-semibold md:text-[20px] text-[13px] pt-2 flex items-center ">
                  <img src="/images/Naira.png" alt="" className='md:h-fit md:w-fit h-[10px] w-[10px] mr-1' />
                  < >{Math.floor(items?.unit_price)}</>
                </div>
                    
                 
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-20 justify-center">
        <div className="flex justify-center">
          <Pagination
            current={currentPage}
            total={metadata || 0}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
      <Modal
        width={800}
        style={{ height: "", width: "600px" }}
        open={openTrack}
        onCancel={handleTrackClose}
        footer={false}
      >
        <ProductDescription
          singleproducts={singleproducts}
          getSingleProductData={getSingleProductData}
          handleSubtract={handleSubtract}
          handleAdd={handleAdd}
          addToCart={addToCart}
          quantity={quantity}
          addcart={addcart}
        />
      </Modal>
    </section>
  );
};

export default SingleShopLocationn;
