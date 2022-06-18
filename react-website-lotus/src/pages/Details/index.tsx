import {
  Container,
  ImageContainer,
  InfoContainer,
  Title,
  Price,
  Description,
  InfoTitle,
  Row,
  BlackButton,
  Dropdown,
  Circle,
} from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { bodyInfo } from "../../data/BodyData";
import { skincareInfo } from "../../data/SkincareData";
import { hairInfo } from "../../data/hairData";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
import ScrollToTop from "../../components/ScrollToTop";

function Details() {
  const { productId } = useParams();

  const data = bodyInfo.concat(skincareInfo).concat(hairInfo);

  const thisProduct = data.find((prod) => prod.title === productId);

  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <ScrollToTop>
      <Container>
        <Circle>
          <IoIosArrowRoundBack
            style={{
              color: "white",
              width: 35,
              height: 35,
            }}
            onClick={() => navigate(-1)}
          />
        </Circle>

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
          <Title>{thisProduct?.title}</Title>
          <Price>${thisProduct?.price} reais por sessão</Price>
          <BlackButton>AGENDE AGORA</BlackButton>
          <Description>{thisProduct?.subtitle}</Description>

          <Dropdown>
            <InfoTitle onClick={() => setIsOpen(!isOpen)}>
              <text>INDICAÇÕES E CONTRAINDICAÇÕES</text>

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

            {isOpen ? <Description>{thisProduct?.ind}</Description> : <p></p>}

            <Row />

            <InfoTitle onClick={() => setIsSecondOpen(!isSecondOpen)}>
              <text>BENEFÍCIOS</text>

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
              <Description>{thisProduct?.ben}</Description>
            ) : (
              <p></p>
            )}

            <Row />

            <InfoTitle onClick={() => setIsThirdOpen(!isThirdOpen)}>
              <text>DURAÇÃO</text>

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
              <Description>{thisProduct?.duration}</Description>
            ) : (
              <p></p>
            )}
            <Row />
          </Dropdown>
        </InfoContainer>
      </Container>
    </ScrollToTop>
  );
}

export default Details;
