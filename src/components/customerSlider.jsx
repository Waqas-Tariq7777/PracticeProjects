import { useState, useEffect } from "react";
import "../styles/components/customerSlider.css"; 
import personImg1 from "../assets/images/person_1.jpg.webp";
import personImg2 from "../assets/images/person_2.jpg.webp";
import personImg3 from "../assets/images/person_3.jpg.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants.js";

export default function CustomSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const slides = [
    { img: personImg1, role: "Interface Designer" },
    { img: personImg1, role: "UI Designer" },
    { img: personImg2, role: "Web Developer" },
    { img: personImg3, role: "System Analyst" },
    { img: personImg1, role: "Marketing Manager" },
    { img: personImg2, role: "Interface Designer" },
    { img: personImg2, role: "Interface Designer" },
  ];

  // Adjust slides per view based on screen size
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 900) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(4);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const totalDots = slides.length - slidesPerView + 1;

  return (
    <div>
      <section>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="custom-slider-container"
        >
          <div
            className="custom-slider"
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                className="custom-slide"
                key={index}
                style={{ width: `${100 / slides.length}%` }}
              >
                <img src={slide.img} alt="person" />
                <p className="custom-person-top">“</p>
                <p className="custom-person-para">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <h4>Garreth Smith</h4>
                <p className="designation">{slide.role}</p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="custom-dots">
            {Array.from({ length: totalDots }).map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={`custom-dot ${dotIndex === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(dotIndex)}
              ></span>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
