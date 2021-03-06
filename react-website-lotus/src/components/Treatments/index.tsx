import { Container, Paragraph, LinkDiv, Link } from "./styles";

function Treatments() {
  return (
    <Container>
      <Paragraph>CONHEÇA NOSSOS SERVIÇOS</Paragraph>
      <LinkDiv>
        <Link href="/rosto">Rosto</Link>
      </LinkDiv>
      <LinkDiv>
        <Link href="/corpo">Corpo</Link>
      </LinkDiv>
      <LinkDiv>
        <Link href="/maosepes">Mãos e Pés</Link>
      </LinkDiv>
      <LinkDiv>
        <Link href="/cabelo">Cabelo</Link>
      </LinkDiv>
      <LinkDiv>
        <Link href="/depilacao">Depilação</Link>
      </LinkDiv>
    </Container>
  );
}

export default Treatments;
