import Header from "../components/header";
import Bg from "../components/pagesBg";
import "../styles/pages/about.css"
import eatingImg from "../assets/images/eating.webp"
import Modal from '../components/modal';
import { useState } from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import Subscribe from "../components/subscribe"
import Countup from "../components/countUp.js"
import CustomerSlider from "../components/customerSlider"
import Qualities from "../components/qualities"
import Footer from "../components/footer"
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants.js';
export default function About() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    return (
        <div>
            <Header />
            <Bg text1={'HOME ABOUT US'} text2={'ABOUT US'} />
            {/* Video section */}
            <motion.section 
             variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
            className="video-section-bg" style={{ backgroundColor: "#f3f0f0" }}>
                <div className="video-section">
                    <div className="video-item">

                        <div className="video-bg" style={{
                            backgroundImage: `url(${eatingImg})`
                        }} >
                            <span className="video-wrapper" onClick={toggleModal}>
                                <p className="video-icon">
                                    <span className="icon-inner"><MdOutlineSlowMotionVideo /></span>
                                </p>
                            </span>
                        </div>
                    </div>
                    <div className="video-item">
                        <h2>Welcome to Vegefoods an eCommerce website</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>Shop now</button>
                    </div>
                </div>
                <Modal modal={modal} toggleModal={toggleModal} />
            </motion.section >
            {/* Subscribe section */}
            <div className="about-subscribe" style={{ marginTop: "-100px" }}>
                <Subscribe />
            </div>
            {/* Countup section */}
            <Countup />
            {/* CustomerSlider section */}
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
            {/* Qualities section */}
            <div className="qualities-about" style={{ backgroundColor: "#f3f0f0", marginTop: "100px" }}>
                <Qualities />
            </div>
            <section className="circle">
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer", bottom: "-40px" }} class="upward-circle" aria-label="Scroll to top" title="Scroll to top">
                    <svg class="up-arrow" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                        <path d="M12 6l-6 6h4v6h4v-6h4z" fill="currentColor" />
                    </svg>
                </button>
            </section>
            <Footer />
        </div >
    )
}