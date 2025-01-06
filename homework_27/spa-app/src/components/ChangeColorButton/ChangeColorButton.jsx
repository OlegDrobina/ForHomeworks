import { ThemeContext, themes } from "../../themeContext";
import { useContext } from "react";

const ChangeColorButton = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const handleClickEvent = () => {
        setTheme(theme.color === 'light' ? themes.dark : themes.light);
    }
    return (
        <>
        <label className="switch">
            <input type="checkbox" onClick={handleClickEvent}></input>
            <span className="slider round"></span>
        </label>
        </>
    )
}

export default ChangeColorButton;