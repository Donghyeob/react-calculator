import React from "react";
import * as Styles from '../../../Styles/styled';

const PrintDisplay = (props) => {
    const setResultValue = (value) => {
        let result = '';

        if (value !== undefined) {
            result = value.toLocaleString();
        }

        return result;
    }
    return (
        <div>
            <Styles.DisplayWrapper>
                {setResultValue(props.resultValue)}
            </Styles.DisplayWrapper>
        </div>
    )
}

export default PrintDisplay;