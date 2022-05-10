import {
    Container,
    Container2,
    FooterTitle,
    List1,
    List2,
    Ulist1,
    Ulist2
  } from './styles';

export interface FooterProps {
  title?: string
}

function Footer({ title}: FooterProps) {
  return (
    <>
      <Container>
      <Container2>
        <Ulist1>
          <List1>Home</List1>
          <List1>Skincare</List1>
          <List1>Corpo</List1>
          <List1>Makeup</List1>
          <List1>Sobre</List1>
        </Ulist1>
        <Ulist2>
          <List2>CONTATO</List2>
          <List2>FAQ</List2>
          <List2>NOSSA POLÍTICA</List2>
        </Ulist2>
      </Container2>
        <FooterTitle>{title}</FooterTitle>
      </Container>
    </>
  );
}

export default Footer;

