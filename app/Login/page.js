"use client"
import React, { useState } from 'react'



const page = () => {
  const info1 = [["New User?", "SignUp", "Enter Mobile Number", "Existing User? LogIn", "CONTINUE", "85%", "/IMG/400offf.png"]]
  const info2 = [["", "Login", "Enter Email/Mobile Number", "", "REQUEST OTP", "50%"]]

  const [state, setState] = useState(0)

  const Clicked = () => {
    setState(1)
  }
  return (
    <div className='relative w-[100%] h-[100vh]'>
      <img src="/IMG/loginBG9.jpg" alt="bg img" className='w-[100%] h-[100%] object-cover object-top' />
      {state === 1 ? (
        info2.map((element, index) => (
          <div key={index} className={`absolute logInContainer w-[30%] h-[${element[5]}] bg-black/50 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg`}>
            <div className="infoLogin relative flex flex-col justify-center items-center px-10 text-slate-200 gap-2">
              <span className='text-xs text-slate-200'>{element[0]}</span>
              <h1 className='text-2xl mb-4 font-bold'>{element[1]}</h1>
              <input type="email" name="userid" id="userid" placeholder={element[2]} className='w-full py-2 px-4 outline-none border-2 border-slate-200 bg-transparent text-sm rounded-full mb-2 text-slate-50 placeholder:text-sm placeholder:text-slate-300' />
              <span className='text-xs mb-3'>By continuing, you agree to Elegyn's <a href="#" className='text-slate-100 font-extrabold'>Terms of Use</a> and <a href="#" className='text-slate-100 font-extrabold'>Privacy Policy</a>.</span>
              <button className='rounded-md p-2  bg-[#B40001] text-sm text-slate-100 font-bold mb-4 border-2 border-slate-100 shadow-xl hover:bg-yellow-500 hover:text-gray-800'>{element[4]}</button>
              <button onClick={Clicked} className='loginBTN text-slate-100 font-bold text-md'>{element[3]}</button>
            </div>
          </div>
        ))
      ) : (
        info1.map((element, index) => (
          <div key={index} className={`absolute logInContainer w-[30%] h-[${element[5]}] bg-black/50 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg`}>
            <img src={element[6]} alt="coupon" className='relative w-[100%] -top-5' />
            <div key={index} className="infoLogin relative flex flex-col justify-center items-center px-10 text-slate-200 gap-2">
              <span className='text-xs text-slate-200'>{element[0]}</span>
              <h1 className='text-2xl mb-4 font-bold'>{element[1]}</h1>
              <input type="email" name="userid" id="userid" placeholder={element[2]} className='w-full py-2 px-4 outline-none border-2 border-slate-200 bg-transparent text-sm rounded-full mb-2 text-slate-50 placeholder:text-sm placeholder:text-slate-300' />
              <span className='text-xs mb-3'>By continuing, you agree to Elegyn's <a href="#" className='text-slate-100 font-extrabold'>Terms of Use</a> and <a href="#" className='text-slate-100 font-extrabold'>Privacy Policy</a>.</span>
              <button className='rounded-md p-2  bg-[#B40001] text-sm text-slate-100 font-bold mb-4 border-2 border-slate-100 shadow-xl hover:bg-yellow-500 hover:text-gray-800'>{element[4]}</button>
              <button onClick={Clicked} className='loginBTN text-slate-100 font-bold text-md mb-4'>{element[3]}</button>
            </div>
          </div>
        ))
      )}

    </div>
  )
}

export default page
