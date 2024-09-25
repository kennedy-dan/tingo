import HomeLayout from "@/components/Layout/HomeLayout";
import { getUsers } from "@/store/slice/authSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.auth);


  useEffect(() => {
   dispatch(getUsers())
  }, [])


  
  return (
    <HomeLayout>
      <div className="bg-[#E7EBF6] py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px]  md:flex items-center justify-between ">
        <div>
          <p>{"Product category" < "frozenfoods"} </p>
          <p className="text-[39px] font-bold text-black font-montserrat">
            My Profile
          </p>
        </div>
        <div className="md:flex hidden">
          <img src="/images/profilecartbanner.png" alt="" />
        </div>
      </div>

      <div className="py-20 px-10  lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] md:flex md:space-x-10 justify-between font-montserrat">
        <div className="md:w-[30%]" >
          <div className="border pl-6 py-10 shadow-md space-y-8 rounded-md ">
            <div>
              {/* <p>John</p> */}
              <p className=" ">{users?.result?.first_name}</p>
            </div>
            <div>
              <p>My Profile</p>
            </div>
            <Link href='/favorites' >
            <div>
              <p>Favorites</p>
            </div>{" "}
            </Link>
           <Link href='/order-history' >
           <div>
              <p>Order History</p>
            </div>
           </Link>
          
          </div>
        </div>

        <div className=" md:w-[70%] md:mt-0 mt-16">
          <div className='border pl-6 py-10 shadow-md space-y-8 rounded-md' >
            <p className='text-[18px] font-bold ' >Account Details</p>

            <div className="mt-16">
              <p className="font-semibold text-gray-300">Full Name</p>
              <input
                placeholder="Enter Your Email Address"
                className=" w-[96%] pl-5 outline-none tracking-tighter bg-[#F9F9F9] rounded-lg py-5"
                value={users?.result?.first_name + " " + users?.result?.last_name}
              />
            </div>{" "}
            <div className="mt-4">
              <p className="font-semibold text-gray-300">Email</p>
              <input
                placeholder="Create a unique password"
                className=" w-[96%] pl-5 outline-none tracking-tighter bg-[#F9F9F9] rounded-lg py-5"
                value={users?.result?.email}
              />
            </div>

            <div className="mt-4">
              <p className="font-semibold text-gray-300">Mobile Phone</p>
              <input
                className=" w-[96%] pl-5 outline-none tracking-tighter bg-[#F9F9F9] rounded-lg py-5"
                value={users?.result?.phone_no}
              />
            </div>

            <div className="mt-4">
              <p className="font-semibold text-gray-300">Shipping Address</p>
              <input
                className=" w-[96%] pl-5 outline-none tracking-tighter bg-[#F9F9F9] rounded-lg py-5"
                value={users?.result?.phone_no}
              />
            </div>
          </div>
        </div>
      </div>

    </HomeLayout>
  );
};

export default Profile;
