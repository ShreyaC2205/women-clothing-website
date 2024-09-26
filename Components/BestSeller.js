import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { cubicBezier, motion } from 'framer-motion'
import Image from 'next/image'


const BestSeller = () => {
    const newGroup = [["/IMG/new1.jpg", "Diva", "Tropical Printed Jumpsuit", "1999", "899", "55% off", "4,600 bought in last 1 month", "Trendy"], ["/IMG/new2.jpg", "Elara", "Long sleeve blazer dress", "3999", "2499", "37% off", "3,300 bought in last 1 month", "Classy"], ["/IMG/new3.jpg", "Aura", "Mini denim dress", "2499", "1499", "40% off", "5,100 bought in last 1 month", "Snazzy"], ["/IMG/new4.jpg", "Celeste", "Oversized checked shirt", "2499", "1499", "40% off", "6,000 bought in last 1 month", "modish"], ["/IMG/new5.jpg", "Reverie", "Abstract print long coat", "6999", "3999", "43% off", "3,200 bought in last 1 month", "Artsy"], ["/IMG/new6.jpg", "Ivy", "Floral print co-ord set", "2999", "1499", "50% off", "5,400 bought in last 1 month", "urbane"], ["/IMG/new7.jpg", "Tempest", "Yellow short jumpsuit", "2999", "1299", "56% off", "6,700 bought in last 1 month", "swish"], ["/IMG/new8.jpg", "DKNY", "Oversized hoodie trackpant", "3999", "2499", "37% off", "6,300 bought in last 1 month", "cool"], ["/IMG/new9.jpg", "Elegance", "Frontslit suit set", "4999", "2999", "40% off", "5,900 bought in last 1 month", "Flair"], ["/IMG/new10.jpg", "Fabletics", "Stripped polo neck t-shirt", "1999", "1499", "25% off", "6,100 bought in last 1 month", "natty"], ["/IMG/new11.jpg", "Ember", "Embroided lehenga with jacket", "6999", "4999", "28% off", "3,900 bought in last 1 month", "Grace"], ["/IMG/new12.jpg", "Glam", "Evening dress", "4999", "2999", "40% off", "2,799 bought in last 1 month", "suave"], ["/IMG/new13.jpg", "Envy", "bishop sleeve ruffle top", "2999", "1299", "56% off", "7,700 bought in last 1 month", "smart"], ["/IMG/new14.jpg", "Charm", "Party wear mini dress", "3999", "2099", "47% off", "2,899 bought in last 1 month", "glam"], ["/IMG/new15.jpg", "Saffron", "Indowestern saree", "4999", "3099", "38% off", "3,090 bought in last 1 month", "plush"], ["/IMG/new16.jpg", "Rhea", "Cotton loungewear set", "1999", "1299", "35% off", "3,109 bought in last 1 month", "chill"], ["/IMG/new17.jpg", "Azure", "Levender activewear set", "2999", "1799", "40% off", "2,670 bought in last 1 month", "brisk"], ["/IMG/new18.jpg", "Nyx", "Brown cotton dungaree", "1999", "1499", "25% off", "3,000 bought in last 1 month", "chic"], ["/IMG/new19.jpg", "Sienna", "Embroided short kurti", "1999", "1099", "45% off", "5,700 bought in last 1 month", "cult"], ["/IMG/new20.jpg", "Veda", "Beige midi skirt", "3999", "2199", "45% off", "4,990 bought in last 1 month", "charm"]]
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.6" className='relative w-[100%] h-[60vh] bg-[#26292c]'>
            <h1 className="absolute top-0 LowPriceText w-full text-center text-yellow-500 text-[5vw]">BESTSELLERS</h1>
            <div className="absolute NewContainer min-w-[100%] h-[92%] top-2 px-3 flex gap-3 overflow-auto cursor-w-resize">
                {newGroup.map((element, index) => (
                    <div key={index} className="relative top-[5vw] newCard bg-slate-100 min-w-[15%] max-w-[15%] max-h-[80%] min-h-[80%] flex justify-center rounded-lg shadow-sm shadow-slate-500 shadow-b-[2px] shadow-r-[2px] shadow-spread-[1vw] cursor-pointer">
                        <div className="textss uppercase text-[2.5vw] absolute top-2 font-extrabold">{element[7]}</div>
                        <motion.div initial={{ bottom: "4px" }} whileInView={{ top: "4px" }} transition={{ ease: cubicBezier(.72, 0, .52, .90), duration: 2, delay: 1.5 }} className='absolute bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... w-[95%] h-[66%] rounded-lg flex justify-center shadow-inner  border-2 border-yellow-400 z-20'>
                            <div className='shIMG absolute w-[17.7vw] h-[17.7vw] -top-[4.3vw] rounded-lg '>
                                <Image 
                                    src={element[0]}
                                    alt="img"
                                    fill
                                    sizes='30vw, 30vw'
                                    quality={100} 
                                    className='absolute object-cover object-top'/>
                            </div>
                        </motion.div>
                        <div className="absolute newInfo w-full h-20 bottom-1 px-3 flex flex-col z-10 text-slate-900">
                            <span className=' text-sm Outfit2'>{element[1]}</span>
                            <span className='text-xs mb-1 Outfit1'>{element[2]}</span>
                            <span className='font-semibold text-sm mb-1 Outfit2'><span className='text-gray-500'><strike>{element[3]}</strike></span><span className='ml-1 mr-2'>{'\u20B9'}{element[4]}</span><span className='text-green-600'>{element[5]}</span></span>
                            <span className=' text-[0.75vw] text-red-600 Outfit1'>{element[6]} <FontAwesomeIcon icon={faArrowTrendUp} /></span>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default BestSeller
