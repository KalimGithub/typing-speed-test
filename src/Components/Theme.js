import React, { useState, useContext } from "react";

import StyleContext from "../context/StyleContext";
// import {  } from "react";
const Theme = () => {

    const [isToggled, setToggled] = useState(true)
    const handleToggle = () => {
        setToggled(!isToggled)
    };

    const { style, dayTheme, nightTheme } = useContext(StyleContext);
    const { backgroundColor, color } = style;

    return (
        <div className="" style={{
            backgroundColor: backgroundColor,
            color: color,
        }}>
            <button onClick={handleToggle}>Theme{isToggled ? nightTheme() : dayTheme()}</button>
        </div>
    )
}

export default Theme