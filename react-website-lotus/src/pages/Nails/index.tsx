import Screen from "../../components/Screen";
import { nailsInfo } from "../../data/nailsData";

function Nails() {
  return <Screen data={nailsInfo} pageTitle="Mãos" pageSubtitle="e Pés" />;
}

export default Nails;
