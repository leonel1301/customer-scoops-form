import { BackButtonSection, BackStyledButton, ButtonsContainer, CustomButtonContainer, CustomButtonSection, SideButtonContainer, StyledButton } from "./CustomButton.style";
import arrow_blue from '../../../public/assets/images/arrow-blue.png';
import arrow_green from '../../../public/assets/images/arrow-green.png';

interface CustomButtomProps {
    onClick: () => void;
    backClick: () => void;
    step: number;
}

export default function CustomButtom({ onClick, backClick, step }: CustomButtomProps) {
    const buttonText = step === 0 ? "Comenzar" : step === 5 ? "Finalizar" : "Siguiente";
    const handleClick = () => {
        window.location.href = "https://www.customerscoops.com/";
    }

    if (step === 0 || step === 5) {
        return (
            <CustomButtonContainer>
                <CustomButtonSection>
                    <StyledButton onClick={step === 5 ? handleClick : onClick}>
                        {buttonText}
                    </StyledButton>
                </CustomButtonSection>
            </CustomButtonContainer>
        );
    }

    return (
        <ButtonsContainer>
            <BackStyledButton onClick={backClick}>
                <img src={arrow_blue} alt="Back Arrow" style={{width:'8.44px', height: '8.1px'}}/>
            </BackStyledButton>
            <SideButtonContainer>
                <BackButtonSection>
                    <StyledButton onClick={onClick}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {buttonText}
                            <img src={arrow_green} style={{ marginLeft: "8px", width:'8.44px', height: '8.1px' }} alt="Next Arrow" />
                        </div>
                    </StyledButton>
                </BackButtonSection>
            </SideButtonContainer>
        </ButtonsContainer>
    );
}