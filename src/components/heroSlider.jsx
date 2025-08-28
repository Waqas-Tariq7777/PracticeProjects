import { useEffect, useState } from "react";
import '../styles/components/heroSlider.css';
import sliderimg1 from '../assets/images/hero1.jpg';
import sliderimg2 from '../assets/images/hero2.jpg';
import sliderimg3 from '../assets/images/hero3.jpg';
import sliderimg4 from '../assets/images/hero4.jpg';

export default function HeroSlider() {
    const slides = [
        {
            img: sliderimg1,
            title: "WE SERVE FRESH VEGETABLES AND FRUITS"
        },
        {
            img: sliderimg2,
            title: "100% FRESH FRUITS AND VEGETABLES"
        },
        {
            img: sliderimg3,
            title: "EAT HEALTHY, LIVE HEALTHY"
        },
        {
            img: sliderimg4,
            title: "QUALITY YOU CAN TRUST"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [slides.length]);

    // Same description & button for all slides
    const commonDesc = "We deliver organic vegetables and fruits to your doorstep.";
    const commonBtn = "View More";

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="slider-container">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentIndex ? "active" : ""}`}
                >
                    <img src={slide.img} alt={`slide-${index}`} />
                    <div className="overlay"></div>
                    <div className="slide-content">
                        <h1>{slide.title}</h1>
                        <p>{commonDesc}</p>
                        <button onClick={handleScrollTop}>{commonBtn}</button>
                    </div>
                </div>
            ))}
        </section>
    );
}
