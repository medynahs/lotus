import {
  Container,
  Link,
  LinksContainer,
  ImgOne,
  ImgTwo,
  ImgThree,
  Circle,
} from "./styles";
import img1 from "../../images/menuImg1.jpg";
import img2 from "../../images/menuImage2.jpg";
import img3 from "../../images/img3.jpg";
import { motion } from "framer-motion";

function MenuItems() {
  return (
    <Container>
      <div>
        <div>
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 50, opacity: 2 }}
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "easeInOut", duration: 1.4 }}
          >
            <ImgTwo>
              <img src={img2} alt="One " width={425} height={255} />
            </ImgTwo>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 10, opacity: 2 }}
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
          >
            <ImgThree>
              <img src={img3} alt="One " width={280} height={400} />
            </ImgThree>
          </motion.div>
        </div>
      </div>

      <Container>
        <LinksContainer>
          <Circle>
            <Link>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                whileHover={{ scale: 1.1 }}
                transition={{ ease: "easeInOut", duration: 4 }}
              >
                Home
              </motion.div>
            </Link>
            <Link>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                whileHover={{ scale: 1.1 }}
                transition={{ ease: "easeInOut", duration: 4 }}
              >
                Skincare
              </motion.div>
            </Link>
            <Link>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                whileHover={{ scale: 1.1 }}
                transition={{ ease: "easeInOut", duration: 4 }}
              >
                Corpo
              </motion.div>
            </Link>
            <Link>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                whileHover={{ scale: 1.1 }}
                transition={{ ease: "easeInOut", duration: 4 }}
              >
                Maquiagem
              </motion.div>
            </Link>
            <Link>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                whileHover={{ scale: 1.1 }}
                transition={{ ease: "easeInOut", duration: 4 }}
              >
                Sobre
              </motion.div>
            </Link>
          </Circle>
        </LinksContainer>
      </Container>

      <ImgOne>
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: -50, opacity: 2 }}
          whileHover={{ scale: 1.02 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <img src={img1} alt="One " width={330} height={495} />
        </motion.div>
      </ImgOne>
    </Container>
  );
}

export default MenuItems;
