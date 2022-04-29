import { Container, ImageContainer } from "./styles";
import { motion } from "framer-motion";

export interface InstaCardProps {
  image?: string;
  title?: string;
  price?: string;
}

function InstaCard({ image }: InstaCardProps) {
  return (
    <Container>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        whileHover={{ x: 20 }}
        transition={{ duration: 0.3 }}
      >
        <a href="https://www.instagram.com/flor.de.lotus.esteticaesaude/">
          <ImageContainer>
            <img
              src={image}
              alt="One "
              style={{ width: "100%", height: "100%" }}
            />
          </ImageContainer>
        </a>
      </motion.div>
    </Container>
  );
}

export default InstaCard;
