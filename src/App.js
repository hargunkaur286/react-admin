import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;