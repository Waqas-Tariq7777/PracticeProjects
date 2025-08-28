import Header from "../components/header";
import Bg from "../components/pagesBg";
import "../styles/pages/checkout.css"
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants.js';
export default function Checkout() {
    return (
        <div>
            <Header />
            <Bg text1={'HOME CHECKOUT'} text2={'CHECKOUT'} />
            <section className="billing-section">
                <div class="bill">
                    <motion.div 
                      variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    class="bill-item-1">
                        <h2>Billing Details</h2>
                        <div class="bill-name">
                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <input type="text" id="firstName" />
                            </div>
                            <div class="form-group">
                                <label for="lastName">Last Name</label>
                                <input type="text" id="lastName" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="country">State / Country</label>
                            <select id="country">
                                <option value="France">France</option>
                                <option value="Italy">Italy</option>
                                <option value="England">England</option>
                                <option value="China">China</option>
                                <option value="America">America</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="street" style={{ marginTop: "10px" }}>Street Address</label>
                            <div class="street">
                                <input type="text" placeholder="House Number and Street name" id="street" />
                                <input type="text" placeholder="Apartment, suite, unit (Optional)" />
                            </div>
                        </div>

                        <div class="city">
                            <div class="form-group">
                                <label for="city">Town / City</label>
                                <input type="text" id="city" />
                            </div>
                            <div class="form-group">
                                <label for="zip">Postcode / ZIP *</label>
                                <input type="text" id="zip" />
                            </div>
                        </div>

                        <div class="phone">
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" id="phone" />
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" />
                            </div>
                        </div>

                        <div class="account-options">
                            <label><input type="radio" name="accountOption" /> Create an account</label>
                            <label><input type="radio" name="accountOption" /> Ship to different address</label>
                        </div>
                    </motion.div>

                    <div class="bill-item-2">
                        <motion.div 
                          variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                        class="cart-card">
                            <h2>Cart Totals</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>$20.60</td>
                                    </tr>
                                    <tr>
                                        <td>Delivery</td>
                                        <td>$2.00</td>
                                    </tr>
                                    <tr>
                                        <td>Discount</td>
                                        <td>-$5.00</td>
                                    </tr>
                                    <tr class="total-row">
                                        <td>Total</td>
                                        <td>$17.60</td>
                                    </tr>
                                </tbody>
                            </table>
                        </motion.div>

                        <motion.div 
                          variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                        class="payment-card">
                            <h2>Payment Method</h2>
                            <label><input type="radio" name="payment" /> Direct Bank Transfer</label>
                            <label><input type="radio" name="payment" /> Check Payment</label>
                            <label><input type="radio" name="payment" /> Paypal</label>
                            <label><input type="checkbox" /> I have read and accept the terms and conditions</label>
                            <button>Place an order</button>
                        </motion.div>
                    </div>
                </div>

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

