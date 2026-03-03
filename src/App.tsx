import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Media from './pages/Media';
import News from './pages/News';
import Impact from './pages/Impact';
import Bookings from './pages/Bookings';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/media" element={<Media />} />
          <Route path="/news" element={<News />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </Layout>
    </Router>
  );
}
