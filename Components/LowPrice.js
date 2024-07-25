import React, { useEffect } from 'react'
import LowPriceCard from './LowPriceCard'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LowPrice = () => {
    const price1 = ["199", "299", "299", "599", "399", "199"]
    const price2 = ["399", "199", "299", "149", "199", "299"]
    useEffect(() => {
        const cateArrows = document.querySelectorAll('.containerLowP .arrow-container');

        cateArrows.forEach(arrow => {
            const cate = arrow.closest('.containerLowP');

            cate.addEventListener('scroll', function () {
                const scrollPercentage = (cate.scrollTop + cate.clientHeight) / cate.scrollHeight * 100;

                if (scrollPercentage >= 20) {
                    arrow.style.display = 'none';
                } else {
                    arrow.style.display = 'block';
                }
            });
        });
    }, []);

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.2" className='relative w-[100%] h-[65vh] bg-[#26292c]'>
            <h1 className="absolute LowPriceText w-full text-center text-yellow-500 text-[4.5vw] mt-2">LOWEST PRICE STORE</h1>
            <div className="containerLowP rounded-2xl w-[95%] h-[41vh] absolute bottom-20 left-1/2 -translate-x-1/2 flex overflow-auto border-8 border-yellow-500">
                <motion.div
                    className="arrow-container absolute items-center right-6 top-1/2 -translate-y-1/2 text-[3vw] w-[4vw] h-[3vw] flex justify-center z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="arrow"
                        animate={{
                            x: [-10, 10, -10],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse", 
                        }}
                    >
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </motion.div>
                </motion.div>
                <div className="contain1 min-w-[100%] h-full flex cursor-pointer rounded-tl-lg rounded-bl-lg overflow-hidden">
                    {price1.map((element, index) => (
                        <LowPriceCard img={`/IMG/lowP${index + 1}.jpg`} price={element} key={index} />
                    ))}
                </div>
                <div className="contain1 min-w-[100%] h-full flex cursor-pointer rounded-tr-lg rounded-br-lg overflow-hidden">
                    {price2.map((element, index) => (
                        <LowPriceCard img={`/IMG/lowPN${index + 1}.jpg`} price={element} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LowPrice
