import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"

export const Navbar = () => {
  const navbarRef = useRef();

  const displayNavbar = () => {
    navbarRef.current.classList.toggle("responsive_navbar");
  };

  return (
    <header className="shadow-md flex items-center justify-between h-14 px-10 bg-backgroundColor">

      <p className="text-mainColorLighter font-bold text-2xl">BloodChain</p>

      <nav ref={navbarRef} className="md:flex flex-column gap-10">
        <a href="/#" className="text-textColor hover:text-mainColorLighter">Home</a>
        <a href="/#" className="text-textColor hover:text-mainColorLighter">Donate</a>
        <a href="/#" className="text-textColor hover:text-mainColorLighter">Request</a>
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
