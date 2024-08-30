import Navbar from './Navbar'
import { EB_Garamond } from 'next/font/google'
import Link from 'next/link'

const eb_garamond = EB_Garamond({
    subsets: ['latin'],
})

const HeroSectionRooms = () => {
  return (
    <div className={`bg-[url("/images/roomsimg.png")] bg-gray-400 bg-cover bg-center xl:bg-bottom xl:h-screen lg:h-[80vh] md:h-[70vh] relative`} style={{ backgroundBlendMode: "multiply" }}>
        <Navbar />
        <div className='text-white px-10 pt-12 xl:px-40 md:px-20 md:pt-24 lg:pt-32 xl:pt-36'>
            <h3 className='xl:text-2xl'>WELCOME TO</h3>
            <h1 className={`${eb_garamond.className} text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold`}>LUXURY</h1>
            <h2 className={`${eb_garamond.className} text-3xl md:4xl xl:5xl xl:font-semibold`} style={{letterSpacing: 8}}>HOTELS</h2>
            <p className='w-72 md:w-[40vw] xl:text-xl'>Book your stay and enjoy Luxury redefined at the most affordable rates.</p>
        </div>
        <div className='md:absolute md:bottom-3 md:left-[40%] py-8 px-10'>
            <button className='bg-[#e0b973] rounded-xl py-1 px-2 xl:py-2 xl:px-4 hover:bg-orange-300'><Link href={"/contact-us"} className='flex items-center gap-2' >
            <svg className="w-[20px] h-[20px] xl:w-[30px] xl:h-[30px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M6 5V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v2H3V7a2 2 0 0 1 2-2h1ZM3 19v-8h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm5-6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" clip-rule="evenodd"/>
            </svg>
            <span className='text-xs font-bold text-white xl:text-base'>BOOK NOW</span>
            </Link></button>
        </div>
    </div>
  )
}

export default HeroSectionRooms