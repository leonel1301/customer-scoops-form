import styled from "styled-components";
import { fadeIn, floatAnimation, slideIn } from "../../animation/AnimationStyles";

export const ImageContainer = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    position: relative;
    align-items: flex-end;
    justify-content: flex-end;
    animation: ${fadeIn} 1s ease-in;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const MobileContainer = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        height: auto;
        position: relative;
        align-items: center;
        justify-content: flex-end;
        animation: ${fadeIn} 1s ease-in;
    }
`;

export const RectangleImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: ${slideIn} 1.2s ease-out;
`;

export const BackgroundImage = styled.img`
    width: 70%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: ${floatAnimation} 3s ease-in-out infinite;
`;

export const MobileImage = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 95%;
    height: auto;
    order: 1;
  }
`;

export const LogoImage = styled.img`
    display: none;

    @media (max-width: 768px) {
        display: block; 
        position: absolute;
        top: 40%;
        left: 15%;
        width: 30%;
        height: auto;
    }
`;