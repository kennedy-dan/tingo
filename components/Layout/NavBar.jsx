import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { Drawer, Space } from "antd";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logOutCustomer } from "@/store/slice/authSlice";

const OrderHistoryCard = ({ isOpen, onClose, profileDropdownRef }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOutCustomer());
  };
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "150%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      ref={profileDropdownRef}
      className="fixed z-50 top-[80px] font-urbanist right-[85px] h-[200px] font-medium  bg-[#DEDCE0] rounded-lg border shadow-lg p-4"
    >
      <Link href="/profile">
        <div className="flex space-x-3">
          <img src="/images/profile.png" alt="" />
          <p>My Profile</p>
        </div>
      </Link>

      <Link href="/favorites">
        {" "}
        <div className="flex my-4 space-x-3">
          <img src="/images/fav.png" alt="" />
          <p>Favorite</p>
        </div>
      </Link>

      <Link href="/order-history">
        <div className="flex space-x-3">
          <img src="/images/ord.png" alt="" />
          <p>Orders History</p>
        </div>
      </Link>

      <div className="h-[1px] bg-gray-400 w-full mt-4 "></div>

      <div onClick={logOut} className="flex mt-4 space-x-3 cursor-pointer ">
        <img src="/images/ord.png" alt="" className="opacity-0" />
        <p>Logout</p>
      </div>

      {/* <h2 className="text-xl font-bold mb-4">Order History</h2> */}
      {/* Order history content goes here */}
    </motion.div>
  );
};

const NavBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  const [userlog, setUserLog] = useState(false);
  const [advplacement, setadvPlacement] = useState("left");
  const [openadv, setOpenAdv] = useState(false);
  const [name, setName] = useState("");
  const { getcart, checkout } = useSelector((state) => state.product);

  const [isCardOpen, setIsCardOpen] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const logOut = () => {
    dispatch(logOutCustomer());
  };
  const profileDropdownRef = useRef(null);

  const toggleCard = () => {
    setIsCardOpen(true);
  };
  useOnClickOutside(profileDropdownRef, () => setIsCardOpen(false));

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUserLog(true);
    }
  }, []);

  const showDrawerAdv = () => {
    setOpenAdv(true);
  };

  const onCloseadv = () => {
    setOpenAdv(false);
  };
  const data = getcart?.results?.data?.data?.items;

  return (
    <section>
      <div className="bg-white flex justify-between w-full sticky-header items-center font-montserrat px-5 lg:px-[20px] xl:px-[100px]">
        <Link href="/">
          <img src="/images/navbarlogo.png" alt="" className=" " />
        </Link>
        <div className="lg:flex hidden justify-between items-center ">
          <div className="flex items-center h-[] py-4">
            <div className="relative h-[56px] ">
              <div
                className={` h-full rounded-l-lg border-gray-400 border lg:w-[230px] xl:w-[350px] custom-input ${
                  isFocused || inputValue ? "focused" : ""
                }`}
              >
                {!inputValue && !isFocused && (
                  <div className="placeholder">
                    <img
                      src="/images/searchicon.png"
                      alt="Search Icon"
                      className="icon"
                    />
                    <span className="text font-[14px] ">Search</span>
                  </div>
                )}
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="input-element "
                />
              </div>
            </div>
            <Link href={`/search/${inputValue}`}>
              <button className="bg-searchheader text-white h rounded-r-lg font-semibold h-[56px] text-[px] px-7 text-[16px]">
                Search
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:flex hidden font-semibold items-center space-x-5 text-[14px] ">
          <Link href="/product">
            <div className="text-black">Product</div>
          </Link>
          <Link href="/contact">
            <div className="text-black">Contact us</div>
          </Link>
          <div>
            <Link href="/location">
              <img src="/images/locationicon.png" alt="" />
            </Link>
          </div>
          <div>
            <Link href="/cart">
              <div className="relative">
                <img src="/images/carticon.png" alt="" />
                <div className="absolute top-[-56%] left-[50%] z-10 ">
                  <div className="text-[8px] bg-red-800 text-white flex justify-center items-center h-[16px] w-[16px] rounded-full ">
                    {data?.length}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {!user && (
            <Link href="/signup">
              {" "}
              <button className="bg-secondary px-5 rounded-lg py-3 text-white ">
                Login /Sign Up
              </button>{" "}
            </Link>
          )}

          {user && (
            <div
              className="flex space-x-2 cursor-pointer items-center "
              onClick={toggleCard}
            >
              {" "}
              <img src="/images/profile.png" alt="" />{" "}
              <p>Hi, {user?.first_name}</p>{" "}
              <img src="/images/arrowdown.png" alt="" />{" "}
            </div>
          )}
        </div>

        <div className="lg:hidden space-x-3 items-center flex">
        <div>
            <Link href="/cart">
              <div className="relative">
                <img src="/images/carticon.png" alt="" />
                <div className="absolute top-[-56%] left-[50%] z-10 ">
                  <div className="text-[8px] bg-red-800 text-white flex justify-center items-center h-[16px] w-[16px] rounded-full ">
                    {data?.length}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <button onClick={showDrawerAdv}>
            <IoIosMenu size={26} />
          </button>
        </div>
      </div>
      <OrderHistoryCard
        profileDropdownRef={profileDropdownRef}
        isOpen={isCardOpen}
        onClose={toggleCard}
      />

      <Drawer
        // title="WeOut"
        placement={advplacement}
        closable={false}
        onClose={onCloseadv}
        open={openadv}
        key={advplacement}
        extra={
          <Space>
            <button onClick={onCloseadv}>
              <MdOutlineCancel className="w-8 h-8" />
            </button>
          </Space>
        }
      >
        <section className="font-poppins space-y-9">
          <div className="flex justify-end ">
            <button onClick={onCloseadv}>
              <MdOutlineCancel className="w-8 h-8" />
            </button>
          </div>
          <div>
            <img src="/images/navbarlogo.png" alt="" className=" " />
          </div>
          <div className="space-y-6 font-[500] text-[19px]">
            <div>
              <Link href="/product">
                <div className="text-black">Product</div>
              </Link>
            </div>

            <div>
              <Link href="/contact">
                <div className="text-black">Contact us</div>
              </Link>
            </div>

            <div>
              <Link href="/location">
                <div className="text-black">Location</div>
              </Link>
            </div>
          </div>

          {!user && (
            <div>
              <div>
                <Link href="/login">
                  <div className="text-black font-[500] text-[19px]">Login</div>
                </Link>
              </div>
            </div>
          )}

          {user && (
            <div className="space-y-6 font-[500] text-[19px]">
              <div>
                <Link href="/profile">
                  <div className="flex space-x-3">
                    <img src="/images/profile.png" alt="" />
                    <p>My Profile</p>
                  </div>
                </Link>
              </div>

              <div>
                <Link href="/favorites">
                  {" "}
                  <div className="flex my-4 space-x-3">
                    <img src="/images/fav.png" alt="" />
                    <p>Favorite</p>
                  </div>
                </Link>
              </div>

              <div>
                <Link href="/order-history">
                  <div className="flex space-x-3">
                    <img src="/images/ord.png" alt="" />
                    <p>Orders History</p>
                  </div>
                </Link>
              </div>

              <div className="h-[1px] bg-gray-400 w-full mt-4 "></div>

              <div
                onClick={logOut}
                className="flex mt-4 space-x-3 cursor-pointer "
              >
                <img src="/images/ord.png" alt="" className="opacity-0" />
                <p>Logout</p>
              </div>
            </div>
          )}
        </section>
      </Drawer>
    </section>
  );
};

export default NavBar;
