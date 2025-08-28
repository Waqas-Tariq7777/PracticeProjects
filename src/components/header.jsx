import { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaChevronDown,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/components/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navRef = useRef(null);

  const shopItems = [
    { label: "Shop", href: "/Shop" },
    { label: "Wishlist", href: "/WishList" },
    { label: "Single Product", href: "/SingleProduct" },
    { label: "Cart", href: "/Cart" },
    { label: "Checkout", href: "/Checkout" },
  ];

  const handleDropdownClick = () => {
    setShopOpen(false);
    setMenuOpen(false);
  };

  // Detect when original navbar scrolls out of view
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const top = navRef.current.getBoundingClientRect().top;
        setSticky(top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavbarContent = () => (
    <div className="nav-inner md:flex md:items-center md:justify-between p-5">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold cursor-pointer flex items-center gap-2 logo-text"
        >
          VEGEFOODS
        </Link>
        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </span>
      </div>

      <ul
        className={`nav-items navbar-visibilty md:flex md:items-center md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all duration-500 ease-in 
  ${menuOpen
            ? "bg-black text-white opacity-100"
            : "opacity-0"
          } md:opacity-100 md:top-auto md:bg-transparent md:text-black`}
      >
        <li className="mx-4 my-6 md:my-0">
          <Link to="/" className="duration-500">HOME</Link>
        </li>
        <li className="relative mx-4 my-6 md:my-0 group" onClick={() => setShopOpen(!shopOpen)}>
          <Link to="/" className="duration-500 flex items-center gap-1">
            SHOP <FaChevronDown className={`transition-transform duration-300 ${shopOpen ? "rotate-180" : ""}`} />
          </Link>
          <ul
            className={`absolute left-0 top-10 bg-white text-black shadow-lg rounded transition-all duration-300 ease-in-out 
            ${shopOpen ? "opacity-100 visible" : "opacity-0 invisible"} 
            group-hover:opacity-100 group-hover:visible w-56`}
          >
            {shopItems.map((item, index) => (
              <li key={index} className="px-5 py-2 hover:bg-gray-100" onClick={handleDropdownClick}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="mx-4 my-6 md:my-0"><Link to="/About" className="duration-500">ABOUT</Link></li>
        <li className="mx-4 my-6 md:my-0"><Link to="/Blog" className="duration-500">BLOG</Link></li>
        <li className="mx-4 my-6 md:my-0"><Link to="/Contact" className="duration-500">CONTACT</Link></li>
        <li className="mx-4 my-6 md:my-0 flex items-center">
          <Link to="/Cart" className="flex items-center duration-500">
            <FaShoppingCart className="mr-2" /> [0]
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      {/* Top Bar */}
      <div className="head-top-bg">
        <div className="head-top">
          <p className="flex items-center gap-2"><FaPhoneAlt /><span>+ 1235 2355 98</span></p>
          <p className="flex items-center gap-2"><FaPaperPlane /><span>youremail@email.com</span></p>
          <p className="flex items-center gap-2">3-5 Business days delivery & Free Returns</p>
        </div>
      </div>

      {/* Original Navbar */}
      <div ref={navRef} className="navi">{<NavbarContent />}</div>

      {/* Sticky Copy Navbar */}
      {sticky && <div className="navi sticky-nav">{<NavbarContent />}</div>}
    </div>
  );
}
