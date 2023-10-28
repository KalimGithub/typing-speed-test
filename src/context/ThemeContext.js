import { Children, useContext, useState } from "react";
import { createContext } from "react";
import { themeOptions } from "../Utils/ThemeOptions";
const themeContext = createContext();

export default themeContext = () => {


    const [theme, setTheme] = useState(themeOptions[0].value)
    const values = {
        theme,
        setTheme
    }


    return (
        <themeContext.Provider value = {values}>{Children}</themeContext.Provider>
    )
}

export const useTheme = () => useContext(themeContext);