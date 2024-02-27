import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeNavLink, setActiveNavLink] = useState(null);
  const [showShadow, setShowShadow] = useState(false);

  const handleNavLinkClick = (to) => {
    setActiveNavLink(to);
  };

  const navbarRef = useRef();

  const displayNavbar = () => {
    navbarRef.current.classList.toggle("responsive_navbar");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowShadow(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-13 py-2 px-10 bg-backgroundColor ${
        showShadow ? "shadow-md" : ""
      }`}
    >
      <Link to="/" className="text-mainColorLighter font-bold text-3xl"           
      onClick={() => handleNavLinkClick("/")}
>
        BloodChain
      </Link>

      <nav ref={navbarRef} className="md:flex flex-column gap-8 ">
        <Link
          to="/"
          className={`${
            activeNavLink === "/"
              ? "text-textColor hover:text-mainColorLighter active-text-red"
              : "text-textColor hover:text-mainColorLighter"
          }`}
          onClick={() => handleNavLinkClick("/")}
        >
          Home
        </Link>

        <Link
          to="/donate"
          className={`${
            activeNavLink === "/donate"
              ? "text-textColor hover:text-mainColorLighter active-text-red"
              : "text-textColor hover:text-mainColorLighter"
          }`}
          onClick={() => handleNavLinkClick("/donate")}
        >
          Donate
        </Link>

        <Link
          to="/request"
          className={`${
            activeNavLink === "/request"
              ? "text-textColor hover:text-mainColorLighter active-text-red"
              : "text-textColor hover:text-mainColorLighter"
          }`}
          onClick={() => handleNavLinkClick("/request")}
        >
          Request
        </Link>

        <Link
          to="/profile"
          className={`${
            activeNavLink === "/profile"
              ? "text-textColor hover:text-mainColorLighter active-text-red"
              : "text-textColor hover:text-mainColorLighter"
          }`}
          onClick={() => handleNavLinkClick("/profile")}
        >
          Profile
        </Link>

        <Link
          to="/loginform"
          className="login-btn text-backgroundColor px-5 bg-mainColorLighter rounded-full hover:bg-mainColor hover:text-backgroundColor"
          onClick={() => handleNavLinkClick("/loginform")}
        >
          Login
        </Link>

        <button
          className="navbar-btn navbar-close-btn md:hidden"
          onClick={displayNavbar}
        >
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
