import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeBox(){
    const {theme} = useContext(ThemeContext)
    const style = {
        padding: "20px",
        marginTop:"10px",
        width:"100%",
        height:"50px",
        backgroundColor: theme === 'light'?'#fff':'#222',
        color: theme==='light'?'#000':'#fff',
    }
    return(
        <div style={style}>
            Current Theme : {theme}
        </div>
    )
}
export default ThemeBox;