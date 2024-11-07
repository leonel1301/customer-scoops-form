import logo from '../../../public/assets/logo/customer-scoops-logo.png';
import { LogoContainer, LogoSection } from './LogoComponent.styles';

export default function LogoComponent() {
    return (
        <LogoContainer>
            <LogoSection>
                <img src={logo} alt="Customer Scoops Logo" width="113" height="41.18" />
            </LogoSection>
        </LogoContainer>
    );
}