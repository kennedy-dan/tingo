import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd/lib";
import {
  addtocart,
  getSingleProduct,
  getcartData,
  favAction,
  getFavorites,
  getAllProducts,
  getSingleCats,
  
} from "@/store/slice/productSlice";
import { ClipLoader } from "react-spinners";
import ProductDescription from "../UI/ProductDescription";
import Image from "next/image";
import { toast } from "react-toastify";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { useRouter } from "next/router";

const ProductsId = ({ prodid }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { singlecats, singleproducts, addcart } = useSelector(
    (state) => state.product
  );
  const { token } = useSelector((state) => state.auth);
  const [openTrack, setOpenTrack] = useState(false);
  const [loadingFavorites, setLoadingFavorites] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const metaData = singlecats?.results?.data?.data?.pagination_meta?.total;
  const data = singlecats?.results?.data?.data?.data;
  const getSingleProductData = singleproducts?.results?.data?.data;

  const itemsPerPage = 15;

  const handleFavoriteClick = async (id, isFavorite) => {
    if (!token) {
      toast.info("Login to add to favorite");
      router.push("/login");
      return;
    }
    setLoadingFavorites((prev) => ({ ...prev, [id]: true }));
    const action = isFavorite ? "remove" : "add";
    try {
      await dispatch(favAction({ id, action })).unwrap();
      toast.success(
        `Product ${action === "add" ? "added to" : "removed from"} favorites`
      );
      dispatch(getFavorites()); // Refresh the favorites list
      dispatch(getSingleCats({id:prodid}));
    } catch (error) {
      toast.error(`Failed to ${action} favorite: ${error.message}`);
    } finally {
      setLoadingFavorites((prev) => ({ ...prev, [id]: false }));
    }
  };

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(data?.slice(indexOfFirstItem, indexOfLastItem) || []);
  }, [currentPage, data]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(getSingleCats({page: page, id:prodid }))
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

  const catsName = singlecats?.results?.data?.data?.data[0]?.category?.name;
  const catsImg = singlecats?.results?.data?.data?.data[0]?.category?.image_url;

 const from = singlecats?.results?.data?.data?.pagination_meta?.from
  const to = singlecats?.results?.data?.data?.pagination_meta?.to
  return (
    <section>
      {singlecats?.isLoading && <div className='flex items-center justify-center h-[30vh]' ><ClipLoader /></div>}
      {!singlecats?.isLoading && <>
      
        <div className="bg-[#E7EBF6] py-10 md:py-0 mt-20 px-4 lg:px-[20px]  xl:px-[100px]  flex items-center justify-between ">
        <div>
          {/* <p>{"Product category" } </p> */}
          <p className="md:text-[54px] text-[32px] font-bold text-black font-montserrat">
            {catsName}
          </p>
        </div>
        <div className="hidden md:block">
          <Image priority width={500} height={500} src={catsImg? catsImg : "/images/frozencartbanner.png"} className='h-[350px] object-contain ' /> 
          
        </div>
      </div>

      <div className="py-20 px-4 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
        <div className="flex justify-between ">
          <p className="md:text-[24px] text-[17px] font-montserrat font-semibold ">
          Showing {from}-{to} of {metaData} results
          </p>

          <p className="md:text-[24px] hidden text-[14px] font-montserrat font-semibold ">
            Sort by: Price Low To High
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-2  gap-6 ">
          {data?.map((items, index) => (
            <div key={index} className="mt-6 font-urbanist">
              <div className="relative">
                <div
                  className="flex"
                  onClick={() => handleTrackOpen(items?.product_id)}
                >
                  <Image
                    src={
                      items?.image_url
                        ? items?.image_url
                        : "/images/topsell.png"
                    }
                    alt=""
                    className=" md:h-[300px] h-[200px] md:object-contain object-cover rounded-lg cursor-pointer"
                    width={500}
                    height={500}
                  />
                </div>
                <div
                  className="absolute top-[10%] z-[100] right-[10%] md:right-[15%] cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFavoriteClick(items?.product_id, items?.is_favorite);
                  }}
                >
                  {loadingFavorites[items?.product_id] ? (
                    <ClipLoader size={20} color="#000000" />
                  ) : items?.is_favorite ? (
                    <MdOutlineFavoriteBorder size={26} color="red" />
                  ) : (
                    <MdOutlineFavoriteBorder size={26} color="black"   />
                  )}
                </div>
              </div>

              <div className="">
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
      <div className="flex py-20 justify-center">
        <div className="flex justify-center">
          <Pagination
                 current={currentPage}
                 total={metaData || 0}
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
      </>}


    </section>
  );
};

export default ProductsId;
