import React from "react";

const Timer =() => {
    return(
        <div className="timer">
            <p id="time">15</p>
            <div className="timer-btn">
                <button id="15s-btn" >15s</button>
                <button id="30s-btn">30s</button>
                <button id="60s-btn">60s</button>
            </div>
        </div>
    )
}
export default Timer