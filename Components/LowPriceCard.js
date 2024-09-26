import Image from 'next/image'
import React from 'react'

const LowPriceCard = (props) => {
    return (
        <div className='w-[18vw] h-[18vw] grid grid-col-[15%_85%] p-2 bg-slate-100 gap-1'>
            <div className="w-[14.2vw] h-[14.2vw] imgLowP relative overflow-hidden flex justify-center items-center rounded-[0.5vw]">
                <Image className='absolute object-cover z-10' src="/IMG/lowPBG.jpg" alt="img" fill sizes='40vw, 40vw' quality={100}/>
                <Image className='absolute object-contain z-20' src={props.img} alt="img" fill sizes='40vw, 40vw' quality={100}/>
            </div>
            <div className="cardText text-center text-md Outfit2 text-gray-800">
                <h1>Staring from ₹{props.price}</h1>
            </div>
        </div>
    )
}

export default LowPriceCard
