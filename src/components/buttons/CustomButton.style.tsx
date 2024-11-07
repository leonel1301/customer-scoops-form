import styled from "styled-components";
import { pulse, ripple, shake, slideBackground, transitionStyles } from "../../animation/AnimationStyles";

export const CustomButtonContainer = styled.div`
    display: flex;
    width: 55%;
    margin: 0 auto;
    padding-bottom: 15px;
    @media (max-width: 768px) {
      width: 100%;
    }
`

export const CustomButtonSection = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 15px;
`
export const StyledButton = styled.button`
    width: 140px;
    height: 35px;
    font-size: 11px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 10px 0;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    ${transitionStyles}
    &:hover {
    animation: ${pulse} 1s infinite ease-in-out;
  }

  &:active {
    transform: scale(0.95);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
    transform: scale(0);
    opacity: 0;
    transition: 0.5s;
  }
  &:active::after {
    transform: scale(2);
    opacity: 1;
    transition: 0s;
  }
    @media (max-width: 768px) {
      width: 100px;
    }
`

///
export const ButtonsContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 15px;
`

export const BackStyledButton = styled.button`
  position: absolute;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  left: calc(20% - 60px);
  top: 60%;
  transform: translateY(-50%);
  ${transitionStyles}
  &:hover {
    animation: ${shake} 0.5s ease-in-out;
    color: white;
  }

  &:active {
    transform: translateY(-48%);
  }
  @media (max-width: 768px) {
    left: 0;
  }
`

export const SideButtonContainer = styled.div`
    display: flex;
    width: 55%;
    margin: 0 auto;
    padding-bottom: 15px;
    @media (max-width: 768px) {
      width: 70%;
    }
`

export const BackButtonSection = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 15px;
`


//Personalized Buttons

export const ButtonScoopBwStyled = styled.button<{ $selected: boolean }>`
  width: 135px;
  height: 39px;
  font-size: 11px;
  background-color: ${({ theme, $selected }) => $selected ? theme.colors.primary : 'white'};
  color: ${({ $selected }) => $selected ? '#fff' : '#000'};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  ${transitionStyles}
  &:hover {
    background: linear-gradient(45deg, 
      ${({ theme }) => theme.colors.primary}, 
      ${({ theme }) => theme.colors.primary}
    );
    background-size: 200% 200%;
    color: #ffffff;
    animation: ${slideBackground} 1s ease infinite;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 768px) {
    width: 148px;
  }
`

export const SimpleCircleButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 1000;
  flex-shrink: 0;
`
export const WrappedButton = styled.div<{ $selected: boolean }>`
  position: relative;
  width: 180px;
  padding-left: 3px;
  height: 39px;
  background-color: ${({ theme, $selected }) => $selected ? theme.colors.primary : 'white'};
  color: ${({ $selected }) => $selected ? '#fff' : '#000'};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 20px;
  font-size: 11px;
  ${transitionStyles}

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    background-position: -100%;
    color: #ffffff;
    animation: ${ripple} 0.6s linear;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextWrapped = styled.div`
  position: absolute;
  width: 115px;
  left: 52%;
  transform: translateX(-50%);
  display: flex;
  font-size: 11px;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;




