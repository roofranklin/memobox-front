import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Cards from './pages/cards/cards';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/cards" element={<Cards/>} />
      </Routes>
    </Router>
  );
};

export default App;
