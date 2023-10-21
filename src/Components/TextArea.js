import React, { useState } from "react";

const TextArea = () => {
    const [time, setTime] = useState(15)


    let displaytext ="guard atom round heart given element dish bill fed private equator alone hay time press depth family proper article floor maybe tropical activity research job got top eaten wrote warn figure rapidly ruler forest zebra promised first public pot road job middle instant thrown office strong rice now underline tree";
    let keychar=0;
    return( 
        <div>
         
    <div  className="row-1">
        <div>
            {time}
        </div>
        <div className="timer-box">
           <button onClick={()=> {setTime(15)}}>15s</button>
           <button onClick={()=> {setTime(30)}}>30s</button>
           <button onClick={()=> {setTime(60)}}>60s</button>
        </div>
    </div>
    <div className="text-box">
        {displaytext.split("").map((char) => (<span key={'char' +(keychar++)}>{char}</span>))}
        </div>
       
    </div>
    )
}
export default TextArea