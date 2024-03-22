import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useContractWrite,
  useContractRead,
  useDisconnect,
} from "@thirdweb-dev/react";
import { STATUS_CONTRACT_ADDRESS } from "../Navbar/../../constants/addresses";

const Navbar = () => {
  const address = useAddress();
  const [newStatus, setNewStatus] = useState(address);
  
  const { contract } = useContract(
    "0x729676943630Cc1090a10100Db0E55ee0EAc33b4"
  );
  const { mutateAsync: connectWallet, isLoading } = useContractWrite(
    contract,
    "connectWallet"
  );

  const call = async () => {
    try {
      const data = await connectWallet({ args: [address] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const [activeNavLink, setActiveNavLink] = useState(null);
  const [showShadow, setShowShadow] = useState(false);

  const location = useLocation();

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

  useEffect(() => {
    const { pathname } = location;
    setActiveNavLink(pathname);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-13 py-2 px-10 bg-backgroundColor ${
        showShadow ? "shadow-md" : ""
      }`}
    >
      <Link
        to="/"
        className="text-mainColorLighter font-bold text-3xl"
        onClick={() => handleNavLinkClick("/")}
      >
        BloodChain
      </Link>

      <nav ref={navbarRef} className="md:flex flex-column gap-8 flex items-center">
        <Link
          to="/"
          className={`${
            activeNavLink === "/"
              ? "text-textColor hover:text-mainColorLighter active-text-red"
              : "text-textColor hover:text-mainColorLighter"
          }`}
          onClick={() => handleNavLinkClick("/")}
          onClickCapture={displayNavbar}
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
          onClickCapture={displayNavbar}
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
          onClickCapture={displayNavbar}
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
          onClickCapture={displayNavbar}
        >
          Profile
        </Link>

        <Link>
          <ConnectWallet
            theme={"light"}
            modalSize={"wide"}
          />
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
