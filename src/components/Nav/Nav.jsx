import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom"
import style from "./Nav.module.css"

export default function Nav (props) {
    return (
        <div className="navStyle">
        <SearchBar onSearch={props.onSearch} />
        {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
        <Link to="/about"><h3>About</h3></Link>
        <Link to="/home"><h3>Home</h3></Link>
        <Link to="/favorites"><h3>Favorites</h3></Link>
        </div>
    )
}
