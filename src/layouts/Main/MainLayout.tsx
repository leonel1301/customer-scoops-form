import { useState } from "react";
import CustomButtom from "../../components/buttons/CustomButton";
import InputComponent from "../../components/input/InputComponent";
import LogoComponent from "../../components/Logo/LogoComponent";
import ImageComponent from "../../components/PictureSide/ImageComponent";
import TextComponent from "../../components/TextSide/TextComponent";
import { MainContainer, SideContainer } from "./MainLayout.styles";
import StepsLayout from "../Steps/StepsLayout";
import CustomText from "../../components/TextSide/CustomTextComponent";

export default function MainLayout() {
    const [currentStep, setCurrentStep] = useState(0);
    const [name, setName] = useState('');

    const messages = [
        <>
            Muchas gracias por tu interés en conocer <b>customerScoops</b>, que a través de
            Formularios Conversacionales Inteligentes te ayudamos<br />
            a aumentar el revenue y rentabilidad<br />
            de tu negocio.
            <br />
            <br />
            Queremos conocerte, ¿cuál es tu nombre?
        </>,
        <><b>Genial {name},</b> ahora nos gustaría tener cierta
            info para diseñar una gran propuesta de valor
            para ti:
            <br />
            <br />
            ¿Cuál es tu cargo/posición dentro de tu empresa?
        </>,
        <>¿Cuáles son tus principales desafíos para 2024?</>,
        <>¿Cuál CRM están utilizando en tu empresa?<br />CRM:
        </>,
        <><b>Ahora te vamos a sorprender...</b><br />
            ¿A cuál industria pertenece tu empresa?
        </>,
        <><b>Muchas Gracias </b><br/>
            por querer ser parte
            de la familia Scoopers.
            <br /> 
            <br />
            <CustomText textSize="20px"><i>Nos vemos pronto!</i></CustomText></>
    ];

    const handleNextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, messages.length - 1));
    };

    const handlePreviousStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };


    return (
        <MainContainer $currentStep={currentStep}>
            <SideContainer>
                <LogoComponent />
                {
                    currentStep === 5 ? (
                        <TextComponent textSize="30px">
                            {messages[currentStep]}
                        </TextComponent>
                    ) : (
                        <TextComponent textSize="19px">
                            {messages[currentStep]}
                        </TextComponent>
                    )
                }
                {
                    currentStep === 0 && <InputComponent name={name} onChange={setName} />
                }
                {
                    currentStep >= 1 && <StepsLayout step={currentStep} />
                }
                <CustomButtom step={currentStep} backClick={handlePreviousStep} onClick={handleNextStep} />
            </SideContainer>
            <ImageComponent />
        </MainContainer>
    );
}