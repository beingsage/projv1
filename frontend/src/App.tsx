import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import FairPlayPolicy from './pages/FairPlayPolicy';
import Install from './pages/Install';

function App() {
  

  return (
    <>
      <Router>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/fair-play-policy" element={<FairPlayPolicy />} />
          <Route path="/install" element={<Install />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
