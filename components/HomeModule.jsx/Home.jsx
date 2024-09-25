import React, { useState, useEffect } from "react";
import { Carousel as AntCarousel, Select, ConfigProvider } from "antd";
import Link from "next/link";
import { Modal } from "antd/lib";
import { useDispatch, useSelector } from "react-redux";
import {
  getcategories,
  getStores,
  topSell,
  getSingleProduct,
  addtocart,
  getcartData,
} from "@/store/slice/productSlice";
import Image from "next/image";
import ProductDescription from "../UI/ProductDescription";

const Home = () => {
  const dispatch = useDispatch();
  const [openTrack, setOpenTrack] = useState(false);
  const [openLoc, setOpenLoc] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loc, setLoc] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const { getcats, getstore, topsell, singleproducts, addcart } = useSelector(
    (state) => state.product
  );
  const { token, user } = useSelector((state) => state.auth);

  const storedata = getstore?.results?.data?.data;
  const getSingleProductData = singleproducts?.results?.data?.data?.data;

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 568);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleTrackClose = () => {
    setOpenTrack(false);
  };

  const handleTrackOpen = (id) => {
    setOpenTrack(true);
    dispatch(getSingleProduct(id));
  };

  const handleLocClose = () => {
    setOpenLoc(false);
  };

  const handleLocOpen = () => {
    setOpenLoc(true);
  };

  useEffect(() => {
    dispatch(getStores());
    dispatch(topSell());
  }, []);

  const topselldata = topsell?.results?.data?.data;

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
    dispatch(addtocart(data)).then(({ error }) => {
      if (!error) {
        dispatch(getcartData());
      }
    });
  };

  // useEffect(() => {
  //   if (user?.first_name) {
  //     // dispatch(getcartData());
  //   }
  // }, [addcart]);

  useEffect(() => {
    if (addcart.success) {
      setOpenTrack(false);
      setQuantity(1);
    }
  }, [addcart.success]);

  const carouselbg = [
    {
      img: "/images/bghero.png",
      imgMobile: "/images/bgheromo.png",
    },
    // {
    //   img: "/images/bghero1.png",
    // },
  ];

  useEffect(() => {
    // if (token) {
    dispatch(getcategories());
    // }
  }, []);

  const catsData = getcats?.results?.data;
  const handleSelected = (e) => {
    setLoc(e);
  };
  return (
    <section>
        <AntCarousel autoplay effect="fade" speed={1500}>
        {carouselbg.map((img, index) => (
          <div key={index}>
            <div className="relative h-[40vh] md:h-[80vh] mt-10">
              <div className="w-full h-full font-montserrat">
                <Image
                  src={isMobile ? img.imgMobile : img.img}
                  alt={`Carousel image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="bg-blend-multiply"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div>
                    <p className="font-semibold text-center text-[19px] md:text-[30px] lg:text-[54px] tracking-tight leading-[30px] md:leading-[65px] text-white">
                      Discover the Future <br className="hidden md:block" /> of Grocery Shopping <br className="hidden md:block" /> with
                      Tingo Express{" "}
                    </p>
                    <div className="flex text-[15px] md:text-base justify-center md:w-fit w-full mt-6">
                      <button
                        onClick={handleLocOpen}
                        className="md:w-[550px] w-[250px] bg-secondary text-white md:py-4 py-2 rounded-lg"
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </AntCarousel>

      <section className=" w-full py-10 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
        <div className="md:flex md:space-x-7 w-full ">
          <div>
            <Image height={500} width={500} src="/images/discount.png" alt="" className=" w-full" />
          </div>
          <div className="mt-4 md:mt-0 md:block hidden ">
            <Image height={500} width={500} src="/images/exporteletronics.png" alt="" className=" w-full" />
          </div>
        </div>
      </section>

      <div className=" py-10 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
        <p className="md:text-[32px] text-[17px] font-montserrat font-semibold ">
          Featured Categories
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2  md:gap-4 gap-2 ">
          {catsData?.map((items, index) => (
            <Link key={index} href={`/product/${items?.category_id}`}>
              <div className="mt-6 font-urbanist">
                {" "}
                <div className="flex justify-center ">
                  <Image height={500} width={500}
                    src={
                      items?.image_url
                        ? items?.image_url
                        : "/images/frozen.png"
                    }
                    alt=""
                    className="md:w-[200px] md:h-[200px] object-contain w-[100px] h-[100px]"
                  />
                </div>
                <div className="details  bg-[#F3F3F3] md:-mt-24 -mt-12  md:pt-14 pt-7  rounded-3xl">
                  <p className="text-black md:py-12 py-5 text-center font-semibold md:text-[20px] text-[13px]">
                    {items?.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className=" py-10 px-5 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
        <p className="md:text-[32px] text-[17px] font-montserrat font-semibold ">
          Top Selling Product
        </p>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-2 ">
          {topselldata?.map((items, index) => (
            <div
              key={index}
              onClick={() => handleTrackOpen(items?.product_id)}
              className="mt-6 cursor-pointer font-urbanist md:p-[13px] p-[5px]  rounded-2xl "
            >
              <div className="flex ">
                <Image
                  src={
                    items?.image_url ? items?.image_url : "/images/topsell.png"
                  }
                  alt=""
                  className=" md:h-[300px] h-[200px] md:object-contain object-cover rounded-lg "
                  width={500}
                  height={500}
                />
              </div>
              <div className=" ">
                <p className="text-black  font-semibold md:text-[20px] text-[13px] md:pt-0 pt-1">
                  {items?.product_name}
                </p>
                <div className="text-black font-semibold md:text-[20px] text-[13px] pt-2 flex items-center ">
                  <img src="/images/Naira.png" alt="" className='md:h-fit md:w-fit h-[10px] w-[10px] mr-1' />
                  < >{Math.floor(items?.amount)}</>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="py-[100px] ">
        <div className="bg-primary w-full px-10 md:px-0 md:flex py-10 space-x-4 justify-center">
          <div>
            <img src="/images/mobile.png" alt="" />
          </div>
          <div className="font-urbanist">
            <p className="text-[32px] text-white font-bold md:pt-0 pt-10  ">
              TINGO EXPRESS MOBILE
            </p>
            <p className="text-[16px] font-[400] text-white my-3 tracking-wide ">
              Lorem ipsum dolor sit amet <br /> consectetur. Sodales velit{" "}
              <br /> elementum gravida nibh ultrices <br /> urna m.
            </p>
            <p className="text-[16px] font-bold text-white mb-3 ">
              COMING SOON
            </p>
            <div>
              <img src="/images/gooapp.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}

      <section className="py-10 px-5 md:bg-[#F4F3F5] lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] md:flex md:space-x-6">
        <div className='md:block hidden md:w-1/2' >
          <img src="/images/map.png" alt="" />
        </div>
        <section className="" >
          <p className="md:text-[32px] text-[17px] font-montserrat font-semibold">Tingo&apos;s Supermarket location</p>

          <div className='flex justify-between bg-white mt-3 border border-1 border-gray-400 items-center rounded-xl px-3 py-4' >
            <p className=' text-[13px] md:text-[18px] font-semibold' >Tingo&apos;s Supermarket Ajah</p>
            <div className='bg-[#FFF8F4] rounded-full h-9 w-9 flex justify-center items-center' >
              <img src='/images/carticon.png' className='w-6 h-6'  />
            </div>
          </div>

          
          <div className='flex justify-between bg-white mt-3 border border-1 border-gray-400 items-center rounded-xl px-3 py-4' >
            <p className=' text-[13px] md:text-[18px] font-semibold' >Tingo&apos;s Supermarket Lekki</p>
            <div className='bg-[#FFF8F4] rounded-full h-9 w-9 flex justify-center items-center' >
              <img src='/images/carticon.png' className='w-6 h-6'  />
            </div>
          </div>
        </section>
        {/* <div className="md:mt-0 mt-0 ">
          <img src="/images/maplocation.png" alt="" />
        </div> */}
      </section>

      <Modal
        width={700}
        styles={{
          height: "100vh",
          padding: 0,
          margin: 0,
          borderRadius: "30px",
        }}
        style={{
          top: 0,
          height: "100vh",
          width: "600px",
          borderRadius: "30px",
          overflow: "hidden",
        }}
        open={openLoc}
        onCancel={handleLocClose}
        footer={false}
      >
        <div className="flex justify-center font-montserrat text-center p-6 md:p-[50px] ">
          <div>
            <div className="flex justify-center mb-4">
              <img src="/images/storeloc.png" alt="" />
            </div>
            <p className="font-semibold text-black text-[18px] md:text-[32px] ">
              Find Tingo Express Near Me{" "}
            </p>
            <p className="text-[#827568] font-[400] text-[13px] md:text-[16px] mt-8 ">
              Locate Tingo Express effortlessly by entering your location bellow
              or use you current location
            </p>
            {/* <div className="flex justify-center items-center space-x-6 my-10">
              <div>
                <img src="/images/Vector.png" alt="" />
              </div>
              <p className="text-[#7A41B4] font-semibold text-[24px] font-urbanist ">
                Use My Current location
              </p>
            </div> */}
            <div className="text-left">
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      optionSelectedFontWeight: 600,
                    },
                  },
                  token: {
                    borderRadius: 12,
                    controlHeight: 60,
                    colorBgContainer: "#F9F9F9",
                    fontSize: 16,
                  },
                }}
              >
                <Select
                  // id="country"
                  showSearch
                  placeholder="Choose nearest store"
                  className={`w-full`}
                  options={storedata?.map((category) => ({
                    value: category?.location,
                    label: category?.location,
                  }))}
                  onChange={(e) => handleSelected(e)}
                  isClearable
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    border: 1,
                  }}
                />
              </ConfigProvider>
            </div>
            <Link href={`/location/${loc}`}>
              <button className="w-full bg-secondary mt-8  text-white py-4 rounded-lg ">
                View Store Page
              </button>
            </Link>

            <button className="w-full mt-8 outline-none  text-[#827568] font-[400] text-[16px]   ">
              Remind Me Later
            </button>
          </div>
        </div>
      </Modal>
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

export default Home;
