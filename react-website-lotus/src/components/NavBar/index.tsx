import { Container, Title, RightContainer, Logo } from "./styles";
import Menu from "../Menu";

export interface NavBarProps {
  title?: string;
}

function NavBar({ title }: NavBarProps) {
  return (
    <Container>
      <Logo href="/" >Lotus Flower</Logo>
      <Title>{title}</Title>
      <RightContainer>
        <Menu />
      </RightContainer>
    </Container>
  );
}

export default NavBar;
