import {
  Container,
  Container2,
  FooterTitle,
  List1,
  List2,
  Ulist1,
  Ulist2,
} from "./styles";

export interface FooterProps {
  title?: string;
}

function Footer({ title }: FooterProps) {
  return (
    <>
      <Container>
        <Container2>
          <Ulist1>
            <List1 href="/">Home</List1>
            <List1 href="/rosto">Rosto</List1>
            <List1 href="/corpo">Corpo</List1>
            <List1 href="/maosepes">Mãos e Pés</List1>
            <List1 href="/cabelo">Cabelo</List1>
            <List1 href="/depilacao">Depilação</List1>
            <List1 href="/sobre">Sobre</List1>
          </Ulist1>
          <Ulist2>
            <List2 href="/feedbacks">FEEDBACKS</List2>
            <List2 href="/faq">FAQ</List2>
            <List2 href="/politica">NOSSA POLÍTICA</List2>
          </Ulist2>
        </Container2>
        <FooterTitle>{title}</FooterTitle>
      </Container>
    </>
  );
}

export default Footer;
