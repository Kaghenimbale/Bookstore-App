import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Books from './Components/Books';
import Categories from './Components/Categories';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="content">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
