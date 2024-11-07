import { useState } from "react";
import ButtonScoopCo from "../../components/buttons/ButtonScoopCo";
import ButtonScoopsBw from "../../components/buttons/ButtonScoopsBw";
import { ButtonWrapper, GridContainer, SecondGridContainer, StepsLayoutContainer } from "./StepsLayout.styles";

interface StepsLayoutProps {
    step: number;
}

export default function StepsLayout({ step }: StepsLayoutProps) {
    const positions = ['Board member', 'C-level', 'Gerente', 'Subgerente', 'Jefe área', 'Líder de área', 'Ejecutivo / Analista', 'Otro'];
    const challenges = ['Aumentar conversión de leads a clientes', 'Reducir customer churn', 'Implementar un programa VoC',
        'Reducir costos en gestión de reclamos', 'Optimizar procesos comerciales', 'Optimizar procesos operativos', 'Otros'];
    const crms = ['SAP', 'Microsoft Dynamics', 'Salesforce', 'Hubspot', 'Zoho', 'Netsuite (Oracle)', 'Monday', 'CRM Propio', 'No tengo CRM'];
    const industries = ['Tecnología', 'Software', 'Servicios', 'Financiera', 'Telecomunicaciones', 'Producción / Fabricación', 'Logística', 'Consumo Masivo',
        'Mayorista', 'Retail', 'Otra'
    ];

    const [selectedButtons, setSelectedButtons] = useState<{ [key: string]: number }>({
        first: -1,
        second: -1,
        third: -1,
        fourth: -1,
    });

    const handleClick = (button: string, text: number) => {
        setSelectedButtons((prev) => ({
            ...prev,
            [button]: text,
        }));
    }


    return (
        <StepsLayoutContainer>
            {
                step === 1 && (
                    <GridContainer>
                        {
                            positions.map((position, index) => (
                                <ButtonWrapper key={index} $isLast={index === positions.length - 1} $totalItems={positions.length}>
                                    <ButtonScoopsBw key={index} text={position} onClick={() => handleClick("first", index)} selected={(selectedButtons.first === index) ? true : false} />
                                </ButtonWrapper>
                            ))
                        }
                    </GridContainer>
                )
            }
            {
                step === 2 && (
                    <SecondGridContainer>
                        {
                            challenges.map((challenge, index) => (
                                <ButtonScoopCo key={index} text={challenge} onClick={() => handleClick("second", index)} selected={(selectedButtons.second === index) ? true : false} word={String.fromCharCode(65 + index)} />
                            ))
                        }
                    </SecondGridContainer>
                )
            }
            {
                step === 3 && (
                    <GridContainer>
                        {
                            crms.map((crm, index) => (
                                <ButtonScoopsBw
                                    key={index}
                                    text={crm}
                                    onClick={() => handleClick("third", index)}
                                    selected={(selectedButtons.third === index) ? true : false}
                                />
                            ))
                        }
                    </GridContainer>
                )
            }
            {
                step === 4 && (
                    <GridContainer>
                        {
                            industries.map((industry, index) => (
                                <ButtonScoopsBw
                                    key={index}
                                    text={industry}
                                    onClick={() => handleClick("fourth", index)}
                                    selected={(selectedButtons.fourth === index) ? true : false}
                                />
                            ))
                        }
                    </GridContainer>
                )
            }
        </StepsLayoutContainer>
    );
}