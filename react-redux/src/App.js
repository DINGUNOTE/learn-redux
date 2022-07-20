import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exaxt element={<Home />}></Route>
        <Route path="/:id" exaxt element={<Detail />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
