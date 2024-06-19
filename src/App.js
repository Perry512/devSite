import {Routes, Route, BrowserRouter} from "react-router-dom";

import './App.css';
import MainPage from "./pages/MainPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
