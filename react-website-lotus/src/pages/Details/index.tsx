import {
  Container,
  ImageContainer,
  InfoContainer,
  Title,
  Price,
  Id,
  Description,
  InfoTitle,
  Row,
  BlackButton,
  Dropdown,
} from "./styles";
import { useParams } from "react-router-dom";
import { bodyInfo } from "../../data/BodyData";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";

function Details() {
  const { productId } = useParams();
  const thisProduct = bodyInfo.find((prod) => prod.id.toString() === productId);

  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);

  return (
    <Container>
      <ImageContainer>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
          whileHover={{ x: -10 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={thisProduct?.img}
            alt="One "
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>
      </ImageContainer>
      <InfoContainer>
        <Id>ID: {thisProduct?.id}</Id>
        <Title>{thisProduct?.title}</Title>
        <Price>${thisProduct?.price} reais por sessão</Price>
        <BlackButton>AGENDE AGORA</BlackButton>
        <Description>{thisProduct?.subtitle}</Description>

        <Dropdown>
          <InfoTitle onClick={() => setIsOpen(!isOpen)}>
            <text>INFORMAÇÕES SOBRE O TRATAMENTO</text>

            {isOpen ? (
              <AiOutlineMinus
                style={{
                  color: "black",
                  width: 15,
                  height: 15,
                }}
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <AiOutlinePlus
                style={{
                  color: "black",
                  width: 15,
                  height: 15,
                }}
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </InfoTitle>

          {isOpen ? (
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit, ipsum, fuga, in, obcaecati magni ullam nobis
              voluptas fugiat tenetur voluptatum quas tempora maxime rerum neque
              deserunt suscipit provident cumque et mollitia ex aspernatur porro
              minus sapiente voluptatibus eos at perferendis repellat odit
              aliquid harum molestias ratione pariatur adipisci. Aliquid, iure.
            </Description>
          ) : (
            <p></p>
          )}

          <Row />

          <InfoTitle onClick={() => setIsSecondOpen(!isSecondOpen)}>
            <text>CUIDADOS</text>

            {isSecondOpen ? (
              <AiOutlineMinus
                style={{
                  color: "black",
                  width: 15,
                  height: 15,
                }}
                onClick={() => setIsOpen(!isSecondOpen)}
              />
            ) : (
              <AiOutlinePlus
                style={{
                  color: "black",
                  width: 15,
                  height: 15,
                }}
                onClick={() => setIsOpen(!isSecondOpen)}
              />
            )}
          </InfoTitle>

          {isSecondOpen ? (
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit, ipsum, fuga, in, obcaecati magni ullam nobis
              voluptas fugiat tenetur voluptatum quas tempora maxime rerum neque
              deserunt suscipit provident cumque et mollitia ex aspernatur porro
              minus sapiente voluptatibus eos at perferendis repellat odit
              aliquid harum molestias ratione pariatur adipisci. Aliquid, iure.
            </Description>
          ) : (
            <p></p>
          )}

          <Row />

          <InfoTitle onClick={() => setIsThirdOpen(!isThirdOpen)}>
            <text>DOUTORA</text>

            {isThirdOpen ? (
              <AiOutlineMinus
                style={{
                  color: "black",
                  width: 15,
                  height: 15,
                }}
                onClick={() => setIsOpen(!isThirdOpen)}
              />
            ) : (
              <AiOutlinePlus
                style={{
                  color: "black",
                  width: 15,
                  height: 15,
                }}
                onClick={() => setIsOpen(!isThirdOpen)}
              />
            )}
          </InfoTitle>

          {isThirdOpen ? (
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit, ipsum, fuga, in, obcaecati magni ullam nobis
              voluptas fugiat tenetur voluptatum quas tempora maxime rerum neque
              deserunt suscipit provident cumque et mollitia ex aspernatur porro
              minus sapiente voluptatibus eos at perferendis repellat odit
              aliquid harum molestias ratione pariatur adipisci. Aliquid, iure.
            </Description>
          ) : (
            <p></p>
          )}
          <Row />
        </Dropdown>
      </InfoContainer>
    </Container>
  );
}

export default Details;
