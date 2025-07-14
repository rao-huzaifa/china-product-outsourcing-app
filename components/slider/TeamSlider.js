'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from 'react'
import { createClient } from '@sanity/client'
import Image from 'next/image'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 2000,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: ".swiper-button-prev1",
        prevEl: ".swiper-button-next1"
    },

    // Pagination
    pagination: {
        el: ".swiper-dot-style1",
        type: "bullets",
        clickable: true
    },

    breakpoints: {
        0: {
            spaceBetween: 0,
            slidesPerView: 1
        },
        375: {
            spaceBetween: 0,
            slidesPerView: 1
        },
        575: {
            spaceBetween: 0,
            slidesPerView: 1
        },
        768: {
            spaceBetween: 30,
            slidesPerView: 1
        },
        992: {
            spaceBetween: 30,
            slidesPerView: 2
        },
        1200: {
            spaceBetween: 30,
            slidesPerView:3
        },
        1320: {
            spaceBetween: 30,
            slidesPerView:3
        }
    }
}
export default function TeamSlider() {
    const [team, setTeam] = useState([])
    useEffect(() => {
        const sanity = createClient({
            projectId: 'hjoc1p23',
            dataset: 'production',
            apiVersion: '2024-07-08',
            useCdn: true,
        })
        sanity.fetch(`*[_type == "team"]{name, slug, position, image{asset->{url}}, social}`).then(setTeam)
    }, [])
    return (
        <> 
        
        <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
            <div className="swiper-wrapper">
                {team.length > 0 ? team.map((member, idx) => (
                    <SwiperSlide className="swiper-slide" key={member.slug?.current || idx}>
                        <div className="team-one__single">
                            <div className="team-one__img">
                                {member.image && member.image.asset && member.image.asset.url ? (
                                    <Image src={member.image.asset.url} alt={member.name} width={200} height={200} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '50%' }} />
                                ) : (
                                    <div style={{width:150, height:150, borderRadius:'50%', background:'#e5e5e5', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20}}>150X150</div>
                                )}
                            </div>
                            <div className="team-one__content">
                                <h3 className="team-one__title">
                                    <Link href={`/team/${member.slug?.current || ''}`}>{member.name}</Link>
                                </h3>
                                <p className="team-one__sub-title">{member.position}</p>
                                <div className="team-one__social">
                                    {member.social?.instagram && <Link href={member.social.instagram} target="_blank"><span className="icon-instagram" /></Link>}
                                    {member.social?.linkedin && <Link href={member.social.linkedin} target="_blank"><span className="icon-linkedin-in" /></Link>}
                                    {member.social?.twitter && <Link href={member.social.twitter} target="_blank"><span className="icon-Vector" /></Link>}
                                    {member.social?.facebook && <Link href={member.social.facebook} target="_blank"><span className="icon-facebook-f" /></Link>}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )) : (
                    // fallback to static slides if no data
                    <>
                    <SwiperSlide className="swiper-slide">
                        <div className="team-one__single">
                            <div className="team-one__img">
                                <div style={{width:150, height:150, borderRadius:'50%', background:'#e5e5e5', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20}}>150X150</div>
                            </div>
                            <div className="team-one__content">
                                <h3 className="team-one__title"><Link href="#">Name</Link></h3>
                                <p className="team-one__sub-title">Position</p>
                                <div className="team-one__social">
                                    <Link href="#"><span className="icon-instagram" /></Link>
                                    <Link href="#"><span className="icon-linkedin-in" /></Link>
                                    <Link href="#"><span className="icon-Vector" /></Link>
                                    <Link href="#"><span className="icon-facebook-f" /></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    </>
                )}
            </div>
        </Swiper>
      </>
      
    )
}
