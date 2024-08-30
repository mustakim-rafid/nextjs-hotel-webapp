import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import testimonials from "@/testimonials.json"

const Testimonials = () => {
  return (
    <div className="flex justify-center items-center mt-10 mb-20">
    <Carousel className="max-w-[240px] max-h-40">
      <CarouselContent>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
        <CarouselItem>
            <Card className="text-center text-slate-700 bg-orange-100">
                <CardHeader className="text-3xl font-semibold">Testimonials</CardHeader>
                <CardContent className="space-y-1">
                <p className="font-semibold max-w-60">{testimonial.message}</p>
                <p className="text-sm">{testimonial.client}</p>
                </CardContent>
            </Card>
        </CarouselItem>
        </div>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}

export default Testimonials

