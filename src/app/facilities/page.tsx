import HeroSectionFacilities from "@/components/HeroSectionFacilities"
import facilities from "@/facilities.json"
import Image from "next/image"
import { EB_Garamond } from 'next/font/google'

const eb_garamond = EB_Garamond({
    subsets: ['latin'],
})

const page = () => {
  return (
    <div>
        <HeroSectionFacilities />
        <div className="text-center space-y-4 p-1 py-8">
            <h2 className={`text-2xl font-semibold ${eb_garamond.className}`}>FACILITIES</h2>
            <p className="font-semibold">We want your stay at our lush hotel to be truly unforgettable. That is why we give special attention to all of your needs so that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure and our modern luxury resort facilities will help you enjoy the best of all.</p>
        </div>
        <div className="m-4 space-y-12">
            {
                facilities.map((facility, index) => (
                    <div key={index} className="relative w-full md:w-2/3 xl:w-1/2 md:mx-auto">
                        <Image 
                        className="w-full"
                        src={`/${facility.image}`}
                        alt={facility.title}
                        width={400}
                        height={400}
                        />
                        <h2 className="w-52 text-center absolute bottom-0 z-10 bg-white font-bold text-blue-950 pt-1">{facility.title}</h2>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default page