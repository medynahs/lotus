import { Container, Title, Subtitle } from "./styles";
import Testimonials from "../../components/Testimonials";
import Instagram from "../../components/Instagram";
import Packages from "../../components/Packages";
import Treatments from "../../components/Treatments";
import Phrases from "../../components/Phrases";

function Home() {

  return (
    <>
      <Container>
        <Title>SEJA SUA MELHOR VERSÃO</Title>
        <Subtitle>Ajudamos você a florescer</Subtitle>
      </Container>

      <Treatments /> 
      <Packages />  
      <Phrases /> 
      <Testimonials />
      <Instagram />  
      
    </>
  );
}

export default Home;
