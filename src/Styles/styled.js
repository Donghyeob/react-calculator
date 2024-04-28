import styled, {createGlobalStyle, css} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    #root,
    html,
    body {
        margin: 0;
        padding: 0;
    }
`

export const App = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CalculatorWrapper = styled.div`
    width: 368px;
    height: 648px;
    padding: 64px 24px 32px;
    border: 1px solid #c8c8c8;
    border-radius: 20px;
    box-sizing: border-box
`

export const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 68px);
    justify-content: center;
    gap: 16px;
`;

export const CalculatorBtn = styled.button`
    height: 68px;
    padding: 20px 0;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    background-color: #e1e4e5;
    font-size: 23px;
    
    ${props => props.type === 'BtnReset' && css`
        color: #ff2e2e;
        background-color: #ffc5c5;
    `}

    ${props => props.type === 'BtnOperation' && css`
        color: #ffffff;
        background-color: #ff9404;
    `}

    ${props => props.type === 'BtnCalculate' && css`
        color: #ffffff;
        background-color: #30cb72;
    `}
`;