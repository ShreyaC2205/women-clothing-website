"use client"
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { Timeline } from 'gsap/gsap-core'

gsap.registerPlugin(useGSAP);

const BackgroundAdd1 = () => {
  useGSAP(() => {
    const tl = new Timeline({ repeat: -1, repeatDealay: 8 })
    tl.to('.AdImg', {
      ease: "expo.inOut",
      width: "100%",
      stagger: 5,
      duration: 2
    }, 'anim')
      .to(".ADtext", {
        ease: "expo.inOut",
        stagger: 5,
        top: 0,
        duration: 2
      }, 'anim').to(".ADtext", {
        delay: 5,
        ease: "expo.inOut",
        stagger: 5,
        top: "-100%",
      }, 'anim')
  })

  return (
    <>
      <div className='relative w-[100%] h-[100vh] bg-[#26292c]' >
        <div className="imageBg absolute w-[80%] h-[80%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="texts absolute z-30 -translate-x-20 bottom-10 h-32 w-[34vw] overflow-hidden bg-gray-400/30 flex justify-center rounded-md">
            <h1 className='ADtext absolute flex flex-col z-30 text-right top-32 uppercase'>
              <span className='text-[4vw]'>Casual wear</span>
              <span className='text-[2vw] -mt-3'>Upto 60% off</span>
            </h1>
            <h1 className="ADtext absolute flex flex-col text-right top-32 uppercase">
              <span className='text-[4vw]'>Winter wear</span>
              <span className='text-[2vw]'>Min 40% off</span>
            </h1>
            <h1 className="ADtext absolute flex flex-col text-right top-32 uppercase">
              <span className='text-[4vw]'>Western wear</span>
              <span className='text-[2vw]'>40-50% off</span>
            </h1>
          </div>
          <div className='AdImg w-[0%] h-[100%] absolute overflow-hidden'>
            <img src={"/IMG/adBG2.jpg"} alt="imgBG" />
          </div>
          <div className='AdImg w-[0%] h-[100%] absolute overflow-hidden'>
            <img src={"/IMG/adBG.jpg"} alt="imgBG" />
          </div>
          <div id='bg3' className='AdImg w-[0%] h-[100%] absolute overflow-hidden'>
            <img src={"/IMG/adBG3.jpg"} alt="imgBG" />
          </div>

          <div className="fixed left-[10vw] -top-1 hide1 w-[17.8vw] h-8 bg-[#26292c]"></div>
          <div className="fixed right-[5vw] -top-1 hide1 w-[15.2vw] h-8 bg-[#26292c]"></div>
          <div className="fixed -bottom-1 left-[5vw] hide1 w-[15vw] h-8 bg-[#26292c]"></div>
          <div className="fixed -bottom-1 right-[11vw] hide1 w-[17vw] h-8 bg-[#26292c]"></div>
          <div className="fixed bottom-[0vw] right-[23.6vw] -top-2 rotate-12 hide1 w-[1vw] h-[103%] bg-[#26292c]"></div>
          <div className="fixed bottom-[0vw] left-[23.4vw] -top-2 rotate-12 hide1 w-[1vw] h-[103%] bg-[#26292c]"></div>
        </div>
      </div>
    </>
  )
}

export default BackgroundAdd1
