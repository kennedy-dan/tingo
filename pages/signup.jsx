import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { _registerCustomer } from "@/store/slice/authSlice";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const Signup = () => {
  const dispatch = useDispatch()

  const router = useRouter()

  //useState
  const [reg, setReg] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pWord, setPword] = useState("");
  const [inputType1, setInputType1] = useState("password");
  const [inputType2, setInputType2] = useState("password");
  const [confirmPword, setConfirmPword] = useState("");
  const [success, setSuccess] = useState(false)


  //redux useSelector
  const { user, loading } = useSelector((state) => state.auth);

  // const onReg = (val) => {
  //   setReg(val);
  // };


  //register user
  const register = () => {
    if(name === '' || email === "" || pWord === "" || confirmPword === ""){
      toast.error('Input all fields')
      return
    }
    if(pWord !== confirmPword){
      toast.error('Password and confirm Password are not the same')
      return
    }
    const data= {
      email: email,
      password: pWord,
      name: name,
      password_confirm: confirmPword
    }

    
    dispatch(_registerCustomer(data))

  }

  //useEffect 
  useEffect(() => {
    
  if(user){
    router.push('/login')
  }
  
  }, [user])
  
  
  return (
    <section className="md:p-[20px] p-[10px] ">
      <div className="flex md:space-x-14   ">
        <div className="md:w-1/2 md:block h-screen hidden ">
          <img src="/images/signupimg.png" alt="" className="" />
        </div>
        {/* {reg === 1 && ( */}
        <div className="md:w-1/2 font-montserrat ">
          <div className="flex w-full justify-center">
            <Link href='/' >
            <img src="/images/navbarlogo.png" alt="" className=" " />

            </Link>
          </div>
          <p className="font-semibold text-[22px] md:text-[38px] text-center ">
            Welcome to Tingo Express
          </p>
          <p className="md:text-[16px] text-[13px] font-[400] text-[#8A848F] text-center tracking-wide  ">
            Sign-up to enjoy our seamless service and for nice shopping
            experience
          </p>
          <p className="text-[16px] font-[400] text-[#8A848F] text-center ">
            Already have an account Click{" "}
            <Link href='/login' >
            <span className="text-[#4FA9AB] font-bold text-[20px]">Login</span>

            </Link>
          </p>
          <div className="mt-6">
            <p className="font-semibold">Name</p>
            <input
              placeholder="Enter Your Fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
            />
          </div>
          <div className="mt-4">
            <p className="font-semibold">Email</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
            />
          </div>{" "}
          <div className="mt-4">
            <p className="font-semibold">Password</p>
            <div className="relative">
              <input
                type={inputType1}
                value={pWord}
              onChange={(e) => setPword(e.target.value)}
                placeholder="Create a unique password"
                className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
              />

              <div className="absolute left-[90%] top-[40%] ">
                {inputType1 === "password" && (
                  <FaRegEye onClick={() => setInputType1("text")} />
                )}
                {inputType1 === "text" && (
                  <FaRegEyeSlash onClick={() => setInputType1("password")} />
                )}
              </div>
            </div>
          </div>{" "}
          <div className="mt-4">
            <p className="font-semibold">Confirm Password</p>
            <div className="relative">
              <input
                type={inputType2}
                value={confirmPword}
              onChange={(e) => setConfirmPword(e.target.value)}
                placeholder="Re-enter password"
                className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
              />

              <div className="absolute left-[90%] top-[40%] ">
                {inputType2 === "password" && (
                  <FaRegEye onClick={() => setInputType2("text")} />
                )}
                {inputType2 === "text" && (
                  <FaRegEyeSlash onClick={() => setInputType2("password")} />
                )}
              </div>
            </div>
          </div>
          <div className="mt-7">
            <button
            onClick={register}
              // onClick={() => onReg(2)}
              className="w-[96%] bg-secondary text-white py-6 rounded-lg font-semibold text-[16px] "
            >
              {loading ? <ClipLoader size={12} color='white' /> : <p>Register</p>}
              
            </button>
          </div>
        </div>
        {/* // )} */}

        {/* {reg === 2 && (
          <div className="md:w-1/2 font-montserrat ">
            <div className="flex w-full justify-center">
              <img src="images/navbarlogo.png" alt="" className=" " />
            </div>
            <p className="font-semibold text-[38px] text-center ">
              Verification
            </p>

            <p className="text-[16px] font-[400] text-[#8A848F] text-center tracking-wide  ">
              Sign-up to enjoy our seamless service and for nice shopping
              experience
            </p>
            <div className="flex justify-center mt-16">
              <div className="flex justify-center w-[80%] space-x- ">
                <div className="">
                  <input className="bg-[#F9F9F9] pl-10 w-[71%] rounded-2xl md:py-10 py-5 border-[#C9C5CC] border" />
                </div>
                <div className="">
                  <input className="bg-[#F9F9F9] pl-10 w-[71%] rounded-2xl md:py-10 py-5 border-[#C9C5CC] border" />
                </div>{" "}
                <div className="">
                  <input className="bg-[#F9F9F9] pl-10 w-[71%] rounded-2xl md:py-10 py-5 border-[#C9C5CC] border" />
                </div>{" "}
                <div className="">
                  <input className="bg-[#F9F9F9] pl-10 w-[71%] rounded-2xl md:py-10 py-5 border-[#C9C5CC] border" />
                </div>
              </div>
            </div>
            <div className="w-[70%] ml-14 mt-4 ">
              <p className="text-[#4FA9AB]">Resend Code</p>
            </div>
            <div className="mt-10 flex justify-center w-full">
              <div className="flex w-[80%] justify-center ">
                <button
                  onClick={() => onReg(3)}
                  className="w-full bg-secondary text-white py-6 rounded-lg font-semibold text-[16px] "
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        )}

             {reg === 3 && (
          <div className="md:w-1/2 w-full font-montserrat ">
            <div className="flex w-full justify-center">
              <img src="images/navbarlogo.png" alt="" className=" " />
            </div>
            <p className="font-semibold text-[38px] text-center ">
              Location
            </p>
            <p className="text-[16px] font-[400] text-[#8A848F] text-center tracking-wide  ">
             fill in your address below
            </p>
           
            <div className="mt-16">
              <p className="font-semibold">Location</p>
              <input
                placeholder="Enter Your Location"
                className=" w-[96%] pl-5 outline-none mt-2 border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
              />
            </div>
     
            <div className="mt-10">
              <Link href='/login' >
              <button
                onClick={onReg}
                className="w-[96%] bg-secondary text-white py-6 rounded-lg font-semibold text-[16px] "
              >
                
                Save
              </button>
              </Link>
            
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Signup;
