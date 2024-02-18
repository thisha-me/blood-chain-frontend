import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [activeNavLink, setActiveNavLink] = useState(null);
  const [showShadow, setShowShadow] = useState(false);

  const handleNavLinkClick = (e) => {
    setActiveNavLink(e.target.href);
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
      className={`flex items-center justify-between h-12 mt-1 py-2 px-10 bg-backgroundColor ${
        showShadow ? "shadow-md" : ""
      }`}
    >
      <a href="/#" className="text-mainColorLighter font-bold text-3xl">BloodChain</a>

      <nav ref={navbarRef} className="md:flex flex-column gap-10 ">
        <a href="/#"
          className={`${
            activeNavLink === "/"
              ? "text-textColor hover:text-mainColorLighter active:text-red "
              : "text-textColor hover:text-mainColorLighter"
          }`}
          onClick={handleNavLinkClick}
        >Home</a>

        <a href="/donate"
          className={`${
            activeNavLink === "/donate"
              ? "text-textColor hover:text-mainColorLighter active:text-red"
              : "text-textColor hover:text-mainColorLighter"
          }`}
          onClick={handleNavLinkClick}
        >Donate</a>

        <a href="/request"
          className={`${
            activeNavLink === "/request"
              ? "text-textColor hover:text-mainColorLighter active:text-red"
              : "text-textColor hover:text-mainColorLighter"
          }`}
          onClick={handleNavLinkClick}
        >Request</a>

        <a href="/#" className="login-btn text-backgroundColor px-5 bg-mainColorLighter rounded-full hover:bg-mainColor hover:text-backgroundColor "
        >Login</a>

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
