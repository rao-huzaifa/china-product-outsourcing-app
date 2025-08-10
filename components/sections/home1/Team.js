'use client'
import Link from "next/link"
import TeamSlider from "../../slider/TeamSlider"
export default function Team() {
    return (
        <>
            {/*Team One Start*/}
            <section className="team-one">
                <div className="container">
                <div className="team-one__top">
                    <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Our Team</span>
                    </div>
                    <h2 className="section-title__title">
                    Streamlining the Logistics for You.
                    </h2>
                    </div>
                    <div className="team-one__nav">
                    <div className="swiper-button-next1">
                        <i className="icon-arrow-left" />
                    </div>
                    <div className="swiper-button-prev1">
                        <i className="icon-arrow-right" />
                    </div>
                    </div>
                </div>
                <div className="team-one__bottom">
                    
                    <TeamSlider/>

                </div>
                </div>
            </section>
            {/*Team One End*/}
        </>

    )
}
