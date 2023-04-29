import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import {
  Routes,
  BrowserRouter,
  Route,
} from "react-router-dom";

import Footer from './Components/Footer';
import Train from './Components/Train';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Search from './Components/Search';


function App() {

//  const nm = localStorage.getItem('name');

  return (
    <>
    <BrowserRouter>
          <NavBar/>
          <div className="container">   
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/train" element={<Train />}></Route>
              <Route exact path="/aboutus" element={<Aboutus />}></Route>
              <Route exact path="/contactus" element={<Contactus />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/signup" element={<Signup />}></Route>
              <Route exact path="/search" element={<Search/>}></Route>
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
