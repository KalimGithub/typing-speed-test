import React from "react";
import RefreshIcon from '@mui/icons-material/Refresh';
const UpperFooter = () => {
    return (
        <div className="upper-footer">
            <button className="refresh-btn"><RefreshIcon /></button>
            <div className="reset">
                <button>esc</button>
                <p>-</p>
                <p>reset</p>
            </div>
            <div className="no-of-words">
                <button>10</button>
                <button>50</button>
                <button>80</button>
                <button>100</button>
                <p>-</p>
                <p>no. of words</p>
            </div>
        </div>
    )
}
export default UpperFooter