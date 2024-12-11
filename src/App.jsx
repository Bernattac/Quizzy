import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Settings from './components/Settings';
import Questions from './components/Questions';
import { SettingsProvider } from './context/SettingsContext';
import { ScoreProvider } from './context/ScoreContext';
import ScoreBoard from './components/ScoreBoard';

function App() {
  return (
    <SettingsProvider>
      <ScoreProvider>
        <Router>
          <Header />
          <ScoreBoard />
          <Routes>
            <Route path="/" element={<Questions />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <Footer />
        </Router>
      </ScoreProvider>
    </SettingsProvider>
  );
}

export default App;
