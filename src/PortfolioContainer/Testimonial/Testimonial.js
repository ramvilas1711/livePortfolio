import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useEffect } from "react";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import lady from "../../../src/img/Testimonial/lady.png";
import mike from "../../../src/img/Testimonial/mike.png";
import man from "../../../src/img/Testimonial/man.png";
import shape from "../../../src/img/Testimonial/shape-bg.png";
import ecommerce from "../../../src/assets/Testimonial/ecommerce.png";

export default function Testimonial(props) {
  useEffect(() => {
    const fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return () => {
      // Cleanup the subscription when the component unmounts
      fadeInSubscription.unsubscribe();
    };
  }, [props.id]);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Portfolio Highlights"}
        subHeading={"Showcasing Key Projects and Achievements"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              // {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <span>Ecommerce</span>
                  <div className="testi-comment">
                    <img src={ecommerce} alt="image not showing" />
                  </div>
                  <div className="client-info">
                    <a
                      href="https://harmonious-syrniki-071cdd.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn primary-btn"> Live Link </button>
                    </a>
                    <a
                      href="https://github.com/ramvilas1711/liveEcommerce"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn highlighted-btn">
                        Github Link
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
