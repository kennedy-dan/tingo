import HomeLayout from '@/components/Layout/HomeLayout'
import Products from '@/components/ProductModule/Products'
import { getAllProducts, getSingleCats } from '@/store/slice/productSlice'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Product = () => {

  const dispatch = useDispatch()

  const {token} = useSelector(state => state.auth)


  //useeffect
  useEffect(() => {
    // if(token){
      dispatch(getAllProducts())

    // }
  }, [])
  
  
  return (
    <HomeLayout  >
        <Products />
    </HomeLayout>
  )
}

export default Product