import {Routes, Route, BrowserRouter} from "react-router-dom";

import './App.css';
import MainPage from "./pages/MainPage.js";
import Test from "./pages/Test.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Test />} />
        <Route path='/' element={<MainPage />} />
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
