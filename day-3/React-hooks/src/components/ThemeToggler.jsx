import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeToggler(){
    const {theme, toggleTheme} = useContext(ThemeContext);
    return(
        <button onClick={toggleTheme}>
            Change to {theme === "light" ?"Dark" : "Light"} Mode
        </button>
    )
}

export default ThemeToggler;