import HeroSectionRooms from '@/components/HeroSectionRooms'
import RoomsCard from '@/components/RoomsCard'
import { EB_Garamond } from 'next/font/google'
import roomcards from "@/roomcards.json"

const eb_garamond = EB_Garamond({
    subsets: ['latin'],
})

const page = () => {
  return (
    <div>
        <HeroSectionRooms />
        <div className="text-center space-y-4 p-1 py-8">
            <h2 className={`text-2xl font-semibold ${eb_garamond.className}`}>ROOMS AND RATES</h2>
            <p className="font-semibold">Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, comfort isn&apos;t our only objective, we also value good design, sleek contemporary furnishing complemented by the rich tones of nature&apos;s palette as visible from our rooms&apos; sea-view windows and terraces.</p>
        </div>
        <div className='space-y-8'>
            {
                roomcards.map((card, index) => (
                    <RoomsCard 
                    key={index}
                    title={card.title}
                    roomimgs={card.images}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default page