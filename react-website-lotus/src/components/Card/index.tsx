import {
  Container,
  Title,
  Subtitle,
  ImageContainer,
  MoreInfoText,
} from "./styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface CardProps {
  image?: string;
  title?: string;
  price?: string;
  id?: string;
}

function Card({ title, price, image, id }: CardProps) {
  return (
    <Container>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <ImageContainer>
          <Link to={`/detalhes/${id}`}>
            <img
              src={image}
              alt="One "
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
        </ImageContainer>
      </motion.div>
      <Title>{title}</Title>
      <Subtitle>{price}</Subtitle>
      <MoreInfoText>SAIBA MAIS</MoreInfoText>
    </Container>
  );
}

export default Card;
