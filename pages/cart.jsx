import HomeLayout from "@/components/Layout/HomeLayout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addtocart,
  getcartData,
  RemoveFromCart,
} from "@/store/slice/productSlice";
import Link from "next/link";
import { ClipLoader } from "react-spinners";
import Image from "next/image";

const Cart = () => {
  const dispatch = useDispatch();
  const { getcart, addcart, removecart } = useSelector(
    (state) => state.product
  );

  const [cartItems, setCartItems] = useState([]);
  const [quant, setquant] = useState(null);
  const [updatingItemId, setUpdatingItemId] = useState(null);
  const [removeItemId, setremoveItemId] = useState(null);
  const [prod, setprod] = useState(null);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (getcart?.results?.data?.data?.items) {
      setCartItems(getcart.results.data.data.items);
    }
  }, [getcart]);

  const increaseQuant = (itemId) => {
    console.log('yyuu')
    setUpdatingItemId(itemId.product_id);
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.product_id === itemId.product_id) {
          setquant(item.quantity + 1);
          setprod(itemId?.product?.product_id);
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const decreaseQuant = (itemId) => {
    setUpdatingItemId(itemId.product_id);
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.product_id === itemId.product_id && item.quantity > 1) {
          setquant(item.quantity - 1);
          setprod(itemId?.product?.product_id);
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  // setCartItems(prevItems =>
  //   prevItems.map(item =>
  //     item.id === itemId && item.quantity > 1
  //       ? { ...item, quantity: item.quantity - 1 }
  //       : item
  //   )
  // );
  // Dispatch an action to update the Redux store if necessary
  // dispatch(updateCartItemQuantity(itemId, 'decrease'));

  const removeCart = (id) => {
    setremoveItemId(id?.id);
    const data = {
      product_id: id?.product?.product_id,
      // image_url: image,
      // action: "decrement",
    };
    dispatch(RemoveFromCart(data)).then(({ error }) => {
      if (!error) {
        dispatch(getcartData());
      }
    });
  };

  useEffect(() => {
    if (quant && prod) {
      const data = {
        product_id: prod,
        quantity: quant,
      };

      dispatch(addtocart(data)).then(({ error }) => {
        if (!error) {
          dispatch(getcartData());
        }
        setUpdatingItemId(null); // Reset the updating item ID
      });
    }
  }, [quant, prod]);


  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price;
    }, 0);
  };

  useEffect(() => {
    setTotal(calculateTotal());
  }, [cartItems]);

  return (
    <HomeLayout>
      <div className="md:flex justify-between py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] md:space-x-10">
        <div className="w-full">
          {cartItems?.map((items, index) => (
            <div key={index} className="w-full">
              <div className="md:flex w-full justify-between  font-montserrat">
                <div className="md:flex   ">
                  <div className="w-1/">
                    <div>
                    <Image
                    src={
                      items?.product?.image_url
                        ? items?.product?.image_url
                        : "/images/topsell.png"
                    }
                  alt=""
                  className="md:w-[220px] w-full h-[220px] mr-3 object-cover"

                  width={500}
                  height={500}
                />
                    
                    </div>
                  </div>
                  <div className="w-1/">
                    <p className="font-semibold md:mt-0 mt-3 text-[18px] w-[70%] ">
                      {items?.product?.name}
                    </p>
                    {getcart?.isLoading ||
                    (addcart?.isLoading && updatingItemId === items.id) ? (
                      <ClipLoader color="black" size={12} />
                    ) : (
                      <div className="text-black font-semibold text-[24px] pt-3 space-x-1 font-urbanist flex items-center ">
                        <div>
                          <img src="/images/Naira.png" alt="" />
                        </div>
                        <p>{Math.floor(items?.price)}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="flex md:mt-0 mt-3 items-center">
                    <button onClick={() => decreaseQuant(items)}>
                      <img src={"/images/sub.png"} alt="Decrease" />
                    </button>
                    <p className="text-black font-bold px-2 text-[13px]">
                      {items.quantity}
                    </p>
                    <button onClick={() => increaseQuant(items)}>
                      <img src={"/images/add.png"} alt="Increase" />
                    </button>
                  </div>

                  <div
                    className="flex md:mt-10 mt-3 cursor-pointer "
                    onClick={() => removeCart(items)}
                  >
                    <div>
                      <img src="/images/delete.png" alt="" />
                    </div>
                    {removecart?.isLoading && removeItemId === items?.id ? (
                      <ClipLoader color="black" size={12} />
                    ) : (
                      <div>Remove</div>
                    )}
                  </div>
                </div>
              </div>

              {/* <br /> */}
              <hr className="my-5" />
            </div>
          ))}
        </div>
        <div>
          <div className="shadow-lg md:w-[370px] mt-4 md:mt-0 rounded-xl p-[20px] border-2  font-montserrat ">
            <p className="font-bold text-[32px]">Summary</p>
            <div className="flex justify-between font-[500] mt-7">
              <p className="text-[16px]">Total</p>
              <p className="text-[16px]">N {total?.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-[500] mt-7">
              <p className="text-[16px]">Subtotal</p>
              <p className="text-[16px]">N {total?.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-[500] py-6">
              {/* <p className="text-[16px]">Tax</p>
              <p className="text-[16px]">N 4000</p> */}
            </div>

            <div className="flex justify-between font-[500]">
              <p className="text-[16px]">Discount</p>
              <p className="text-[16px]">N 0</p>
            </div>
            <div className="mt-10">
              <Link href="/checkout">
                <button className="w-full bg-secondary text-white py-4 rounded-lg font-semibold text-[16px] ">
                  Checkout N{total.toFixed(2)}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Cart;
