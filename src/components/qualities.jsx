import { FaTruck } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { TfiMedall } from "react-icons/tfi";
import { MdOutlineSupportAgent } from "react-icons/md";
import "../styles/components/qualities.css"
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants.js';
export default function Qualities(){
    return(
        <div>
             <section>
                <div
                    className="qualities">
                    <motion.div 
                    variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                    className="qualities-item">
                        <span className="qualities-icon-1"><FaTruck /></span>
                        <h3>Free Shipping</h3>
                        <p>On order over $100</p>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                    className="qualities-item">
                        <span className="qualities-icon-2"><IoFastFoodOutline /></span>
                        <h3>Always Fresh</h3>
                        <p>Product well package</p>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                    className="qualities-item">
                        <span className="qualities-icon-3"><TfiMedall /></span>
                        <h3>Superior Quality</h3>
                        <p>Quality Products</p>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                    className="qualities-item">
                        <span className="qualities-icon-4"><MdOutlineSupportAgent /></span>
                        <h3>Support</h3>
                        <p>24/7 Support</p>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}