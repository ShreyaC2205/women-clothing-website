import { motion, cubicBezier } from 'framer-motion';
import StyleCard from './StyleCard';



const Coords = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.4" className='relative w-[100%] h-[100vh] z-50'>
            <div className='w-[100%] h-[100vh] pl-3 pr-3 pb-3 grid grid-rows-[12%_88%] bg-[#26292c]'>
                <div className=' w-auto h-auto coText flex m-0 p-0  justify-center z-0'>
                    <motion.span initial={{ y: "70%" }} whileInView={{ y: "0" }} transition={{ ease: cubicBezier(.72, 0, .52, .90), duration: 1.2 }} className='relative -top-2 text-[6vw] m-0 p-0 '>STYLING TIPS</motion.span>
                </div>

                <div className="child bg-[#A9E5FF] p-3 grid grid-cols-[1fr_1fr_1fr_1fr] gap-3 z-10 rounded-xl">
                    <StyleCard pairDiv={["BlueWhite", "OrangeBlue", "PurpleBlack", "LevenderWhite", "WhiteBeige"]} Coimg1="/IMG/pair1a.jpg" Coimg2="/IMG/pair1b.png" Coimg3="/IMG/pair2b.jpg" Coimg4="/IMG/pair2a.png" Coimg5="/IMG/pair3b.jpg" Coimg6="/IMG/pair3a.png" Coimg7="/IMG/pair4a.jpg" Coimg8="/IMG/pair1b.png" Coimg9="/IMG/pair5b.png" Coimg10="/IMG/pair5a.png" qbrand1="Fabulous" qbrand2="Fabulous" qbrand3="Closet Luxe" qbrand4="Closet Luxe" qbrand5="SirenStyle" qbrand6="SirenStyle" qbrand7="Eleganza" qbrand8="Eleganza" qbrand9="Plush Peach" qbrand10="Plush Peach" qdesc1="Blue Oversized Shirt" qdesc2="White Straight Fit Trouser" qdesc3="Orange No sleeve Crop Top" qdesc4="Blue Straight Fit Trouser" qdesc5="Purple Solid Casual Blazer" qdesc6="Black Straight Fit Trouser" qdesc7="Levender Wrap Crop Top" qdesc8="White Straight Fit Trouser" qdesc9="White Off-shoulder Top" qdesc10="Beige Straight Fit Trouser" qprice1="799" qprice2="1299" qprice3="399" qprice4="1099" qprice5="1399" qprice6="1199" qprice7="999" qprice8="1299" qprice9="899" qprice10="1499" qoffer1="16%" qoffer2="23%" qoffer3="6%" qoffer4="33%" qoffer5="26%" qoffer6="46%" qoffer7="11%" qoffer8="23%" qoffer9="34%" qoffer10="19%" qrating1="4.0" qrating2="4.3" qrating3="4.6" qrating4="4.2" qrating5="4.0" qrating6="3.9" qrating7="4.8" qrating8="4.3" qrating9="4.2" qrating10="4.8" imageSec={["/IMG/pair1.png", "/IMG/pair2.png", "/IMG/pair3.png", "/IMG/pair4.png", "/IMG/pair5.png"]} />
                    <StyleCard pairDiv={["LevenderWhite", "GreenBlue", "SkyblueWhite", "NavyblueWhite", "GoldenGray"]} Coimg1="/IMG/sec2pair1b.jpg" Coimg2="/IMG/sec2pair1a.jpg" Coimg3="/IMG/sec2pair2a.jpg" Coimg4="/IMG/sec2pair2b.jpg" Coimg5="/IMG/sec2pair3a.jpg" Coimg6="/IMG/sec2pair3b.jpg" Coimg7="/IMG/sec2pair4a.jpg" Coimg8="/IMG/sec2pair4b.jpg" Coimg9="/IMG/sec2pair5a.jpg" Coimg10="/IMG/sec2pair5b.jpg" qbrand1="Aura" qbrand2="Aura" qbrand3="Enigma" qbrand4="Enigma" qbrand5="Elara" qbrand6="Elara" qbrand7="Divina" qbrand8="Divina" qbrand9="Allegra" qbrand10="Allegra" qdesc1="White Casual Half-Sleeve Shirt" qdesc2="Levender Strap Midi Dress" qdesc3="Mint Green Crop Sweater" qdesc4="Floral Printed Midi Skirt" qdesc5="Skyblue Ruffle Top" qdesc6="White flayerd Midi Skirt" qdesc7="White Crop Collar T-shirt" qdesc8="Navy Blue Mini Skirt" qdesc9="GoldBrown Silk Wrap Top" qdesc10="High Waist Gray Long Skirt" qprice1="699" qprice2="1099" qprice3="1399" qprice4="899" qprice5="599" qprice6="799" qprice7="499" qprice8="1199" qprice9="1299" qprice10="899" qoffer1="23%" qoffer2="29%" qoffer3="20%" qoffer4="11%" qoffer5="8%" qoffer6="33%" qoffer7="39%" qoffer8="18%" qoffer9="12%" qoffer10="21%" qrating1="4.1" qrating2="4.5" qrating3="4.3" qrating4="3.8" qrating5="4.7" qrating6="4.6" qrating7="4.2" qrating8="4.0" qrating9="4.8" qrating10="4.0" imageSec={["/IMG/sec2pair1.png", "/IMG/sec2pair2.png", "/IMG/sec2pair3.png", "/IMG/sec2pair4.png", "/IMG/sec2pair5.png"]} />
                    <StyleCard pairDiv={["NavyblueWhite", "whiteBlue", "PinkBlue", "GreenWhite", "BeigeBeige"]} Coimg1="/IMG/sec4pair1a.jpg" Coimg2="/IMG/sec4pair1b.jpg" Coimg3="/IMG/sec4pair2a.jpg" Coimg4="/IMG/sec4pair2b.jpg" Coimg5="/IMG/sec4pair3a.jpg" Coimg6="/IMG/sec4pair3b.jpg" Coimg7="/IMG/sec4pair4a.jpg" Coimg8="/IMG/sec4pair4b.jpg" Coimg9="/IMG/sec4pair5a.jpg" Coimg10="/IMG/sec4pair5b.jpg" qbrand1="Rebel" qbrand2="Rebel" qbrand3="Empress" qbrand4="Empress" qbrand5="Finesse" qbrand6="Finesse" qbrand7="Bloom" qbrand8="Bloom" qbrand9="Tempest" qbrand10="Tempest" qdesc1="White CrissCross Crop Top" qdesc2="NavyBlue Plated Shorts" qdesc3="Blue Stripped Oversized Shirt" qdesc4="White Highrise Waist Shorts" qdesc5="Pink Puff-Sleeve Bow Blouse" qdesc6="Blue Denim Shorts" qdesc7="White Crop Tank Top" qdesc8="Green Ruffle Mini Skirt" qdesc9="Beige OverSized Blazer" qdesc10="Beige HighRise Short Pant" qprice1="699" qprice2="899" qprice3="899" qprice4="1099" qprice5="899" qprice6="1099" qprice7="699" qprice8="799" qprice9="1499" qprice10="1199" qoffer1="16%" qoffer2="33%" qoffer3="21%" qoffer4="38%" qoffer5="18%" qoffer6="28%" qoffer7="33%" qoffer8="40%" qoffer9="16%" qoffer10="23%" qrating1="4.2" qrating2="4.4" qrating3="4.6" qrating4="4.3" qrating5="4.0" qrating6="4.1" qrating7="4.0" qrating8="4.5" qrating9="4.5" qrating10="4.7" imageSec={["/IMG/sec4pair1.png", "/IMG/sec4pair2.png", "/IMG/sec4pair3.png", "/IMG/sec4pair4.png", "/IMG/sec4pair5.png"]} />
                    <StyleCard pairDiv={["BiscuitWhite", "OliveMintGreen", "SkyblueWhite", "BrownBlue", "BlueWhite"]} Coimg1="/IMG/sec3pair1a.jpg" Coimg2="/IMG/sec3pair1b.jpg" Coimg3="/IMG/sec3pair2a.jpg" Coimg4="/IMG/sec3pair2b.jpg" Coimg5="/IMG/sec3pair3a.jpg" Coimg6="/IMG/sec3pair3b.jpg" Coimg7="/IMG/sec3pair4a.jpg" Coimg8="/IMG/sec3pair4b.jpg" Coimg9="/IMG/sec3pair5a.jpg" Coimg10="/IMG/sec3pair5b.jpg" qbrand1="Élan" qbrand2="Élan" qbrand3="Svelte" qbrand4="Svelte" qbrand5="Ember" qbrand6="Ember" qbrand7="Nova" qbrand8="Nova" qbrand9="Eden" qbrand10="Eden" qdesc1="Brown Sweater & White Shirt" qdesc2="Blue Boyfriend Fit Jeans" qdesc3="Mint-Green  Crop Top" qdesc4="Olive-Green Cargo Pant" qdesc5="White Crop BabyTee" qdesc6="LightBlue Denim Dungaree" qdesc7="Brown Puff Sleeve Crop Top" qdesc8="Blue Wide-leg Jeans" qdesc9="White OverSized Shirt" qdesc10="Blue Boyfriend Fit Jeans" qprice1="2449" qprice2="1299" qprice3="699" qprice4="1399" qprice5="599" qprice6="1899" qprice7="1099" qprice8="1499" qprice9="799" qprice10="1199" qoffer1="21%" qoffer2="19%" qoffer3="13%" qoffer4="37%" qoffer5="27%" qoffer6="36%" qoffer7="28%" qoffer8="30%" qoffer9="20%" qoffer10="37%" qrating1="4.3" qrating2="4.1" qrating3="4.4" qrating4="4.6" qrating5="4.2" qrating6="4.5" qrating7="4.7" qrating8="4.6" qrating9="4.2" qrating10="4.3" imageSec={["/IMG/sec3pair1.png", "/IMG/sec3pair2.png", "/IMG/sec3pair3.png", "/IMG/sec3pair4.png", "/IMG/sec3pair5.png"]} />
                </div>
            </div>
        </div>
    )
}

export default Coords
