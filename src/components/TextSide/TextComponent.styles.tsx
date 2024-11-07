import styled from "styled-components";

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    @media (max-width: 768px) {
        width: 100%;
        padding: 20px 0;
    }
`;

export const TextSection = styled.div`
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    width: 55%;
    @media (max-width: 768px) {
        width: 100%;
    }
`