import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterPage from "./Components/Footer/FooterPage";
import Header from "./Components/Navbar/Header";
import Home from './Page/homePage/home';
import Login from './Page/Auth/Login';
import Connect from './Page/connect/Connect';
import Register from './Page/Auth/Register';
import Reset from './Page/Auth/Reset';


function App() {
  return (
   <>
     <BrowserRouter>
     <Header/>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/connect' element={<Connect/>}></Route>
         <Route path='/reset' element={<Reset/>}></Route>
      </Routes>
      <FooterPage/>
     </BrowserRouter>
   </>
  );
}

export default App;
