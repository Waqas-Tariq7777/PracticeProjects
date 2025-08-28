import { useState, useEffect } from "react";
import "../styles/components/modal.css";

export default function Modal({ modal, toggleModal }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (modal) {
            setLoading(true);
        }
    }, [modal]);

    return (
        <>

            {modal && (
                <div className="popup">
                    <div className="popup-overlay" onClick={toggleModal}></div>
                    <div className="popup-content">
                        <button className="video-close-btn" onClick={toggleModal}>&times;</button>
                        {loading && <div className="loader"></div>}
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/xuP4g7IDgDM?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onLoad={() => setLoading(false)}
                        ></iframe>
                    </div>
                </div>
            )}

        </>
    );
}
