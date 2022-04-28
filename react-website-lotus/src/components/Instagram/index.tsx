import { Container, Title, InstaName } from "./styles";
import { motion } from "framer-motion";
import InstaCard from "./InstaCard";
import Grid from "@mui/material/Grid";
import img2 from "../../images/make.jpg";
import img3 from "../../images/massageinsta.jpg";
import img4 from "../../images/instapic4.jpg";
import img1 from "../../images/nails1.jpg";

function Instagram() {
  const data = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
  ];
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 2, y: 42 }}
        transition={{ ease: "easeInOut", duration: 1.4 }}
      >
        <Title href="https://www.instagram.com/flor.de.lotus.esteticaesaude/">
          Siga-nos
        </Title>
      </motion.div>

      <Grid
        container
        spacing={8}
        style={{
          marginBottom: "2%",
          marginLeft: "4px",
          width: "95%",
          paddingLeft: "2.85%",
        }}
      >
        {data.map((item) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={3}
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <InstaCard image={item.img} key={item.id} />
          </Grid>
        ))}
      </Grid>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 2, y: -10 }}
        transition={{ ease: "easeInOut", duration: 1.4 }}
      >
        <InstaName href="https://www.instagram.com/flor.de.lotus.esteticaesaude/">
          @Lotus.Flower
        </InstaName>
      </motion.div>
    </Container>
  );
}

export default Instagram;
