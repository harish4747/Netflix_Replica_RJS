import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate=useNavigate();

  const handleSignOut=()=>{
    navigate("/")
  }

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="not found" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
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
