import './App.css';
import { Navbar } from './components/homepage/sections/Navbar';
import { Homepage } from './components/homepage/sections/Homepage';
import { Footer } from './components/homepage/sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
