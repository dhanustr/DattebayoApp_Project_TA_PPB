import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"; // Tambahkan NavLink
import { HiHome } from "react-icons/hi"; // Impor ikon HiHome dari react-icons
import { MdGroup } from "react-icons/md"; // Impor ikon MdGroup dari react-icons
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";



// Pages
import LandingPage from "./pages/LandingPage";
import ProfileIcon from "./components/Profile/Profile";
import "./App.css";
import AZCharacter from "./pages/AZChar/AZCharacter";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Clan from "./pages/FavoriteChar/Clan"
import RandomCharacter from "./pages/Homes";
import About from "./pages/About"
import logo from "./components/Picture/pngegg.png"
function App() {

  return (
    <div className="App">
    <Router>
    <header className="header">
      
  <ProfileIcon />
  <img src={logo} alt="Logo" className="header-logo" />
</header>

        <Routes>
        <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/Favorite" element={<Clan />} /> {/* Perbaiki path menjadi '/user' */}
          <Route path="/AZChar"element={<AZCharacter/>}/>
          <Route path ="Random"element = {<RandomCharacter/>}/>
          <Route path ="/about"element={<About/>}/>
        </Routes>

        <footer>
        <NavLink to = "/Random" className="iconWrapper">
          <HiHome className="icon" /> home
          </NavLink>
          <NavLink to="/" className="iconWrapper">
            <AiOutlineSearch className="icon" /> Search
          </NavLink>
          <NavLink to ="/about" className = "iconWrapper">
            <AiOutlineInfoCircle className = "icon"/>About
          </NavLink>
          <NavLink to="/favorite" className="iconWrapper">
            <AiOutlineHeart className="icon" /> Favorite
          </NavLink>
          <NavLink to="/AZChar" className="iconWrapper">
            <MdGroup className="icon" /> all Character
            </NavLink>
          
        </footer>
      </Router>
    </div>
  );
}

export default App;
