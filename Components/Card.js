import React from 'react'

const Card = (Props) => {
    return (
        <div className='w-[100%] h-[100%]'>
            <div className=" container w-[100%] h-[100%] grid grid-cols-[85%_15%] shadow-[1px_1px_6px_gray] rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm cursor-pointer">
                <div className=" cardInfo grid grid-rows-[80%_20%] ">
                    <div className="w-[100%] h-[100%] cardImg bg-slate-100 z-10 p-1 overflow-hidden rounded-tl-xl">
                        <img className=' h-[12vw] w-[100%] cimg object-cover object-top rounded-xl' src={Props.OfferImg} alt="dress1" />
                    </div>
                    <div className="cardOffer z-10 bg-slate-100 flex flex-col justify-center items-center pb-2 rounded-bl-sm">
                        <h3 className='text-[0.85vw]'>{Props.CardOffer1}</h3>
                        <h1 className='text-[1.1vw]'>{Props.CardOffer2}</h1>
                    </div>
                </div>
                <div className="relative w-[100%] h-[100%] cardBrand z-10 bg-amber-300 flex items-center justify-center rounded-br-xl rounded-tr-sm">
                    <div className='absolute h-[20%] w-[220%] z-10  flex justify-center items-center -rotate-90 p-1'>
                        <img className='max-w-[100%] max-h-[100%] object-cover' src={Props.brandImg} alt="brand logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
