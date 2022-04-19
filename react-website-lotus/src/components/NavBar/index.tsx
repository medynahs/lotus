import { Container, Title, RightContainer, Logo, LogInText } from "./styles";
import Menu from "../Menu";
import { FaUserCircle } from "react-icons/fa";

export interface NavBarProps {
  title?: string;
}

function NavBar({ title }: NavBarProps) {
  return (
    <Container>
      <Logo>Lotus Flower</Logo>
      <Title>{title}</Title>
      <RightContainer>
        <FaUserCircle style={{ color: "black", width: 25, height: 25 }} />
        <LogInText>Log In</LogInText>
        <Menu />
      </RightContainer>
    </Container>
  );
}

export default NavBar;
