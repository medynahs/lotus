import {
  OpenContainer,
  Title,
  RightContainer,
  Logo,
  Container,
  Link,
  Circle,
} from "./styles";
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export interface NavBarProps {
  title?: string;
}

function NavBar({ title }: NavBarProps) {
  const [menuIsVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);

  return (
    <OpenContainer>
      <Logo href="/">Lotus Flower</Logo>
      <Title>{title}</Title>
      <RightContainer>
        <HiMenuAlt4
          style={{
            color: "black",
            width: 30,
            height: 30,
            marginTop: 3,
          }}
          onClick={() => setMenuVisible(true)}
        />
        <Container isVisible={menuIsVisible}>
          <IoClose
            color="black"
            size={40}
            onClick={() => setMenuVisible(false)}
          />

          <Circle>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/skincare">Skincare</Link>
              <Link href="/corpo">Corpo</Link>
              <Link href="/makeup">Maquiagem</Link>
            </nav>
          </Circle>
        </Container>
      </RightContainer>
    </OpenContainer>
  );
}

export default NavBar;
