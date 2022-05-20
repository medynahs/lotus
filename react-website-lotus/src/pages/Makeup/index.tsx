import Screen from "../../components/Screen";
import { hairInfo } from "../../data/hairData";

function Makeup() {
  return (
    <Screen
      data={hairInfo}
      pageTitle="Make"
      pageSubtitle="up"
    />
  );
}

export default Makeup;