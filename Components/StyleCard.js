import React from 'react'
import { useEffect, useState, useRef } from 'react';
import ProductCard from './ProductCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

const StyleCard = (Props) => {


    const { pairDiv, imageSec } = Props
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [pairA, setPairA] = useState(0);
    const [pairB, setPairB] = useState(0);

    const shopHereRef = useRef(null);
    const pairRefs = useRef(pairDiv.map(() => React.createRef()));

    const handleMoreBtnClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === imageSec.length - 1 ? 0 : prevIndex + 1
        );
    };
    useEffect(() => {
        const setPairs = () => {
            const pairs = [
                [1, 2],
                [3, 4],
                [5, 6],
                [7, 8],
                [9, 10]
            ];

            if (currentImageIndex >= 0 && currentImageIndex < pairs.length) {
                const [pairA, pairB] = pairs[currentImageIndex];
                setPairA(pairA);
                setPairB(pairB);
            }
        };

        setPairs();
    }, [currentImageIndex]);

    const handleShopButtonMouseEnter = () => {
        const shopHereDiv = shopHereRef.current;
        if (shopHereDiv) shopHereDiv.style.opacity = 0;

        pairRefs.current.forEach(pairRef => {
            if (pairRef.current) pairRef.current.style.opacity = 1;
        });
    };


    const handlePairDivMouseLeave = () => {
        const shopHereDiv = shopHereRef.current;
        if (shopHereDiv) shopHereDiv.style.opacity = 1;
        pairRefs.current.forEach(pairRef => {
            if (pairRef.current) pairRef.current.style.opacity = 0;
        });
    }

    return (
        <div>
            <div className=" container w-[100%] h-[100%] relative co1 rounded-xl  overflow-hidden shadow-[2px_2px_6px_gray]">
                <img src="/IMG/bg2.jpg" alt="bg" className='absolute z-10 w-[100%] h-[100%] object-cover' />
                <img className='absolute w-[100%] h-[38.7vw] object-cover z-20' src={Props.imageSec[currentImageIndex]} alt="pairIMG" />
                {pairDiv.map((element, index) => (
                    <div ref={pairRefs.current[index]} style={{ transition: "all 0.6s" }} key={index} onMouseLeave={() => handlePairDivMouseLeave(index)} className={`${element}  w-[85%] h-[64%] bg-lime-500 rounded-xl absolute top-[22%] left-1/2 -translate-x-1/2 grid grid-rows-[10%_90%] opacity-0 z-20`}>
                        <div className='flex justify-center items-center font-bold text-xl text-red-700'>QUICK BUY</div>
                        <div className='quickBuy flex p-2 gap-2 w-auto '>
                            <ProductCard image={Props[`Coimg${pairA}`]} brandName={Props[`qbrand${pairA}`]} description={Props[`qdesc${pairA}`]} price={Props[`qprice${pairA}`]} offer={Props[`qoffer${pairA}`]} rating={Props[`qrating${pairA}`]} />
                            <ProductCard image={Props[`Coimg${pairB}`]} brandName={Props[`qbrand${pairB}`]} description={Props[`qdesc${pairB}`]} price={Props[`qprice${pairB}`]} offer={Props[`qoffer${pairB}`]} rating={Props[`qrating${pairB}`]} />
                        </div>
                    </div>
                )
                )}

                <div ref={shopHereRef} style={{ transition: "all 0.6s" }} className='ShopHere w-[80%] h-10 bg-lime-500 rounded-xl absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 grid grid-cols-[1fr_1fr] z-20'>
                    <div onMouseEnter={handleShopButtonMouseEnter} className="downSize border-r-2 flex justify-center items-center hover:rounded-xl cursor-pointer">
                        <button onMouseEnter={handleShopButtonMouseEnter} className='downSize Outfit1'>SHOP</button>
                    </div>
                    <div className="More flex justify-center items-center  hover:rounded-xl cursor-pointer gap-2">
                        <button className='Outfit1' onClick={handleMoreBtnClick}>NEXT</button>
                        <FontAwesomeIcon icon={faAnglesRight} className='text-sm text-gray-800' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StyleCard
