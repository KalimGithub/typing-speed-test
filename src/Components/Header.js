import React from "react";
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// rafce  --> shortcut to create component and export

const Header = () => {
    return(
        <div className="header" >
            <div className="header-left-div">
                <h1 id="typecat-text">TypeCat</h1>
                <a className="keyboard-icon">
                    <KeyboardAltIcon />
                </a>
            </div>
            <a id="profile-icon">
                <AccountCircleIcon />
            </a>
        </div>
    )
}

export default Header 