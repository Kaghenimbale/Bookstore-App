import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Books from './Components/Books';
import Categories from './Components/Categories';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />}></Route>
        <Route path="categories" element={<Categories />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
