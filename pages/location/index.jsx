import HomeLayout from '@/components/Layout/HomeLayout'
import ShopLocation from '@/components/LocationModule/ShopLocation'
import React, {useEffect} from 'react'
import { getcategories, getStores, topSell, getSingleProduct, addtocart, getcartData } from "@/store/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";


const Location = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(getStores())
  
  }, [])
  return (
    <HomeLayout>
        <ShopLocation />
    </HomeLayout>
  )
}

export default Location