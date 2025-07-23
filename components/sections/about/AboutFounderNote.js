import React from 'react';

export default function AboutFounderNote() {
  return (
    <section className="about-founder-note wow fadeInUp" data-wow-delay="200ms">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="about-founder-note__card p-4 shadow rounded bg-white">
              <h2 className="about-founder-note__title mb-3">A Note from Our Co-Founder</h2>
              <p className="about-founder-note__text mb-3">
                Dear Valued Partners and Future Collaborators,<br /><br />
                When we founded Door to Doors, our goal was to transform how businesses approach sourcing and manufacturing in China. As someone who has tackled the complexities of global trade, I know firsthand the challenges you face.<br /><br />
                Door to Doors is not just another sourcing agent; we’re your competitive edge in a dynamic market. Our team’s expertise spans industries like chemicals, textiles, automobiles, and more, ensuring we deliver excellence at every stage. We prioritize transparency, reliability, and innovation, eliminating intermediaries to provide you with the best value. Our “fail fast” approach empowers you to innovate with minimal risk.<br /><br />
                Whether you’re a startup launching your first product or an established company optimizing your supply chain, Door to Doors is here to guide you. We don&apos;t just deliver products – we deliver confidence and success.<br /><br />
                Join us in redefining China sourcing. Let&apos;s turn your manufacturing challenges into opportunities for growth.
              </p>
              <div className="about-founder-note__signature mt-4">
                <strong>Looking forward to partnering with you,</strong><br />
                <span className="about-founder-note__name">Faraz Khan</span><br />
                <span className="about-founder-note__role">Co-Founder, Door to Doors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 