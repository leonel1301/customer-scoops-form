import { css, keyframes } from "styled-components";

// Image Components Animation
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(-50%);
    opacity: 1;
  }
`;

export const floatAnimation = keyframes`
  0% {
    transform: translate(-50%, 0px);
  }
  50% {
    transform: translate(-50%, -10px);
  }
  100% {
    transform: translate(-50%, 0px);
  }
`;

export const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

//Button Components Animation

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const ripple = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
`;

export const shake = keyframes`
  0%, 100% {
    transform: translateX(0) translateY(-50%);
  }
  25% {
    transform: translateX(-3px) translateY(-50%);
  }
  75% {
    transform: translateX(3px) translateY(-50%);
  }
`;

export const slideBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const transitionStyles = css`
  transition: all 0.3s ease;
`;
