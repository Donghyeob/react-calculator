import calculatorData from "../../../Data";
import * as Style from "../../../Styles/styled";

const CalculatorButtons = (props) => {
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

    const onClickSetScanInput = (e) => {
        if (e.target.value !== 'calculate') {
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
        } else if (e.target.value === 'calculate') {
            props.onSetCalculateResult();
        }
    }

    return (
        <Style.ButtonWrapper>
            {buttonRender()}
        </Style.ButtonWrapper>
    )
}

export default CalculatorButtons;