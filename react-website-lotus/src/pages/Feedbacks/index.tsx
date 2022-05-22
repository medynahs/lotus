import Grid from "@mui/material/Grid";
import {
  Container,
  Title,
  Subtitle,
  TestimonialDiv,
  Paragraph,
  Author,
} from "./styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { testimonialsInfo } from "../../data/testimonialsData";

function Feedbacks() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: -35,
        transition: {
          ease: "easeInOut",
          duration: 1.2,
        },
      });
    }

    if (!inView) {
      animation.start({ x: 0, opacity: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <Container ref={ref}>
      <motion.div animate={animation}>
        <Title>O Que Nossos</Title>
        <Subtitle>Clientes Acharam</Subtitle>
      </motion.div>

      <Grid
        container
        spacing={8}
        style={{
          padding: "5%",
          marginBottom: "20%",
        }}
      >
        {testimonialsInfo.map((item) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TestimonialDiv>
              <Paragraph>{item.message}</Paragraph>
              <Author>{item.author}</Author>
            </TestimonialDiv>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Feedbacks;
