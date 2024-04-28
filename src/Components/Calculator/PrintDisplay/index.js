import React from "react";

const PrintDisplay = (props) => {
    return (
        <div className='scan-input-wrapper'>
            <h1>{props.resultValue}</h1>
        </div>
    )
}

export default PrintDisplay;