import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
import style from './Navbar.module.scss';


export const Navbar = () => {
    const {isDarkMode, handleChangeDarkMode} = useContext(ThemeContext)
    console.log("isDarkMode", isDarkMode);

    return(
        <>
        <nav className={isDarkMode === true ? style.darkMode : style.navStyle}>
            <ul>
                <li>test</li>
            </ul>
        </nav>
        
        </>
    )
}

