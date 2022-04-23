import { GlobalStyles } from "./styles/globalstyles";
// import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Navigation from "./navigation";

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar title="AGENDE AGORA" />
      <Navigation />
      {/* <Footer title="LOTUS" /> */}
    </>
  );
}

export default App;
