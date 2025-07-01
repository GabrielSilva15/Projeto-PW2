import { NavbarContainer, NavButton } from "./style";

interface NavbarProps {
    onSelect: (value: "Cadastro" | "Eventos") => void;
    selected: "Cadastro" | "Eventos" | null;
}

export const Navbar = ({ onSelect, selected }: NavbarProps) => {
    return (
        <NavbarContainer>
            
            <NavButton active={selected === "Cadastro"} onClick={() => onSelect("Cadastro")}>Cadastro</NavButton>
            <NavButton active={selected === "Eventos"} onClick={() => onSelect("Eventos")}>Eventos</NavButton>
            
        </NavbarContainer>
    );
};

