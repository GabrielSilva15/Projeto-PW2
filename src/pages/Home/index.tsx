import { CardEvento } from "../../components/CardEvento";
import { InputField } from "../../components/InputField";
import { Navbar } from "../../components/Navbar";
import { useState } from "react";


export const Home = () => {
    const [selected, setSelected] = useState<"Cadastro" | "Eventos" | null>(null);

    return (
<>
        <Navbar onSelect={setSelected} selected={selected}/>

        {selected === "Cadastro" && (
            <div style={{ padding: "20px" }}>
                <InputField label="E-mail" type="email" placeholder="Digite seu e-mail..." name="email" />
            </div>
        )}

        
        {selected === "Eventos" && (
            <div>
                <CardEvento title="Novo Evento" data="31/12/2025" endereco="IFPB Cajazeiras"></CardEvento>
            </div>
        )}
        
</>

    )

}

export default Home;