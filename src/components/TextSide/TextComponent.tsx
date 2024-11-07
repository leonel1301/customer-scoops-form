import { ReactNode } from "react";
import { TextContainer, TextSection } from "./TextComponent.styles";

interface TextComponentProps {
    children: ReactNode;
    textSize: string;
}

export default function TextComponent({ children, textSize }: TextComponentProps) {
    return (
        <TextContainer>
            <TextSection style={{ fontSize: textSize }}>
                {children}
            </TextSection>
        </TextContainer>
    );
}