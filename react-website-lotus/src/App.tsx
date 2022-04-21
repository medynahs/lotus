import { GlobalStyles } from './styles/globalstyles'
import Footer from './components/Footer';
import NavBar from './components/NavBar'

function App() {
  return (
    <>
     <GlobalStyles />
      <NavBar title='AGENDE AGORA'/>
      <Footer title='LOTUS' />
    </>
  );
}

export default App;