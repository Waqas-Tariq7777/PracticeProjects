import product1 from "../assets/images/product-1.jpg"
import product2 from "../assets/images/product-2.jpg.webp"
import product3 from "../assets/images/product-3.jpg.webp"
import product4 from "../assets/images/product-4.jpg.webp"
import product5 from "../assets/images/product-5.jpg.webp"
import product6 from "../assets/images/product-6.jpg.webp"
import product7 from "../assets/images/product-7.jpg.webp"
import product8 from "../assets/images/product-8.jpg.webp"
import "../styles/components/products.css"
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants.js';
import { FaShoppingCart, FaHeart, FaBars } from "react-icons/fa";
export default function Products(){
    return(
        <div>
              <section>
                <div className="products-grid">
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
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
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                        className="product-item">
                        <img src={product2} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Strawberry</h5>
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
                        <img src={product3} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Green Beans</h5>
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
                        <img src={product4} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Purple Cabbage</h5>
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
                        <p className="product-offer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>30%</p>
                        <img src={product5} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Tomatoe</h5>
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
                        <img src={product6} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Brocolli</h5>
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
                        <img src={product7} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Carrots</h5>
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
                        <img src={product8} alt="Vegetables and fruits" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} />
                        <h5>Fruit Juice</h5>
                        <div className="product-icons">
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaBars /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaShoppingCart /></span>
                            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} ><FaHeart /></span>
                        </div>
                        <p className="product-price">$120.00</p>
                    </motion.div>
                </div>
            </section>
 
        </div>
    )
}