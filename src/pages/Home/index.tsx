import { CardEvento } from "../../components/CardEvento";
import { InputField } from "../../components/InputField";


export const Home = () => {

    return (
<>
        <div style={{ padding: "20px" }}>
            <InputField label="E-mail" type="email" placeholder="Digite seu e-mail..." name="email" />
        </div>

        <div>
            <CardEvento title="Novo Evento" data="31/12/2025" endereco="IFPB Cajazeiras"></CardEvento>
        </div>
</>

    )

}

export default Home;