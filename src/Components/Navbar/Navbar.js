import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {

  const [activeNavLink, setActiveNavLink] = useState(null);

  const handleNavLinkClick = (e) => {
    setActiveNavLink(e.target.href);
  };
  const navbarRef = useRef();

  const displayNavbar = () => {
    navbarRef.current.classList.toggle("responsive_navbar");
  };

  return (
    <header className="shadow-md flex items-center justify-between h-14 px-10 bg-backgroundColor">

      <a href="/#" className="text-mainColorLighter font-bold text-2xl">BloodChain</a>

      <nav ref={navbarRef} className="md:flex flex-column gap-10">
        <a href="/#" className={activeNavLink === "/" ? "text-textColor hover:text-mainColorLighter active:text-red" : "text-textColor hover:text-mainColorLighter"} onClick={handleNavLinkClick}>Home</a>
        <a href="/donate" className={activeNavLink === "/donate" ? "text-textColor hover:text-mainColorLighter active:text-red" : "text-textColor hover:text-mainColorLighter"} onClick={handleNavLinkClick}>Donate</a>
        <a href="/request" className={activeNavLink === "/request" ? "text-textColor hover:text-mainColorLighter active:text-red" : "text-textColor hover:text-mainColorLighter"} onClick={handleNavLinkClick}>Request</a>
        <a href="/#" className="login-btn text-backgroundColor ps-5 pe-5 px-1 py-1 bg-mainColorLighter rounded-full hover:bg-mainColor hover:text-backgroundColor">
          Login</a>
        <button className="navbar-btn navbar-close-btn md:hidden" onClick={displayNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="navbar-btn md:hidden" onClick={displayNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
