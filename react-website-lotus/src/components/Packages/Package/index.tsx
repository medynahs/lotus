import {
    Container,
    Title,
    Subtitle,
    ImageContainer,
    MoreInfoText,
  } from "./styles";
  import { motion } from "framer-motion";
  
  export interface PackageProps {
    image?: string;
    title?: string;
    price?: string;
  }
  
  function Package({ title, price, image }: PackageProps) {
    return (
      <Container>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <ImageContainer>
            <img
              src={image}
              alt="One "
              style={{ width: "100%", height: "100%" }}
            />
          </ImageContainer>
        </motion.div>
        <Title>{title}</Title>
        <Subtitle>{price}</Subtitle>
        <MoreInfoText>SAIBA MAIS</MoreInfoText>
      </Container>
    );
  }
  
  export default Package;
  