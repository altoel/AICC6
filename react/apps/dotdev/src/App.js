import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/home';
import Features from './components/features';

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/features" element={<Features />} />
            </Routes>
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
