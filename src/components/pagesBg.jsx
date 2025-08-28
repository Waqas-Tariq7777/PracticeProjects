import bgImage from "../assets/images/hero1.jpg"
import "../styles/components/pagesBg.css"
export default function Bg({text1, text2}){
    return(
        <div>
             <div className="pages-bg" style={{ backgroundImage: `url(${bgImage})` }}>
                 <div className="overlay">
                <div className="bg-text">
                <h2>{text1}</h2>
                <h3>{text2}</h3>
                </div>
                </div>
             </div>
        </div>
    )
}