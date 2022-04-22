import { Container } from "./styles";
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
      <PageTitle title={pageTitle} subtitle={pageSubtitle} />

      <Grid
        container
        spacing={{ xs: 2, md: 10 }}
        columns={{ xs: 2, sm: 2, md: 8 }}
      >
        {data.map((item) => (
          <Grid item xs={2} sm={2} md={4} key={item.id}>
            <Card
              key={item.id}
              title={item.title}
              image={item.img}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Screen;
