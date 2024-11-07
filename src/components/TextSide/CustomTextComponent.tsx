import { ReactNode } from "react";
import { TextSection } from "./TextComponent.styles";

interface CustomTextProps {
    children: ReactNode;
    textSize: string;
}

export default function CustomText(  { children, textSize }: CustomTextProps) {
    return (
        <TextSection style={{ fontSize: textSize }}>
            {children}
        </TextSection>
    );
}