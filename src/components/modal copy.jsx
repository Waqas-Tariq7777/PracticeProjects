import React from "react";
import "../styles/components/modal-copy.css";
import productImg1 from "../assets/images/product-3.jpg.webp";

export default function ModalCopy({ modal, toggleModal }) {
  if (!modal) return null; // don't render if modal=false

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal-content custom-modal-animate">
        {/* Close Button */}
        <button type="button" className="custom-modal-close" onClick={toggleModal}>
          &times;
        </button>

        {/* Centered Image */}
        <img src={productImg1} alt="Product" className="custom-modal-img" />
      </div>
    </div>
  );
}
