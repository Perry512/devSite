//import {Routes, Route, BrowserRouter} from "react-router-dom";

import './App.css';
import MainPage from "./pages/MainPage.js";
import FirstPage from "./pages/FirstPage.tsx";

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
    <div style={{height: '100vh' }}>
      <FirstPage />
      <MainPage />
    </div>
    
  );
}

export default App;
