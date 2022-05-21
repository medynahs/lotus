import { Container, Title, Subtitle } from "./styles";
import Treatments from "../../components/Treatments";
import PackagesSection from "../../components/PackagesSection";
import img from "../../images/menuImage2.jpg";

function Home() {
  return (
    <>
      <Container>
        <Title>SEJA SUA MELHOR VERSÃO</Title>
        <Subtitle>Ajudamos você a florescer</Subtitle>
        <img src={img} alt="One " style={{ width: "100%", height: "100%" }} />
      </Container>
      <Treatments />
      <PackagesSection />
    </>
  );
}

export default Home;
