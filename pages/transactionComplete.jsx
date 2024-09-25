import HomeLayout from '@/components/Layout/HomeLayout'
import { verifyPayment } from '@/store/slice/productSlice'
import { Modal } from "antd/lib";
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'

const TranasactionComplete = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { tx_ref, status } = router.query;
  const [openTrack, setOpenTrack] = useState(false);


  const handleTrackClose = () => {
    setOpenTrack(false);
  };

  const handleTrackOpen = () => {
    setOpenTrack(true);
  };

  useEffect(() => {
    setOpenTrack(true);
    
    if (tx_ref != null) {
      const data = {
        reference: tx_ref
      }
      dispatch(verifyPayment( tx_ref ));
    }
  }, [tx_ref]);
  
  return (
    <HomeLayout>
      <div className='h-[100vh] w-screen  flex mt-40 justify-center items-center' >
        {/* <img src='/images/success.svg' alt='' className='w-[50%]' /> */}
        <div className='flex justify-center my-6' >
          <Link href='/' >
          <button
                className=" bg-secondary w-[220px] text-white py-4 rounded-lg font-semibold text-[16px] "
              >
                      <p>Continue Shopping</p>

              </button>
          </Link>
          </div>
      </div>
    
        <Modal open={openTrack} onCancel={handleTrackClose} footer={false} style={{top: 15}} >
          <div className='flex justify-center' >
          <img src="/images/successful.png" alt="" />

          </div>

        <div className='text-center font-urbanist md:text-[15px] text-[13px]' >
        Your payment was successful, and your order is confirmed. We’re preparing it for pickup
        </div>
        <div className='flex justify-center my-6' >
          <Link href='/' >
          <button
                className=" bg-secondary w-[220px] text-white py-4 rounded-lg font-semibold text-[16px] "
              >
                      <p>Continue Shopping</p>

              </button>
          </Link>
          </div>
      </Modal>
    </HomeLayout>
  )
}

export default TranasactionComplete