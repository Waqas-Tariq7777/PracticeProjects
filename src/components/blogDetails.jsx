import { BiCommentDetail } from "react-icons/bi";
import "../styles/components/blogDetails.css"
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants.js';
export default function BlogDetails({ blogImg }) {
    return (
        <div>
            <div className="blog-left-grid">
                <div className="blog-left-item-img">
                    <img
                        src={blogImg}
                        alt="blog"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    />
                </div>
                <div className="blog-left-item-content">
                    <div className="blog-left-item-content-toptext">
                        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>July 20, 2019</p>
                        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>Admin</p>
                        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }} className="comments">
                            <BiCommentDetail />
                            <span>3</span>
                        </p>
                    </div>
                    <div>
                        <h3
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            Even the all-powerful Pointing has no control about the blind texts
                        </h3>
                    </div>


                    <p className="para-gray">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <button>Read more</button>
                </div>
            </div>
        </div>
    );
}
