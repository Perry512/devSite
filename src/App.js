import {Routes, Route, BrowserRouter} from "react-router-dom";

import './App.css';
import MainPage from "./pages/MainPage.js";
import Test from "./pages/Test.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/' element={<Test />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
