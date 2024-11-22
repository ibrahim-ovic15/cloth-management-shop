import Login from "./Components/Home/Login/Login";
import Signup from "./Components/Home/Signup/Signup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
