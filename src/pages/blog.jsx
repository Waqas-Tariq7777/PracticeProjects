import Header from "../components/header";
import Bg from "../components/pagesBg";
import BlogDetails from "../components/blogDetails";
import fruitImg1 from "../assets/images/fruit1.jpg";
import fruitImg2 from "../assets/images/fruit2.jpg";
import fruitImg3 from "../assets/images/fruit3.jpg";
import fruitImg4 from "../assets/images/fruit4.jpg";
import fruitImg5 from "../assets/images/fruit5.jpg";
import fruitImg6 from "../assets/images/fruit1.jpg";
import { SlCalender } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import "../styles/pages/blog.css";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants.js";

export default function Blog() {
  return (
    <div>
      <Header />
      <Bg text1={"HOME BLOG"} text2={"BLOG"} />

      {/* Blog section */}
      <section>
        <div className="blog-grid">
          {/* Left blog list */}
          <div className="blog-grid-item">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              <BlogDetails blogImg={fruitImg1} />
            </motion.div>
            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }}>
              <BlogDetails blogImg={fruitImg2} />
            </motion.div>
            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }}>
              <BlogDetails blogImg={fruitImg3} />
            </motion.div>
            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }}>
              <BlogDetails blogImg={fruitImg4} />
            </motion.div>
            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }}>
              <BlogDetails blogImg={fruitImg5} />
            </motion.div>
            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }}>
              <BlogDetails blogImg={fruitImg6} />
            </motion.div>
          </div>

          {/* Right blog sidebar */}
          <div
            className="blog-grid-item"
          >
            <div className="blog-right">
              {/* Search */}
              <motion.div
               variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                className="search"
              >
                <input type="search" placeholder="Search..." />
                <FaSearch className="search-icon" />
              </motion.div>

              {/* Categories */}
              <motion.div
               variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                className="categories"
              >
                <h4>Categories</h4>
                <div className="categories-content">
                  <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>
                    Vegetables <span className="categories-num">(12)</span>
                  </p>
                  <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>
                    Fruits <span className="categories-num">(4)</span>
                  </p>
                  <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>
                    Juice <span className="categories-num">(23)</span>
                  </p>
                  <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>
                    Dried <span className="categories-num">(8)</span>
                  </p>
                </div>
              </motion.div>

              {/* Recent Blog */}
              <motion.div
               variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                className="recent-blog"
              >
                <h4>Recent Blog</h4>

                <div className="recent-blog-content">
                  <div className="recent-blog-img">
                    <img src={fruitImg1} alt="fruits" />
                  </div>
                  <div className="recent-blog-content-1">
                    <p>Even the all-powerful Pointing has no control about the blind texts</p>
                    <div className="recent-inner-text">
                      <p><SlCalender />April 26, 2018</p>
                      <p><RiAdminFill />Admin</p>
                      <p><BiCommentDetail />19</p>
                    </div>
                  </div>
                </div>

                <div className="recent-blog-content">
                  <div className="recent-blog-img">
                    <img src={fruitImg2} alt="fruits" />
                  </div>
                  <div className="recent-blog-content-1">
                    <p>Even the all-powerful Pointing has no control about the blind texts</p>
                    <div className="recent-inner-text">
                      <p><SlCalender />April 26, 2018</p>
                      <p><RiAdminFill />Admin</p>
                      <p><BiCommentDetail />19</p>
                    </div>
                  </div>
                </div>

                <div className="recent-blog-content">
                  <div className="recent-blog-img">
                    <img src={fruitImg3} alt="fruits" />
                  </div>
                  <div className="recent-blog-content-1">
                    <p>Even the all-powerful Pointing has no control about the blind texts</p>
                    <div className="recent-inner-text">
                      <p><SlCalender />April 26, 2018</p>
                      <p><RiAdminFill />Admin</p>
                      <p><BiCommentDetail />19</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tags */}
              <motion.div
               variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                className="tag"
              >
                <h3>Tag Cloud</h3>
                <div className="tag1">
                  <button>FRUITS</button>
                  <button>TOMATOE</button>
                  <button>MANGO</button>
                  <button>APPLE</button>
                </div>
                <div className="tag2">
                  <button>CARROTS</button>
                  <button>ORANGE</button>
                  <button>PEPPER</button>
                </div>
                <div className="tag3">
                  <button>EGGPLANT</button>
                </div>
              </motion.div>

              {/* Paragraph */}
              <motion.div
               variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                className="paragraph"
              >
                <h3>Paragraph</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll up circle */}
      <section className="circle">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer", bottom: "-130px" }}
          className="upward-circle"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <svg className="up-arrow" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M12 6l-6 6h4v6h4v-6h4z" fill="currentColor" />
          </svg>
        </button>
      </section>

      <div className="blog-footer" style={{ backgroundColor: "#f3f0f0" }}>
        <Footer />
      </div>
    </div>
  );
}
