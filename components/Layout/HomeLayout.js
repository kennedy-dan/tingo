import React from 'react'
import NavBar from './NavBar'
// import useWindowDimension from '@/hooks/useWindowDimension';
import Footer from './Footer';
// import useWindowDimension from "@hooks/useWindowDimension";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getcartData } from "@/store/slice/productSlice.js";
import SearchInput from './SearchInput';
const HomeLayout = ({children}) => {
  // const { width } = useWindowDimension();
  const dispatch = useDispatch()
  const {token, user} = useSelector(state => state.auth)

  useEffect(() => {
    if(token && user) {
      const timer = setTimeout(() => {
        dispatch(getcartData());
      }, 5000); // 5000 milliseconds = 5 seconds

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [token, user, dispatch]);
  return (
    <>
        <NavBar />
        <div
        // style={{
        //   height: width > 450 ? "calc(100vh - 11rem)" : "calc(100vh - 8rem)",
        //   overflowY: "auto",
        // }}
      >
        <div className='flex justify-center lg:hidden ' >
          <SearchInput />
        </div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default HomeLayout