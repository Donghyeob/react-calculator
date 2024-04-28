import { useState } from "react";
import calculatorData from "../../../Data";
import * as Style from "../../../Styles/styled";

const CalculatorButtons = (props) => {
    const [dotState, setDotState] = useState(true);
    const buttonRender = () => {
        const buttons = calculatorData.buttons;
        const result = [];

        buttons.forEach((el, index) => {
            result.push(
                <Style.CalculatorBtn key={index}
                                     value={el.value}
                                     type={el.style}
                                     onClick={onClickSetScanInput}>
                    {el.display}
                </Style.CalculatorBtn>
            );
        })

        return result;
    }

    const getForwardChar = (string) => {
        const getForwardChar = string[props.cursorPosition];
        console.log(getForwardChar);
    }

    const onClickSetScanInput = (e) => {
        const value = e.target.value;
        const operation = ['+', '-', '*', '/', '%'];
        const endOperation = ['calculate', 'reset'];

        if (!endOperation.includes(value) && !operation.includes(value)) {
            props.onSetScanInputValue(
                prev => prev.substring(0, props.cursorPosition)
                + e.target.textContent
                + prev.substring(props.cursorPosition)
            );
            props.onSetCalculatorValue(
                prev => prev.substring(0, props.cursorPosition)
                + e.target.value
                + prev.substring(props.cursorPosition)
            );
            props.setCursorPosition(prev => prev + 1);
        } else if (operation.includes(value)) {
            setDotState(true);
        } else if (value === '.' && dotState) {
            props.onSetScanInputValue(prev => {
                getForwardChar(prev);
            })
            setDotState(false);
        } else if (value === 'calculate') {
            props.onSetCalculateResult();
        } else if (value === 'reset') {
            props.onSetScanInputValue('');
            props.onSetCalculatorValue('');
            props.setResultValue('');
            props.setCursorPosition(0);
        }
    }

    return (
        <Style.ButtonWrapper>
            {buttonRender()}
        </Style.ButtonWrapper>
    )
}

export default CalculatorButtons;