import styled from "styled-components";

export const StepsLayoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        justify-content: start;
    }
`;

export const GridContainer = styled.div`
    display: grid;
    width: 55%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    @media (max-width: 1060px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px) {
        width: 70%;
        justify-items: center;
        align-items: center;
    }
    @media (max-width: 430px) {
        width: 100%;
        justify-items: center;
        justify-self: unset;
        align-items: center;
    }
    @media (max-width: 375px) {
        width: 100%;
        justify-items: start;
        align-items: center;
    }
`;

export const SecondGridContainer = styled.div`
    display: grid;
    width: 55%;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    @media (max-width: 1060px) {
        grid-template-columns: 1fr;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ButtonWrapper = styled.div<{ $isLast: boolean; $totalItems: number }>`
  @media (max-width: 1060px) {
    ${({ $isLast, $totalItems }) =>
      $isLast && $totalItems % 2 === 1
        ? `
          grid-column: span 2;
          & > button {
            width: 100%;
            max-width: none;
          }
        `
        : ''}
  }
`;
