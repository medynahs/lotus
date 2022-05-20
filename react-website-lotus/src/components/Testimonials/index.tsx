import {
  Container,
  Title,
  Subtitle,
  TestimonialsDiv,
  TestimonialDiv,
  Paragraph,
  Author,
} from "./styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Testimonials() {

  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();

  
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: -35,
        transition: {
          ease: "easeInOut",
          duration: 1.2
        },
      });
    }

    if (!inView) {
      animation.start({ x: 0, opacity: 0});
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <motion.div
        animate={animation}
      >
        <Title>O Que Nossos</Title>
        <Subtitle>Clientes Acharam</Subtitle>
      </motion.div>

      <TestimonialsDiv>
        <TestimonialDiv>
          <Paragraph>
            "Adorei o atendimento da doutora, muito atenciosa e sabe bem o que
            faz. Tive resultados muito bons."
          </Paragraph>
          <Author>Ariane</Author>
        </TestimonialDiv>
        <TestimonialDiv>
          <Paragraph>
            Tratamento diferenciado, tive resultados ótimos e a doutora trabalha
            muito bem, voltarei mais vezes!
          </Paragraph>
          <Author>Maddy</Author>
        </TestimonialDiv>
        <TestimonialDiv>
          <Paragraph>
            "Adorei o atendimento da doutora, muito atenciosa e sabe bem o que
            faz. Mais coisa pra falar, texto aqui testemunhei bom trabalho. "
          </Paragraph>
          <Author>Jennifer</Author>
        </TestimonialDiv>
      </TestimonialsDiv>
    </Container>
  );
}

export default Testimonials;
