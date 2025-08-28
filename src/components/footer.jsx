import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import "../styles/components/footer.css"
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants.js';
const visitColorlib = () => {
    window.open("https://colorlib.com", "_blank");
};
export default function Footer() {
    return (
        <div>
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="footer">
                <div className="footer-item">
                    <h3>Vegefoods</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                </div>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className="footer-item">
                    <h3>Menu</h3>
                    <Link to="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} >Shop</Link>
                    <Link to="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} >About</Link>
                    <Link to="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} >Jornal</Link>
                    <Link to="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} >Contact Us</Link>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className="footer-item">
                    <h3>Help</h3>
                    <div className="inner-flex">
                        <div className="inner-flex1">
                            <Link to="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} >Shipping Information</Link>
                            <Link to="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} >Returns & Exchange</Link>
                            <Link to="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} >Terms & Conditions</Link>
                            <Link to="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} >Privacy Policy</Link>
                        </div>
                        <div className="inner-flex2">
                            <Link to="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} >FAQs</Link>
                            <Link to="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} >Contact</Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className="footer-item">
                    <h3>Have a Questions?</h3>
                    <div className="contact-info">
                        <p>
                            <FaMapMarkerAlt />
                            <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                        </p>
                        <p>
                            <IoIosCall onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                            <span>+2 392 3929 210</span>
                        </p>
                        <p>
                            <FaEnvelope onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                            <span>info@yourdomain.com</span>
                        </p>
                    </div>
                </motion.div>

            </motion.div>
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="social-icon">
                <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaTwitter /></p>
                <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaFacebook /></p>
                <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaSquareInstagram /></p>
            </motion.div>
            <div className="bottom">
                <p>Copyright ©2025 All rights reserved | This template is made with🖤by <span onClick={visitColorlib} style={{ cursor: "pointer", color: '#82ae46' }}>Colorlib</span></p>
            </div>
        </div>
    )
}