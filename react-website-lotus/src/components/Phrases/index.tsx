import { Container, TextDiv, TextsDiv, Text } from "./styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Phrases() {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 2,
        transition: {
          ease: "easeInOut",
          duration: 1.2
        },
      });
    }

    if (!inView) {
      animation.start({ opacity: 0});
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <motion.div animate={animation}>
        <TextDiv>
          <Text>Mais Amor Próprio.</Text>
        </TextDiv>
        <TextsDiv>
          <Text>Sua Pele, Sua</Text>
        </TextsDiv>
        <TextDiv>
          <Text>Confiança, Nossa Meta</Text>
        </TextDiv>
      </motion.div>
    </Container>
  );
}

export default Phrases;
