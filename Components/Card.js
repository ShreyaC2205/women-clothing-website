import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Card = (Props) => {
    return (
        <div className='w-[100%] h-[100%] rounded-tl-xl rounded-br-xl'>
            <div className=" container w-[100%] h-[100%] grid grid-cols-[85%_15%] shadow-[1px_1px_6px_gray] rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm cursor-pointer overflow-hidden">
                <div className=" cardInfo grid grid-rows-[75%_25%] ">
                    <div className="w-[100%] h-[100%] cardImg bg-yellow-100 z-10 p-1 overflow-hidden rounded-tl-xl">
                        <Image className=' h-[11vw] w-[100%] cimg object-cover object-top rounded-xl' src={Props.OfferImg} alt="dress1" width={400} height={0} quality={100}/>
                    </div>
                    <div className="cardOffer z-10 bg-slate-100 flex flex-col justify-center  items-center rounded-bl-sm text-gray-800">
                        <h3 className='text-[1.1] Outfit1'>{Props.CardOffer1}</h3>
                        <h1 className='text-[1.2vw] Outfit2'>{Props.CardOffer2}</h1>
                    </div>
                </div>
                <motion.div initial={{x:"3.1vw"}} whileInView={{x:"0vw"}} transition={{ease:"easeInOut", duration:1}} className="relative w-[100%] h-[100%] cardBrand z-10 bg-amber-300 flex items-center justify-center rounded-br-xl rounded-tr-sm">
                    <div className='absolute h-[20%] w-[220%] z-10  flex justify-center items-center -rotate-90 p-1'>
                        <Image className='max-w-[100%] max-h-[100%] object-contain' src={Props.brandImg} alt="brand logo" width={500} height={0} quality={100}/>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Card
