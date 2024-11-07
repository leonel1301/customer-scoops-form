import { MailButton, MailEyesImage, MailFooter, MailGreeting, MailLogoImage, MailManImage, MailMessageSection, MailParagraph, MailRectangleImage, MailRelativeContainer, MailSmallLogo, MainDiv } from "./MailComponent.styles";


export default function MailComponent() {
    return (
        <MainDiv>
            <MailRelativeContainer>
                <MailRectangleImage src="rectangle.png" />
                <MailLogoImage src="logo.png" />
                <MailEyesImage src="eyes.png" />
                <MailManImage src="man.png" />
            </MailRelativeContainer>

            <MailMessageSection>
                <tr>
                    <td>
                        <MailGreeting>Hola Anthony,</MailGreeting>
                        <MailParagraph>
                            En Customer Scoops nos importa mucho tu experiencia, y queremos
                            asegurarnos de que nuestros servicios sigan cumpliendo tus
                            expectativas. Por eso, hemos preparado unas breves preguntas para
                            que puedas compartir tus comentarios y sugerencias.
                        </MailParagraph>
                        <MailParagraph $marginTop="50px">
                            Tu opinión es clave para ayudarnos a mejorar y adaptarnos a lo que
                            realmente necesitas. Nos tomará solo unos minutos de tu tiempo.
                        </MailParagraph>
                        <MailButton onClick={() => window.location.href = 'https://customer-scoops-form-six.vercel.app'}>
                            Ingresa Aquí
                        </MailButton>
                        <MailParagraph $marginTop="30px">
                            Agradecemos de antemano tu participación y confianza en Customer
                            Scoops. ¡Gracias por tu tiempo y por contribuir a nuestra mejora
                            continua!
                        </MailParagraph>
                        <MailParagraph $marginTop="30px">
                            Saludos,<br />
                            <b>Leonel Ortega</b><br />
                            Equipo de Customer Scoops
                        </MailParagraph>
                    </td>
                </tr>
            </MailMessageSection>

            <MailFooter>
                <tr>
                    <td>
                        <MailSmallLogo src="smallLogo.png" />
                    </td>
                </tr>
            </MailFooter>
        </MainDiv>
    );
}