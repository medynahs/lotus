import Screen from "../../components/Screen";
import { makeupInfo } from "../../data/MakeupData";

function Makeup() {
  return (
    <Screen
      data={makeupInfo}
      pageTitle="Make"
      pageSubtitle="up"
    />
  );
}

export default Makeup;