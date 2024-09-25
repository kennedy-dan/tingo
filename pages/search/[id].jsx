import HomeLayout from '@/components/Layout/HomeLayout'
import SearchResult from '@/components/SearchModule/SearchResult'
import { getAllProducts } from '@/store/slice/productSlice'
import { useRouter } from 'next/router'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {token} = useSelector(state => state.auth)

  const {id} = router.query
  // console.log(id)
  useEffect(() => {
    if(id) {
      const data = {
        name: id
      }
      dispatch(getAllProducts(data))

    }
  }, [id])
  
  return (
    <HomeLayout>
        <SearchResult name={id} />
    </HomeLayout>
  )
}

export default Search