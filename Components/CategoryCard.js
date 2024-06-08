import React from 'react'


const CategoryCard = (props) => {
    
    return (
        <div className='categCardBg bg-slate-100 min-w-[60%] h-[100%] border-2 border-[#62d0ffbd] rounded-lg overflow-hidden shadow-md shadow-slate-500 shadow-b-[1px] shadow-r-[3px] -shadow-spread-5 flex justify-center items-center '>
            <div className="relative curvedDiv w-[95%] h-[95%] rounded-tl-[2vw] rounded-br-[2vw] overflow-hidden">
                <div className="imgSlide min-w-[100%] h-[100%] flex z-10 cursor-pointer">
                    <img className='min-w-[100%] h-[100%] object-cover' src={props.img1} alt="image1" />
                    <img className='min-w-[100%] h-[100%] object-cover' src={props.img2} alt="image1" />
                    <img className='min-w-[100%] h-[100%] object-cover' src={props.img3} alt="image1" />
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
