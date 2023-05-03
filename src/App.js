import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterPage from "./Components/Footer/FooterPage";
import Header from "./Components/Navbar/Header";
import Home from './Page/homePage/home';


function App() {
  return (
   <>
     <BrowserRouter>
     <Header/>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
      </Routes>
      <br/>
      <FooterPage/>
     </BrowserRouter>
   </>
  );
}

export default App;
