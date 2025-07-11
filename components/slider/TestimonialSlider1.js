'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from 'react'
import { createClient } from '@sanity/client'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1, 
    spaceBetween: 0,
    speed: 2000,
    loop: true,
    pagination: {
        el: ".swiper-dot-style1",
        type: "bullets",
        clickable: true
    },

    

    navigation: {
        nextEl: ".swiper-button-prev1",
        prevEl: ".swiper-button-next1"
    },
    autoplay: { delay: 9000 },
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
                slidesPerView: 1
            },
            1200: {
                spaceBetween: 30,
                slidesPerView:1
            },
            1320: {
                spaceBetween: 30,
                slidesPerView:1
            }
                                        
    }
}
export default function TestimonialSlider1() {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        const sanity = createClient({
            projectId: 'hjoc1p23',
            dataset: 'production',
            apiVersion: '2024-07-08',
            useCdn: true,
        })
        sanity.fetch(`*[_type == "testimonial"]{name, position, image{asset->{url}}, rating, text}`).then(setTestimonials)
    }, [])
    return (
        <> 
        
        <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
            <div className="swiper-wrapper">
                {testimonials.length > 0 ? testimonials.map((item, idx) => (
                    <SwiperSlide className="swiper-slide" key={idx}>
                        <div className="testimonial-one__single">
                            <div className="testimonial-one__quote">
                                <span className="icon-quote" />
                            </div>
                            <div className="testimonial-one__client-img">
                                {item.image && item.image.asset && item.image.asset.url ? (
                                    <img src={item.image.asset.url} alt={item.name} />
                                ) : (
                                    <div style={{width:63, height:63, borderRadius:'50%', background:'#e5e5e5', display:'flex', alignItems:'center', justifyContent:'center', fontSize:14}}>63X63</div>
                                )}
                            </div>
                            <div className="testimonial-one__ratting">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < item.rating ? (i === 4 ? 'icon-star last-star' : 'icon-star') : (i === 4 ? 'icon-star last-star' : 'icon-star')} />
                                ))}
                            </div>
                            <h3 className="testimonial-one__client-name">{item.name}</h3>
                            <p className="testimonial-one__client-sub-title">{item.position}</p>
                            <p className="testimonial-one__text">{item.text}</p>
                        </div>
                    </SwiperSlide>
                )) : (
                    <>
                        {/*Testimonial One Single Start*/}
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <span className="icon-quote" />
                                </div>
                                <div className="testimonial-one__client-img">
                                    <img
                                    src="assets/images/testimonial/testimonial-1-1.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="testimonial-one__ratting">
                                    <span className="icon-star" />
                                    <span className="icon-star" />
                                    <span className="icon-star" />
                                    <span className="icon-star" />
                                    <span className="icon-star last-star" />
                                </div>
                                <h3 className="testimonial-one__client-name">Emily Chen</h3>
                                <p className="testimonial-one__client-sub-title">Supply Chain Manager</p>
                                <p className="testimonial-one__text">
                                    REO Trades made sourcing from China effortless. Their team managed everything from manufacturer selection to final delivery. We received our products on time and in perfect condition.
                                </p>
                            </div>
                        </SwiperSlide>
                        {/*Testimonial One Single End*/}
                        {/*Testimonial One Single Start*/}
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <span className="icon-quote" />
                                </div>
                                <div className="testimonial-one__client-img">
                                    <img
                                    src="assets/images/testimonial/testimonial-1-2.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="testimonial-one__ratting">
                                    <span className="icon-star" />
                                    <span className="icon-star" />
                                    <span className="icon-star" />
                                    <span className="icon-star" />
                                    <span className="icon-star last-star" />
                                </div>
                                <h3 className="testimonial-one__client-name">David Lee</h3>
                                <p className="testimonial-one__client-sub-title">CEO</p>
                                <p className="testimonial-one__text">
                                    The quality control and transparency REO Trades provided were outstanding. We felt confident every step of the way.
                                </p>
                            </div>
                        </SwiperSlide>
                        {/*Testimonial One Single End*/}
                        {/*Testimonial One Single Start*/}
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <span className="icon-quote" />
                                </div>
                                <div className="testimonial-one__client-img">
                                    <img
                                    src="assets/images/testimonial/testimonial-1-3.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="testimonial-one__ratting">
                                    <span className="icon-star" />
                                    <span className="icon-star" />
                                    <span className="icon-star" />
                                    <span className="icon-star" />
                                    <span className="icon-star last-star" />
                                </div>
                                <h3 className="testimonial-one__client-name">Sarah Patel</h3>
                                <p className="testimonial-one__client-sub-title">Operations Director</p>
                                <p className="testimonial-one__text">
                                    REO Trades’s expertise in navigating Chinese regulations saved us time and money. Highly recommended for any business importing from China.
                                </p>
                            </div>
                        </SwiperSlide>
                        {/*Testimonial One Single End*/}
                        {/*Testimonial One Single Start*/}
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <span className="icon-quote" />
                                </div>
                                <div className="testimonial-one__client-img">
                                    <img
                                    src="assets/images/testimonial/testimonial-1-4.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="testimonial-one__ratting">
                                    <span className="icon-star" />
                                    <span className="icon-star" />
                                    <span className="icon-star" />
                                    <span className="icon-star" />
                                    <span className="icon-star last-star" />
                                </div>
                                <h3 className="testimonial-one__client-name">
                                    Mainto Vula
                                </h3>
                                <p className="testimonial-one__client-sub-title">
                                    Manegar
                                </p>
                                <p className="testimonial-one__text">
                                    Logistic service involves the planning implementation an
                                    and control of the efficient and effective movement and
                                    storage of goods and materials Logistic service involves
                                    the planning implementation and control
                                </p>
                            </div>
                        </SwiperSlide>
                        {/*Testimonial One Single End*/}
                    </>
                )}
            </div>
        </Swiper>
      </>
      
    )
}
