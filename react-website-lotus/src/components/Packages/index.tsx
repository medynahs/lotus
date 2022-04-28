import { Container, Card1Div, Card2Div } from "./styles";
import Card from "../Card";

import bride from "../../images/bride.jpg";
import spa from "../../images/spa.jpg";

function Packages() {
  return (
    <Container>
      <Card1Div>
        <Card
          title="Pacote Renovação"
          image={spa}
          price="R$ 500,00 (Até 6x sem juros, clique para ver detalhes) "
        />
      </Card1Div>
      <Card2Div>
        <Card
          title="Pacote Noiva"
          image={bride}
          price="R$ 500,00 (Até 6x sem juros, clique para ver detalhes) "
        />
      </Card2Div>
    </Container>
  );
}

export default Packages;
