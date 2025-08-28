import Header from "../components/header";
import Bg from "../components/pagesBg";
import "../styles/pages/contact.css";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants.js";

export default function Contact() {
  return (
    <div className="contact-bg">
      <Header />
      <Bg text1={"HOME CONTACT US"} text2={"CONTACT US"} />

      {/* Details section */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="details"
      >
        <div className="detail">
          <p>
            <span className="contact-gray">Address:</span> 198 West 21th Street,
            Suite 721 New York NY 10016
          </p>
          <p>
            <span className="contact-gray">Phone:</span> + 1235 2355 98
          </p>
          <p>
            <span className="contact-gray">Email:</span> info@yoursite.com
          </p>
          <p>
            <span className="contact-gray">Website:</span> yoursite.com
          </p>
        </div>
      </motion.div>

      {/* Map + Form section */}
      <div className="form-section">
        {/* Map */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="map"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212780.2202010965!2d72.85333451989224!3d33.56140539989934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d30f!2sRawalpindi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1756311208738!5m2!1sen!2s"
            style={{ border: "0", width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="form"
        >
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="number" placeholder="Your Phone" />
          <textarea name="message" placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </motion.div>
      </div>

      {/* Scroll up circle */}
      <section className="circle">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer", bottom: "-130px" }}
          className="upward-circle"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <svg
            className="up-arrow"
            viewBox="0 0 24 24"
            width="22"
            height="22"
            aria-hidden="true"
          >
            <path d="M12 6l-6 6h4v6h4v-6h4z" fill="currentColor" />
          </svg>
        </button>
      </section>

      {/* Footer */}
      <div className="blog-footer" style={{ backgroundColor: "white" }}>
        <Footer />
      </div>
    </div>
  );
}
