import { Container, TextDiv, TextsDiv, Text } from "./styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import img from "../../images/home1.jpg";
import img2 from "../../images/pack2.jpg";
import img3 from "../../images/skin1.jpg";
import img4 from "../../images/smile.jpg";

function PackagesSection() {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 2,
        transition: {
          ease: "easeInOut",
          duration: 1.2,
        },
      });
    }

    if (!inView) {
      animation.start({ opacity: 0 });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <Container ref={ref}>
      <div
        style={{
          width: "40%",
          height: "40%",
          marginRight: "4%",
        }}
      >
        <div
          className="parallax-window"
          data-parallax="scroll"
          data-image-src={img4}
          data-bleed="10"
        >
          <div style={{ width: "100%", height: 550 }}></div>
        </div>
        <img
          src={img2}
          alt="One "
          style={{
            width: "58%",
            marginLeft: "24%",
            marginTop: "-20%",
          }}
        />
      </div>
      <div style={{ marginTop: "-4%", marginRight: "4%" }}>
        <motion.div animate={animation}>
          <TextDiv>
            <Text>Nossos</Text>
          </TextDiv>
          <TextsDiv>
            <Text>Pacotes</Text>
          </TextsDiv>
          <TextDiv>
            <p>SAIBA MAIS</p>
          </TextDiv>
        </motion.div>
      </div>

      <div
        style={{
          width: "40%",
          height: "40%",
        }}
      >
        <img
          src={img3}
          alt="One "
          style={{
            width: "60%",
            marginLeft: "20%",
          }}
        />

        <div
          className="parallax-window"
          data-parallax="scroll"
          data-image-src={img}
          data-bleed="10"
          style={{ marginTop: "-5rem", width: "85%" }}
        >
          <div style={{ width: 450, height: 500 }}></div>
        </div>
      </div>
    </Container>
  );
}

export default PackagesSection;
