import HomeLayout from '@/components/Layout/HomeLayout';
import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd/lib";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import ProductDescription from '@/components/UI/ProductDescription';
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { toast } from "react-toastify";

import { addtocart, getSingleProduct, getcartData, favAction, getFavorites } from "@/store/slice/productSlice";

const Fav = () => {
  const dispatch = useDispatch()
  const { allproducts, singleproducts, addcart, getfav } = useSelector((state) => state.product);
  const { token } = useSelector((state) => state.auth);
  const [openTrack, setOpenTrack] = useState(false);
  const currentItems = getfav?.results?.data?.data;
  const [quantity, setQuantity] = useState(1);
  const [loadingFavorites, setLoadingFavorites] = useState({});

  const getSingleProductData = singleproducts?.results?.data?.data;


  const handleFavoriteClick = async (id, isFavorite) => {
    setLoadingFavorites((prev) => ({ ...prev, [id]: true }));
    const action = isFavorite ? "remove" : "add";
    try {
      await dispatch(favAction({ id, action })).unwrap();
      toast.success(
        `Product ${action === "add" ? "added to" : "removed from"} favorites`
      );
      dispatch(getFavorites()); // Refresh the favorites list

    } catch (error) {
      toast.error(`Failed to ${action} favorite: ${error.message}`);
    } finally {
      setLoadingFavorites((prev) => ({ ...prev, [id]: false }));
    }
  };

  useEffect(() => {
    
    dispatch(getFavorites())
  
  }, [])
  
  
  const handleTrackClose = () => {
    setOpenTrack(false);
  };

  const handleTrackOpen = (id) => {
    setOpenTrack(true);
    dispatch(getSingleProduct(id));
  };

  const handleSubtract = () => {
    if(quantity < 2){
      setQuantity(1)
    }else {
      setQuantity(quantity - 1)

    }
  }

  const handleAdd = () => {
    setQuantity(quantity + 1)
  }

 const addToCart = (id) => {

  const data = {
    product_id : id,
    quantity: quantity
  }
  dispatch(addtocart(data))
 }
  
 useEffect(() => {
  if(token){
    dispatch(getcartData());

  }
}, [ addcart, token]);

useEffect(() => {
  if(addcart.success){
    setOpenTrack(false);
    setQuantity(1)

  }
  

}, [addcart.success])
  return (
    <HomeLayout>
    <section>
        <div className=' bg-[#E7EBF6] py-10 md:py-0 md:mt-20 mt-8 px-4 lg:px-[20px]  xl:px-[100px] flex items-center justify-between ' >
            <div>
                <p>{"Home" < "Favorites" }  </p>
            <p className='md:text-[54px] text-[22px] font-bold text-black font-montserrat' >Favorite</p>

            </div>
            <div className='md:block hidden'>
                <img src='/images/favouritecartbanner.png' alt='' />
            </div>
        </div>
      
      <div className="py-10 px-6 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
      {!currentItems?.length && <div className='mt-4' ><p className='font-[500] text-4xl' >No record found</p></div>}
  
  
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 ">
        {currentItems?.map((items, index) => (
            <div key={index} className="mt-6 font-urbanist">
              <div className="relative ">
                <div
                  className="flex"
                  onClick={() => handleTrackOpen(items?.product?.product_id)}
                >
                  <Image
                  src={items?.product?.image_url ? items?.product?.image_url : "/images/topsell.png"}
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
                    handleFavoriteClick(items?.product?.product_id, items?.is_favorite);
                  }}
                >
                  {loadingFavorites[items?.product?.product_id] ? (
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
              {items?.product?.name}
              </p>
                <div className="text-black font-semibold md:text-[20px] text-[13px] pt-2 flex items-center ">
                  <img src="/images/Naira.png" alt="" className='md:h-fit md:w-fit h-[10px] w-[10px] mr-1' />
                  < >{Math.floor(items?.product?.unit_price)}</>
                </div>
               
              </div>
            </div>
          ))}
        {/* {currentItems?.map((items, index) => (
              <div key={index}  onClick={() => handleTrackOpen(items?.product?.id)} className="mt-6 cursor-pointer font-urbanist p-[13px] hover:border hover:border-1 hover:shadow-lg rounded-2xl ">
              <div className="flex ">
              <Image
                   src={items?.product?.image_url ? items?.product?.image_url : "/images/topsell.png"}
                   alt=""
                   className="w-[300px] h-[300px] object-contain rounded-lg "
                   width={500}
                   height={500}
                 />
               </div>
               <div className=" ">
                 <p className="text-black  font-semibold text-[20px] t">
                   {items?.product?.name}
                 </p>
                 <div className="text-black font-semibold text-[20px] flex items-center ">
                   <img src="/images/Naira.png" alt="" />
                   <p className="pl-1">{Math.floor(items?.product?.unit_price)}</p>
                 </div>
               </div>
             </div>
          ))} */}
        </div>
      </div>
      <Modal
        width={800}
        style={{ height: "", width: "600px" }}
        open={openTrack}
        onCancel={handleTrackClose}
        footer={false}
      >
           <ProductDescription singleproducts={singleproducts} getSingleProductData={getSingleProductData} handleSubtract={handleSubtract} handleAdd={handleAdd } addToCart={addToCart} quantity={quantity} addcart={addcart} />

       
      
      </Modal>
    </section>
    </HomeLayout>

  )
}

export default Fav