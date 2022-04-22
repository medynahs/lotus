import {
  Container,
  Title,
  Subtitle,
  ImageContainer,
  MoreInfoText,
} from "./styles";
import { motion } from "framer-motion";

export interface CardProps {
  image?: string;
  title?: string;
  price?: string;
}

function Card({ title, price, image }: CardProps) {
  return (
    <Container>
      <ImageContainer>
        <img src={image} alt="One " height={600} />
      </ImageContainer>
      <Title>{title}</Title>
      <Subtitle>Preço individual: R$ {price}</Subtitle>
      <MoreInfoText>SAIBA MAIS</MoreInfoText>
    </Container>
  );
}

export default Card;
