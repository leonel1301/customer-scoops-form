import { SimpleCircleButton, TextWrapped, WrappedButton } from "./CustomButton.style";

interface ButtonScoopCoProps {
    text: string;
    word: string;
    onClick?: () => void;
    selected?: boolean;
}

export default function ButtonScoopCo({ text, word, onClick, selected }: ButtonScoopCoProps) {
    return (
        <WrappedButton onClick={onClick} $selected={selected ?? false}>
            <SimpleCircleButton>{word}</SimpleCircleButton>
            <TextWrapped>
                {text}
            </TextWrapped>
        </WrappedButton>
    );
}