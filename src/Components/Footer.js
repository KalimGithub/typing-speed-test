import React,{useState} from "react";
import Select from "react-select";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import { themeOptions } from "../Utils/ThemeOptions";
import { useTheme } from "@emotion/react";
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import Brightness4Icon from '@mui/icons-material/Brightness4';


// import StyleContext from "../context/StyleContext";
// import { useContext } from "react";

const Footer = () => {

    const [value, setValue] = useState({});
    const {setTheme} = useTheme();
    const handleChange = (e)=> {
        console.log(e);
        setValue(e.value);
        setTheme(e.value);

    }
    // const {style, dayTheme, nightTheme}= useContext(StyleContext);
    // const {backgroundColor, color} = style;
    return (



        <div className="footer" 
        //  style={{
        //     backgroundColor: backgroundColor,
        //     color: color,
        // }}
        >

            <div className="themeButton">
                <Select
                    value={value}
                    onChange={handleChange}
                    options={themeOptions}
                    menuPlacement="top"
                />
            </div>

            <div className="social-logo">
                <a href="#"><GitHubIcon/></a>
                <a href="#"><LinkedInIcon/></a>
                <a href="#"><AttachEmailIcon/></a>
                <a href="#"><InstagramIcon/></a>

            </div>
            <div className="theme-select-div">
                <select id="theme-select">
                    <option>Lighten-White</option>
                    <option>Dark-Black</option>
                    <option>Coloured-Gray</option>
                    <option>Coloured-Green</option>
                    <option>Coloured-Green</option>
                    <option>Coloured-Pink</option>
                    <option>Coloured-LightPurple</option>
                </select>
            </div>
            {/* <button id="theme-btn" onClick={dayTheme}><DarkModeIcon/></button>
            <button id="theme1-btn" onClick={dayTheme}><Brightness4Icon/></button> */}
            {/* <button onClick={nightTheme}>nightTheme</button> */}
        </div>
    )
}

export default Footer