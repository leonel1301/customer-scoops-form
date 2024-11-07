import styled from 'styled-components';

export const MainDiv = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  background-size: 100%;
  background-color: transparent;
  background-repeat: no-repeat;
`;

export const MailRelativeContainer = styled.div`
  position: relative;
  padding: 0;
  width: 100%;
`;

export const MailAbsoluteImage = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const MailRectangleImage = styled.img`
  width: 749px;
  height: 323px;
`;

export const MailLogoImage = styled(MailAbsoluteImage)`
  top: 50%;
  left: 30%;
  width: 200px;
`;

export const MailEyesImage = styled(MailAbsoluteImage)`
  top: 30%;
  left: 73%;
  width: 345.68px;
  height: 161.94px;
`;

export const MailManImage = styled(MailAbsoluteImage)`
  top: 55%;
  left: 75%;
  width: 285px;
  height: 293px;
`;

export const MailMessageSection = styled.table`
  width: 100%;
  padding: 50px 125px;
  margin-bottom: 10px;
`;

export const MailParagraph = styled.p<{ $marginTop?: string }>`
  color: #231331;
  font-family: 'PT Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: start;
  margin-top: ${({ $marginTop }) => $marginTop || '12px'};
`;

export const MailGreeting = styled(MailParagraph)`
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
`;

export const MailButton = styled.button`
  width: 191px;
  height: 35px;
  border-radius: 30px;
  background-color: #231331;
  border: 1px solid #231331;
  color: white;
  cursor: pointer;
  margin-top: 50px;
`;

export const MailFooter = styled.table`
  background-color: #231331;
  width: 100%;
  height: 180px;
  padding: 0;
  text-align: center;
`;

export const MailSmallLogo = styled.img`
  width: 114.98px;
  height: 41.9px;
`;