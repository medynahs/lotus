import Screen from "../../components/Screen";
import { bodyInfo } from "../../data/BodyData";

function Body() {
  return (
    <Screen
      data={bodyInfo}
      pageTitle="Corpo"
      pageSubtitle="Tratamentos"
    />
  );
}

export default Body;
