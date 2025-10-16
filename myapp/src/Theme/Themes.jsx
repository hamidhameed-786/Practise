import { useState } from "react";
import { createContext } from "react";
export const ThemeContext = createContext();
import "./theme.css";

function Theme() {
    const [dark, setDark] = useState(true);
    const toggletheme = () => {
        setDark((prev) => !prev);
    };

    return (
        <>
            <ThemeContext.Provider value={{dark,toggletheme}}>

                <div className={dark ? "theme-dark" : "theme-light"}>
                    <h3>Theme context</h3>
                    <h2>Hamid context</h2>
                    <button onClick={toggletheme}>
                        switch to {dark ? "Dark" :"Light"}  dark
                    </button>
                </div>
            </ThemeContext.Provider>
        </>
    );
}
export default Theme;