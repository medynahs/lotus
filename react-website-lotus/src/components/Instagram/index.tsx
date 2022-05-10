import {
  Container,
  Title,
  InstaName,
  ImagesContainer,
  Card2Div,
  Card3Div,
  Card4Div
} from "./styles";
import { motion, useAnimation } from "framer-motion";
import InstaCard from "./InstaCard";
import img2 from "../../images/make.jpg";
import img3 from "../../images/massageinsta.jpg";
import img4 from "../../images/instapic4.jpg";
import img1 from "../../images/insta.jpg";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Instagram() {
  const data = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.6 });
  const animation = useAnimation();
  const secondAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 2,
        y: 10,
        transition: {
          ease: "easeInOut",
          duration: 1.4,
          bounce: 0.3,
        },
      });

      secondAnimation.start({
        opacity: 2,
        y: -10,
        transition: {
          ease: "easeInOut",
          duration: 1.4,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      animation.start({ opacity: 0, y: -42 });
      secondAnimation.start({ opacity: 0, y: 42 });
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <motion.div animate={animation}>
        <Title href="https://www.instagram.com/flor.de.lotus.esteticaesaude/">
          Siga-nos
        </Title>
      </motion.div>

      <ImagesContainer>
        <div>
          <InstaCard image={img1} />
        </div>

        <Card2Div>
          <InstaCard image={img2} />
        </Card2Div>

        <Card3Div>
          <InstaCard image={img3} />
        </Card3Div>

        <Card4Div>
          <InstaCard image={img4} />
        </Card4Div>
      </ImagesContainer>

      <motion.div animate={secondAnimation}>
        <InstaName href="https://www.instagram.com/flor.de.lotus.esteticaesaude/">
          @Lotus.Flower
        </InstaName>
      </motion.div>
    </Container>
  );
}

export default Instagram;
