import Screen from "../../components/Screen";
import { skincareInfo } from "../../data/SkincareData";

function Skincare() {
  return (
    <Screen
      data={skincareInfo}
      pageTitle="Skincare"
      pageSubtitle="Tratamentos"
    />
  );
}

export default Skincare;
