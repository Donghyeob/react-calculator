import React from "react";
import * as Styles from '../../../Styles/styled';

const ScanInput = (props) => {
    const handleInputChange = (e) => {
        props.onSetScanInputValue(e.target.value);
        props.onSetCalculatorValue(e.target.value);
    }

    const handleInputClick = (e) => {
        props.setCursorPosition(e.target.selectionStart);
    }

    return (
        <Styles.ScanInputWrapper>
            <Styles.ScanInput onChange={handleInputChange}
                   onClick={handleInputClick}
                   value={props.scanInputValue} />
        </Styles.ScanInputWrapper>
    )
}

export default ScanInput;