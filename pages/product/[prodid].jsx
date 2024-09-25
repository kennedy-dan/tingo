import HomeLayout from '@/components/Layout/HomeLayout'
import ProductsId from '@/components/ProductModule/ProductId'
import { getSingleCats } from '@/store/slice/productSlice'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const ProductId = () => {
   const dispatch = useDispatch()
   const router = useRouter()

   const {prodid} = router.query
  //  console.log(router.query)
  useEffect(() => {
    if(prodid){
      dispatch(getSingleCats({id:prodid}))

    }
  }, [prodid])
  
    
  return (
   <HomeLayout>
        <ProductsId prodid={prodid} />
   </HomeLayout>
  )
}

export default ProductId