import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import ItemsPage from './pages/ItemsPage';
import MainPage from './pages/MainPage';
import PartPage from './pages/PartPage';
import RidingStylesPage from './pages/RidingStylesPage';
import './styles.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <section className="mx-auto mt-16">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/items" element={<ItemsPage />} />
            <Route path="/part" element={<PartPage />} />
            <Route path="/riding-styles" element={<RidingStylesPage />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
