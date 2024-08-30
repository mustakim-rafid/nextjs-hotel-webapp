'use client'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

type RoomsCardTypes = {
    title: string;
    roomimgs: string[];
}

const RoomsCard = ({title, roomimgs}: RoomsCardTypes) => {
  return (
    <div className="w-[90vw] md:w-[50vw] mx-auto border-2 border-gray-400 rounded-lg overflow-hidden">
        <Carousel
        plugins={[ Autoplay({ delay: 3500 }) ]}
        >
            <CarouselContent>
            {roomimgs.map((roomimg, index) => (
                <CarouselItem key={index}>
                    <Image
                        className="w-full h-full"
                        src={`${roomimg}`}
                        alt="roomimages"
                        width={400}
                        height={400}
                    />
                </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
        <div className="text-center py-2 bg-blue-950 text-white">
            <h2 className="font-semibold text-xl">{title}</h2>
        </div>
        <div className="flex justify-around items-center py-8">
            <div className="flex gap-1 items-center">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
            </svg> View Room Details
            </div>
            <div className="bg-[#e0b973] rounded-xl py-1 px-2 xl:py-2 xl:px-4">$147 Avg/night</div>
        </div>
    </div>
  )
}

export default RoomsCard