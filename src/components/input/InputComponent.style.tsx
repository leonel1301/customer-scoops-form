import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    width: 55%;
    margin: 0 auto;
    padding-bottom: 15px;
    padding-top: 20px;
    @media (max-width: 768px) {
        width: 100%;
        padding: 15px 0;
    }
`

export const InputSection = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
`

export const StyledInput = styled.input`
    width: 80%;
    padding: 8px 0;
    border: none;
    font-size: 14px;
    color: #23133180;
    border-bottom: 1px solid #23133180;
    outline: none;
    &:focus {
        border-bottom: 2px solid #000;
    }
    @media (max-width: 768px) {
        width: 100%;
        font-size: 17px;
    }
`;