import {useState} from "react";
import * as Style from "../../Styles/styled";
import * as math from "mathjs";
import ScanInput from "./ScanInput";
import PrintDisplay from "./PrintDisplay";
import CalculatorButtons from "./CalculatorButtons";

const Calculator = () => {
    const [scanInputValue, setScanInputValue] = useState('');
    const [calculateValue, setCalculatorValue] = useState('');
    const [cursorPosition, setCursorPosition] = useState(0);
    const [resultValue, setResultValue] = useState('');

    const onSetScanInputValue = (value) => {
        setScanInputValue(value);
    };

    const onSetCalculatorValue = (value) => {
        setCalculatorValue(value);
    }

    const onSetCalculateResult = () => {
        setResultValue(math.evaluate(calculateValue));
        setScanInputValue(resultValue);
        setCalculatorValue(resultValue);
    }

    return (
        <Style.CalculatorWrapper>
            <ScanInput scanInputValue={scanInputValue}
                       setCursorPosition={setCursorPosition}
                       onSetScanInputValue={onSetScanInputValue}
                       onSetCalculatorValue={onSetCalculatorValue}/>
            <PrintDisplay resultValue={resultValue} />
            <CalculatorButtons scanInputValue={scanInputValue}
                               cursorPosition={cursorPosition}
                               setCursorPosition={setCursorPosition}
                               setResultValue={setResultValue}
                               onSetScanInputValue={onSetScanInputValue}
                               onSetCalculatorValue={onSetCalculatorValue}
                               onSetCalculateResult={onSetCalculateResult} />
        </Style.CalculatorWrapper>
    )
}

export default Calculator;