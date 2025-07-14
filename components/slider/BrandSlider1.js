'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createClient } from '@sanity/client'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 100,
    slidesPerView: 5,
    loop: true,
    navigation: {
        nextEl: "#brand-one__swiper-button-next",
        prevEl: "#brand-one__swiper-button-prev"
    },
    autoplay: { delay: 5000 },

   breakpoints: {
            0: {
                  spaceBetween: 30,
                  slidesPerView: 1
              },
              375: {
                  spaceBetween: 30,
                  slidesPerView: 1
              },
              575: {
                  spaceBetween: 30,
                  slidesPerView: 2
              },
              767: {
                  spaceBetween: 50,
                  slidesPerView: 3
              },
              991: {
                  spaceBetween: 50,
                  slidesPerView: 4
              },
              1199: {
                  spaceBetween: 100,
                  slidesPerView: 5
              },
              1199: {
                  spaceBetween: 100,
                  slidesPerView: 5
              }
          
    }
}

export default function BrandSlider1() {
    const [logos, setLogos] = useState([])
    useEffect(() => {
        const sanity = createClient({
            projectId: 'hjoc1p23',
            dataset: 'production',
            apiVersion: '2024-07-08',
            useCdn: true,
        })
        sanity.fetch(`*[_type == "brandLogo"] | order(_createdAt asc){ title, image{asset->{url}}, website }`).then(setLogos)
    }, [])
    return (
        <>
            <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                <div className="swiper-wrapper">
                    {logos.length > 0 ? logos.map((logo, idx) => (
                        <SwiperSlide className="swiper-slide" key={idx} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {logo.website ? (
                                <a href={logo.website} target="_blank" rel="noopener noreferrer">
                                    <Image src={logo.image.asset.url} alt={logo.title} width={120} height={60} style={{ objectFit: 'contain', width: 120, height: 60, display: 'block', margin: '0 auto' }} />
                                </a>
                            ) : (
                                <Image src={logo.image.asset.url} alt={logo.title} width={120} height={60} style={{ objectFit: 'contain', width: 120, height: 60, display: 'block', margin: '0 auto' }} />
                            )}
                        </SwiperSlide>
                    )) : (
                        <SwiperSlide className="swiper-slide">
                            <div style={{ width: 120, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', borderRadius: 8, color: '#888' }}>
                                No logos found
                            </div>
                        </SwiperSlide>
                    )}
                </div>
            </Swiper>
        </>
    )
}
