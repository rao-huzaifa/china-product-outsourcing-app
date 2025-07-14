'use client'
import ModalVideo from 'react-modal-video';
import { useState } from 'react'
import CounterUp from "../../elements/CounterUp"
import Image from 'next/image'
export default function Counter() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            {/*Counter One Start*/}
            <section className="counter-one">
                <div className="container">
                    <div className="row d-flex align-items-stretch" style={{display: 'flex', alignItems: 'stretch'}}>
                        <div className="col-xl-5 d-flex" style={{display: 'flex', flexDirection: 'column'}}>
                            <div
                                className="counter-one__left wow slideInLeft flex-fill h-100"
                                data-wow-delay="100ms"
                                data-wow-duration="2500ms"
                                style={{height: '100%', display: 'flex', flex: 1}}
                            >
                                <div className="counter-one__img" style={{height: '100%', display: 'flex', alignItems: 'center'}}>
                                    <Image src="https://img.youtube.com/vi/NSpA-Hwdr_M/maxresdefault.jpg" alt="Video Thumbnail" width={400} height={225} style={{borderRadius: '16px', width: '100%', height: '100%', objectFit: 'cover', minHeight: 300}} />
                                    <div className="counter-one__video-link">
                                        <a onClick={() => setOpen(true)} className="video-popup" data-fancybox="video-1" data-caption="">
                                            <div className="counter-one__video-icon">
                                                <span className="icon-play" />
                                                <i className="ripple" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 d-flex" style={{display: 'flex', flexDirection: 'column'}}>
                            <div
                                className="counter-one__right wow slideInRight flex-fill h-100"
                                data-wow-delay="100ms"
                                data-wow-duration="2500ms"
                                style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
                            >
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">Our Features</span>
                                    </div>
                                    <h2 className="section-title__title">
                                        Simplifying your logistics of <br />
                                        the challenges
                                    </h2>
                                </div>
                                <p className="counter-one__right-text">
                                    Logistic service involves the planning, implementation, and
                                    control of the efficient and effective movement and storage of
                                    goods and materials.
                                </p>
                                <ul className="counter-one__count-list list-unstyled">
                                    <li>
                                        <div className="counter-one__icon-and-count">
                                            <div className="counter-one__icon">
                                                <span className="icon-schedule" />
                                            </div>
                                            <div className="counter-one__count count-box">
                                                <h3 className="count-text">
                                                    <CounterUp end={1200} />
                                                </h3>
                                                <span>+</span>
                                            </div>
                                        </div>
                                        <p className="counter-one__count-text">Our Happy Customer</p>
                                    </li>
                                    <li>
                                        <div className="counter-one__icon-and-count">
                                            <div className="counter-one__icon">
                                                <span className="icon-schedule" />
                                            </div>
                                            <div className="counter-one__count count-box">
                                                <h3 className="count-text">
                                                    <CounterUp end={35} />
                                                </h3>
                                                <span>k</span>
                                                <span className="counter-one__count-plus">+</span>
                                            </div>
                                        </div>
                                        <p className="counter-one__count-text">Our Team Member</p>
                                    </li>
                                    <li>
                                        <div className="counter-one__icon-and-count">
                                            <div className="counter-one__icon">
                                                <span className="icon-schedule" />
                                            </div>
                                            <div className="counter-one__count count-box">
                                                <h3 className="count-text">
                                                    <CounterUp end={8} />
                                                </h3>
                                                <span>k</span>
                                                <span className="counter-one__count-plus">+</span>
                                            </div>
                                        </div>
                                        <p className="counter-one__count-text">Our Clients Reviews</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="NSpA-Hwdr_M" onClose={() => setOpen(false)} />
            {/*Counter One End*/}
        </>

    )
}
