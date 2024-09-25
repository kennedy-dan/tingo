import HomeLayout from '@/components/Layout/HomeLayout'
import SingleShopLocationn from '@/components/LocationModule/SingleShopLocationn'
import { getcategories, getAllProducts } from '@/store/slice/productSlice'
import { useRouter } from 'next/router'
import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'

const LocatonId = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
      dispatch(getcategories())
      dispatch(getAllProducts())
 
  }, [])


  
  return (
    <HomeLayout>
        <SingleShopLocationn name={id} />
    </HomeLayout>
  )
}

export default LocatonId