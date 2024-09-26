import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

const NewArrival = () => {
    const bestSellers = [["/IMG/bestS1.jpg", "ClassyCloset", "Top", "599", "34% off"],["/IMG/bestS3.jpg", "Luxe", "Denim", "1799", "21% off"],["/IMG/bestS4.jpg", "Femina", "Dress", "1199", "27% off"],["/IMG/bestS5.jpg", "Velvet", "Saree", "2499", "11% off"],["/IMG/bestS6.jpg", "Radiant", "T-shirt", "499", "12% off"],["/IMG/bestS2.jpg", "Bloom", "Dress", "1399", "16% off"],["/IMG/bestS7.jpg", "Grace", "KurtiSet", "1399", "33% off"],["/IMG/bestS8.jpg", "Muse", "Shorts", "899", "29% off"],["/IMG/bestS9.jpg", "Lumière", "Formals", "1899", "18% off"],["/IMG/bestS10.jpg", "Empress", "Jacket", "1199", "39% off"],["/IMG/bestS11.jpg", "Cozy", "Sweater", "2149", "21% off"],["/IMG/bestS12.jpg", "Seraphina", "Lehenga", "4999", "40% off"],["/IMG/bestS14.jpg", "Amora", "Shrugs", "699", "12f% off"],["/IMG/bestS13.jpg", "Aurora", "Indowestern", "2499", "21% off"],["/IMG/bestS15.jpg", "Nova", "Skirt", "1099", "28% off"],["/IMG/bestS16.jpg", "Zephyr", "Dungaree", "1699", "15% off"],["/IMG/bestS17.jpg", "Maven", "Winterwear", "3999", "31% off"],["/IMG/bestS18.jpg", "Blush", "Coords", "1299", "13% off"],["/IMG/bestS19.jpg", "Activewear", "UpTrend", "1899", "32% off"],["/IMG/bestS20.jpg", "Fabulous", "Gown", "2999", "28% off"]]
    const bestContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [autoScrollInterval, setAutoScrollInterval] = useState(5000);
    
    useEffect(() => {
        const container = bestContainerRef.current;

        if (!container) return;

        const handleScroll = () => {
            clearInterval(interval);
            setAutoScrollInterval(10000); 
            
            const newInterval = setInterval(() => {
                const newPosition = scrollPosition + 200; 
                setScrollPosition(newPosition);
                container.scrollTo({
                    left: newPosition,
                    behavior: 'smooth'
                })

                if (newPosition >= container.scrollWidth - container.clientWidth) {
                    setScrollPosition(0);
                    container.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                }
            }, 5000); 

            interval = newInterval;
        };

        let interval = setInterval(() => {
            const newPosition = scrollPosition + 200; 
            setScrollPosition(newPosition);
            container.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });

            if (newPosition >= container.scrollWidth - container.clientWidth) {
                setScrollPosition(0);
                container.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }, autoScrollInterval); 

        container.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(interval);
            container.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition, autoScrollInterval]);

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.6" className='relative w-[100%] h-[55vh] bg-[#26292c]'>
            <h1 className="absolute -top-1 LowPriceText w-full text-center text-yellow-500 text-[4.5vw] mt-1">NEW ARRIVAL</h1>
            <div ref={bestContainerRef} className="relative bestContainer min-w-[13vw] h-[19vw] flex items-center -bottom-[5.1vw] px-2 overflow-auto cursor-pointer">
                {bestSellers.map((element, index) => (
                    <div key={index} className="relative Bcard min-w-[13vw] max-w-[13vw] max-h-[19vw] min-h-[19vw] mr-3 rounded-xl overflow-hidden">
                        <div className="tag absolute right-0 top-0  bg-yellow-400 text-xs px-2 py-1 rounded-bl-md font-semibold shadow-md z-20">New</div>
                        <Image src={element[0]} alt="img" className='absolute object-cover z-10' fill sizes='50vw, 50vw' quality={100}/>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/70 to-transparent to-30%  flex flex-col justify-end p-1 z-20">
                            <div className="flex flex-col pl-2 ">
                                <span className=' text-sm Outfit1 text-white'>{element[1]}</span>
                                <span className=' text-[0.85vw] Outfit1 text-slate-100'>{element[2]}</span>
                                <span className=' text-sm Outfit2 text-white'>{'\u20B9'}{element[3]}<span className='text-yellow-400 font-bold ml-2'>{element[4]}</span></span>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default NewArrival
