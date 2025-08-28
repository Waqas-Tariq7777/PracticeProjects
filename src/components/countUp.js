import CountUp from "react-countup";
import offerImg from "../assets/images/offer.png";
import "../styles/components/countUp.css";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants.js';
export default function Countup() {
    const [counterOn, setCounterOn] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div>
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="countup"
                style={{ backgroundImage: `url(${offerImg})` }}
            >
                <div ref={ref} className="countup-content">
                    {inView && (
                        <>
                            <h1><CountUp start={0} end={10000} duration={8} delay={0} /></h1>
                            <h1><CountUp start={0} end={100} duration={8} delay={0} /></h1>
                            <h1><CountUp start={0} end={1000} duration={8} delay={0} /></h1>
                            <h1><CountUp start={0} end={100} duration={8} delay={0} /></h1>
                        </>
                    )}
                </div>

                <div className="countup-head">
                    <h2>HAPPY CUSTOMERS</h2>
                    <h2>BRANCHES</h2>
                    <h2>PARTNER</h2>
                    <h2>AWARDS</h2>
                </div>
            </motion.div>
        </div>
    );
}
