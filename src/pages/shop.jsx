import Header from "../components/header";
import Bg from "../components/pagesBg";
import "../styles/pages/shop.css"
import Products from "../components/products"
import Footer from "../components/footer"
import Subscribe from "../components/subscribe"
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants.js';
import product9 from "../assets/images/product-9.jpg.webp"
import product10 from "../assets/images/product-10.jpg.webp"
import product11 from "../assets/images/product-11.jpg.webp"
import product12 from "../assets/images/product-12.jpg.webp"
import { FaShoppingCart, FaHeart, FaBars } from "react-icons/fa";
export default function Shop() {
    return (
        <div>
            <Header />
            <Bg text1={'Home Products'} text2={'Products'} />
            {/* Name section */}
            <motion.section
                variants={fadeIn('left', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
            >
                <div className="page-names">
                    <div className="page-name-item">
                        <p className="page-name-para" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>All</p>
                    </div>
                    <div className="page-name-item">
                        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>Vegetables</p>
                    </div>
                    <div className="page-name-item">
                        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>Fruits</p>
                    </div>
                    <div className="page-name-item">
                        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>Juice</p>
                    </div>
                    <div className="page-name-item">
                        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>Dried</p>
                    </div>
                </div>
            </motion.section>
            {/* Products section */}
            <Products />
            <div className="products-shop" style={{ marginTop: "20px" }}>
                <div className="products-grid">
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                        className="product-item">
                        <p className="product-offer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>30%</p>
                        <img src={product9} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Onion</h5>
                        <div className="product-icons">
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaBars /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaShoppingCart /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaHeart /></span>
                        </div>
                        <div className="product-price-flex">
                            <p className="product-pricestrike">$120.00</p>
                            <p className="product-price1">$80.00</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                        className="product-item">
                        <img src={product10} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Apple</h5>
                        <div className="product-icons">
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaBars /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaShoppingCart /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaHeart /></span>
                        </div>
                        <p className="product-price">$120.00</p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                        className="product-item">
                        <img src={product11} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Garlic</h5>
                        <div className="product-icons">
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaBars /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaShoppingCart /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaHeart /></span>
                        </div>
                        <p className="product-price">$120.00</p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                        className="product-item">
                        <img src={product12} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Chilli</h5>
                        <div className="product-icons">
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaBars /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaShoppingCart /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaHeart /></span>
                        </div>
                        <p className="product-price">$120.00</p>
                    </motion.div>
                </div>
            </div>
            {/* Page-number section */}
            <section>
                <div className="page-number">
                    <div className="page-number-item">
                        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>←</p>
                    </div>
                    <div className="page-number-item">
                        <p className="page-number-para" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>1</p>
                    </div>
                    <div className="page-number-item">
                        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>2</p>
                    </div>
                    <div className="page-number-item">
                        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>3</p>
                    </div>
                    <div className="page-number-item">
                        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>4</p>
                    </div>
                    <div className="page-number-item">
                        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>5</p>
                    </div>
                    <div className="page-number-item">
                        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>→</p>
                    </div>
                </div>
            </section>
            {/* Subscribe section */}
            <Subscribe />
            <Footer />
        </div>

    )
}