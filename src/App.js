import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import FaleConosco from './Pages/FaleConosco';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/fale-conosco" element={<FaleConosco/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
