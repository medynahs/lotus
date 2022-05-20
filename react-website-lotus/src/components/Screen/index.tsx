import { Container, TitleContainer } from "./styles";
import PageTitle from "../PageTitle";
import Card from "../Card";
import Grid from "@mui/material/Grid";

export interface Item {
  id: number;
  img: string;
  title: string;
  price: string;
  subtitle: string;
  duration: string;
}

export interface ScreenProps {
  data: Item[];
  pageTitle: string;
  pageSubtitle?: string;
}

function Screen({ data, pageTitle, pageSubtitle }: ScreenProps) {
  return (
    <Container>
      <TitleContainer>
        <PageTitle title={pageTitle} subtitle={pageSubtitle} />
      </TitleContainer>

      <Grid
        container
        spacing={8}
        style={{
          padding: "5%",
          marginBottom: "20%",
        }}
      >
        {data.map((item) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              key={item.id}
              title={item.title}
              image={item.img}
              price={item.price}
              id={item.title}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Screen;
