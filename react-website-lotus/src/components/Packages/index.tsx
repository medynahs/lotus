import { Container, Card1Div, Card2Div } from "./styles";
import Card from "../Card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import bride from "../../images/bride.jpg";
import spa from "../../images/spa.jpg";

function Packages() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 2,
        transition: {
          ease: "easeInOut",
          duration: 1.4,
        },
      });
    }

    if (!inView) {
      animation.start({ opacity: 0});
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <Card1Div>
        <motion.div animate={animation}>
          <Card
            title="Pacote Renovação"
            image={spa}
            price="R$ 500,00 (Até 6x sem juros, clique para ver detalhes) "
          />
        </motion.div>
      </Card1Div>
      <Card2Div>
        <motion.div animate={animation}>
          <Card
            title="Pacote Noiva"
            image={bride}
            price="R$ 500,00 (Até 6x sem juros, clique para ver detalhes) "
          />
        </motion.div>
      </Card2Div>
    </Container>
  );
}

export default Packages;
