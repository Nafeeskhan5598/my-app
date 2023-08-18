import './App.css';
import Herosection from './Component/Herosection';
import NavbarContent from './Component/NavbarContent';
import Cards from './Component/Cards';
import PlainMain from './Component/PlainMain';
import IntroVideo from './Component/IntroVideo';
import Customer from './Component/Customer';
import Mobile from './Component/Mobile';
import Laptop from './Component/Laptop';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarContent />
        <Herosection />
        <Cards />
        <PlainMain />
        <IntroVideo />
        <Customer />
        <Mobile />
        <Laptop />
        <Footer />
      </header>
    </div>
  );
}

export default App;
