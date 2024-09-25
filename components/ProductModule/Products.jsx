import Link from "next/link";
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
} from "@/store/slice/productSlice";
import { ClipLoader } from "react-spinners";
import ProductDescription from "../UI/ProductDescription";
import Image from "next/image";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Products = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { allproducts, singleproducts, addcart } = useSelector(
    (state) => state.product
  );
  const [openTrack, setOpenTrack] = useState(false);
  const { token } = useSelector((state) => state.auth);

  const [currentPage, setCurrentPage] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const metaData = allproducts?.results?.data?.data?.pagination_meta?.total;
  const data = allproducts?.results?.data?.data?.data;
  const getSingleProductData = singleproducts?.results?.data?.data;
  const [loadingFavorites, setLoadingFavorites] = useState({});
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
      dispatch(getAllProducts());
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

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(getAllProducts({ page: page }));
  };

  useEffect(() => {
    dispatch(getAllProducts({ page: currentPage }));
  }, [dispatch, currentPage]);
  const addToCart = (id) => {
    const data = {
      product_id: id,
      quantity: quantity,
    };
    dispatch(addtocart(data));
  };
  useEffect(() => {
    if (addcart.success) {
      setOpenTrack(false);
      setQuantity(1);
    }
  }, [addcart.success]);

  useEffect(() => {
    if (token) {
      dispatch(getcartData());
    }
  }, [addcart, token]);

  // useEffect(() => {
  //   dispatch(getAllProducts())
  // }, []);

  return (
    <section>
      <div className="bg-[#E7EBF6] py-20 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] flex items-center justify-between ">
        <p className="md:text-[54px] text-[22px] font-bold text-black font-montserrat ">
          Products
        </p>
        <div className="md:block hidden">
          <img src="/images/prodcartbanner.png" alt="" />
        </div>
      </div>
      {allproducts?.isLoading && <div className='flex items-center justify-center h-[30vh]' ><ClipLoader /></div>}

      {!allproducts?.isLoading && (
        <>
          <div className="py-10 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
            <p className="md:text-[28px] text-[18px] font-montserrat font-semibold ">
              Recent Products
            </p>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 ">
              {data?.map((items, index) => (
                <div key={index} className="mt-6 font-urbanist">
                  <div className="relative">
                    <div
                      className="flex"
                      onClick={() => handleTrackOpen(items?.product_id)}
                    >
                      <Image
                        src={
                          items.image_url
                            ? items.image_url
                            : "/images/topsell.png"
                        }
                        alt=""
                        className="md:h-[300px] h-[200px] md:object-contain object-cover rounded-lg cursor-pointer"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div
                      className="absolute top-[10%] z-[100] right-[10%] md:right-[15%] cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFavoriteClick(
                          items?.product_id,
                          items?.is_favorite
                        );
                      }}
                    >
                      {loadingFavorites[items?.product_id] ? (
                        <ClipLoader size={20} color="#000000" />
                      ) : items?.is_favorite ? (
                        <MdOutlineFavoriteBorder size={26} color="red" />
                      ) : (
                        <MdOutlineFavoriteBorder size={26} color="black" />
                      )}
                    </div>
                  </div>

                  <div className="">
                    <p className="text-black  font-semibold md:text-[20px] text-[13px] md:pt-0 pt-1">
                      {items?.name}
                    </p>
                    <div className="text-black font-semibold md:text-[20px] text-[13px] pt-2 flex items-center ">
                      <img
                        src="/images/Naira.png"
                        alt=""
                        className="md:h-fit md:w-fit h-[10px] w-[10px] mr-1"
                      />
                      <>{Math.floor(items?.unit_price)}</>
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
        </>
      )}
    </section>
  );
};

export default Products;
