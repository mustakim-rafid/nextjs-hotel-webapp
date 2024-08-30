import Image from "next/image"
import Link from "next/link"

type CardContentType = {
    title: string,
    desc: string,
    image: string
}

const HomePageCard = ({title, desc, image}: CardContentType) => {
  return (
    <div className="mx-5 space-y-2 md:flex xl:gap-10 md:gap-2 md:justify-center md:items-center">
        <div className='border-l border-black pl-4 space-y-4 md:w-1/2 xl:w-1/3'>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-sm font-semibold">{desc}</p>
            <button className='bg-[#e0b973] text-white rounded-lg py-1 px-2 lg:py-2 lg:px-4 hover:bg-orange-300'><Link href={"/facilities"}>Explore</Link></button>            
        </div>
        <div>
            <Image 
            src={`/${image}`}
            alt="cardimage"
            width={450}
            height={450}
            />
        </div>
    </div>
  )
}

export default HomePageCard