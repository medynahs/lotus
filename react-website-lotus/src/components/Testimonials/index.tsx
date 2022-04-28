import {
  Container,
  Title,
  Subtitle,
  TestimonialsDiv,
  TestimonialDiv,
  Paragraph,
  Author,
} from "./styles";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <Container>
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: -10, opacity: 2 }}
        transition={{ ease: "easeInOut", duration: 1.4 }}
      >
        <Title>Nós Te</Title>
        <Subtitle>Escutamos</Subtitle>
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
