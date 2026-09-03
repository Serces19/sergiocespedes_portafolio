import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import VfxLanding from './pages/VfxLanding';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/home.html" element={<Navigate to="/" replace />} />
          <Route path="/vfx" element={<VfxLanding />} />
          <Route path="/vfx.html" element={<Navigate to="/vfx" replace />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles.html" element={<Navigate to="/articles" replace />} />
          <Route path="/blog/:slug" element={<ArticleDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

