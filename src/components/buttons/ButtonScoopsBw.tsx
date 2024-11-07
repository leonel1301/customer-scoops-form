import { ButtonScoopBwStyled } from "./CustomButton.style";

interface ButtonScoopsBwProps {
    text: string;
    onClick?: () => void;
    selected?: boolean;
}

export default function ButtonScoopsBw({ text, onClick, selected }: ButtonScoopsBwProps) {
    return (
        <ButtonScoopBwStyled onClick={onClick} $selected={selected ?? false}>
            {text}
        </ButtonScoopBwStyled>
    );
}