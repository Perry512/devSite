import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import MainPage from './pages/MainPage.js';
import FirstPage from './pages/FirstPage.tsx';
import AboutMe from './pages/AboutMe.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

// import StoreFrontPage from './pages/StoreFrontPage.js'
import ResumePage from './pages/ResumePage.js';
import Nasus from "./pages/Nasus.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
        <div>
          {/* <nav>
                <Link to="/store">Go to Store</Link>
          </nav> */}
          <Header />
          <FirstPage />
          <MainPage />
          <AboutMe />
          <Footer />
        </div>
        }
      />
        {/* <Route path="/store" element={<StoreFrontPage/>}/> */}
        <Route path="/resume" element={<ResumePage/>}/>
        <Route path="/nasus" element={<Nasus />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
