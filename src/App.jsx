import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import WaitlistForm from './components/WaitlistForm';
import WaitlistSuccess from './components/WaitlistSuccess';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/waitlist" element={<WaitlistForm />} />
        <Route path="/waitlist-success" element={<WaitlistSuccess />} />
        <Route path="/terms" element={<p>Terms page coming soon</p>} />
        <Route path="/privacy" element={<p>Privacy policy coming soon</p>} />
        <Route path="/contact" element={<p>Contact info coming soon</p>} />
        <Route path="/disclaimer-modal" element={<p>Disclaimer coming soon</p>} />
        <Route path="*" element={<p style={{ textAlign: 'center' }}>Page not found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
