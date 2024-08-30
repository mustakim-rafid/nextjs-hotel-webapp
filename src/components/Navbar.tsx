import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='sticky top-0'>
        <div className='container mx-auto px-5 lg:px-40 flex justify-between'>
            <div>
                <Link href={"/"}>
                    <Image 
                    src="hotelLogo.svg"
                    alt='luxury-hotels'
                    width={90}
                    height={90}
                    />
                </Link>
            </div>

            <div className="dropdown dropdown-end sm:hidden">
                <div tabIndex={0} role="button" className="btn m-1">
                <svg className="w-[37px] h-[37px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="1.4" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>

                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li className='font-semibold'><Link href={"/"}>Home</Link></li>
                    <li className='font-semibold'><Link href={"/facilities"}>Facilities</Link></li>
                    <li className='font-semibold'><Link href={"/rooms"}>Rooms</Link></li>
                    <li className='font-semibold'><Link href={"/contact-us"}>Contact-us</Link></li>
                </ul>
            </div>

            <div className='hidden sm:flex sm:items-center text-white'>
                <ul className='flex items-center gap-14'>
                    <li className='hover:underline font-semibold' ><Link href={"/"}>Home</Link></li>
                    <li className='hover:underline font-semibold' ><Link href={"/facilities"}>Facilities</Link></li>
                    <li className='hover:underline font-semibold' ><Link href={"/rooms"}>Rooms</Link></li>
                    <li className='hover:underline font-semibold' ><Link href={"/contact-us"}>Contact-us</Link></li>
                </ul>
            </div>
        </div> 
    </nav>
  )
}

export default Navbar