import Image from 'next/image'
import React from 'react'

const LowPriceCard = (props) => {
    return (
        <div className='w-[100%] h-[100%] grid grid-col-[15%_85%] p-2 bg-slate-100 gap-1'>
            <div className="min-w-[100%] h-[100%] imgLowP relative overflow-hidden flex justify-center items-center rounded-[0.5vw]">
                <Image className='absolute min-w-[100%] h-[100%] object-cover z-10' src="/IMG/lowPBG.jpg" alt="img" width={500} height={0} quality={100}/>
                <Image className=' min-w-[100%] h-[100%] object-cover z-20' src={props.img} alt="img" width={500} height={0} quality={100}/>
            </div>
            <div className="cardText text-center text-md Outfit2 text-gray-800">
                <h1>Staring from ₹{props.price}</h1>
            </div>
        </div>
    )
}

export default LowPriceCard
