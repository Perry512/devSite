//import {Routes, Route, BrowserRouter} from "react-router-dom";

import './App.css';
import MainPage from './pages/MainPage.js';
import FirstPage from './pages/FirstPage.tsx';
import AboutMe from './pages/AboutMe.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

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
      <Header />
      <FirstPage />
      <MainPage />
      <AboutMe />
      <Footer />
    </div>
    
  );
}

export default App;
