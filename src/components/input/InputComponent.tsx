import { InputContainer, InputSection, StyledInput } from "./InputComponent.style";

interface InputComponent {
    onChange: (value: string) => void;
    name: string;
}

export default function InputComponent({ onChange, name }: InputComponent) {
    return (
        <InputContainer>
            <InputSection>
                <StyledInput value={name} placeholder="Nombre" onChange={(e) => onChange(e.target.value)}/>
            </InputSection>
        </InputContainer>
    );
}