import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 70) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="not found" />
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>Tv Shows</li>
          <li>
            <a href="#movies">Movies</a>
          </li>
          <li>
            <a href="#popular">New & Popular</a>
          </li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="not found" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="not found" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="not found" className="profile" />
          <img src={caret_icon} alt="not found" />
          <div className="dropdown">
            <p onClick={handleSignOut}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
