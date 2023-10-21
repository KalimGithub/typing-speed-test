import React from "react"

import Footer from "./Components/Footer"
import Header from "./Components/Header"
// import Timer from "./Components/Timer"
import TextArea from "./Components/TextArea"
import Statistics from "./Components/Statistics"
const App = () => {
    return(
        <div>
            <Header />
            {/* <Timer /> */}
            <Footer />
            <TextArea />
            <Statistics/>
        </div>
    )
}

export default App