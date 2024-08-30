import React from 'react'
import { EB_Garamond } from 'next/font/google'

const eb_garamond = EB_Garamond({
    subsets: ['latin'],
})

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 space-y-8 xl:space-x-8 md:space-y-5 xl:space-y-0 bg-blue-950 p-10 text-white'>
        <div className='space-y-3'>
            <div>
                <h2 className={`${eb_garamond.className} text-xl`}>LUXURY</h2>
                <p className='text-sm pl-2 tracking-widest'>HOTELS</p>
            </div>
            <p>497 Evergreen Rd. Roseville, CA 95673 +44 345 678 903 luxury_hotels@gmail.com</p>
            <p>+44 345 678 903</p>
            <p>Luxury_hotels@gmail.com</p>
        </div>
        <div>
            <ul>
                <li>About us</li>
                <li>Contact</li>
                <li>Terms and Conditions</li>
            </ul>
        </div>
        <div className='space-y-2'>
            <div className='flex gap-3 cursor-pointer'>
            <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
            </svg> <a href="#">Facebook</a>
            </div>
            <div className='flex gap-3 cursor-pointer'>
            <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
            </svg> <a href="#">Twitter</a>
            </div>
            <div className='flex gap-3 cursor-pointer'>
            <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
            </svg> <a href="#">Instagram</a>
            </div>
        </div>
        <div className='space-y-1'>
            <p>Subscribe to our newsletter</p>
            <div className='flex'>
                <input className='border-2 border-orange-300 px-2 text-black' type="email" name="email" id="email" placeholder='Email' />
                <button className='bg-[#e0b973] text-white rounded-r-lg py-1 px-2 lg:py-2 lg:px-4 hover:bg-orange-300'>OK</button>
            </div>
        </div>
    </div>
  )
}

export default Footer