import React from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import TextArea from "./Components/TextArea"
import Theme from "./Components/Theme"
import UpperFooter from "./Components/UpperFooter"
// import StyleContext from "./context/StyleContext";
// import { useContext } from "react";
const App = () => {

    // const [isToggled, setToggled] = useState(false)
    // const handleToggle = () => {
    //     setToggled(!isToggled)
    // };

    // const { style, dayTheme, nightTheme } = useContext(StyleContext);
    // const { backgroundColor, color } = style;
    return (
        <div className="main" >

            <Theme/>
            {/* <button onClick={handleToggle}>Theme{isToggled ? nightTheme() : dayTheme()}</button> */}
            <Header />
            <TextArea />
            <UpperFooter/>
            <Footer />
        </div>
    )
}

export default App

{/*  // "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test",
    // "eject": "react-scripts eject" */}