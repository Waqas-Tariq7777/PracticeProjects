import Header from "../components/header";
import Bg from "../components/pagesBg";
import productImg1 from "../assets/images/product-3.jpg.webp";
import "../styles/pages/singleproduct.css"
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"
import Counter from "../components/counter"
import { useState } from "react";
import ModalCopy from '../components/modal copy';
import { Link } from "react-router-dom";
import Cart from "../pages/cart"
import product1 from "../assets/images/product-1.jpg"
import product2 from "../assets/images/product-2.jpg.webp"
import product3 from "../assets/images/product-3.jpg.webp"
import product4 from "../assets/images/product-4.jpg.webp"
import { FaShoppingCart, FaHeart, FaBars } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants.js';
export default function SingleProduct() {
    const [isHover, setHover] = useState(false)
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    return (
        <div>
            <Header />
            <Bg text1={'HOME PRODUCT SINGLE'} text2={'PRODUCT SINGLE'} />
            <section>
                <div className="single-product">
                    <motion.div 
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className="single-product-img">
                        <img src={productImg1} alt="Vege" onMouseEnter={() => setHover(true)} style={{ cursor: 'pointer' }}
                            onClick={toggleModal} />
                    </motion.div>
                    <motion.div 
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className="single-product-content">
                        <h2>Bell Pepper</h2>
                        <div className="ratings">
                            <div className="ratings1">
                                <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>5.0</p>
                                <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>☆☆☆☆☆</p>
                            </div>
                            <div className="ratings2">
                                <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>100</p>
                                <p className="gray-text" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>Ratings</p>
                            </div>
                            <div className="ratings3">
                                <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>500</p>
                                <p className="gray-text" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>Sold</p>
                            </div>
                        </div>
                        <h3>$120.00</h3>
                        <p className="gray-text">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.</p>
                        <button className="btn-1">SMALL ↓</button>
                        <Counter />
                        <p>600 kg available</p>
                        <Link to="/Cart">
                            <button className="btn-2">Add to Cart</button>
                        </Link>
                    </motion.div>
                </div>
                <ModalCopy modal={modal} toggleModal={toggleModal} />
            </section>
            <section>
                <motion.div
                variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className="products">
                    <h2>Featured Products</h2>
                    <h3>Our Products</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </motion.div>
                <motion.div 
                variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                className="products-grid">
                    <div
                        className="product-item">
                        <p className="product-offer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>30%</p>
                        <img src={product1} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Bell Pepper</h5>
                        <div className="product-icons">
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaBars /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaShoppingCart /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaHeart /></span>
                        </div>
                        <div className="product-price-flex">
                            <p className="product-pricestrike">$120.00</p>
                            <p className="product-price1">$80.00</p>
                        </div>
                    </div>
                    <div
                        className="product-item">
                        <img src={product2} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Strawberry</h5>
                        <div className="product-icons">
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaBars /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaShoppingCart /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaHeart /></span>
                        </div>
                        <p className="product-price">$120.00</p>
                    </div>
                    <div
                        className="product-item">
                        <img src={product3} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Green Beans</h5>
                        <div className="product-icons">
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaBars /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaShoppingCart /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaHeart /></span>
                        </div>
                        <p className="product-price">$120.00</p>
                    </div>
                    <div
                        className="product-item">
                        <img src={product4} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Purple Cabbage</h5>
                        <div className="product-icons">
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaBars /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaShoppingCart /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaHeart /></span>
                        </div>
                        <p className="product-price">$120.00</p>
                    </div>
                </motion.div>
            </section>
            <Subscribe />
            <section className="circle">
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer", }} class="upward-circle" aria-label="Scroll to top" title="Scroll to top">
                    <svg class="up-arrow" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                        <path d="M12 6l-6 6h4v6h4v-6h4z" fill="currentColor" />
                    </svg>
                </button>
            </section>
            <Footer />
        </div>
    )
}