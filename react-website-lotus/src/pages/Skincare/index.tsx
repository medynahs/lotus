import Screen from "../../components/Screen";
import { skincareInfo } from "../../data/skincareData";

function Skincare() {
  return (
    <Screen
      data={skincareInfo}
      pageTitle="Rosto"
      pageSubtitle="Tratamentos"
    />
  );
}

export default Skincare;
