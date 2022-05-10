import { Container, Paragraph, LinkDiv, Link } from "./styles";

function Treatments() {
  return (
    <Container>
      <Paragraph>Cheque nossos tratamentos</Paragraph>
      <LinkDiv>
        <Link href="/skincare">Skincare</Link>
      </LinkDiv>
      <LinkDiv>
        <Link href="/corpo">Corpo</Link>
      </LinkDiv>
      <LinkDiv>
        <Link href="/makeup">Makeup</Link>
      </LinkDiv>
    </Container>
  );
}

export default Treatments;
