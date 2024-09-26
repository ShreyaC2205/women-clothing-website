import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
// import Image from 'next/image'
import PropTypes from 'prop-types';
import Image from 'next/image';
const ProductCard = ({ image, brandName, description, price, offer, rating }) => {
    return (
        <div className='w-[100%] h-[100%]'>
            <div className='productCard w-[100%] h-[100%] rounded-xl bg-yellow-300 grid grid-rows-[59%_30%_11%] p-1 shadow-[1px_1px_6px_gray]'>
                <div className="relative img rounded-t-xl overflow-hidden">
                    <FontAwesomeIcon icon={farHeart} className='absolute text-md top-1 right-2 text-gray-600 z-20' />
                    <div className="absolute iconn z-20">
                        <span className='text-[0.7vw] bg-green-500 rounded-br-xl p-[0.2vw] flex justify-center shadow-[0.5px_0.5px_2px_gray] items-center text-gray-900'>{rating} <span className='text-[0.9vw]'>{'\u2605'}</span></span>
                    </div>
                    <div className="relative productIMG w-[10vw] h-[14vw] overflow-hidden z-10">
                        <Image className='absolute w-[100%] h-[100%] object-cover object-top' src={image} alt="productImg" fill sizes='20vw, 20vw' quality={100} />
                    </div>
                </div>
                <div className="info  pt-2 pr-1 pl-1 pb-1 text-gray-800">
                    <h5 className='text-sm Outfit2'>{brandName}</h5>
                    <p className='text-[0.8vw] pr-2 pb-[0.1vw] Outfit1'>{description}</p>
                    <span className='font-bold text-[0.95vw]'>{'\u20B9'} {price} <span className='text-red-500 ml-2'>{offer}</span></span>
                </div>
                <div className="btn bg-red-700 flex text-sm justify-center items-center font-bold rounded-b-xl text-white hover:cursor-pointer">ADD TO BAG</div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    brandName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    offer: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
};

export default ProductCard

