import Header from "../components/header";
import Bg from "../components/pagesBg";
import productImg1 from "../assets/images/product-3.jpg.webp";
import productImg2 from "../assets/images/product-4.jpg.webp";
import { ImCross } from "react-icons/im";
import "../styles/pages/cart.css";
import Subscribe from "../components/subscribe";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants.js";

export default function Cart() {
  return (
    <div>
      <Header />
      <Bg text1={"HOME CART"} text2={"CART"} />

      {/* product section */}
      <section
       
        className="table-cart"
      >
        <table border="1" cellSpacing="0" cellPadding="10">
          <thead 
          >
            <tr>
              <th></th>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr
            >
              <td data-label="">
                <span
                  className="icon-box"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  style={{ cursor: "pointer" }}
                >
                  <ImCross />
                </span>
              </td>
              <td data-label="">
                <img src={productImg1} alt="Product" width="50" />
              </td>
              <td data-label="Product Name">
                <h2>Bell Pepper</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>
              </td>
              <td data-label="Price">$4.90</td>
              <td data-label="Quantity">1</td>
              <td data-label="Total">$4.90</td>
            </tr>

            <tr
            >
              <td data-label="">
                <span
                  className="icon-box"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  style={{ cursor: "pointer" }}
                >
                  <ImCross />
                </span>
              </td>
              <td data-label="">
                <img src={productImg2} alt="Product" width="50" />
              </td>
              <td data-label="Product Name">
                <h2>Bell Pepper</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>
              </td>
              <td data-label="Price">$15.70</td>
              <td data-label="Quantity">1</td>
              <td data-label="Total">$15.70</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Coupon + totals section */}
      <section
      >
        <div className="copon">
          <div
            className="copon-item1"
          >
            <h2>Coupon Code</h2>
            <p>Enter your coupon code if you have one</p>
            <label htmlFor="coponcode">Coupon Code</label>
            <input type="text" id="coponcode" />
            <button>Apply Coupon</button>
          </div>

          <div
            className="copon-item2"
          >
            <h2>Estimate shipping and tax</h2>
            <p>Enter your destination to get a shipping estimate</p>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" />
            <label htmlFor="state">State/Province</label>
            <input type="text" id="state" />
            <label htmlFor="zip">Zip/Postal Code</label>
            <input type="text" id="zip" />
            <button>Estimate</button>
          </div>

          <div
            className="copon-item3"
          >
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
                <tr className="total-row">
                  <td>Total</td>
                  <td>$17.60</td>
                </tr>
              </tbody>
            </table>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </section>

      <Subscribe />

      <section className="circle">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer" }}
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

      <Footer />
    </div>
  );
}
