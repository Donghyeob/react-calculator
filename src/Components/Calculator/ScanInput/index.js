import React from "react";

const ScanInput = (props) => {
    const handleInputChange = (e) => {
        props.onSetScanInputValue(e.target.value);
        props.onSetCalculatorValue(e.target.value);
    }

    const handleInputClick = (e) => {
        props.setCursorPosition(e.target.selectionStart);
    }

    return (
        <div className='scan-input-wrapper'>
            <input onChange={handleInputChange}
                   onClick={handleInputClick}
                   value={props.scanInputValue} />
        </div>
    )
}

export default ScanInput;