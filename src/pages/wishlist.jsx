import Header from "../components/header";
import Bg from "../components/pagesBg";
import productImg1 from "../assets/images/product-3.jpg.webp";
import productImg2 from "../assets/images/product-4.jpg.webp";
import productImg3 from "../assets/images/product-1.jpg";
import productImg4 from "../assets/images/product-2.jpg.webp";
import productImg5 from "../assets/images/product-5.jpg.webp";
import productImg6 from "../assets/images/product-6.jpg.webp";
import { ImCross } from "react-icons/im";
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants.js"
export default function WishList() {
    return (
        <div>
            <Header />
            <Bg text1={'HOME WISHLIST'} text2={'WISHLIST'} />
            {/* product section */}
            <section className="table-cart">
                <table border="1" cellspacing="0" cellpadding="10">
                    <thead
                    >
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        >
                            <td data-label="">
                                <span className="icon-box" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}><ImCross /></span>
                            </td>
                            <td data-label=""><img src={productImg3} alt="Product" width="50" /></td>
                            <td data-label="Product Name"><h2>Bell Pepper</h2><p>Far far away, behind the word mountains, far from the countries</p></td>
                            <td data-label="Price">$4.90</td>
                            <td data-label="Quantity">1</td>
                            <td data-label="Total">$4.90</td>
                        </tr>
                        <tr
                        >
                            <td data-label="">
                                <span className="icon-box" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}><ImCross /></span>
                            </td>
                            <td data-label=""><img src={productImg4} alt="Product" width="50" /></td>
                            <td data-label="Product Name"><h2>Bell Pepper</h2><p>Far far away, behind the word mountains, far from the countries</p></td>
                            <td data-label="Price">$4.90</td>
                            <td data-label="Quantity">1</td>
                            <td data-label="Total">$4.90</td>
                        </tr>
                        <tr
                        >
                            <td data-label="">
                                <span className="icon-box" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}><ImCross /></span>
                            </td>
                            <td data-label=""><img src={productImg1} alt="Product" width="50" /></td>
                            <td data-label="Product Name"><h2>Bell Pepper</h2><p>Far far away, behind the word mountains, far from the countries</p></td>
                            <td data-label="Price">$4.90</td>
                            <td data-label="Quantity">1</td>
                            <td data-label="Total">$4.90</td>
                        </tr>
                        <tr
                        >
                            <td data-label="">
                                <span className="icon-box" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}><ImCross /></span>
                            </td>
                            <td data-label=""><img src={productImg2} alt="Product" width="50" /></td>
                            <td data-label="Product Name"><h2>Bell Pepper</h2><p>Far far away, behind the word mountains, far from the countries</p></td>
                            <td data-label="Price">$15.70</td>
                            <td data-label="Quantity">1</td>
                            <td data-label="Total">$15.70</td>
                        </tr>
                        <tr
                        >
                            <td data-label="">
                                <span className="icon-box" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}><ImCross /></span>
                            </td>
                            <td data-label=""><img src={productImg5} alt="Product" width="50" /></td>
                            <td data-label="Product Name"><h2>Bell Pepper</h2><p>Far far away, behind the word mountains, far from the countries</p></td>
                            <td data-label="Price">$4.90</td>
                            <td data-label="Quantity">1</td>
                            <td data-label="Total">$4.90</td>
                        </tr>
                        <tr
                        >
                            <td data-label="">
                                <span className="icon-box" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}><ImCross /></span>
                            </td>
                            <td data-label=""><img src={productImg6} alt="Product" width="50" /></td>
                            <td data-label="Product Name"><h2>Bell Pepper</h2><p>Far far away, behind the word mountains, far from the countries</p></td>
                            <td data-label="Price">$4.90</td>
                            <td data-label="Quantity">1</td>
                            <td data-label="Total">$4.90</td>
                        </tr>
                    </tbody>
                </table>
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