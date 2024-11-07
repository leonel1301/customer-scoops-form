import customerScoopsBg from '../../../public/assets/images/customer-scoops-bg-white.png'
import customerScoopsRe from '../../../public/assets/images/customer-scoops-bg-rectangle.png'
import customerScoopsMobile from '../../../public/assets/images/customer-scoops-bg-mobile.png'
import logo from '../../../public/assets/logo/customer-scoops-logo.png'

import { BackgroundImage, ImageContainer, LogoImage, MobileContainer, MobileImage, RectangleImage } from './ImageComponent.styles';


export default function ImageComponent() {
    return (
        <>
            <ImageContainer>
                <RectangleImage src={customerScoopsRe} alt='Rectangle Image' />
                <BackgroundImage src={customerScoopsBg} alt='Background Image' />
            </ImageContainer>
            <MobileContainer>
                <MobileImage src={customerScoopsMobile} alt="Mobile Background" />
                <LogoImage src={logo} alt='Logo'/>
            </MobileContainer>

        </>
    );
}