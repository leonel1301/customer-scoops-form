import styled from 'styled-components';

export const MainContainer = styled.div<{ $currentStep: number }>`
  background-color: ${({ theme, $currentStep }) => $currentStep === 5 ? theme.colors.secondary : ''};
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    background-color: white;
    overflow-y: auto;
    position: fixed;
    height: auto;
    margin: 0;
    padding: 0;
  }
`;


export const SideContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;
  margin-top: 130px;
    @media (max-width: 768px) {
    margin-top: 0;
    order: 2;
    padding: 20px;
  }
`;

