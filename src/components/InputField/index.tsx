import type { InputHTMLAttributes } from "react";
import { Input, Label, Wrapper } from "./styles";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};

export const InputField = ({ label, name, type = "text", ...props }: InputFieldProps) => {
    return (
        <Wrapper>
            {label && <Label htmlFor={name}>{label}</Label>}
            <Input id={name} name={name} type={type} {...props} />
        </Wrapper>
    );
};
