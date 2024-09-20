import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dynamic } from './pages/Dynamic';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dynamic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
