import { CardContainer } from "./CardContainer/CardContainer";
import Footer from "./Footer/Footer";
import { Home } from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {//<Route path="/"element={<Album />}/> 
          }
          <Route path="/"element={<Home />}/> 
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>

    </>

  )
}