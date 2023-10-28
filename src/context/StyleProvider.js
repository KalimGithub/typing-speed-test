// import { color } from "@mui/system";
import StyleContext from "./StyleContext";
import React from "react";
import { useState } from "react";

let dayStyle = {
    backgroundColor: "white",
    color: "black",
}

const StyleProvider = ({children}) => {
    const [style, setStyle] = useState(dayStyle);

    return (
        // <styleContext.Provider value={
        //     {
        //         style: style,
        //         dayTheme: () => setStyle(dayStyle),
        //         nightTheme: () => setStyle({ ...style, backgroundColor: "black", color: "white" })
        //     }
        // }
        // >
        //     {children}
        // </styleContext.Provider>
        <StyleContext.Provider value={
            {
                style:style,
                dayTheme: () => {setStyle(dayStyle)},
                nightTheme: () => {
                    setStyle({...style, backgroundColor:"black", color:"white"})
                }
            }
        }>
            {children}
        </StyleContext.Provider>
    )
}

export default StyleProvider;