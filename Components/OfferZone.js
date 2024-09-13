import React from 'react'
import Card from './Card'
import { motion, cubicBezier } from 'framer-motion'
import Image from 'next/image'

const OfferZone = () => {
    const arr = ["/IMG/Brands/adidas.png", "/IMG/Brands/dressberry.png", "/IMG/Brands/freakins.png", "/IMG/Brands/H&M.png", "/IMG/Brands/Levis.png", "/IMG/Brands/libas.png", "/IMG/Brands/Mango.png", "/IMG/Brands/only.png", "/IMG/Brands/puma.png", "/IMG/Brands/westside.png", "/IMG/Brands/zara.png", "/IMG/Brands/biba.png", "/IMG/Brands/pantaloons.png"]
    return (
        <div className='relative MainContainer w-[100%] h-[100vh] bg-[#A9E5FF] overflow-hidden rounded-tl-[2vw] rounded-tr-[2vw] rounded-br-[2vw] rounded-bl-[2vw] z-50' >
            <div className='absolute w-[100%] h-[100%] flex flex-cols justify-center'>
                <div className="absolute cardsContain w-[96%] h-auto top-7 flex gap-4 justify-between">
                    <Card OfferImg="/IMG/tshirt.png" brandImg="/IMG/Brands/adidas.png" CardOffer1="T-shirt" CardOffer2="Min 40% Off" />
                    <Card OfferImg="/IMG/jumpsuit.png" brandImg="/IMG/Brands/dressberry.png" CardOffer1="Jumpsuits" CardOffer2="Min 24% Off" />
                    <Card OfferImg="/IMG/jeans.jpg" brandImg="/IMG/Brands/levis.png" CardOffer1="Jeans" CardOffer2="Min 55% Off" />
                    <Card OfferImg="/IMG/sportwear.jpg" brandImg="/IMG/Brands/puma.png" CardOffer1="SportWear" CardOffer2="Min 33% Off" />
                </div>
                <div className="absolute cardsContain w-[96%] h-auto flex gap-4 justify-between top-1/2 translate-y-[6.6vw] z-20">
                    <Card OfferImg="/IMG/denim.jpg" brandImg="/IMG/Brands/freakins.png" CardOffer1="All About Denim" CardOffer2="Min 23% Off" />
                    <Card OfferImg="/IMG/kurti.png" brandImg="/IMG/Brands/libas.png" CardOffer1="TraditionalWear" CardOffer2="Min 60% Off" />
                    <Card OfferImg="/IMG/dresswear.png" brandImg="/IMG/Brands/westside.png" CardOffer1="Dresses" CardOffer2="Min 48% Off" />
                    <Card OfferImg="/IMG/blazer.jpeg" brandImg="/IMG/Brands/H&M.png" CardOffer1="Suits & Trousers" CardOffer2="Min 16% Off" />
                </div>
            </div>
            <div className="offerText absolute z-0 text-[7vw] top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 text-center text-[#62d0ff96]  flex items-center">
                <div>
                    <motion.h1 initial={{ y: "40%" }} whileInView={{ y: "0" }} transition={{ ease: cubicBezier(.72, 0, .52, .90), duration: 1.2 }} className='w-[100%] relative top-4'>OFFER</motion.h1> <motion.h1 initial={{ y: "-40%" }} whileInView={{ y: "0" }} transition={{ ease: cubicBezier(.72, 0, .52, .90), duration: 1.2 }} className='w-[100%] relative -top-3'>ZONE</motion.h1>
                </div>
                    <span className='relative percent text-[20vw] text-[#62d0ff96]'>%</span>
            </div>

            <div className="YellowStrip absolute w-auto h-[5vw] top-1/2 -translate-y-1/2 overflow-hidden">
                <div className='relative w-[100%] bg-white h-12 pt-2 pb-2 flex top-1/2 -translate-y-1/2'>
                    <div className="brandStrip min-w-[100%] h-full flex items-center justify-around">
                        {arr.map((Element, index) => (
                            <Image className='h-[70%] w-auto' key={index} src={Element} alt="brands" width={500} height={0} quality={100}/>
                        ))}
                    </div>
                    <div className="brandStrip min-w-[100%] h-full flex items-center justify-around">
                        {arr.map((Element, index) => (
                            <Image className='h-[70%] w-auto' key={index} src={Element} alt="brands" width={500} height={0} quality={100}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferZone
