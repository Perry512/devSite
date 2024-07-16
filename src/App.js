//import {Routes, Route, BrowserRouter} from "react-router-dom";

import './App.css';
import MainPage from "./pages/MainPage.js";
import FirstPage from "./pages/FirstPage.tsx";
import AboutMe from './pages/AboutMe.tsx';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
        
//         <Route path='/' element={<Test />} />
//         <Route path='/' element={<MainPage />} />
        
//       </Routes>
//     </BrowserRouter>
    
//   );
// }

function App() {
  return (
    <div>
      <FirstPage />
      <MainPage />
      <AboutMe />
    </div>
    
  );
}

export default App;
