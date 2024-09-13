import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const StyleCard = (props) => {
    const { pairDiv, imageSec, ...productData } = props;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [pairA, setPairA] = useState(0);
    const [pairB, setPairB] = useState(0);

    const shopHereRef = useRef(null);
    const pairRefs = useRef(pairDiv.map(() => React.createRef()));

    useEffect(() => {
        const pairs = [
            [0, 1],
            [2, 3],
            [4, 5],
            [6, 7],
            [8, 9]
        ];

        if (currentImageIndex >= 0 && currentImageIndex < pairs.length) {
            const [pairA, pairB] = pairs[currentImageIndex];
            setPairA(pairA);
            setPairB(pairB);
        }
    }, [currentImageIndex]);

    const handleMoreBtnClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === imageSec.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleShopButtonMouseEnter = () => {
        if (shopHereRef.current) shopHereRef.current.style.opacity = 0;

        pairRefs.current.forEach(pairRef => {
            if (pairRef.current) pairRef.current.style.opacity = 1;
        });
    };

    const handlePairDivMouseLeave = () => {
        if (shopHereRef.current) shopHereRef.current.style.opacity = 1;
        pairRefs.current.forEach(pairRef => {
            if (pairRef.current) pairRef.current.style.opacity = 0;
        });
    };

    const getProductProps = (index) => {
        return {
            image: productData[`Coimg${index + 1}`], 
            brandName: productData[`qbrand${index + 1}`],
            description: productData[`qdesc${index + 1}`],
            price: productData[`qprice${index + 1}`],
            offer: productData[`qoffer${index + 1}`],
            rating: productData[`qrating${index + 1}`],
        };
};
    return (
        <div className="container w-[100%] h-[100%] relative co1 rounded-xl overflow-hidden shadow-[2px_2px_6px_gray]">
            <Image src="/IMG/bg2.jpg" alt="bg" className='absolute z-10 w-[100%] h-[100%] object-cover' width={2000} height={0} quality={100}/>
            <Image className='absolute w-[100%] h-[38.7vw] object-cover z-20' src={imageSec[currentImageIndex]} alt="pairIMG" width={2000} height={0} quality={100}/>
            {pairDiv.map((element, index) => (
                <div
                    ref={pairRefs.current[index]}
                    style={{ transition: "all 0.6s" }}
                    key={index}
                    onMouseLeave={handlePairDivMouseLeave}
                    className={`${element} w-[85%] h-[64%] bg-lime-500 rounded-xl absolute top-[22%] left-1/2 -translate-x-1/2 grid grid-rows-[10%_90%] opacity-0 z-20`}
                >
                    <div className='flex justify-center items-center font-bold text-xl text-red-700'>QUICK BUY</div>
                    <div className='quickBuy flex p-2 gap-2 w-auto'>
                        <ProductCard {...getProductProps(pairA)} />
                        <ProductCard {...getProductProps(pairB)} />
                    </div>
                </div>
            ))}
            <div ref={shopHereRef} style={{ transition: "all 0.6s" }} className='ShopHere w-[80%] h-10 bg-lime-500 rounded-xl absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 grid grid-cols-[1fr_1fr] z-20'>
                <div onMouseEnter={handleShopButtonMouseEnter} className="downSize border-r-2 flex justify-center items-center hover:rounded-xl cursor-pointer">
                    <button onMouseEnter={handleShopButtonMouseEnter} className='downSize Outfit1'>SHOP</button>
                </div>
                <div className="More flex justify-center items-center hover:rounded-xl cursor-pointer gap-2">
                    <button className='Outfit1' onClick={handleMoreBtnClick}>NEXT</button>
                    <FontAwesomeIcon icon={faAnglesRight} className='text-sm text-gray-800' />
                </div>
            </div>
        </div>
    );
};

StyleCard.propTypes = {
    pairDiv: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageSec: PropTypes.arrayOf(PropTypes.string).isRequired,
    Coimg1: PropTypes.string.isRequired,
    Coimg2: PropTypes.string.isRequired,
    Coimg3: PropTypes.string.isRequired,
    Coimg4: PropTypes.string.isRequired,
    Coimg5: PropTypes.string.isRequired,
    Coimg6: PropTypes.string.isRequired,
    Coimg7: PropTypes.string.isRequired,
    Coimg8: PropTypes.string.isRequired,
    Coimg9: PropTypes.string.isRequired,
    Coimg10: PropTypes.string.isRequired,
    qbrand1: PropTypes.string.isRequired,
    qbrand2: PropTypes.string.isRequired,
    qbrand3: PropTypes.string.isRequired,
    qbrand4: PropTypes.string.isRequired,
    qbrand5: PropTypes.string.isRequired,
    qbrand6: PropTypes.string.isRequired,
    qbrand7: PropTypes.string.isRequired,
    qbrand8: PropTypes.string.isRequired,
    qbrand9: PropTypes.string.isRequired,
    qbrand10: PropTypes.string.isRequired,
    qdesc1: PropTypes.string.isRequired,
    qdesc2: PropTypes.string.isRequired,
    qdesc3: PropTypes.string.isRequired,
    qdesc4: PropTypes.string.isRequired,
    qdesc5: PropTypes.string.isRequired,
    qdesc6: PropTypes.string.isRequired,
    qdesc7: PropTypes.string.isRequired,
    qdesc8: PropTypes.string.isRequired,
    qdesc9: PropTypes.string.isRequired,
    qdesc10: PropTypes.string.isRequired,
    qprice1: PropTypes.string.isRequired,
    qprice2: PropTypes.string.isRequired,
    qprice3: PropTypes.string.isRequired,
    qprice4: PropTypes.string.isRequired,
    qprice5: PropTypes.string.isRequired,
    qprice6: PropTypes.string.isRequired,
    qprice7: PropTypes.string.isRequired,
    qprice8: PropTypes.string.isRequired,
    qprice9: PropTypes.string.isRequired,
    qprice10: PropTypes.string.isRequired,
    qoffer1: PropTypes.string.isRequired,
    qoffer2: PropTypes.string.isRequired,
    qoffer3: PropTypes.string.isRequired,
    qoffer4: PropTypes.string.isRequired,
    qoffer5: PropTypes.string.isRequired,
    qoffer6: PropTypes.string.isRequired,
    qoffer7: PropTypes.string.isRequired,
    qoffer8: PropTypes.string.isRequired,
    qoffer9: PropTypes.string.isRequired,
    qoffer10: PropTypes.string.isRequired,
    qrating1: PropTypes.string.isRequired,
    qrating2: PropTypes.string.isRequired,
    qrating3: PropTypes.string.isRequired,
    qrating4: PropTypes.string.isRequired,
    qrating5: PropTypes.string.isRequired,
    qrating6: PropTypes.string.isRequired,
    qrating7: PropTypes.string.isRequired,
    qrating8: PropTypes.string.isRequired,
    qrating9: PropTypes.string.isRequired,
    qrating10: PropTypes.string.isRequired,
};

export default StyleCard;
