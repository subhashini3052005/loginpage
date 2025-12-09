import './App.css';
import Login from './pages/login';
import {BrowserRouter,Routes,Route}from "react-router-dom"
import Signin from './pages/signin';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Signin' element={<Signin/>}/>

        
    </Routes>
    </BrowserRouter>
  );
}

export default App;
