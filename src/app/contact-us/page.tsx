'use client'
import Navbar from '@/components/Navbar'
import { EB_Garamond } from 'next/font/google'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { contactSchema } from '@/schemas/contactSchema'
import axios, { AxiosError } from "axios"
import { ApiResponse } from '@/types/ApiResponse'
import { useToast } from '@/components/ui/use-toast'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

const eb_garamond = EB_Garamond({
    subsets: ['latin']
})

const page = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const {toast} = useToast()

    const form = useForm<z.infer< typeof contactSchema >>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    const onSubmit = async (data: z.infer< typeof contactSchema >) => {
        setIsSubmitting(true)
        try {
            const response = await axios.post<ApiResponse>("/api/send-message", {
                name: data.name,
                email: data.email,
                message: data.message,
            })

            toast({
                title: "Success",
                description: response.data.message
            })

        } catch (error) {
            const axiosError = error as AxiosError<ApiResponse>

            toast({
                title: "Failed",
                description: axiosError.response?.data.message || "Something went wrong sending message"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

  return (
    <div>
        <div className='bg-blue-950 text-center'>
            <Navbar />
            <h2 className='pt-10 pb-14 text-3xl font-semibold text-white'>CONTACT-US</h2>
        </div>
        <div className='mx-10 text-blue-950'>
            <h3 className={`${eb_garamond.className} text-2xl font-semibold py-3`}>WE ARE HERE FOR YOU</h3>
            <p>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, please forward it to our support desk and we will get back to you as soon as possible.</p>
        </div>
        <div className='mx-10 lg:pr-16 mt-14 mb-32 text-blue-950 lg:flex lg:gap-5 lg:justify-between'>
            <div className='font-semibold'>
                <p>497 Evergreen Rd. Roseville, CA 95673</p>
                <p>Phone: +44 345 678 903</p>
                <p>Email: luxury_hotels@gmail.com</p>
            </div>
            <div className='my-10 lg:my-0 lg:w-[50vw]'>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input className='border-gray-400' placeholder="name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input className='border-gray-400' placeholder="email" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                        name="message"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Enter your message"
                                className="resize-none border-gray-400"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button className='bg-[#e0b973] text-white hover:bg-orange-300' type="submit">
                        {
                            isSubmitting ? (
                                <>
                                <Loader2 /> Submitting
                                </>
                            ) : "Submit"
                        }
                    </Button>
                </form>
                </Form>
            </div>
        </div> 
    </div>
  )
}

export default page