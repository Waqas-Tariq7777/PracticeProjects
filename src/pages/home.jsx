import Header from "../components/header";
import HeroSlider from "../components/heroSlider"
import Qualities from "../components/qualities"
import Timer from "../components/timer"
import Footer from "../components/footer"
import Products from "../components/products"
import Subscribe from "../components/subscribe"
import vege1 from "../assets/images/fruit5.jpg"
import vege3 from "../assets/images/hero3.jpg"
import juices from "../assets/images/juices.jpeg"
import vege5 from "../assets/images/fruit3.jpg"
import dryFruits from "../assets/images/dryfruits.jpg"
import "../styles/pages/home.css";
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants.js';
import offerImg from '../assets/images/offer.png';
import partner1 from '../assets/images/partner-1.png.webp';
import partner2 from '../assets/images/partner-2.png.webp';
import partner3 from '../assets/images/partner-3.png.webp';
import partner4 from '../assets/images/partner-4.png.webp';
import partner5 from '../assets/images/partner-5.png.webp';
import CustomerSlider from "../components/customerSlider"
export default function Home() {
    return (
        <div>
            <Header />
            <HeroSlider />
            {/* Qualities section */}
            <Qualities />
            {/* Vege section */}
            <section>
                <div
                    className="vege">
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                        className="vege-item">
                        <img src={vege1} alt="vegetables and fruits" />
                        <h5 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>Fruits</h5>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                        className="vege-item">
                        <h2>Vegetables</h2>
                        <p>Protect the health of every home</p>
                        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Shop now</button>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                        className="vege-item">
                        <img src={juices} alt="vegetables and fruits" />
                        <h5 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>Juices</h5>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                        className="vege-item">
                        <img src={vege3} alt="vegetables and fruits" />
                        <h5 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>Vegetables</h5>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                        className="vege-item">
                        <img src={vege5} alt="vegetables and fruits" />
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                        className="vege-item">
                        <img src={dryFruits} alt="vegetables and fruits" />
                        <h5 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>Dried</h5>
                    </motion.div>
                </div>
            </section>
            {/* Products section */}
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="products">
                <h2>Featured Products</h2>
                <h3>Our Products</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </motion.div>
            <Products />
            {/* Offer section */}
            <section>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className="offer" style={{ backgroundImage: `url(${offerImg})` }}>
                    <div
                        className="offer-content">
                        <h2>Best Price For You</h2>
                        <h3>Deal of the day</h3>
                        <p className="offer-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        <div className="spinach">
                            <h4 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>Spinach</h4>
                            <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} className="offer-price-text"><span className="offer-price">$10</span>now $5 only</p>
                            <Timer duration={2 * 24 * 60 * 60 * 1000} />
                        </div>
                    </div>
                </motion.div>
            </section>
            {/* customer section */}
            <section>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className="customer-top">
                    <h2>Testimony</h2>
                    <h3>Our satisfied customer says</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                </motion.div>
                <CustomerSlider />
            </section>
            {/* Partner section */}
            <section className="line">
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className="partner">
                    <div className="partner-item">
                        <img onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} src={partner1} alt="partner" />
                    </div>
                    <div className="partner-item">
                        <img onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} src={partner2} alt="partner" />
                    </div>
                    <div className="partner-item">
                        <img onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} src={partner3} alt="partner" />
                    </div>
                    <div className="partner-item">
                        <img onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} src={partner4} alt="partner" />
                    </div>
                    <div className="partner-item">
                        <img onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} src={partner5} alt="partner" />
                    </div>
                </motion.div>
            </section>
            {/* Subscribe section */}
            <Subscribe />
            <motion.section
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="circle">
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} class="upward-circle" aria-label="Scroll to top" title="Scroll to top">
                    <svg class="up-arrow" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                        <path d="M12 6l-6 6h4v6h4v-6h4z" fill="currentColor" />
                    </svg>
                </button>
            </motion.section>
            {/* Footer section */}
            <Footer />
        </div>
    )
}