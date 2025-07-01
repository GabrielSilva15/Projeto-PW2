import { FiCalendar, FiMapPin } from "react-icons/fi";
import IconWrapper from "../Icon";
import { CardContainer, DateText, InfoContainer, Title,Image } from "./styled";

import Address from "./styled"
import moment from "moment";


interface EventoProps {
  title: string;
  endereco: string;
  data: string; 
  imagem?: string;
}


export const CardEvento = ({ title,endereco,data,imagem }: EventoProps) => {


  const dataFormatada = moment(data, "DDMMYYYY").format("DD/MM/YYYY");
  

  return (
    <CardContainer>
      <Image src={imagem || "https://cdn0.casamentos.com.br/vendor/3872/3_2/960/jpeg/whatsapp-image-2018-07-27-at-10-51-32-19_13_123872.jpeg"} />
      <InfoContainer>
        <Title>{title}</Title>
        <Address>
          <IconWrapper icon={FiMapPin} />
          {endereco}
        </Address>
        <DateText>
          <IconWrapper icon={FiCalendar} />
          {dataFormatada}
        </DateText>
      </InfoContainer>
    </CardContainer>
  );
};

