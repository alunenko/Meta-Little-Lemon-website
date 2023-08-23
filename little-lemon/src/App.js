import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
