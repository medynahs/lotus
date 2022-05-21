import Screen from "../../components/Screen";
import { packagesInfo } from "../../data/packagesData";

function Packages() {
  return (
    <Screen data={packagesInfo} pageTitle="Nossos" pageSubtitle="Pacotes" />
  );
}

export default Packages;
