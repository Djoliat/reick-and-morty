// import style from "./div.module.css"
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Nav = ({ onSearch }) => {
  return (
    <div>
      <NavLink to="/home">
        <button> Home</button>
      </NavLink>
      <NavLink to="/about">
        <button> About</button>
      </NavLink>
      <SearchBar onSearch={onSearch} />
      <NavLink to="/favorites">
        <button> Favorites</button>
        </NavLink>
    </div>
  );
};

export default Nav;
