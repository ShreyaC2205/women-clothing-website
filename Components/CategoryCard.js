import Image from 'next/image'
import React from 'react'


const CategoryCard = (props) => {
    return (
        <div className='categCardBg bg-slate-100 min-w-[13vw] h-[16vw] border-2 border-[#62d0ffbd] rounded-lg overflow-hidden shadow-md shadow-slate-500 shadow-b-[1px] shadow-r-[3px] -shadow-spread-5 flex justify-center items-center '>
            <div className="relative curvedDiv w-[12.3vw] h-[15vw] rounded-tl-[2vw] rounded-br-[2vw] overflow-hidden">
                <div className="imgSlide w-[12.3vw] h-[15vw] flex z-10 cursor-pointer">
                    <Image className='min-w-[100%] h-[100%] object-cover object-top' src={props.img1} alt="image1" width={800} height={1000} quality={100}/>
                    <Image className='min-w-[100%] h-[100%] object-cover object-top' src={props.img2} alt="image2" width={800} height={1000} quality={100}/>
                    <Image className='min-w-[100%] h-[100%] object-cover object-top' src={props.img3} alt="image3" width={800} height={1000} quality={100}/>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
