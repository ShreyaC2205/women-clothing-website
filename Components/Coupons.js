import React, { useEffect, useState } from 'react';
import { motion, cubicBezier } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

const Coupons = () => {
    const [nextClick, setNextClick] = useState(false)
    const [clicked, setClicked] = useState(null)
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const createScratchCard = (canvasID) => {
            const canvas = document.getElementById(canvasID);
            const ctx = canvas.getContext('2d');

            const img = new Image();
            img.onload = function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
            img.src = '/IMG/Coupons/scratchCard3.jpg';


            const scratch = (event) => {
                if (canvas.isDrawing) {
                    const rect = canvas.getBoundingClientRect();
                    const scaleX = canvas.width / rect.width;
                    const scaleY = canvas.height / rect.height;
                    const x = (event.clientX - rect.left) * scaleX;
                    const y = (event.clientY - rect.top) * scaleY;

                    const scalingFactor = 1;
                    const radius = 20 * scalingFactor;

                    const lastX = canvas.lastX || x;
                    const lastY = canvas.lastY || y;

                    const dx = x - lastX;
                    const dy = y - lastY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx);

                    for (let i = 0; i < distance; i += 1) {
                        const newX = lastX + (Math.cos(angle) * i);
                        const newY = lastY + (Math.sin(angle) * i);
                        ctx.globalCompositeOperation = 'destination-out';
                        ctx.beginPath();
                        ctx.arc(newX, newY, radius, 0, Math.PI * 2);
                        ctx.fill();
                    }

                    canvas.lastX = x;
                    canvas.lastY = y;


                }
            };

            const handleMouseDown = () => {
                canvas.isDrawing = true;
            };

            const handleMouseUp = () => {
                canvas.isDrawing = false;
            };

            const handleMouseLeave = () => {
                canvas.isDrawing = false;
            };

            canvas.addEventListener('mousedown', handleMouseDown);
            canvas.addEventListener('mousemove', scratch);
            canvas.addEventListener('mouseup', handleMouseUp);
            canvas.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                // Cleanup event listeners
                canvas.removeEventListener('mousedown', handleMouseDown);
                canvas.removeEventListener('mousemove', scratch);
                canvas.removeEventListener('mouseup', handleMouseUp);
                canvas.removeEventListener('mouseleave', handleMouseLeave);
            };
        };

        createScratchCard('myCanvas1');
        createScratchCard('myCanvas2');
        createScratchCard('myCanvas3');
        createScratchCard('myCanvas4');
        createScratchCard('myCanvas5');
        createScratchCard('myCanvas6');
        createScratchCard('myCanvas7');
        createScratchCard('myCanvas8');


    }, []);

    const handleNextClick = () => {
        setNextClick(true)
    }
    const handlePreviousClick = () => {
        setNextClick(false)
    }

    const clickedCoupon = (index) => {
        setClicked(index)
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false); // Close the modal
    };

    return (
        <div className='relative w-[100%] h-[60vh] bg-gray-800'>
            <div className=' w-auto h-auto coText flex m-0 p-0  justify-center z-0'>
                <motion.span initial={{ y: "70%" }} whileInView={{ y: "0" }} transition={{ ease: cubicBezier(.72, 0, .52, .90), duration: 1.2 }} className='relative -top-2 text-[6vw] m-0 p-0 '>COUPONS</motion.span>
            </div>
            <div className='absolute couponContainer w-[75%] min-h-[20vw]  top-[19%] left-1/2 -translate-x-1/2  flex rounded-xl overflow-hidden'>
                <motion.div initial={{ x: "0" }} animate={nextClick ? { x: "-100%" } : { x: "0" }} transition={{ease:"easeInOut", duration:1}} className='CouponsScratch min-w-[100%] min-h-[100%] bg-[#FFC90D] flex items-center justify-around pl-10 pr-10'>
                    {[1, 2, 3, 4].map((index) => (
                        <div key={index} className='relative w-[16vw] h-[16vw] select-none'>
                            <div onClick={() => clickedCoupon(index)} className='absolute scratchCard w-full h-full rounded-xl overflow-hidden'>
                                <img onClick={() => clickedCoupon(index)} className='w-[100%] h-[100%]  object-cover' src={`/IMG/Coupons/Coupon${index}.png`} alt='coupon' />
                            </div>
                            <canvas onClick={() => clickedCoupon(index)} id={`myCanvas${index}`} className='absolute rounded-xl overflow-hidden w-[16.1vw] h-[16.1vw] cursor-grab'></canvas>
                        </div>
                    ))}
                </motion.div>
                <motion.div initial={{ x: "0" }} animate={nextClick ? { x: "-100%" } : { x: "0" }} transition={{ease:"easeInOut", duration:1}} className='CouponsScratch  min-w-[100%] min-h-[100%] bg-[#FE4773] flex items-center justify-around pl-10 pr-10'>
                    {[5, 6, 7, 8].map((index) => (
                        <div key={index} className='relative w-[16vw] h-[16vw] select-none rounded-xl overflow-hidden'>
                            <div onClick={() => clickedCoupon(index)} className='absolute scratchCard w-full h-full '>
                                <img onClick={() => clickedCoupon(index)} className='w-[100%] h-[100%] object-cover scratchCard' src={`/IMG/Coupons/Coupon${index}.png`} alt='coupon' />
                            </div>
                            <canvas onClick={() => clickedCoupon(index)} id={`myCanvas${index}`} className='rounded-xl absolute overflow-hidden w-[16.1vw] h-[16.1vw] cursor-grab'></canvas>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div onClick={handleNextClick} className='next absolute w-20 h-20 rounded-full bg-[#FFC90D] flex top-[45%]  right-32 items-center justify-center shadow-xl'>
                <button className="next">
                    <FontAwesomeIcon icon={faAnglesRight} className=' text-gray-800 text-[3vw]' />
                </button>
            </div>
            <div onClick={handlePreviousClick} className='next absolute w-20 h-20 rounded-full bg-[#FFC90D] flex top-[45%] left-32 items-center justify-center shadow-xl'>
                <button className="previous">
                    <FontAwesomeIcon icon={faAnglesLeft} className=' text-gray-800 text-[3vw]' />
                </button>
            </div>
            <div>
                {modalOpen && clicked !== null && (
                    <div className="modal absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center bg-black bg-opacity-50 p-2 select-none">
                        <div className="max-w-screen-sm w-full h-full relative">
                            <button onClick={closeModal} className="absolute top-4 right-4 text-white text-3xl focus:outline-none">&times;</button>
                            <img className="max-w-full max-h-full" src={`/IMG/Coupons/Coupon${clicked}.png`} alt='coupon' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Coupons;
