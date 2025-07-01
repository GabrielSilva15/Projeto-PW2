import { InputField } from "../../components/InputField";


export const Home = () => {

    return (

        <div style={{ padding: "20px" }}>
            <InputField label="E-mail" type="email" placeholder="Digite seu e-mail..." name="email" />
        </div>

    )

}

export default Home;