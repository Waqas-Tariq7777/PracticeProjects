import "../styles/components/subscribe.css"
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants.js';
export default function Subscribe() {
    return (
        <div>
            <motion.section
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                class="subscribe-bg">
                <div class="subscribe">
                    <div class="subscribe-item">
                        <h2>Subscribe to our Newsletter</h2>
                        <p>Get e-mail updates about our latest shops and special offers</p>
                    </div>
                    <div class="subscribe-item">
                        <form onsubmit="this.reset(); location.reload(); return false;">
                            <input type="email" placeholder="Enter email address" required />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}